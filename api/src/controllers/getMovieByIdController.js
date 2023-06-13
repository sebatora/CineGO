const axios = require("axios");

const API_URL = "https://api.themoviedb.org/3";
const API_URL_IMAGES = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.API_KEY;

const getMovieById = async (id) => {
  const { data } = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);

  const movie = {
    id: data.id,
    title: data.title,
    description: data.overview,
    image: API_URL_IMAGES + data.poster_path,
    genres: data.genres,
    release_date: data.release_date,
  };

  return movie;
};

module.exports = getMovieById;