const handlerFilterPurchases = require("../handlers/purchase/handlerFilterPurchases");
const handlerGetAllPurchases = require("../handlers/purchase/handlerGetAllPurchases");
const handlerPostPurchase = require("../handlers/purchase/handlerPostPurchase");

const routerPurchase = require("express").Router();

routerPurchase.get("/", handlerGetAllPurchases);

routerPurchase.post("/", handlerPostPurchase);
routerPurchase.post("/filter", handlerFilterPurchases);

module.exports = routerPurchase;
