const { Candy } = require("../../db");

const postCandy = async ({ name, description, category, price, image }) => {
  if (!name || !description || !category || !price || !image)
    throw new Error("Faltan datos");

  const candyExists = await Candy.findOne({ where: {name} });
  if (candyExists) throw Error('Ya existe un producto con este nombre');

  const createdCandy = await Candy.create({
    name, 
    description, 
    category, 
    price, 
    image 
  });
  // return "Tu producto fue creado con éxito";
  return createdCandy;

};

module.exports = postCandy;