const putCandyController = require("../../controllers/candy/putCandyController");

const handlerPutCandy = async(req, res) =>{
  try {
    const {id} = req.params;
    const {name, description, category, price, image, stock, activeCandy} = req.body;

    const updateCandy = await putCandyController({id, name, description, category, price, image, stock, activeCandy});

    res.status(200).json(updateCandy);

} catch (error) {
    res.status(400).json({error : error.message});
  }
}

module.exports = handlerPutCandy;