const metricsHandler = require("../handlers/metrics/metricsHandler");

const routerMetrics = require("express").Router();

routerMetrics.post("/", metricsHandler);

module.exports = routerMetrics;
