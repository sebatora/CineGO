const routerMovie = require("express").Router();
const handlerPostMovie = require("../handlers/handlerPostMovie");
const handlerGetAllMovies = require("../handlers/handlerGetAllMovies");
const handlerGetMovieById = require("../handlers/handlerGetMovieById");
const handlerPostBulkMovies = require("../handlers/handlerPostBulkMovies");

// Trae todas las peliculas
routerMovie.get("/", handlerGetAllMovies);

// Trae el detalle de la pelicula
routerMovie.get("/:id", handlerGetMovieById);

// Ruta para crear peliculas
routerMovie.post("/", handlerPostMovie);

// Ruta interna para crear todas las peliculas de la data
routerMovie.post("/bulkCreate", handlerPostBulkMovies);

module.exports = routerMovie;
