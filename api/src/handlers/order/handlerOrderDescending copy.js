const getOrderDescending = require("../../controllers/order/getOrderDescending");

const handlerOrderDescending = async (req, res) => {
  try {
    const order = await getOrderDescending();
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerOrderDescending;
