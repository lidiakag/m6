const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.middleware");

router.post("/upload", upload.single("file"), (req, res) => {
  console.log("ARCHIVO RECIBIDO:", req.file); // 👈 esto es clave

  res.json({
    message: "Archivo subido",
    file: req.file
  });
});

module.exports = router;