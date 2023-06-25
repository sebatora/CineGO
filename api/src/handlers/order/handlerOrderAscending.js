const getOrderAscending = require("../../controllers/order/getOrderAscending");

const handlerOrderAscending = async (req, res) => {

  try {
    const order = await getOrderAscending();
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerOrderAscending;
