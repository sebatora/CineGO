const routerSubscription = require("express").Router();
const handlerPutUserSubscription = require("../handlers/handlerPutSubscription");
const handlerDeleteSubscriptions = require("../handlers/handlerDeleteSubscriptions");


// Ruta para actualizar suscripción
routerSubscription.put("/", handlerPutUserSubscription);

// Ruta para eliminar suscripción
routerSubscription.delete("/", handlerDeleteSubscriptions);

module.exports = routerSubscription;