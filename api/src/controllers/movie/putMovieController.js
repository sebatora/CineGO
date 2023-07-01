const { Movie, Genre, Show } = require("../../db");

const putMovie = async ({
  id,
  title,
  description,
  image,
  actors,
  director,
  duration,
  release_date,
  trailer,
  clasification,
  activeMovie,
  genres,
  shows,
}) => {
  // Buscar película por id
  const movie = await Movie.findOne({
    where: { id: Number(id) },
    include: [
      {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Show,
        as: "shows",
        attributes: ["id", "date", "hour", "type", "stock"],
      },
    ],
  });

  // Verificar si la película existe
  if (!movie) throw new Error("Película no encontrada");

  // Actualizar los datos de la película con los nuevos valores
  movie.title = title || movie.title;
  movie.description = description || movie.description;
  movie.image = image || movie.image;
  movie.actors = actors || movie.actors;
  movie.director = director || movie.director;
  movie.duration = duration || movie.duration;
  movie.release_date = release_date || movie.release_date;
  movie.trailer = trailer || movie.trailer;
  movie.clasification = clasification || movie.clasification;
  movie.activeMovie = activeMovie || movie.activeMovie;

  // Actualizar los géneros de la película
  if (genres) {
    const newGenres = await Genre.findAll({ where: { name: genres } });
    await movie.setGenres(newGenres);
  }

  // Actualizar los shows de la película
  if (shows) {
    const newShows = await Show.findAll({ where: { id: shows } });
    await movie.setShows(newShows);
  }

  // Guardar los cambios en la película
  await movie.save();

  // Volver a buscar la película con la información actualizada
  const updatedMovie = await Movie.findOne({
    where: { id: Number(id) },
    include: [
      {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Show,
        as: "shows",
        attributes: ["id", "date", "hour", "type", "stock"],
      },
    ],
  });

  return updatedMovie;
};

module.exports = putMovie;
