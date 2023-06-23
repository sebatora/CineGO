const { Purchase, User, Show, Candy } = require("../db");

const postPurchaseController = async (userId, items, totalPrice) => {
  try {
    const purchase = await Purchase.create({ userId, totalPrice });

    // Iterar sobre los items comprados
    for (const item of items) {
      const { type, itemId, price, quantity } = item;

      // Restar la cantidad comprada del stock correspondiente (Show o Candy)
      if (type === "show") {
        // El item es un Show
        const show = await Show.findByPk(itemId);
        show.stock -= quantity;
        await show.save();
        await purchase.addShow(show, { through: { price, quantity } });
      } else if (type === "candy") {
        // El item es un Candy
        const candy = await Candy.findByPk(itemId);
        candy.stock -= quantity;
        await candy.save();
        await purchase.addCandy(candy, { through: { price, quantity } });
      }
    }

    // Obtener el usuario asociado a la compra
    const user = await User.findByPk(userId);

    // Devolver la respuesta con la compra creada
    return { purchase, user };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = postPurchaseController;
