
const putCandyController = require("../controllers/putCandyController")

const handlerPutCandy = async(req, res) =>{
    try {
        const {id} = req.params;
        const {name, description, category, price, image} = req.body;

        const newCandy = await putCandyController({id, name, description, category, price, image});

        res.status(200).json(newCandy);

    } catch (error) {
        res.status(400).json({error : error.message});
    }

}

module.exports = handlerPutCandy;