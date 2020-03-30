const OrderModel = require('./orders.model');
const AnimalModel = require('../animals/animals.model');
const sequelize = require('../../db');
const { Op } = require('sequelize');

const dto = {
    customer: {

    },
    items: [
        {animalId: 2, price: 100}
    ]
};

class OrderService {

    async createOne(orderData) {
        return sequelize.transaction ( async transaction  => {
            //check animal existence
            const { items } = orderData;
            const foundPetIds = await AnimalModel.findAll({ 
                where: { id: { [Op.in]: items.map(el => el.animalId) }},
                attributes: ['id'],
                transaction,
            
            });

            if (foundPetIds.length != items.length) {
                const invalidIds = [];
                items.forEach( el => {
                    if (!foundPetIds.find(el => el.id === id)) {
                        invalidIds.push(el)
                    }
                });

                throw new Error(`Invalid animalIds are [${invalidIds.join(',')}]`);

            }

            //create Order
            //create orderItems
            //delete animal from bd
            //return order

        })
    }

}