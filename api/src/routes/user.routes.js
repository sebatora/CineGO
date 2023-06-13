const router = require("express").Router();

const { postUsers, getAllUsers } = require("../controllers/user.controller");

//ruta para crear usuarios
router.post("/users", postUsers);
//ruta para traer todos los usuarios
router.get("/users", getAllUsers);

module.exports = router;