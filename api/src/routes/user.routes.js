const routerUser = require("express").Router();
const handlerGetAllUsers = require("../handlers/handlerGetAllUsers")
const handlerPostUser = require("../handlers/handlerPostUser");
const handlerPutUserData = require("../handlers/handlerPutUserData");

//Ruta para traer todos los usuarios
routerUser.get("/", handlerGetAllUsers);

//Ruta para crear usuarios
routerUser.post("/", handlerPostUser);

//Ruta para actualizar usuarios
routerUser.put("/", handlerPutUserData);

module.exports = routerUser;