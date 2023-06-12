const router = require("express").Router();

const { getAllMovies, getMovieById, getAllGenres } = require("../controllers/movie.controller");

router.get("/", getAllMovies);

router.get("/details/:id", getMovieById);

router.get("/genres", getAllGenres);

module.exports = router;
