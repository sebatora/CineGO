const handlerGetAllPurchases = require("../handlers/purchase/handlerGetAllPurchases");
const handlerPostPurchase = require("../handlers/purchase/handlerPostPurchase");

const routerPurchase = require("express").Router();

routerPurchase.get("/", handlerGetAllPurchases);

routerPurchase.post("/", handlerPostPurchase);

module.exports = routerPurchase;
