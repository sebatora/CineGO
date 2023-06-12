const { Temperament } = require("../db")
const getAllTemperaments = require("../controllers/getAllTemperaments");

// Maneja la ruta GET de todos los temperamentos
const getTemperamentsHandler = async (req, res) => {
  try {
    await getAllTemperaments();
    const allTemperaments = await Temperament.findAll();
    res.status(200).send(allTemperaments)
  }
  catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = {
  getTemperamentsHandler
}