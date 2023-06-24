const { User } = require("../../db");

const putUserData = async (userId, firstName, lastName, phone, email) => {
  if (!userId) throw new Error("Faltan datos");

  // verificamos que usuario exista
  //findeOne = verifica si el usuario existe en la base de datos
  //{ where: { id: userId } } = es un objeto que especifica los criterios de busqueda, busca que id sea === al valor de userId
  const user = await User.findOne({ where: { id: userId } });
  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  // Actualizamos el nombre y apellido
  user.firstName = firstName || user.firstName;
  user.lastName = lastName || user.lastName;
  user.phone = phone || user.phone;
  user.email = email || user.email;

  // Se guardan los cambios
  //save()= metodo para guardar cambios en la BDD
  await user.save();

  return "Datos del usuario actualizados exitosamente";
};

module.exports = putUserData;
