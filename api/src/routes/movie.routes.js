const routerMovie = require("express").Router();
const handlerPostMovie = require("../handlers/movie/handlerPostMovie");
const handlerGetAllMovies = require("../handlers/movie/handlerGetAllMovies");
const handlerGetMovieById = require("../handlers/movie/handlerGetMovieById");
const handlerPostBulkMovies = require("../handlers/movie/handlerPostBulkMovies");
const handlerPutMovie = require('../handlers/movie/handlerPutMovies');

// Trae todas las peliculas
routerMovie.get("/", handlerGetAllMovies);

// Trae el detalle de la pelicula
routerMovie.get("/:id", handlerGetMovieById);

// Ruta para crear peliculas
routerMovie.post("/", handlerPostMovie);

// Ruta interna para crear todas las peliculas de la data
routerMovie.post("/bulkCreate", handlerPostBulkMovies);

// Ruta para modificar películas
routerMovie.put("/", handlerPutMovie);

module.exports = routerMovie;
