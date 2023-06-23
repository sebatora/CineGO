const { Movie, Genre } = require("../db.js");

const postMovie = async (title, description, image, actors, director, duration, release_date, trailer, clasification, genres) => {
  if (!title || !description || !image || !actors || !director || !duration || !release_date || !trailer || !clasification || !genres.length) throw Error("Faltan datos");
  
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

  const genreNames = genres.map(genre => genre.name);
  const movieGenres = await Genre.findAll({ where: { name: genreNames } });

  await newMovie.addGenres(movieGenres);

  return newMovie;
};

module.exports = postMovie;
