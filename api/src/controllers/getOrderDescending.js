const getAllMovies = require("./getAllMoviesController");

const getOrderAscending = async () => {
  try {
    const allMovies= await getAllMovies()
    const order = allMovies.sort((a, b) => b.release_date.localeCompare(a.release_date));
    return order;
  } catch (error) {
    throw new Error("Error al obtener los generos");
  }
};

module.exports = getOrderAscending;
