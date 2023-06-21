const postUserValidation = require("../controllers/postUserValidation");
const postUserValidateGoogle = require("../controllers/postUserValidateGoogle");

const handlerPostUserValidation = async (req, res) => {
  const { firstName, lastName, image, email, password, token } = req.body;

  try {
    if(token) {
      const response = await postUserValidateGoogle({ firstName, lastName, image, email, token });
      return res.status(200).json(response);
    } 
    if(password) {
      const response = await postUserValidation({ email, password });
      return res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = handlerPostUserValidation;
