const postUserValidation = require("../controllers/postUserValidation");

const handlerPostUserValidation = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await postUserValidation({ email, password });
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = handlerPostUserValidation;
