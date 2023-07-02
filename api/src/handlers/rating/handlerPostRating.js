const postRating = require("../../controllers/rating/postRatingController");

const handlerPostRating = async (req, res) => {
	const { movieId, count } = req.body;
	try {
		const response = await postRating(movieId, count);
		res.status(201).json(response);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
}

module.exports = handlerPostRating;