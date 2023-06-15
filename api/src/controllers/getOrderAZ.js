const getAllMovies = require("./getAllMoviesController");

const getOrderAZ = async () => {
  try {
    const allMovies = await getAllMovies();
    const order = allMovies.sort((a, b) => a.title.localeCompare(b.title));
    return order;
  } catch (error) {
    throw new Error("Error al tratar de ordenar de la A la Z");
  }
};

module.exports = getOrderAZ;
