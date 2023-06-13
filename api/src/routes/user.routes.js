const router = require("express").Router();

const { postUsers, getAllUsers } = require("../controllers/user.controller");

//Ruta para traer todos los usuarios
router.get("/users", getAllUsers);

//Ruta para crear usuarios
router.post("/users", postUsers);


module.exports = router;