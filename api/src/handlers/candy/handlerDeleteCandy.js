
const deleteCandy = require("../../controllers/candy/deleteCandyController");

const handlerDeleteCandy = async(req, res) => {
    try {
        const { id } = req.params;
        
        const candy = await deleteCandy({id});
        res.status(200).json(candy);
    } catch (error) {
        res.status(404).json({ error: error.message });
        
    }
}

module.exports = handlerDeleteCandy;