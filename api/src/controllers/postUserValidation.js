const getAllUsers = require("./getAllUsersController");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUserValidation = async ({ email, password }) => {
  const dataUsers = await getAllUsers();

  const userFound = dataUsers.find((user) => user.email === email);
  if (!userFound) throw new Error("El usuario no está registrado");

  const comparePassword = await bcrypt.compare(password, userFound.password);
  if (!comparePassword) throw new Error("Contraseña incorrecta");

  const token = jwt.sign(
    {
      id: userFound.id,
      name: userFound.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "12h",
    }
  );

  const user = {
    id: userFound.id,
    firstName: userFound.firstName,
    lastName: userFound.lastName,
    email: userFound.email,
    password: userFound.password,
    image: userFound.image,
    cinePlus: userFound.cinePlus,
    isAdmin: userFound.isAdmin,
    token
  }

  return user;
};

module.exports = getUserValidation;
