const router = require("express").Router();
const postHandleUsers  = require("../handlers/handlerPostUser")
const handlerGetUser = require("../handlers/handlerGetUser")

// Ruta para traer todos los usuarios
router.get("/users", handlerGetUser );

//Ruta para crear usuarios
router.post("/users", postHandleUsers);


module.exports = router;