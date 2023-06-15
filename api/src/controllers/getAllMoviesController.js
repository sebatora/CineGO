const { Movie, Genre } =require("../db")

const getAllMovies = async () => {

	const allMovies = await Movie.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

	if (allMovies.length === 0) throw Error("No se encontraron peliculas")
	return allMovies;
};

module.exports = getAllMovies;