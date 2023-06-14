const postBulkMovies = require("../controllers/postBulkMoviesController");

const handlerPostBulkMovies = async (req, res) => {
  try {
    const allMovies = await postBulkMovies();
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostBulkMovies;