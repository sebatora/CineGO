const { User, Purchase } = require("../../db");

const getUserById = async (id) => {
  if (!id) throw new Error("Faltan datos para la busqueda (id)");

  const user = await User.findOne({
    where: { id },
    include: {
      model: Purchase,
      as: "purchases",
      // attributes: ["id", "totalPrice", "purchase_date"],
    },
  });

  return user;
};

module.exports = getUserById;
