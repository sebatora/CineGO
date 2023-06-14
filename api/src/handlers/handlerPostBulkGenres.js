const postBulkGenres = require("../controllers/postBulkGenresController");

const handlerPostBulkGenres = async (req, res) => {
  try {
    const allGenres = await postBulkGenres();
    return res.status(200).json(allGenres);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostBulkGenres;
