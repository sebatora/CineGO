const getAllMovies = require("../controllers/getAllMoviesController");
const getOrderAZ = require("../controllers/getOrderAZ");
const getOrderAscending = require("../controllers/getOrderAscending");
const getOrderDescending = require("../controllers/getOrderDescending");
const getOrderZA = require("../controllers/getOrderZA");

const handlerFilterMovies = async (req, res) => {
  const { order, filterGenre, filterClasification } = req.body;

  try {
    let filtered = await getAllMovies();

    if (order) {
      if (order === "antiguo") {
        const filteredCopy = filtered;
        filtered = await getOrderAscending(filteredCopy);
      } else if (order === "reciente") {
        const filteredCopy = filtered;
        filtered = await getOrderDescending(filteredCopy);
      } else if (order === "ascendente") {
        const filteredCopy = filtered;
        filtered = await getOrderAZ(filteredCopy);
      } else if (order === "descendente") {
        const filteredCopy = filtered;
        filtered = await getOrderZA(filteredCopy);
      }
    }
    // if(filterGenre){
    //      console.log("hay generos")
    // }

    // if(filterClasification){
    //     console.log("estan clasificados")
    // } ATP, +13, +16
    return res.status(200).json(filtered);
  } catch (error) {
    res.status(500).json({ error: "Error filtrando." });
  }
};

module.exports = handlerFilterMovies;
