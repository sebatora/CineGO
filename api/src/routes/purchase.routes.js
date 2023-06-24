const handlerPostPurchase = require("../handlers/purchase/handlerPostPurchase");

const routerPurchase = require("express").Router();

routerPurchase.post("/", handlerPostPurchase);
// routerPurchase.get("/all", );
module.exports = routerPurchase;
