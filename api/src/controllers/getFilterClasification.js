const getAllMovies = require("./getAllMoviesController");

const getFilterClasification = async (clasification) => {
  try {
    const allMovies = await getAllMovies();
    const filteredMovies = allMovies.filter(movie => movie.clasification === clasification);
    
    return filteredMovies 
  } catch (error) {
    throw new Error ("Error")
  }
};

module.export = getFilterClasification;