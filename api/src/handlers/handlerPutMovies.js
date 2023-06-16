const putMoviesController = require("../controllers/getPutMoviesController");

const handlerPutMovie = async (req, res) => {
   try{
    const { id, title, description, image, actors, director, duration, release_date, trailer, clasification } = req.body; 
    // Llamamos al controlador para actualizar los datos de la película
    const result = await putMoviesController(id, title, description, image, actors, director, duration, release_date, trailer, clasification);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
 }
};


module.exports = handlerPutMovie;