const { Movie, Genre, Show } = require("../../db");

const showsByDefault = [
  { date: "2023-06-22", hour: "14:03", stock: 180 },
  { date: "2023-06-22", hour: "16:03", stock: 180 },
  { date: "2023-06-22", hour: "18:03", stock: 180 },
  { date: "2023-06-22", hour: "15:03", stock: 180 },
  { date: "2023-06-22", hour: "17:03", stock: 180 },
  { date: "2023-06-23", hour: "14:03", stock: 180 },
  { date: "2023-06-23", hour: "16:03", stock: 180 },
  { date: "2023-06-23", hour: "15:03", stock: 180 },
  { date: "2023-06-23", hour: "18:05", stock: 180 },
  { date: "2023-06-24", hour: "14:03", stock: 180 },
  { date: "2023-06-24", hour: "16:03", stock: 180 },
  { date: "2023-06-24", hour: "19:03", stock: 180 },
];

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
  genres
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
    !genres.length
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

  // let newShow = await Show.findAll({ where: { id: shows } });
  // newMovie.addShows(newShow);
  const newShows = await Promise.all(
    showsByDefault.map(async (showData) => {
      const { date, hour, stock } = showData;
      const newShow = await Show.create({ date, hour, stock });
      await newMovie.addShow(newShow);
      return newShow;
    })
  );
  return {
    movie: newMovie,
    shows: newShows,
  };

  // return newMovie;
};

module.exports = postMovie;
