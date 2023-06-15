const getOrderAZ = require("../controllers/getOrderAZ");
const getOrderAscending = require("../controllers/getOrderAscending");
const getOrderDescending = require("../controllers/getOrderDescending");
const getOrderZA = require("../controllers/getOrderZA");

const handlerFilterMovies = async (req, res) => {
  const { order, filterGenre, filterClasification } = req.body;

  try {
    let filtered = null;

    if (order) {
      if (order === "antiguo") {
        filtered = await getOrderAscending();
      } else if (order === "reciente") {
        filtered = await getOrderDescending();
      } else if (order === "ascendente") {
        filtered = await getOrderAZ();
      } else if (order === "descendente") {
        filtered = await getOrderZA();
      }

      return res.status(200).json(filtered);
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
