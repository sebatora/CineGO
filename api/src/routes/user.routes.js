const routerUser = require("express").Router();
const handlerGetAllUsers = require("../handlers/user/handlerGetAllUsers");
const handlerGetUserById = require("../handlers/user/handlerGetUserById");
const handlerPostUser = require("../handlers/user/handlerPostUser");
const handlerPutUserData = require("../handlers/user/handlerPutUserData");
const handlerPostUserValidation = require("../handlers/user/handlerPostUserValidation");



//Ruta para traer todos los usuarios
routerUser.get("/", handlerGetAllUsers);

//Ruta para registrar un usuario
routerUser.post("/login", handlerPostUserValidation);

//Ruta para traer al usuario por ID
routerUser.get("/:id", handlerGetUserById);

//Ruta para actualizar usuarios
routerUser.put("/", handlerPutUserData);

//Ruta para crear usuarios
routerUser.post("/", handlerPostUser);


module.exports = routerUser;
