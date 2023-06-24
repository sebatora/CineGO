const putUserData = require("../../controllers/user/putUserDataController");

const handlerPutUserData = async (req, res) => {
  try {
    const { id, firstName, lastName, phone, email } = req.body;
    // llamo al controlador para actualizar los datos del usuario
    const userData = await putUserData(id, firstName, lastName, phone, email);

    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutUserData;
