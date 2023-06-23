const deleteSubcriptions = require("../controllers/deleteSubcriptionsController");

const handlerDeleteSubscriptions = async (req, res) => {
    try{
      const { id } = req.body;
      // llamo al controlador para actualizar los datos
      const subcriptionData = await deleteSubcriptions(id);
      res.status(200).json(subcriptionData);

    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerDeleteSubscriptions;
