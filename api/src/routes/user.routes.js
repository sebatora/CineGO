const routerUser = require("express").Router();
const handlerGetAllUsers = require("../handlers/handlerGetAllUsers");
const handlerGetUserById = require("../handlers/handlerGetUserById");
const handlerPostUser = require("../handlers/handlerPostUser");
const handlerPutUserData = require("../handlers/handlerPutUserData");
const handlerUserValidation = require("../handlers/handlerUserValidation");

//Ruta para traer todos los usuarios
routerUser.get("/", handlerGetAllUsers);
routerUser.get("/login", handlerUserValidation);
//Ruta para traer al usuario por ID
routerUser.get("/:id", handlerGetUserById);

//Ruta para actualizar usuarios
routerUser.put("/", handlerPutUserData);

//Ruta para crear usuarios
routerUser.post("/", handlerPostUser);

module.exports = routerUser;
