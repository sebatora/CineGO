const { User } = require("../../db");
const bcrypt = require("bcryptjs");

const putUserData = async (
  userId,
  firstName,
  lastName,
  phone,
  email,
  password
) => {
  if (!userId) throw new Error("Faltan datos");

  // verificamos que usuario exista
  //findeOne = verifica si el usuario existe en la base de datos
  //{ where: { id: userId } } = es un objeto que especifica los criterios de busqueda, busca que id sea === al valor de userId
  const user = await User.findOne({ where: { id: userId } });
  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  // Actualizamos los datos
  user.firstName = firstName || user.firstName;
  user.lastName = lastName || user.lastName;
  user.phone = phone || user.phone;
  user.email = email || user.email;
  if (password) {
    const passwordHash = await bcrypt.hash(password, 10);
    user.password = passwordHash;
  }

  // Se guardan los cambios
  //save()= metodo para guardar cambios en la BDD
  await user.save();

  return "Datos del usuario actualizados exitosamente";
};

module.exports = putUserData;
