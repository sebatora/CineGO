const getAllMovies = require("./getAllMoviesController");

const getOrderZA = async () => {
  try {
    const allMovies = await getAllMovies();
    const order = allMovies.sort((a, b) => b.title.localeCompare(a.title));
    return order;
  } catch (error) {
    throw new Error("Error al ordenar de la Z a la A");
  }
};

module.exports = getOrderZA;
