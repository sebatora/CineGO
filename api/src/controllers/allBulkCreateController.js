const bulkGenres = require("../controllers/genre/postBulkGenresController");
const bulkCandies = require("../controllers/candy/postBulkCandyController");
const bulkMovies = require("../controllers/movie/postBulkMoviesController");
const bulkUsers = require("../controllers/user/postBulkUsersController");

const allData = async () => {
  await bulkGenres();
  await bulkCandies();
  await bulkMovies();
  await bulkUsers();

  return { message: "Datos subidos con éxito" };
};

module.exports = allData;
