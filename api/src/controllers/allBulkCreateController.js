const bulkGenres = require("../controllers/genre/postBulkGenresController");
const bulkCandies = require("../controllers/candy/postBulkCandyController");
const bulkMovies = require("../controllers/movie/postBulkMoviesController");
const bulkUsers = require("../controllers/user/postBulkUsersController");
const bulkPurchase = require("../controllers/purchase/postBulkPurchaseController");

const allData = async () => {
  await bulkGenres();
  await bulkCandies();
  await bulkMovies();
  await bulkUsers();
  // await bulkPurchase();

  return { message: "Datos subidos con éxito" };
};

module.exports = allData;
