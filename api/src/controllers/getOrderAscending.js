const getAllMovies = require("./getAllMoviesController");

const getOrderAscending = async () => {
  try {
    const allMovies= await getAllMovies()
    const order = allMovies.sort((a, b) => a.release_date.localeCompare(b.release_date));
    return order;
  } catch (error) {
    throw new Error("Error al obtener los generos");
  }
};

module.exports = getOrderAscending;
