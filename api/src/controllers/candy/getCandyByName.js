const { Candy } = require("../../db");
const { Op } = require("sequelize");

const getCandyByName = async (name) => {
  const candyByName = await Candy.findAll({
    where: {
      name: {
        [Op.iLike]: `${name}%`
      }
    }
  });
  return candyByName;
}

module.exports = getCandyByName;