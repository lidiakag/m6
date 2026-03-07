const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "../../logs/log.txt");

function logAccess(route) {

  const date = new Date().toLocaleString();

  const message = `${date} - Ruta accedida: ${route}\n`;

  fs.appendFile(logFile, message, (err) => {
    if (err) {
      console.error("Error escribiendo log");
    }
  });

}

module.exports = logAccess;