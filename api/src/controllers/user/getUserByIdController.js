const { User } = require("../../db");

const getUserById = async (id) => {
  if (!id) throw new Error("Faltan datos para la busqueda (id)");

  const user = await User.findOne({
    where: { id },
  });

  return user;
};

module.exports = getUserById;
