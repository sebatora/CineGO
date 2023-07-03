const getAllCandy = require("../../controllers/candy/getAllCandyController");
const getCandyByName = require("../../controllers/candy/getCandyByName");

const handlerGetAllCandy = async (req, res) => {
  const { name } = req.query;

  try {
    if(!name){
      const Candy = await getAllCandy();
      return res.status(200).json(Candy);
    }
    const candyByName = await getCandyByName(name);
    return res.status(200).json(candyByName);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetAllCandy;
