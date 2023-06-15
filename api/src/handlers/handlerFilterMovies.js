const getAllMovies = require("../controllers/getAllMoviesController");
const getFilterGenre = require("../controllers/getFilterGenre");
const getOrderAZ = require("../controllers/getOrderAZ");
const getOrderAscending = require("../controllers/getOrderAscending");
const getOrderDescending = require("../controllers/getOrderDescending");
const getOrderZA = require("../controllers/getOrderZA");
const getFilterClasification = require("../controllers/getFilterClasification");

const handlerFilterMovies = async (req, res) => {
  const { order, filterGenre, filterClasification } = req.body;

  try {
    let filtered = await getAllMovies();

    if (order) {
      if (order === "oldest") {
        const filteredCopy = filtered;
        filtered = await getOrderAscending(filteredCopy);
      } else if (order === "most recent") {
        const filteredCopy = filtered;
        filtered = await getOrderDescending(filteredCopy);
      } else if (order === "ascending") {
        const filteredCopy = filtered;
        filtered = await getOrderAZ(filteredCopy);
      } else if (order === "descending") {
        const filteredCopy = filtered;
        filtered = await getOrderZA(filteredCopy);
      }
    }
    if (filterGenre) {
      const filteredCopy = filtered;
      filtered = await getFilterGenre(filteredCopy, filterGenre);
    }

    if (filterClasification) {
      const filteredCopy = filtered;
      filtered = await getFilterClasification(
        filteredCopy,
        filterClasification
      );
    }
    return res.status(200).json(filtered);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = handlerFilterMovies;
