const getAllMovies = require("./getAllMoviesController");

const getFilterGenre = async (genre = null) => {
   try{
    const allMovies = await getAllMovies();
    if (genre) {
        const filteredMovies = allMovies.filter(movie => movie.genre === genre);
        return filteredMovies;
    }
    return allMovies
   } catch (error) {
    throw new Error ("Error al obtener las películas por género")
   }
};

module.exports = getFilterGenre;