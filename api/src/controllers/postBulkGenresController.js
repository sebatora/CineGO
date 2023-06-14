const { Genre } = require("../db.js");
const { dataAllGenres } = require("../data/data.js")

const postBulkGenres = async () => {

  const bulkGenres = await Genre.bulkCreate(dataAllGenres);

  return bulkGenres;
};

module.exports = postBulkGenres;