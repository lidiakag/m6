require("dotenv").config();
require("./src/config/database");

const express = require("express");
const path = require("path");

const indexRoutes = require("./src/routes/index.routes");
const statusRoutes = require("./src/routes/status.routes");
const userRoutes = require("./src/routes/user.routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoutes);
app.use("/", statusRoutes);
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

const uploadRoutes = require("./src/routes/upload.routes");

app.use("/api", uploadRoutes);

const authRoutes = require("./src/routes/auth.routes");

app.use("/api", authRoutes);