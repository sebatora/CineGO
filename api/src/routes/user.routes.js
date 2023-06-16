const routerUser = require("express").Router();
const handlerGetAllUsers = require("../handlers/handlerGetAllUsers");
const handlerGetUserById = require("../handlers/handlerGetUserById");
const handlerPostUser = require("../handlers/handlerPostUser");
const handlerPutUserData = require("../handlers/handlerPutUserData");
const handlerPostUserValidation = require("../handlers/handlerPostUserValidation");
const handlerPutUserSubscription = require("../handlers/handlerPutUserSubscription")


//Ruta para traer todos los usuarios
routerUser.get("/", handlerGetAllUsers);
routerUser.post("/login", handlerPostUserValidation);
//Ruta para traer al usuario por ID
routerUser.get("/:id", handlerGetUserById);

//Ruta para actualizar usuarios
routerUser.put("/", handlerPutUserData);

//Ruta para crear usuarios
routerUser.post("/", handlerPostUser);

// Ruta para actualizar suspcripción
routerUser.put("/subscription", handlerPutUserSubscription);


module.exports = routerUser;
