const routerGenre = require("express").Router();
const handlerGenre = require("../handlers/handlerGenre");

routerGenre.get("/", handlerGenre );


module.exports = routerGenre;
