const postUserValidation = require("../../controllers/user/postUserValidation");
const postUserValidateGoogle = require("../../controllers/user/postUserValidateGoogle");

const handlerPostUserValidation = async (req, res) => {
  const { firstName, lastName, image, email, password, token } = req.body;

  try {
    if (token) {
      const response = await postUserValidateGoogle({ firstName, lastName, image, email, token });
      return res.status(200).json(response);
    } else if (password) { // Utiliza 'else if' para asegurarte de que solo se ejecute un bloque
      const response = await postUserValidation({ email, password, image }); // Pasa 'image' como parámetro
      return res.status(200).json(response);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = handlerPostUserValidation;


