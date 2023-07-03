const { Show } = require("../../db")

const getAllShows = async () => {
   const shows = await Show.findAll()
   return shows
};

module.exports = getAllShows;