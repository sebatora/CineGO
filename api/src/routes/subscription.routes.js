const routerSubscription = require("express").Router();

const handlerPostSubscription = require("../handlers/subscription/handlerPostSubscription");
const handlerPutUserSubscription = require("../handlers/subscription/handlerPutSubscription");
const handlerDeleteSubscriptions = require("../handlers/subscription/handlerDeleteSubscriptions");

routerSubscription.post("/", handlerPostSubscription);

// Ruta para actualizar suscripción
routerSubscription.put("/", handlerPutUserSubscription);

// Ruta para eliminar suscripción
routerSubscription.delete("/", handlerDeleteSubscriptions);

module.exports = routerSubscription;