const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().min(1).required(),
});

// console.log(schema.validate({ name: "ovos", quantity: 19 }).error)

module.exports = {
  validateProduct: (product) => schema.validate(product),
};
