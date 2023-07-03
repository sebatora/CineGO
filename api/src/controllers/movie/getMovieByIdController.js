const { Movie, Genre, Show, Rating } = require("../../db");

const getMovieById = async (id) => {
  if (!id) throw new Error("Faltan datos para la busqueda (id)");
  const movie = await Movie.findOne({
    where: { id },
    include: [
      {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Show,
        attributes: ["id", "date", "hour", "type", "stock"],
        through: {
          attributes: [],
        },
      },
      {
        model: Rating,
        as: "ratings",
        attributes: ["id", "count"]
      }
    ],
  });
  if (movie === null) {
    return `No se encontro ninguna pelicula con el ID ${id}`;
  } else {
    return movie;
  }
};

module.exports = getMovieById;
