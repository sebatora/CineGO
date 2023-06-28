const postBulkGenres = require("../controllers/genre/postBulkGenresController");
const postBulkMovies = require("../controllers/movie/postBulkMoviesController");
const postBulkCandies = require("../controllers/candy/postBulkCandyController");

const allData = async () =>{
    await postBulkCandies();
    await postBulkGenres();
    await postBulkMovies();

    return {message : "Epaaa.! Éso Tilín...!🧑‍🦲, los datos se subieron con éxito. 🫵😎"}
};

module.exports = allData;