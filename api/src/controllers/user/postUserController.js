const { User } = require("../../db");
const bcrypt = require("bcryptjs");

const postUser = async ({ firstName, lastName, email, password, image }) => {
  if (!firstName || !lastName || !email || !password) throw new Error("Faltan datos");

  const userExists = await User.findOne({ where: { email } });
  if (userExists) throw new Error("El usuario ya existe");

  const passwordHash = await bcrypt.hash(password, 10);

  const createdUser = await User.create({
    firstName,
    lastName,
    email,
    image,
    password: passwordHash,
  });
  return "Usuario creado exitosamente";
};

module.exports = postUser;
