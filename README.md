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