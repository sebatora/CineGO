const axios = require("axios");
const { API_URL, API_KEY } = process.env;
const { Temperament } = require("../db")
const { adaptDog } = require("../utils/adaptDog");

// Trae los temperamentos de la api y los guarda en la DB

const getAllTemperaments = async () => {
  const apiTemperamentsRaw = (await axios.get(`${API_URL}?api_key=${API_KEY}`)).data;
  if (!apiTemperamentsRaw) throw Error("Sorry! The dogs went to the park");

  const temperamentsRaw = adaptDog(apiTemperamentsRaw);

  // Guardo todos los temperamentos separados por coma en un solo array
  const temperamentString = (temperamentsRaw.map(dog => dog.temperaments).toString()).split(",");
  
  // En caso de tenerlos, elimino espacios innecesarios adelante y atras
  const temperamentList = temperamentString.map(temp => {
    if(temp[0] === " ") temp.trim()
    return temp;
  })

  // Elimina los elementos vacios
  const allTemperaments = temperamentList.filter((el) => el !== "");

  // Guardo los temperamentos en la DB ya filtrados para que no se repitan
  allTemperaments.forEach(temp =>{
    Temperament.findOrCreate({
      where: { name: temp },
    });
  });

return "Temperaments created";

};

module.exports = getAllTemperaments;