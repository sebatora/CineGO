const getAllDogs = require("./getAllDogs");

// Trae los datos de la api y la DB por name
const getDogsByName = async (name) => {
  const allDogs = await getAllDogs()
  if(!allDogs) throw Error("Sorry! The dogs went to the park")

  // Filtro por nombre
  const dogsFiltered = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
  if(!dogsFiltered.length) throw Error("Sorry! The dogs you are looking for are not there")
  return dogsFiltered;
}

module.exports = getDogsByName;