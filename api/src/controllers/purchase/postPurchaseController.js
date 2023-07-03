const { Purchase, User, Show, Candy, Movie } = require("../../db");

const postPurchaseController = async (
  userId,
  items,
  totalPrice,
  orderNumber
) => {
  try {
    const purchase = await Purchase.create({ userId, totalPrice, orderNumber });
    const purchasedItems = [];

    // Iterar sobre los items comprados
    for (const item of items) {
      const { type, itemId, price, quantity, cinePlus, showId } = item;
      let itemDetails;
      // Restar la cantidad comprada del stock correspondiente (Show o Candy)
      if (type === "show") {
        // El item es un Show
        const show = await Show.findByPk(showId);
        const movie = await Movie.findByPk(itemId);
        show.stock -= quantity;
        await show.save();
        await purchase.addShow(show, { through: { price, quantity } });
        itemDetails = {
          id: show.id,
          name: movie.title,
          quantity,
          price,
          type,
        };
      } else if (type === "candy") {
        // El item es un Candy
        const candy = await Candy.findByPk(itemId);
        candy.stock -= quantity;
        await candy.save();
        await purchase.addCandy(candy, { through: { price, quantity } });
        itemDetails = {
          id: candy.id,
          name: candy.name,
          quantity,
          price,
          type,
        };
      } else if (type === "subscription") {
        const subscriptionUser = await User.findByPk(userId);
        subscriptionUser.cinePlus = cinePlus; // Actualizar el atributo cinePlus según el valor proporcionado en el cuerpo
        await subscriptionUser.save();
        itemDetails = {
          // id: itemId,
          name: `Subscription ${cinePlus}`,
          quantity,
          price,
          type,
        };
      }
      purchasedItems.push(itemDetails);
    }
    // Asignar los detalles de la compra al campo 'items' del modelo 'purchase'
    purchase.items = purchasedItems;
    await purchase.save();
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
