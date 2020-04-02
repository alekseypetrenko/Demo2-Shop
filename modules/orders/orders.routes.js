const { Router } = require("express");
const { CreateOrderSchema } = require('./orders.schema');
const ordersController = require('./orders.controller');
const createValidator = require('../../common/middlewares/create-validator');

const ordersRouter = Router();

ordersRouter.get('/', ordersController.findMany);
ordersRouter.get('/history', ordersController.getOrdersHistory);
ordersRouter.post('/', createValidator(CreateOrderSchema), ordersController.createOne.bind(ordersController));

module.exports = ordersRouter;

