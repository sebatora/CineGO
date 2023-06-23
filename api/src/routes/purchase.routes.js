const handlerPostPurchase = require("../handlers/handlerPostPurchase");

const routerPurchase = require("express").Router();

routerPurchase.post("/", handlerPostPurchase);
// routerPurchase.get("/all", );
module.exports = routerPurchase;
