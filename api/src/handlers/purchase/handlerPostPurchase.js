const postPurchaseController = require("../../controllers/purchase/postPurchaseController");

async function handlerPostPurchase(req, res) {
  const { userId, items, totalPrice, orderNumber } = req.body;
  try {
    const { purchase, user } = await postPurchaseController(
      userId,
      items,
      totalPrice,
      orderNumber
    );
    return res.status(201).json({ purchase, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la compra" });
  }
}

module.exports = handlerPostPurchase;
