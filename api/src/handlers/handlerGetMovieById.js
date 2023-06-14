const getMovieById = require("../controllers/getMovieByIdController");

const handlerGetMovieById = async (req, res) => {
	const { id } = req.params;
  try {
    const movie = await getMovieById(id);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetMovieById;
