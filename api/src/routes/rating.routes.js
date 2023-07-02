const routerRating = require("express").Router();

const handlerPostRating = require("../handlers/rating/handlerPostRating");

routerRating.post("/", handlerPostRating);

module.exports = routerRating;