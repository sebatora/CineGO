const getAllCandy = require("../../controllers/candy/getAllCandyController");
const getCandiesByName = require("../../controllers/candy/getCandiesByName");

const handlerGetAllCandy = async (req, res) => {
  try {
    const { name } = req.query;

    // Si no tengo query traigo todos los candy
    if(!name){
      const Candy = await getAllCandy();
      return res.status(200).json(Candy);
    }

    // Si tengo query busco por nombre
    const candyByName = await getCandiesByName(name);
    return res.status(200).json(candyByName);

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetAllCandy;
