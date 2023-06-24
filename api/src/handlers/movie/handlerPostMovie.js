const postMovie = require("../../controllers/movie/postMovieController");

const handlerPostMovie = async (req, res) => {
  const { title, description, image, actors, director, duration, release_date, trailer, clasification, genres } = req.body;
  try {
    const movie = await postMovie(title, description, image, actors, director, duration, release_date, trailer, clasification, genres);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostMovie;
