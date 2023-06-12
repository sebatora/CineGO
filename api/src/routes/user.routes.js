const router = require("express").Router();

router.post("/register", (req, res) => {
  res.send("Registro de usuario nuevo");
});
router.post("/login", (req, res) => {
  res.send("Devuelve la info del user");
});
router.get("/user/:id", (req, res) => {
  res.send("Muestra los datos del usuario");
});

module.exports = router;
