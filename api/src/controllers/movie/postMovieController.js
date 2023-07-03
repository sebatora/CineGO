const { Movie, Genre, Show } = require("../../db");

const postMovie = async (
  title,
  description,
  image,
  actors,
  director,
  duration,
  release_date,
  trailer,
  clasification,
  genres,
  shows
) => {
  if (
    !title ||
    !description ||
    !image ||
    !actors ||
    !director ||
    !duration ||
    !release_date ||
    !trailer ||
    !clasification ||
    !genres.length ||
    !shows.length
  )
    throw Error("Faltan datos");

  const movieExists = await Movie.findOne({ where: { title } });

  if (movieExists) throw Error("Ya existe una pelicula con este nombre");

  const newMovie = await Movie.create({
    title,
    description,
    image,
    actors,
    director,
    duration,
    release_date,
    trailer,
    clasification,
  });

  let newGenre = await Genre.findAll({ where: { name: genres } });
  newMovie.addGenres(newGenre);

  let newShow = await Show.findAll({ where: { id: shows } });
  newMovie.addShows(newShow);

  return newMovie;
};

module.exports = postMovie;
