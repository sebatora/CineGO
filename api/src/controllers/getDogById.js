const getAllDogs = require("./getAllDogs");

// Trae los datos de la api y la DB por id
const getDogById = async (id) => {
  const allDogs = await getAllDogs();
  if(!allDogs) throw Error("Sorry! The dogs went to the park")

  // Busco por id // == por las dudas
  const dogFound = allDogs.find(dog => dog.id == id);
  if(!dogFound) throw Error("Sorry! The dog you are looking for is not there")
  return dogFound;
}

module.exports = getDogById;