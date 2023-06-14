const routerUser = require("express").Router();
const handlerGetAllUsers = require("../handlers/handlerGetAllUsers")
const handlerPostUser = require("../handlers/handlerPostUser");

//Ruta para traer todos los usuarios
routerUser.get("/", handlerGetAllUsers);

//Ruta para crear usuarios
routerUser.post("/", handlerPostUser);


module.exports = routerUser;