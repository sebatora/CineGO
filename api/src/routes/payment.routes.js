const router = require("express").Router();

const mercadopago = require("mercadopago");
const handlerPostPaymentOrder = require("../handlers/payment/handlerPostPaymentOrder");

router.post("/", handlerPostPaymentOrder);

router.get("/", (req, res) => {
	mercadopago.preferences.get()
	res.json()
});

module.exports = router;