const postPaymentOrder = require("../../controllers/payment/postPaymentOrder");

const handlerPostPaymentOrder = async (req, res) => {
	const { cart, userData } = req.body;
	try {
		const response = await postPaymentOrder({ cart, userData });
		return res.status(201).json(response)
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
}

module.exports = handlerPostPaymentOrder;