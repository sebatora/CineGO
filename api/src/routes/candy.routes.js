const routerCandy = require("express").Router();

const handlerPostCandy = require("../handlers/handlerPostCandy")

routerCandy.get("/",  );

routerCandy.post("/", handlerPostCandy);

module.exports = routerCandy;