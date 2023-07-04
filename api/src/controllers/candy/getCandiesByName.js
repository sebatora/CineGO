const { Candy } = require("../../db");
const { Op } = require("sequelize")

const getCandiesByName = async (name) => {
  const candyByName = await Candy.findAll({
    where: {
      name: {
        [Op.iLike]: `${name}%`
      }
    }
  });

  return candyByName;
}

module.exports = getCandiesByName;