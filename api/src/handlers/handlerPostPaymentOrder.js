const postPaymentOrder = require("../controllers/postPaymentOrder");

const handlerPostPaymentOrder = async (req, res) => {
	const cart = req.body;
	try {
		const response = await postPaymentOrder(cart);
		return res.status(201).json(response)
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
}

module.exports = handlerPostPaymentOrder;