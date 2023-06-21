const getPaymentOrder = require("../controllers/getPaymentOrder");

const handlerGetPaymentOrder = async (req, res) => {
	try {
		const response = getPaymentOrder();
		return res.status(201).json(response);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
}

module.exports = handlerGetPaymentOrder;