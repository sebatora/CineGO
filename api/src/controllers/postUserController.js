const { User } = require("../db");

const postUser = async ({ firstName, lastName, email, password }) => {
  if (!firstName || !lastName || !email || !password)
    throw new Error("Faltan datos");

  const userExists = await User.findOne({ where: { email } });

  if (userExists) throw new Error("El usuario ya existe");

  const createdUser = await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  return "Usuario creado exitosamente";
};

module.exports = postUser;
