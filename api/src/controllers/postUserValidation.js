const getAllUsers = require("./getAllUsersController");

const getUserValidation = async ({ email, password }) => {
  const dataUsers = await getAllUsers();
  const user = dataUsers.find((user) => user.email === email);

  if (!user) throw new Error("Usuario o clave invalida");
  if (user.password !== password) throw new Error("Usuario o clave invalida");
  return user;
};

module.exports = getUserValidation;
