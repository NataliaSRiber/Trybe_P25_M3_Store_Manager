const Joi = require('joi');

const schema = Joi.object({
  productId: Joi.string().min(24).required(),
  quantity: Joi.number().integer().min(1).required(),
});

// console.log(schema.validate({ productId: "61e17e7330e08a1d64c96d2d", quantity: 0 }).error)

module.exports = {
  validateSale: (sale) => schema.validate(sale),
};
