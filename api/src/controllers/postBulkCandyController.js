const { Candy } = require("../db.js");
const { dataAllCandy } = require("../data/data.js");

const postBulkCandies = async () => {

  const bulkCandy = await Candy.bulkCreate(dataAllCandy);

  return bulkCandy;
};

module.exports = postBulkCandies;