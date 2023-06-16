const postCandy = require("../controllers/postCandyController")

const handlerPostCandy = async (req, res) => {
    const {name, description, category, price, image } = req.body;
    try {
      const candy = await postCandy({ name, description, category, price, image });
      return res.status(200).json(candy);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = handlerPostCandy;