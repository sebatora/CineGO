const { Genre } =require("../db")

const getAllGenres = async () => {

  const allGenres = await Genre.findAll()

	if (allGenres.length === 0) throw Error("No se encontraron generos")
	return allGenres;
};

module.exports = getAllGenres;
