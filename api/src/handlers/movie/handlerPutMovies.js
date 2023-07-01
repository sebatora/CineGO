const putMoviesController = require("../../controllers/movie/putMoviesController");

const handlerPutMovie = async (req, res) => {
  try{
    const {id} = req.params;
    const { title, description, image, actors, director, duration, release_date, trailer, clasification, activeMovie, genres } = req.body; 

    // Llamamos al controlador para actualizar los datos de la película
    const updateMovie = await putMoviesController(id, title, description, image, actors, director, duration, release_date, trailer, clasification, activeMovie, genres);

    res.status(200).json(updateMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = handlerPutMovie;