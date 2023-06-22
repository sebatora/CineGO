const router = require("express").Router();

const handlerPostPaymentOrder = require("../handlers/handlerPostPaymentOrder");
const handlerGetPaymentOrder = require("../handlers/handlerGetPaymentOrder");

router.post("/", handlerPostPaymentOrder);

router.get("/", handlerGetPaymentOrder);

router.get("/success", (req, res) => {
	res.send("Success")
});

router.get("/failure", (req, res) => {
	res.send("Failure")
});

module.exports = router;