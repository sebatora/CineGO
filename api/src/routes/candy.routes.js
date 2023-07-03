const routerCandy = require("express").Router();

const handlerPostCandy = require("../handlers/candy/handlerPostCandy");
const handlerGetAllCandy = require("../handlers/candy/handlerGetAllCandy");
const handlerPutCandy = require("../handlers/candy/handlerPutCandy");
const handlerDeleteCandy = require("../handlers/candy/handlerDeleteCandy");
const handlerFilterCandy = require("../handlers/candy/handlerFilterCandy");

routerCandy.post("/", handlerPostCandy);
routerCandy.get("/", handlerGetAllCandy);
routerCandy.put("/:id", handlerPutCandy);
routerCandy.delete("/:id", handlerDeleteCandy);
routerCandy.post("/filter", handlerFilterCandy);

module.exports = routerCandy;
