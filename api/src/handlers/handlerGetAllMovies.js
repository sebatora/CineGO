const getAllMovies = require("../controllers/getAllMoviesController");

const handlerGetAllMovies = async (req, res) => {
  try {
    const movies = await getAllMovies();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetAllMovies;
