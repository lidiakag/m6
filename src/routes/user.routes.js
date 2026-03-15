const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.get("/usuarios", controller.getUsers);
router.post("/usuarios", controller.createUser);
router.put("/usuarios/:id", controller.updateUser);
router.delete("/usuarios/:id", controller.deleteUser);

module.exports = router;