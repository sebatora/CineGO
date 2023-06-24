const getAllUsers = require("./getAllUsersController");

const getUserValidation = async (email, password) => {
  const dataUsers = await getAllUsers();
  const user = dataUsers.find((user) => user.email === email);

  if (!user) {
    return "El usuario no está registrado";
  } else if (user.password !== password) {
    return "El password es incorrecto";
  } else {
    return "Login exitoso";
  }
};

module.exports = getUserValidation;
