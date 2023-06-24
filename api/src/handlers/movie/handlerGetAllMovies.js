const getAllMovies = require("../../controllers/movie/getAllMoviesController");
const getMoviesByName = require("../../controllers/movie/getMoviesByNameController");

const handlerGetAllMovies = async (req, res) => {
  try {
    const { title } = req.query;

    // Si no tengo query traigo todas las peliculas
    if(!title) {
      const movies = await getAllMovies();
      return res.status(200).json(movies);
    }
    // Si tengo query busco por nombre
    const moviesByName = await getMoviesByName(title);
    return res.status(200).json(moviesByName);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = handlerGetAllMovies;
