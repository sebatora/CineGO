const { Movie } = require("../db.js");

const postMovie = async (title, description, image, actors, director, duration, release_date, trailer, clasification) => {
  if (!title || !description || !image || !actors || !director || !duration || !release_date || !trailer || !clasification) throw Error("Faltan datos");
  
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

  return newMovie;
};

module.exports = postMovie;
