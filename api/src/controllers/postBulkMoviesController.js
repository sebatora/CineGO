const { Movie } = require("../db.js");
const { dataAllMovies } = require("../data/data.js")

const postBulkMovies = async () => {

  const bulkMovies = await Movie.bulkCreate(dataAllMovies);

  return bulkMovies;
};

module.exports = postBulkMovies;