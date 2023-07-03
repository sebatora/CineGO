const { Movie, Genre, Show, Rating } = require("../../db");

const getAllMovies = async () => {
  const allMovies = await Movie.findAll({
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
        attributes: ["id", "count"],
      },
    ],
  });

  if (allMovies.length === 0) throw Error("No se encontraron peliculas");
  return allMovies;
};

module.exports = getAllMovies;
