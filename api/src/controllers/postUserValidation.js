const getAllUsers = require("./getAllUsersController");

const getUserValidation = async ({email, password}) => {
  const dataUsers = await getAllUsers();
  const user = dataUsers.find((user) => user.email === email);

  if (!user) return;
  if (user.password !== password) return;
  return user;
};

module.exports = getUserValidation;
