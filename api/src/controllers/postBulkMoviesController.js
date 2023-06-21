const { Movie, Genre, Show } = require("../db.js");
const { dataAllMovies } = require("../data/data.js");

const postBulkMovies = async () => {
  const allMovies = await Movie.bulkCreate(dataAllMovies);

  for (const movieData of dataAllMovies) {
    const movieGenres = movieData.genres || [];
    const movie = allMovies.find((movie) => movie.title === movieData.title);

    for (const genreName of movieGenres) {
      const genre = await Genre.findOne({ where: { name: genreName } });

      if (genre) {
        await movie.addGenre(genre);
      }
    }
    const movieShows = movieData.shows || [];

    for (const showData of movieShows) {
      await Show.create({
        movieId: movie.id,
        date: showData.date,
        hour: showData.hour,
        type: showData.type,
        stock: showData.stock,
      });
    }
  }

  return allMovies;
};

module.exports = postBulkMovies;
