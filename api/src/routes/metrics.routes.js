const metricsHandler = require("../handlers/metrics/metricsHandler");

const routerMetrics = require("express").Router();

routerMetrics.get("/", metricsHandler);

module.exports = routerMetrics;
