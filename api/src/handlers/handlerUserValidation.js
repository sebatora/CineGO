const getUserValidation = require("../controllers/getUserValidation");

const handlerUserValidation = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await getUserValidation(email, password);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = handlerUserValidation;
