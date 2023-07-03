const getAllCandy = require("./getAllCandyController");

const getCandiesByName = async (name) => {

// Lo hago asi para que pueda buscar cuando incluye la letra o palabra
  const allCandies = await getAllCandy()
  const candiesByName = allCandies.filter(candy => candy.name.toLowerCase().includes(name.toLowerCase()))

  if(candiesByName.length === 0) throw Error("No hay dulces con ese nombre")

  return candiesByName;
}

module.exports = getCandiesByName;