const getUserById = require("../../controllers//user/getUserByIdController");

const handlerGetUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetUserById;
