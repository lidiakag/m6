# Proyecto Node & Express – Módulo 6

## Descripción

Este proyecto corresponde a la primera etapa del desarrollo de una aplicación backend utilizando **Node.js** y **Express**.

El objetivo principal de esta parte del proyecto es construir la base de una aplicación web capaz de:

- Levantar un servidor backend
- Servir contenido web
- Gestionar rutas
- Registrar accesos en archivos planos
- Mantener una estructura modular y escalable

Esta implementación prepara el sistema para las siguientes etapas del proyecto donde se integrará una base de datos, un ORM y una API RESTful segura.

---

# Tecnologías utilizadas

- Node.js
- Express.js
- dotenv
- nodemon

---

# Requisitos del sistema

Para ejecutar este proyecto es necesario tener instalado:

- Node.js versión 18 o superior
- npm (Node Package Manager)
- Un editor de código como Visual Studio Code
- Navegador web

---

# Instalación del proyecto

1. Clonar o descargar el repositorio.

2. Abrir la carpeta del proyecto en el editor de código.

3. Instalar las dependencias ejecutando en la terminal:

```
npm install
```

4. Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
PORT=3000
```

Este archivo permite configurar el puerto en el que se ejecutará el servidor.

---

# Ejecución del servidor

Para ejecutar el proyecto en modo desarrollo:

```
npm run dev
```

Este comando utiliza **nodemon**, lo que permite reiniciar automáticamente el servidor cuando se realizan cambios en el código.

El servidor quedará disponible en:

```
http://localhost:3000
```

---

# Rutas disponibles

## Ruta principal

```
GET /
```

Esta ruta devuelve una respuesta en formato HTML indicando que el servidor está funcionando correctamente.

---

## Ruta de estado

```
GET /status
```

Esta ruta devuelve una respuesta en formato JSON con información básica del estado del servidor.

Ejemplo de respuesta:

```
{
  "status": "ok",
  "message": "Servidor activo",
  "date": "2026-03-07"
}
```

---

# Persistencia en archivos planos

Se implementó un sistema de registro de accesos utilizando el módulo **fs** de Node.js.

Cada vez que se accede a la ruta `/status` se registra una línea en el archivo:

```
logs/log.txt
```

Cada registro contiene:

- fecha
- hora
- ruta accedida

Ejemplo:

```
07/03/2026 - Ruta accedida: /status
```

---

# Contenido web estático

El servidor está configurado para servir archivos estáticos desde la carpeta **public** utilizando el middleware:

```
express.static()
```

Esto permite cargar archivos HTML, CSS o JavaScript directamente desde el navegador.

---

# Estructura del proyecto

```
m6/
│
├── logs/
│   └── log.txt
│
├── public/
│   └── index.html
│
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   │   ├── index.routes.js
│   │   └── status.routes.js
│   │
│   └── utils/
│       └── fileLogger.js
│
├── .env
├── index.js
├── package.json
└── README.md
```

Esta estructura permite mantener el código organizado y facilita la escalabilidad del proyecto.

---

# Decisiones de diseño

Se eligió utilizar **index.js** como archivo principal del proyecto ya que es una convención común en aplicaciones Node.js para definir el punto de entrada del servidor.

También se decidió utilizar una estructura modular separando rutas, utilidades y otras funcionalidades en distintas carpetas. Esto permite mantener el código organizado y facilita el mantenimiento del sistema.

La implementación de registros mediante archivos planos permite almacenar información básica del uso del sistema sin necesidad de utilizar aún una base de datos.