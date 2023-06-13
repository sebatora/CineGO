const router = require("express").Router();

const { getAllMovies, getMovieById, getAllGenres, postMovie, } = require("../controllers/movie.controller");
// Trae todas las peliculas
router.get("/", getAllMovies);
// Trae el detalle de la pelicula
router.get("/details/:id", getMovieById);
// Trae todos los generos
router.get("/genres", getAllGenres);
// Ruta para crear usuario subir peliculas
router.post("/create", postMovie);


module.exports = router;
