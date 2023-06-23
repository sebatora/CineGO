const routerSubscription = require("express").Router();

const handlerPostSubscription = require("../handlers/handlerPostSubscription");
const handlerPutUserSubscription = require("../handlers/handlerPutSubscription");
const handlerDeleteSubscriptions = require("../handlers/handlerDeleteSubscriptions");

routerSubscription.post("/", handlerPostSubscription);

// Ruta para actualizar suscripción
routerSubscription.put("/", handlerPutUserSubscription);

// Ruta para eliminar suscripción
routerSubscription.delete("/", handlerDeleteSubscriptions);

module.exports = routerSubscription;