const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Muestra todas las peliculas");
});

router.get("/detail/:id", (req, res) => {
  res.send("Muestra detalles de cada pelicula");
});

router.get("/genres", (req, res) => {
  res.send("Muestra los generos");
});

module.exports = router;
