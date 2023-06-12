const dogRouter = require("express").Router();
const { getDogsHandler, getDogHandler, postDogHandler, deleteDogHandler } = require("../handlers/dogsHandler");

// GET todos o por nombre
dogRouter.get("/", getDogsHandler);

// GET por id
dogRouter.get("/:id", getDogHandler);

// POST nuevo perro
dogRouter.post("/", postDogHandler);

// DELETE por id
dogRouter.delete("/:id", deleteDogHandler);

module.exports = dogRouter;