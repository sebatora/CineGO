const { User, Purchase } = require("../../db");

const getAllUsers = async () => {
  const dataUsers = await User.findAll({
    include: {
      model: Purchase,
      as: "purchases",
    },
  });
  return dataUsers;
};

module.exports = getAllUsers;
