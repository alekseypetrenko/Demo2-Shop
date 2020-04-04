const sequelize = require('../../db');
const { Op } = require('sequelize');
const OrdersModel = require('./orders.model');
const OrdersItemModel = require('./order.item.model');
const AnimalsModel = require('../animals/animals.model');
const CustomersModel = require('../customers/customer.model');
const animalsService = require('../animals/animals.service');
const customersService = require('../customers/customer.service');


class OrdersService {

    async findMany() {
        return OrdersModel.findAll({
            include: [
                { model: CustomersModel, as: 'customer', attributes: ['id', 'name', 'email', 'phone'] },
                {
                    model: OrdersItemModel, as: 'items', include: [{
                        model: AnimalsModel,
                        attributes: ['id', 'name', 'species', 'price', 'breed']
                    }]
                }
            ],
            attributes: ['id', 'postedDate']
        });
    }

    async findOne(id) {
        return OrdersModel.findAll({
            where: { id },
            include: [
                { model: CustomersModel, as: 'customer', attributes: ['id', 'name', 'email', 'phone'] },
                {
                    model: OrdersItemModel, as: 'items', include: [{
                        model: AnimalsModel,
                        attributes: ['id', 'name', 'species', 'price', 'breed']
                    }]
                }
            ],
            attributes: ['id', 'postedDate']
        });
    }
    async findOrderBy(query) {
        return OrdersModel.findAll({

            include: [
                { model: CustomersModel, as: 'customer', attributes: ['id', 'name', 'email', 'phone'], where: query },
                {
                    model: OrdersItemModel, as: 'items', include: [{
                        model: AnimalsModel,
                        attributes: ['id', 'name', 'species', 'price', 'breed']
                    }]
                }
            ],
            attributes: ['id', 'postedDate']
        });
    }

    async createOne(orderData) {

        return sequelize.transaction(async transaction => {
            const { products } = orderData;

            const foundAnimals = await animalsService.findMany({
                where: { id: { [Op.in]: products.map(el => (el.id)) } },
                attributes: ['id'],
                transaction,
            });
            if (foundAnimals.length !== products.length) {
                const invalidIds = [];
                products.forEach(i => {
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
            const orderItems = products.map(item => ({ orderId: savedOrder.id, animalId: item.id }));//
            const savedOrderItems = await OrdersItemModel.bulkCreate(orderItems, { transaction });
            await Promise.all(products.map(item => animalsService.markAnimalAsSold(item.id, transaction)));
            order.items = savedOrderItems;
            return order;
        })
    }
}

module.exports = new OrdersService();


