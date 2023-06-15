const getFilterClasification = async (filteredCopy, filterClasification) => {
  try {
    const filteredMovies = filteredCopy.filter(
      (movie) => movie.clasification === filterClasification
    );

    return filteredMovies;
  } catch (error) {
    throw new Error("Error");
  }
};

module.exports = getFilterClasification;
