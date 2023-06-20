const routerCandy = require("express").Router();

const handlerPostCandy = require("../handlers/handlerPostCandy");
const handlerGetAllCandy = require("../handlers/handlerGetAllCandy");
const handlerPutCandy = require("../handlers/handlerPutCandy");
const handlerDeleteCandy = require("../handlers/handlerDeleteCandy");

routerCandy.post("/", handlerPostCandy);
routerCandy.get("/", handlerGetAllCandy);
routerCandy.put("/:id", handlerPutCandy);
routerCandy.delete("/:id", handlerDeleteCandy);

module.exports = routerCandy;