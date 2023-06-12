const { Dog, Temperament } = require("../db")

// Crea un nuevo perro y lo guarda en la DB

const postNewDog = async (name, image, height, weight, life_span, temperaments) => {

  if(!name || !image || !height || !weight || !life_span || !temperaments) throw Error ("Woof! Missing Dog Information!")

  const newDog = await Dog.create({
    name,
    image,
    height,
    weight,
    life_span,
  })
  let addTemper = await Temperament.findAll({
    where: { name: temperaments }
  })
  newDog.addTemperaments(addTemper)

  return newDog;
}

module.exports = postNewDog;