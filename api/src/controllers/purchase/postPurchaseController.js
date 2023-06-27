const { Purchase, User, Show, Candy, Movie } = require("../../db");

const postPurchaseController = async (userId, items, totalPrice) => {
  try {
    const purchase = await Purchase.create({ userId, totalPrice });
    const purchasedItems = [];

    // Iterar sobre los items comprados
    for (const item of items) {
      const { type, itemId, price, quantity } = item;
      let itemDetails;
      // Restar la cantidad comprada del stock correspondiente (Show o Candy)
      if (type === "show") {
        // El item es un Show
        const show = await Show.findByPk(itemId);
        const movie = await Movie.findByPk(show.movieId);
        console.log(movie.title);
        show.stock -= quantity;
        await show.save();
        await purchase.addShow(show, { through: { price, quantity } });
        itemDetails = {
          id: show.id,
          name: movie.title,
          quantity,
          price,
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
        };
      }
      // else if (type === "subscription") {

      //   await purchase.addCandy(candy, { through: { price, quantity } });
      //   itemDetails = {
      //   };
      // }
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
