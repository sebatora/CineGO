const filterCandyByCategory = require("../../controllers/candy/filterCandyByCategory");
const getAllCandy = require("../../controllers/candy/getAllCandyController");
const orderCandyByPriceAscending = require("../../controllers/candy/orderCandyByPriceAscending");
const orderCandybyPriceDescending = require("../../controllers/candy/orderCandyByPriceDescending");
const orderCandyByStockAscending = require("../../controllers/candy/orderCandyByStockAscending");
const orderCandybyStockDescending = require("../../controllers/candy/orderCandyByStockDescending");

const handlerFilterCandy = async (req, res) => {
  const { order, category } = req.body;

  try {
    let filtered = await getAllCandy();

    if (order) {
      if (order === "stock most") {
        const filteredCopy = filtered;
        filtered = await orderCandybyStockDescending(filteredCopy);
      } else if (order === "stock less") {
        const filteredCopy = filtered;
        filtered = await orderCandyByStockAscending(filteredCopy);
      } else if (order === "price most") {
        const filteredCopy = filtered;
        filtered = await orderCandybyPriceDescending(filteredCopy);
      } else if (order === "price less") {
        const filteredCopy = filtered;
        filtered = await orderCandyByPriceAscending(filteredCopy);
      }
    }
    if (category) {
      const filteredCopy = filtered;
      console.log("Entro a filtar por categoria");
      filtered = await filterCandyByCategory(filteredCopy, category);
    }

    // if (productName) {
    //   const filteredCopy = filtered;
    //   filtered = await filterPurchasesByProductName(filteredCopy, productName);
    // }
    return res.status(200).json(filtered);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = handlerFilterCandy;
