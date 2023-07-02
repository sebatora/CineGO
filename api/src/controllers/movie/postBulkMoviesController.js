const { Movie, Genre, Show } = require("../../db.js");
const { dataAllMovies } = require("../../data/data.js");

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
      const show = await Show.create({
        date: showData.date,
        hour: showData.hour,
        type: showData.type,
        stock: showData.stock,
      });
      await movie.addShow(show); // Relaciona el show con la película
    }
  }

  return allMovies;
};

module.exports = postBulkMovies;
