const orderService = require("./orders.service");


class orderController {

    async createOne(req, res, next){
        try {
            const order = await orderService.createOne();
            res.json(order);
        } catch (e) {
            next(e);
        }
    }

       
}

const orderController = new orderController();
module.exports = orderController;