const postSubscription = require("../../controllers/subscription/postSubscription")

const handlerPostSubscription = async (req, res) => {
	const { type, price } = req.body;
	try {
		const response = await postSubscription({ type, price });
		console.log(response);
		return res.status(201).json(response);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
}

module.exports = handlerPostSubscription;