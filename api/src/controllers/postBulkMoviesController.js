const { Movie, Genre } = require("../db.js");
const { dataAllMovies } = require("../data/data.js")

const postBulkMovies = async () => {
  const allMovies = await Movie.bulkCreate(dataAllMovies);
  
  for (const movieData of dataAllMovies) {
    const movieGenres = movieData.genres || [];
    const movie = allMovies.find(movie => movie.title === movieData.title);

    for (const genreName of movieGenres) {
      const genre = await Genre.findOne({ where: { name: genreName } });

      if (genre) {
        await movie.addGenre(genre);
      }
    }
  }


  return allMovies;
};

module.exports = postBulkMovies;