const getAllUsers = require("./getAllUsersController");

const getUserValidation = async (email, password) => {
  const dataUsers = await getAllUsers();
  const user = dataUsers.find((user) => user.email === email);

  if (!user) return false;
  if (user.password !== password) return false;
  return true;
};

module.exports = getUserValidation;
