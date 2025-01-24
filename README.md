# Implementación personalizada del comando ls (list)

## Descripción
Este script de Node.js, escrito en JavaScript, es una implementación personalizada del comando ls (list). Permite listar de forma detallada el contenido de un directorio, incluyendo información como el tipo de archivo (directorio o archivo), tamaño en bytes y fecha de modificación.

## Prerrequisitos:
Node.js y npm instalados en tu sistema.

## Para ejecutar el script:
* node 10_app_ls.js [directorio]
* [directorio]: El directorio que deseas listar. Si no se especifica, se listará el directorio actual.

## Funcionalidades
Lista archivos y directorios: Muestra una lista detallada de todos los archivos y subdirectorios dentro del directorio especificado.

## Información detallada: Para cada archivo o directorio, muestra:
* Tipo de archivo (directorio o archivo)
* Nombre del archivo
* Tamaño en bytes
* Fecha de última modificación
* Colores: Utiliza el paquete picocolors para resaltar visualmente diferentes partes de la salida (tipo de archivo, tamaño, fecha).
* Manejo de errores: Implementa manejo de errores para casos en los que no se puede leer el directorio o obtener información sobre un archivo.

## Tecnologías
* **Node.js:** Entorno de ejecución de JavaScript para el lado del servidor.
* **fs (módulo del sistema de archivos):** Permite interactuar con el sistema de archivos.
* **path:** Proporciona utilidades para trabajar con rutas de archivos.
* **picocolors:** Agrega color a la salida de la consola.
* **Promesas:** Se utilizan para manejar operaciones asíncronas de forma más limpia.

## Aprendizajes Clave
* **Manejo del sistema de archivos en Node.js:** Uso del módulo fs para leer directorios y obtener información sobre archivos.
* **Promesas:** Comprensión de cómo funcionan las promesas y su uso para manejar operaciones asíncronas.
* **Manejo de errores:** Implementación de un manejo de errores robusto para garantizar la estabilidad del script.
* **Formateado de salida:** Uso de picocolors para mejorar la legibilidad de la salida.
* **Programación funcional:** Utilización de map y Promise.all para procesar listas de archivos de forma eficiente.
