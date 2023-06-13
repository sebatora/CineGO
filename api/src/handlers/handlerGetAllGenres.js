const getAllGenres = require("../controllers/getAllGenresController");

const handlerGetAllGenres = async (req, res) => {
  try {
    const genre = await getAllGenres();
    return res.status(200).json(genre);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetAllGenres;
