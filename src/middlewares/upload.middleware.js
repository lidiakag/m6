const multer = require("multer");
const path = require("path");

// almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// 🔥 SIN FILTRO (para que funcione sí o sí)
const upload = multer({
  storage
});

module.exports = upload;