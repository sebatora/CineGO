const { Candy } = require("../../db");

const putCandyController = async ({ id, name, description, category, price, image, stock, activeCandy }) => {

  const candy = await Candy.findOne({ where: { id: Number(id) } });

  if (!candy) throw new Error("Candy no encontrado");

  candy.name = name || candy.name;
  candy.description = description || candy.description;
  candy.category = category || candy.category;
  candy.price = price || candy.price;
  candy.image = image || candy.image;
  candy.stock = stock || candy.stock;
  candy.activeCandy = activeCandy || candy.activeCandy;

  await candy.save();

  return candy;
};

module.exports = putCandyController;
