const getAllCandy = require("../controllers/getAllCandyController");

const handlerGetAllCandy = async(req, res) =>{
    try {
        const Candy = await getAllCandy();
        return res.status(200).json(Candy);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = handlerGetAllCandy;