const genreController= require("../controllers/genre.controller")

const getGenre = async (req, res) => {
  try {
    const genre = await genreController();
    res.status(200).json(genre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getGenre;
