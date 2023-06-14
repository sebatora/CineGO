const routerMovie = require("express").Router();
const handlerPostMovie = require("../handlers/handlerPostMovie");
const handlerGetAllMovies = require("../handlers/handlerGetAllMovies");
const handlerGetMovieById = require("../handlers/handlerGetMovieById");

// Trae todas las peliculas
routerMovie.get("/", handlerGetAllMovies);

// Trae el detalle de la pelicula
routerMovie.get("/:id", handlerGetMovieById);

// Ruta para crear usuario subir peliculas
routerMovie.post("/create", handlerPostMovie);

module.exports = routerMovie;
