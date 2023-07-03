const getAllShow = require("../../controllers/show/getAllShowsController")

const handlerAllShows = async (req, res) => {
  try {
    const shows = await getAllShow();
    const transformerdShow = shows.map((show) => {
        return {
            date: show.date,
            hour: show.hour,
            stock: show.stock,
        };
    });
    res.status(200).json(transformerdShow)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerAllShows;

