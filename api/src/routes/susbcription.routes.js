const routerSubscription = require("express").Router();
const handlerPutUserSubscription = require("../handlers/handlerPutSubscription")
const handlerDeleteSubscription = require("../handlers/handlerDeleteSubscription")

// Ruta para actualizar suspcripción
routerSubscription.put("/subscription", handlerPutUserSubscription);

// Ruta para eliminar suspcripción
routerSubscription.delete("/", handlerDeleteSubscription);