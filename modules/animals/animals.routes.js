const { Router } = require("express");
const animalsController = require("./animals.controller");

const animalsRouter = new Router();

animalsRouter.get("/", animalsController.findMany);

animalsRouter.get("/:id", animalsController.findOneById);

module.exports = animalsRouter;