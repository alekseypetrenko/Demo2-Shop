const Joi = require('joi');

const CreateOrderSchema = Joi.object().keys({
    products: Joi.array().items(
        Joi.object().keys({
            id: Joi.number().integer().min(1).required(),
            name: Joi.string().min(1).required(),
            price: Joi.string().min(1).required(),
            species: Joi.string().min(1).required(),
            image: Joi.string().min(1).required(),
            gender: Joi.string().min(1).required(),
            weight: Joi.string().min(1).required(),
            birth_date: Joi.string().min(1).required(),
            color: Joi.string().min(1).required(),
            breed: Joi.string().min(1).required(),
            is_sterile: Joi.boolean().required(),
            hair: Joi.string().min(1).required(),
            age: Joi.object().keys({
                yearsAge: Joi.number().integer().min(0).required(),
                monthsAge: Joi.number().integer().min(0).required(),
                daysAge: Joi.number().integer().min(0).required()
            }),

        }),
    ),
    customer: Joi.object().keys({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().min(10).required()
    }),
    totalPrice: Joi.number().integer().min(1).required()
});

module.exports = { CreateOrderSchema };