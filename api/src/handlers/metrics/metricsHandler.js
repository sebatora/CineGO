const getMetrics = require("../../controllers/metrics/getMetricsController");
const getAllPurchases = require("../../controllers/purchase/getAllPurchasesController");

const metricsHandler = async (req, res) => {
  try {
    const allPurchases = await getAllPurchases();
    const metrics = await getMetrics(allPurchases);
    return res.status(200).json(metrics);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = metricsHandler;
