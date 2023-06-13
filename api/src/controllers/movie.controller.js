const axios = require("axios");
const { Movie, Genre } = require("../db.js");

const API_URL = "https://api.themoviedb.org/3"
const API_KEY = process.env.API_KEY;

const getAllMovies = async (req, res) => {
	try {
		const { data } = await axios.get(`${API_URL}/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}

const getMovieById = async (req, res) => {
	try {
		const { id } = req.params;
		const { data } = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
		return res.status(200).json(data);
	} catch (error) {
		if(error.response.status === 404) return res.json({ error: "The movie with this id does not exist" })
		return res.status(500).json({ error: error.message });	
	}
}

const getAllGenres = async (req, res) => {
	try {
		const { data: { genres } } = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
		return res.status(200).json(genres);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}


module.exports = {
	getAllMovies,
	getMovieById,
	getAllGenres
}