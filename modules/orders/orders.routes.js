const { Router } = require("express");
const orderController = require('./orders.controller');

const orderRouter = Router();

orderRouter.post('/', orderController.createOne);

module.exports = orderRouter;