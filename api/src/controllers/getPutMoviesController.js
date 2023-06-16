const { Movie } = require("../db")

const getPutMoviesController = async (movieId, newData) => {
   // Verificar que se proporcione el id de la pelicula
   if(!movieId) throw new Error("Faltan datos");

   // Buscar pelicula por id 
   const movie = await Movie.findOne({ where: { id: movieId } });
   // Verificar si la pelicula existe
   if(!movie) throw new Error("Película no encontrada");
   // Acualizar los datos de la película con los nuevos valores
   movie.title = newData.title || movie.title;
   movie.description = newData.description || movie.description;
   movie.image = newData.image || movie.image;
   movie.actors = newData.actors || movie.actors;
   movie.director = newData.director || movie.director;
   movie.duration = newData.duration || movie.duration;
   movie.release_date = newData.release_date || movie.release_date;
   movie.trailer = newData.trailer || movie.trailer;
   movie.clasification = newData.clasification|| movie.clasification;
   
   
 return "Película actualizada exitosamente";
};

module.exports = getPutMoviesController;
