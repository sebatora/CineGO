const { Movie } = require("../../db");
const { Op } = require("sequelize")
// const getAllMovies = require("./getAllMoviesController");

const getMoviesByName = async (name) => {
  const moviesByName = await Movie.findAll({
    where: {
      title: {
        [Op.iLike]: `%${name}%`
      }
    }
  });
  return moviesByName;
}

module.exports = getMoviesByName;