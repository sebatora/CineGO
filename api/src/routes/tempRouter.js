const tempRouter = require("express").Router();
const { getTemperamentsHandler } = require("../handlers/tempHandler");

// GET todos los temperamentos
tempRouter.get("/", getTemperamentsHandler);

module.exports = tempRouter;