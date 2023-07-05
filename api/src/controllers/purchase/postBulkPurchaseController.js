const { dataAllPurchases } = require("../../data/data.js");
const getAllPurchases = require("../purchase/getAllPurchasesController.js")
const postPurchaseController = require("../purchase/postPurchaseController.js")

const postBulkPurchases = async () => {

  dataAllPurchases.forEach(purchase => {postPurchaseController(purchase)})

  const bulkPurchase = getAllPurchases();

  return bulkPurchase;
};

module.exports = postBulkPurchases;