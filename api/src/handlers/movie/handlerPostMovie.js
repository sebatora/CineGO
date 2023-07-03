const postMovie = require("../../controllers/movie/postMovieController");

const handlerPostMovie = async (req, res) => {
  const { title, description, image, actors, director, duration, release_date, trailer, clasification, genres, shows } = req.body;
  try {
    const newMovie = await postMovie(title, description, image, actors, director, duration, release_date, trailer, clasification, genres, shows);
    return res.status(200).json(newMovie);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostMovie;
