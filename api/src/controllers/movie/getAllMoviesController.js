const { Movie, Genre, Show } = require("../../db");

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
        as: "shows",
        attributes: ["id", "date", "hour", "type", "stock", "language"],
      },
    ],
  });

  if (allMovies.length === 0) throw Error("No se encontraron peliculas");
  return allMovies;
};

module.exports = getAllMovies;
