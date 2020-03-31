const Joi = require('joi');

module.exports = (schema, reqField = 'body') => {
  return (req, res, next) => {
      try {
          const { error } = Joi.validate(req[reqField], schema);

          if (error) {
              next(error);
          }

          next();
      } catch (e) {
          console.log(e);
      }

  };
};