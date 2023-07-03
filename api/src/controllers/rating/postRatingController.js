const { Rating, Movie } = require("../../db.js");

const postRating = async (movieId, count) => {
	const movie = await Movie.findByPk(movieId);
	if(!movie) throw new Error(`La película con el id ${movieId} no fue encontrada`);
	
	const rating = await Rating.create({ count });
	
	await movie.addRating(rating);

	return "Rating creado exitosamente";
}

module.exports = postRating;