const router = require("express").Router();
const handlerPostMovie = require("../handlers/handlerPostMovie");
const handlerGetAllMovies = require("../handlers/handlerGetAllMovies");
const handlerGetMovieById = require("../handlers/handlerGetMovieById");

// Trae todas las peliculas
router.get("/", handlerGetAllMovies);

// Trae el detalle de la pelicula
router.get("/details/:id", handlerGetMovieById);

// Ruta para crear usuario subir peliculas
router.post("/create", handlerPostMovie);

module.exports = router;
