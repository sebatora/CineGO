const { Movie } = require("../db");
const getAllMovies = require("./getAllMoviesController");

const getMoviesByName = async (name) => {
//   const moviesByName = await Movie.findAll({
//     where: { title: name }
// });

// Lo hago asi para que pueda buscar cuando incluye la letra o palabra
  const allMovies = await getAllMovies();
  const moviesByName = allMovies.filter(movie => movie.title.toLowerCase().includes(name.toLowerCase()))

  if(moviesByName.length === 0) throw Error("No hay peliculas con ese nombre")

  return moviesByName;
}

module.exports = getMoviesByName;