const { Movie } = require("../db");

const getMovieById = async (id) => {
  if (!id) throw new Error("Faltan datos para la busqueda (id)");
  let movie = await Movie.findByPk(id);
  if (movie === null) {
    return `No se encontro ninguna pelicula con el ID ${id}`;
  } else {
    return movie;
  }
};

module.exports = getMovieById;
