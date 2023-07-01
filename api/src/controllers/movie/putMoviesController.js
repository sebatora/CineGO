const { Movie, Genre, Show } = require("../../db")

const getPutMoviesController = async ({id, title, description, image, actors, director, duration, release_date, trailer, clasification, activeMovie, genres}) => {

  // Buscar pelicula por id 
  const movie = await Movie.findOne({ where: { id: Number(id) },
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

  // Verificar si la pelicula existe
  if(!movie) throw new Error("Película no encontrada");

  // Acualizar los datos de la película con los nuevos valores
  movie.title = title || movie.title;
  movie.description = description || movie.description;
  movie.image = image || movie.image;
  movie.actors = actors || movie.actors;
  movie.director = director || movie.director;
  movie.duration = duration || movie.duration;
  movie.release_date = release_date || movie.release_date;
  movie.trailer = trailer || movie.trailer;
  movie.clasification = clasification|| movie.clasification;
  movie.activeMovie = activeMovie|| movie.activeMovie;

  await movie.save()

  const updateGenre = genres.map(genre => genre.name);
  console.log(updateGenre);
  const movieGenres = await Genre.findAll({ where: { name: updateGenre } });

  return (movie);
};

module.exports = getPutMoviesController;
