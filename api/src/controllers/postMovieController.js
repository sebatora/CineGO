const { Movie, Genre } = require("../db.js");

const postMovie = async (title, description, image, actors, director, duration, release_date, trailer, clasification, genre) => {
  if (!title || !description || !image || !actors || !director || !duration || !release_date || !trailer || !clasification || !genre) throw Error("Faltan datos");
  
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

  let filmGenre = await Genre.findAll({
    where: { name: genre }
  })

  newMovie.addGenres(filmGenre)

  return newMovie;
};

module.exports = postMovie;
