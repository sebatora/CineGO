const getAllUsers = require("../../controllers/user/getAllUsersController");

const handlerGetAllUsers = async(req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
      res.status(400).json({ error : error.message })
  }
}

module.exports = handlerGetAllUsers