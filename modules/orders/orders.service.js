const sequelize = require('../../db');
const { Op } = require('sequelize');
const OrdersModel = require('./orders.model');
const OrdersItemModel = require('./order.item.model');
const AnimalsModel = require('../animals/animals.model');
const CustomersModel = require('../customers/customer.model');
const animalsService = require('../animals/animals.service');
const customersService = require('../customers/customer.service');


class OrdersService {

    findMany() {
        return OrdersModel.findAll({
            include: [
                { model: CustomersModel, as: 'customer', attributes: ['name'] },
                { model: OrdersItemModel, as: 'items', include: [AnimalsModel] }],
            attributes: ['postedDate']
        });
    }

    async createOne(orderData) {
        return sequelize.transaction ( async transaction  => {
            console.log(orderData);
            const { items } = orderData;
            const foundAnimals = await animalsService.findMany({
                where: { id: { [Op.in]: items.map(i => i.animalId) } },
                attributes: ['id'],
                transaction,
            });
            if (foundAnimals.length !== items.length) {
                const invalidIds = [];
                items.forEach(i => {
                    if (!foundAnimals.find(fa => fa.id === i)) {
                        invalidIds.push(i);
                    }
                });
                throw new Error(`Invalid animal ids are [${invalidIds.join(',')}]`);
            }

            const order = new OrdersModel();
            order.postedDate = new Date();
            const savedOrder = await order.save({ transaction });
            orderData.customer.orderId = savedOrder.id;
            await customersService.createOne(orderData.customer, transaction);
            const orderItems = items.map(item => ({ orderId: savedOrder.id, animalId: item.animalId }));//
            const savedOrderItems = await OrdersItemModel.bulkCreate(orderItems, { transaction });
            await Promise.all(items.map(item => animalsService.markAnimalAsSold(item.animalId, transaction)));
            order.items = savedOrderItems;
            return order;
        })
    }
}

module.exports = new OrdersService();


