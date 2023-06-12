const { Dog, Temperament } = require("../db");
const { API_URL, API_KEY } = process.env;
const axios = require("axios");
const { adaptDog } = require("../utils/adaptDog");

// Trae los datos de la api y la DB de todos los perros

// INFO DE LA BASE DE DATOS
const getDbDogs = async () => {
  const dogsDb = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const dogsDbMap = dogsDb.map(dog => (
    {
      ...dog.toJSON(),
    temperaments: dog.temperaments.map(temp => temp.name),
    }));

  return dogsDbMap;
}

// INFO DE LA API
const getApiDogs = async () => {

  const apiDogsRaw = (await axios.get(`${API_URL}?api_key=${API_KEY}`)).data;
  if (!apiDogsRaw) throw Error("Sorry! The dogs went to the park");

  const dogsApiData = adaptDog(apiDogsRaw);
  // const dogsApiData = apiDogsRaw.map(adaptDog);

  return dogsApiData;
}

// Unimos la informacion
const getAllDogs = async () => {

  const dogsApi = await getApiDogs();
  const dogsDB = await getDbDogs();

  // Guardo ambas respuestas en un array
  const allDogs = [...dogsApi, ...dogsDB];

  return allDogs;
};

module.exports = getAllDogs;
