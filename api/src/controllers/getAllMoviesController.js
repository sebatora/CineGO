const axios = require("axios");
const API_URL = "https://api.themoviedb.org/3";
const API_URL_IMAGES = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.API_KEY;

const getAllMovies = async () => {
	const { data: { results }} = await axios.get(`${API_URL}/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`);

	if(!results) throw new Error("No hay resultados");
	
	const allMovies = results.map((movie) => ({
		id: movie.id,
		title: movie.title,
		description: movie.overview,
		image: API_URL_IMAGES + movie.poster_path,
		release_date: movie.release_date,
	}));

	return allMovies;
};

module.exports = getAllMovies;