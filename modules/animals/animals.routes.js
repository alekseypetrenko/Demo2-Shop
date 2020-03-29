const { Router } = require("express");
const animalController = require("./animals.controller");

const animalRouter = new Router();

animalRouter.get("/", animalController.findMany);

animalRouter.get("/:id", animalController.findOneById);

module.exports = animalRouter;