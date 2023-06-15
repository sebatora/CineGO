const getFilterGenre = async (filteredCopy, filterGenre) => {
  try {
    const filteredMovies = filteredCopy.filter((movie) =>
      movie.genres.some((genre) => genre.name === filterGenre)
    );
    return filteredMovies;
  } catch (error) {
    throw new Error("Error al obtener las películas por género");
  }
};

module.exports = getFilterGenre;

// recibimos copia del array de todas las peliculas
// y recibimos un string de genero

// los generos en la copia del array son un array de objetos, todos estos objetos tienen una propiedad [name] cuyo valor debe ser comparado con el string recibido
// movie.genres.some(genre => genre.name === filterGenre)
