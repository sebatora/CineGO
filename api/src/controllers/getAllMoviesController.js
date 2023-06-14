const { movie } =require("../db")

const getAllMovies = async () => {
	const allMovies = await movie.findAll()
	return allMovies;
};

module.exports = getAllMovies;