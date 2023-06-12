const { Dog } = require("../db");

// Busca el perro por id y lo borra
const deleteDog = async (id) => {
  const dogDelete = await Dog.findByPk(id)

  if(!dogDelete) throw Error("Sorry! The dog you are looking for is not there")

  await dogDelete.destroy();
  return dogDelete;
}

module.exports = deleteDog;