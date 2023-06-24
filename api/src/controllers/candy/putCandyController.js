const { Candy } = require("../../db");

const putCandyController = async({ id, name, description, category, price, image}) =>{
    if (!name || !description || !category || !price || !image) throw new Error("Faltan datos");

    const candy = await Candy.findOne({where:{ id:Number(id )}});

    if (!candy) throw new Error("Candy no encontrada");

    candy.name = name || candy.name;
    candy.description = description || candy.description;
    candy.category = category || candy.category;
    candy.price = price || candy.price;
    candy.image = image || candy.image

    await candy.save();
}

module.exports = putCandyController;