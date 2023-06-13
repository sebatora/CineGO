const movieControlerPost = require("../controllers/moviePostController");

const postMovie = async (req, res) => {
  const { title, description, image, genres, release_date } = req.body;

  try {
    const movie = await movieControlerPost({
      title,
      description,
      image,
      genres,
      release_date,
    });
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postMovie;
