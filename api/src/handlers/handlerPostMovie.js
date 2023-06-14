const postMovieController = require("../controllers/postMovieController");

const handlerPostMovie = async (req, res) => {
  const { title, description, image, actors, director, duration, trailer, clasification } = req.body;
  try {
    const movie = await postMovieController(title, description, image, actors, director, duration, trailer, clasification);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostMovie;
