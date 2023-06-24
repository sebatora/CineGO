const { Candy } = require("../../db");

const postCandy = async ({ name, description, category, price, image }) => {
  if (!name || !description || !category || !price || !image)
    throw new Error("Faltan datos");

  const createdCandy = await Candy.create({
    name, 
    description, 
    category, 
    price, 
    image 
  });
  return "Tu producto fue creado con éxito";
};

module.exports = postCandy;