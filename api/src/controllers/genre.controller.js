const axios = require("axios");
const { Movie, Genre } = require("../db.js");
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;

const allGenre = async () => {
  try {
    const {
      data: { genres },
    } = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
    return genres;
  } catch (error) {
    throw new Error("Error al obtener los generos");
  }
};

module.exports = allGenre;
