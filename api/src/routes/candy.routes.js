const routerCandy = require("express").Router();

const handlerPostCandy = require("../handlers/handlerPostCandy");
const handlerGetAllCandy = require("../handlers/handlerGetAllCandy");
const handlerPutCandy = require("../handlers/handlerPutCandy")

routerCandy.post("/", handlerPostCandy);
routerCandy.get("/", handlerGetAllCandy);
routerCandy.put("/:id", handlerPutCandy)

module.exports = routerCandy;