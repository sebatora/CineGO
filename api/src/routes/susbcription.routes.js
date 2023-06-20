const routerSubscription = require("express").Router();
const handlerPutUserSubscription = require("../handlers/handlerPutUserSubscription")


// Ruta para actualizar suspcripción
routerSubscription.put("/", handlerPutUserSubscription);


module.exports = routerSubscription;