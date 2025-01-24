const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors');

// Definición del directorio:
const folder = process.argv[2] || '.';

// Definición de la función ls para la lectura del directorio
async function ls (folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  // Obtenemos una lista de todos los archivos de la carpeta "folder"
  } catch (error) {
    console.error(pc.red('No se ha podido leer el directorio', error));
    process.exit(1);
  }

  // Creación de una lista de promesas, porque la función async devuelve una promesa
  const filePromises = files.map(async file => {
    const filePath = path.join(folder, file);// Obtenemos el path, para darle la ruta a fs.stat
    let stats;

    try {
      stats = await fs.stat(filePath);
    } catch {
      console.error(pc.red(`No se ha podido ver el stats de esta ruta ${filePath}`));
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'd' : 'f';
    const fileSize = stats.size + ' Bytes';
    const fileModified = stats.mtime.toLocaleString();
    return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(30))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`;
  });

  // Espera a que todas las promesas se resuelvan:
  const fileInfo = await Promise.all(filePromises);

  // console.log(fileInfo); No usamos esta línea, no detecta bien los código de colores, debe ser línea a lína
  // Muestra la información de los archivos:
  fileInfo.forEach(fileInfo => console.log(fileInfo));
}

// Llamada a la función ls:
ls(folder);
