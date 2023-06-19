const routerCandy = require("express").Router();

const handlerPostCandy = require("../handlers/handlerPostCandy");
const handlerGetAllCandy = require("../handlers/handlerGetAllCandy");

routerCandy.post("/", handlerPostCandy);

routerCandy.get("/", handlerGetAllCandy);

module.exports = routerCandy;