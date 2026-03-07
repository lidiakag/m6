const express = require("express");
const router = express.Router();

const logAccess = require("../utils/fileLogger");

router.get("/status", (req, res) => {

  logAccess("/status");

  res.json({
    status: "ok",
    message: "Servidor activo",
    date: new Date()
  });

});

module.exports = router;