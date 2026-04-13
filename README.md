# Proyecto Backend Node.js & Express - Módulo 8

## Descripción
Este proyecto consiste en el desarrollo de una aplicación backend utilizando Node.js y Express, que permite la gestión de usuarios mediante una API RESTful.

La aplicación incluye:
- Servidor web funcional
- Persistencia de datos
- Operaciones CRUD
- Subida de archivos
- Autenticación mediante JWT
- Protección de rutas

El proyecto fue desarrollado de manera progresiva a lo largo de los módulos 6, 7 y 8.

---

## Tecnologías utilizadas

- Node.js  
- Express  
- Sequelize (ORM)  
- MySQL  
- Multer (subida de archivos)  
- JSON Web Token (JWT)  
- Dotenv  

---

## Instalación y ejecución

1. Clonar el repositorio  
2. Instalar dependencias:

npm install

3. Crear archivo `.env`:

PORT=3000
JWT_SECRET=secreto123
DB_NAME=...
DB_USER=...
DB_PASS=...

4. Ejecutar el servidor:

npm run dev

El servidor estará disponible en:

http://localhost:3000

---

## Endpoints principales

### Públicos

POST /api/login  
Permite generar un token JWT.

Body:
{
"email": "test@test.com"
}

---

### Protegidos (requieren token)

GET /api/usuarios → Obtener usuarios  
POST /api/usuarios → Crear usuario  
PUT /api/usuarios/:id → Actualizar usuario  
DELETE /api/usuarios/:id → Eliminar usuario  

---

## Autenticación

La aplicación utiliza JWT (JSON Web Token) para proteger rutas.

Para acceder a endpoints protegidos, se debe incluir el token en los headers:

Authorization: TU_TOKEN

Si el token no es enviado o es inválido, la API responde con error de autorización.

---

## Subida de archivos

Se implementó un endpoint para la carga de archivos utilizando Multer:

POST /api/upload

- Permite subir imágenes al servidor  
- Los archivos se almacenan en la carpeta `/uploads`  
- Se genera un nombre único para evitar conflictos  

---

## Justificación técnica

Se optó por una arquitectura modular separando rutas, controladores y middlewares, lo que permite una mejor organización del código y facilita su mantenimiento.

Se utilizó Sequelize como ORM para abstraer las consultas SQL, facilitando el manejo de modelos y relaciones.

La autenticación se implementó mediante JWT, ya que permite manejar sesiones sin estado de forma segura.

Para la subida de archivos se utilizó Multer, debido a su integración sencilla con Express.

---

## Reflexión final

Durante el desarrollo de este proyecto se integraron los conocimientos adquiridos en los módulos 6, 7 y 8, permitiendo construir una aplicación backend completa.

En el módulo 6 se establecieron las bases del servidor y la estructura del proyecto.  
En el módulo 7 se incorporó la persistencia de datos y operaciones CRUD.  
En el módulo 8 se implementó una API RESTful con autenticación y subida de archivos.

Este proceso permitió comprender el flujo completo de una aplicación backend, desde su configuración inicial hasta la exposición de servicios seguros y funcionales.

---

## Estado del proyecto

- Servidor funcional  
- CRUD completo  
- Conexión a base de datos  
- API REST implementada  
- Subida de archivos  
- Autenticación con JWT  
- Rutas protegidas  


-----------------------------------


# Proyecto Backend Node.js - Módulo 7

Este proyecto corresponde al desarrollo de una aplicación backend utilizando Node.js y Express como parte del Módulo 7: Acceso a Datos en Aplicaciones Node.

La aplicación permite gestionar usuarios mediante una API REST que realiza operaciones CRUD sobre una base de datos relacional.

---

## Tecnologías utilizadas

- Node.js
- Express
- MySQL
- Sequelize (ORM)
- Dotenv
- Nodemon

---

## Instalación del proyecto

1. Clonar el repositorio desde GitHub.

2. Instalar las dependencias del proyecto:

npm install

3. Crear un archivo `.env` con las variables de entorno necesarias:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=nombre_base_datos

4. Iniciar el servidor en modo desarrollo:

npm run dev

El servidor se ejecutará en:

http://localhost:3000

---

## Endpoints de la API

### Obtener usuarios

GET /api/usuarios

Devuelve la lista de usuarios almacenados en la base de datos.

---

### Crear usuario

POST /api/usuarios

Body JSON:

{
 "nombre": "Carlos",
 "email": "carlos@email.com",
 "password": "123456"
}

Crea un nuevo usuario en la base de datos.

---

### Actualizar usuario

PUT /api/usuarios/:id

Body JSON:

{
 "nombre": "Carlos Pérez"
}

Permite actualizar los datos de un usuario existente.

---

### Eliminar usuario

DELETE /api/usuarios/:id

Elimina un usuario de la base de datos.

---

## ORM utilizado

Se utilizó Sequelize como ORM para interactuar con la base de datos MySQL.

El uso de un ORM permite trabajar con modelos en JavaScript en lugar de escribir consultas SQL manualmente, lo que mejora la organización del código, facilita el mantenimiento del proyecto y permite manejar relaciones entre entidades de forma más sencilla.

---

## Conclusión

Este proyecto permitió implementar un backend funcional capaz de conectarse a una base de datos real, realizar operaciones CRUD completas y estructurar una API REST utilizando buenas prácticas de desarrollo con Node.js y Express.