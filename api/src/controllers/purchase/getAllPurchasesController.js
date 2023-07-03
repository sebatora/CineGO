const { Purchase } = require("../../db");

const getAllPurchases = async () => {
  const allPurchases = await Purchase.findAll();

  if (allPurchases.length === 0) throw Error("No se encontraron compras");
  return allPurchases;
};

module.exports = getAllPurchases;