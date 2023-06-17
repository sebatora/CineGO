const putMoviesController = require("../controllers/getPutMoviesController");

const handlerPutMovie = async (req, res) => {
   try{
    const { id, title, description, image, actors, director, duration, release_date, trailer, clasification } = req.body; 
    
    // Crear un objeto con los nuevos datos de la película
    const newData = {
      title,
      description,
      image,
      actors,
      director,
      duration,
      release_date,
      trailer,
      clasification
    };

   
   
    // Llamamos al controlador para actualizar los datos de la película
    const result = await putMoviesController(id, newData);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
 }
};


module.exports = handlerPutMovie;