const routerGenre = require("express").Router();
const handlerGetAllGenres = require("../handlers/genre/handlerGetAllGenres");
const handlerPostBulkGenres = require("../handlers/genre/handlerPostBulkGenres.js");

routerGenre.get("/", handlerGetAllGenres);

routerGenre.post("/bulkCreate", handlerPostBulkGenres);

module.exports = routerGenre;
