const { Movie } = require("../db.js");

const postMovie = async ({
  title,
  description,
  image,
  genres,
  release_date,
}) => {

    if (
      !title ||
      !description ||
      !image ||
      genres.length < 2 ||
      !release_date
    ) {
      throw new Error("Faltan datos");
    }

    const movieExists = await Movie.findOne({ where: { title } });
    
    if (movieExists) {
      throw new Error("Ya existe una pelicula con este nombre");
    }

    const newMovie = await Movie.create({
      title,
      description,
      image,
      release_date,
      genres,
    });

    return newMovie;
};

module.exports = postMovie;
