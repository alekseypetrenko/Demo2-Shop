const { Router } = require("express");
const { CreateOrderShema } = require('./orders.shema');
const ordersController = require('./orders.controller');
const createValidator = require('../../common/middlewares/create-validator');

const ordersRouter = Router();

ordersRouter.post('/', createValidator(CreateOrderShema), ordersController.createOne.bind(ordersController));

module.exports = ordersRouter;

