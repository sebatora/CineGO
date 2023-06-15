const handlerFilterMovies = require('../handlers/handlerFilterMovies');

const routerOrder = require("express").Router();

// Trae todas las peliculas por orden
routerOrder.post("/", handlerFilterMovies);
// routerOrder.get("/sortdescending", handlerOrderDescending);


module.exports = routerOrder;
