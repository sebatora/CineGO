const axios = require("axios");
const { Movie, Genre } = require("../db.js");

const API_URL = "https://api.themoviedb.org/3";
const API_URL_IMAGES = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.API_KEY;

const getAllMovies = async (req, res) => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `${API_URL}/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`
    );
    const dataApi = results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      image: API_URL_IMAGES + movie.poster_path,
      release_date: movie.release_date,
    }));
    return res.status(200).json(dataApi);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    // Trae la pelicula de la api
    const { data } = await axios.get(
      `${API_URL}/movie/${id}?api_key=${API_KEY}`
    );

    const movie = {
      id: data.id,
      title: data.title,
      description: data.overview,
      image: API_URL_IMAGES + data.poster_path,
      genres: data.genres,
      release_date: data.release_date,
    };

    return res.status(200).json(movie);
  } catch (error) {
    if (error.response.status === 404)
      return res.json({ error: "The movie with this id does not exist" });
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
};
