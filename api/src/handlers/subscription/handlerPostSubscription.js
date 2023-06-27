const postSubscription = require("../../controllers/subscription/postSubscription")

const handlerPostSubscription = async (req, res) => {
	const subscription = req.body;
	try {
		const response = await postSubscription(subscription);
		return res.status(201).json(response);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
}

module.exports = handlerPostSubscription;