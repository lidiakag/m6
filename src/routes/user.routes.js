const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

const auth = require("../middlewares/auth.middleware");

router.get("/usuarios", auth, controller.getUsers);
router.post("/usuarios", auth, controller.createUser);
router.put("/usuarios/:id", auth, controller.updateUser);
router.delete("/usuarios/:id", auth, controller.deleteUser);

module.exports = router;