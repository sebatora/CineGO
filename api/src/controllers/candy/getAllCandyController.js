const { Candy } =  require("../../db");

const getAllCandy = async() => {

  const allCandy = await Candy.findAll();
  return allCandy;
}

module.exports = getAllCandy;