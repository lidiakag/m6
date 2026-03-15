const { User } = require("../models");

exports.getUsers = async (req, res) => {

  try {

    const users = await User.findAll({
      attributes: ["id", "nombre", "email"]
    });

    res.json({
      status: "success",
      data: users
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al obtener usuarios"
    });

  }

};

exports.updateUser = async (req, res) => {

  try {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Usuario no encontrado"
      });
    }

    await user.update(req.body);

    res.json({
      status: "success",
      message: "Usuario actualizado"
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al actualizar usuario"
    });

  }

};

exports.deleteUser = async (req, res) => {

  try {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Usuario no encontrado"
      });
    }

    await user.destroy();

    res.json({
      status: "success",
      message: "Usuario eliminado"
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al eliminar usuario"
    });

  }

};

exports.getUserById = async (req, res) => {

  try {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Usuario no encontrado"
      });
    }

    res.json({
      status: "success",
      data: user
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al obtener usuario"
    });

  }

};
exports.createUser = async (req, res) => {

  try {

    const { nombre, email, password } = req.body;

    const user = await User.create({
      nombre,
      email,
      password
    });

    res.status(201).json({
      status: "success",
      message: "Usuario creado",
      data: user
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al crear usuario"
    });

  }

};