const getFilterGenre = require("../../controllers/order/getFilterGenre");
const filterPurchasesByProductName = require("../../controllers/purchase/filterPurchaseByProductName");
const filterPurchasesByType = require("../../controllers/purchase/filterPurchaseByType");
const getAllPurchases = require("../../controllers/purchase/getAllPurchasesController");
const orderPurchaseAscending = require("../../controllers/purchase/orderPurchaseAscending");
const orderPurchaseDescending = require("../../controllers/purchase/orderPurchaseDescending");

const handlerFilterPurchases = async (req, res) => {
  const { order, type, productName } = req.body;

  try {
    let filtered = await getAllPurchases();

    if (order) {
      if (order === "oldest") {
        console.log("Entro a oldest");
        const filteredCopy = filtered;
        filtered = await getAllPurchases();
      } else if (order === "most recent") {
        console.log("Entro a most recent");
        const filteredCopy = filtered;
        filtered = await orderPurchaseDescending(filteredCopy);
      }
    }
    if (type) {
      const filteredCopy = filtered;
      console.log("Entro a filtar por type");
      filtered = await filterPurchasesByType(filteredCopy, type);
    }

    if (productName) {
      const filteredCopy = filtered;
      filtered = await filterPurchasesByProductName(filteredCopy, productName);
    }
    return res.status(200).json(filtered);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = handlerFilterPurchases;
