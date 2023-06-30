const getAllPurchases = require("../../controllers/purchase/getAllPurchasesController");

const handlerGetAllPurchases = async (req, res) => {
  try {
      const purchases = await getAllPurchases();
      return res.status(200).json(purchases);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = handlerGetAllPurchases;