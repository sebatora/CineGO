const postSubscription = require("../../controllers/subscription/postSubscription")

const handlerPostSubscription = async (req, res) => {
	try {
		const response = await postSubscription();
		return res.status(201).json(response);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
}

module.exports = handlerPostSubscription;