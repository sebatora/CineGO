const routerGenre = require("express").Router();
const handlerGetAllGenres = require("../handlers/handlerGetAllGenres.js");
const handlerPostBulkGenres = require("../handlers/handlerPostBulkGenres.js");

routerGenre.get("/", handlerGetAllGenres);

routerGenre.post("/bulkCreate", handlerPostBulkGenres);

module.exports = routerGenre;
