require("dotenv").config();

const express = require("express");
const path = require("path");

const indexRoutes = require("./src/routes/index.routes");
const statusRoutes = require("./src/routes/status.routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoutes);
app.use("/", statusRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});