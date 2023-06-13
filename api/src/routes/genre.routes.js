const routerGenre = require("express").Router();
const handlerGetAllGenres = require("../handlers/handlerGetAllGenres.js");

routerGenre.get("/", handlerGetAllGenres);

module.exports = routerGenre;
