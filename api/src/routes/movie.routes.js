const router = require("express").Router();
const handlerMoviePost = require("../handlers/handlerMoviePost");
const {
  getAllMovies,
  getMovieById,
} = require("../controllers/movie.controller");

// Trae todas las peliculas
router.get("/", getAllMovies);

// Trae el detalle de la pelicula
router.get("/details/:id", getMovieById);

// Ruta para crear usuario subir peliculas
router.post("/create", handlerMoviePost);

module.exports = router;
