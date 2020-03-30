const Joi = require('joi');

const CreateOrderSchema = Joi.object().keys({
   items: Joi.array().items(Joi.object().keys({
       animalId: Joi.number().integer().min(1).required()
   })),
   customer: Joi.object().keys({
       userName: Joi.string().min(3).required(),
       userEmail: Joi.string().email().required(),
       userPhoneNumber: Joi.string().min(13).required()
   })
});

module.exports = { CreateOrderSchema };