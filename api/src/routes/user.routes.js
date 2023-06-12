const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("Hola Mundo")
})

module.exports = router;