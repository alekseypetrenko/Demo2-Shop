const Joi = require('joi');

const CreateOrderSchema = Joi.object().keys({
    products: Joi.array().items(
        Joi.number().integer().min(1).required()
    ),
    customer: Joi.object().keys({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().min(13).required()
    })
});

module.exports = { CreateOrderSchema };