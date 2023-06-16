const routerUser = require("express").Router();
const handlerGetAllUsers = require("../handlers/handlerGetAllUsers");
const handlerGetUserById = require("../handlers/handlerGetUserById");
const handlerPostUser = require("../handlers/handlerPostUser");

//Ruta para traer todos los usuarios
routerUser.get("/", handlerGetAllUsers);

//Ruta para traer al usuario por ID
routerUser.get("/:id", handlerGetUserById);

//Ruta para crear usuarios
routerUser.post("/", handlerPostUser);

module.exports = routerUser;
