const handlerFilterMovies = require('../handlers/order/handlerFilterMovies');

const routerOrder = require("express").Router();

// Trae todas las peliculas por orden
routerOrder.post("/", handlerFilterMovies);

module.exports = routerOrder;
