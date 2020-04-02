const ordersService = require("./orders.service");
const senderController = require("../sendingOrder/sender.controller")


class OrdersController {

    async findMany(req, res, next) {
        try {
            const orders = await ordersService.findMany();
            res.send(orders);
        } catch (e) {
            next(e);
        }
    }

    async createOne(req, res, next) {
        try {
            const order = await ordersService.createOne(req.body);
            const msgData = await ordersService.findOne(order.id)
            try {
                senderController.sendEmailMy(msgData)
            } catch (error) {
                console.log(error);
            }
            res.send(order);
        } catch (e) {
            next(e);
        }
    }

    async getOrdersHistory(req, res, next) {
        try {
            const { email, phone } = req.query;

            if (email) {
                const history = await ordersService.findOrderBy({ email });
                res.send(history)
            }
            if (phone) {
                const history = await ordersService.findOrderBy({ phone });
                res.send(history)
            }
        } catch (error) {
            next(error)
        }
    }

}

module.exports = new OrdersController();