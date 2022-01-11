const { StatusCodes } = require('http-status-codes');
const ModelProducts = require('../../models/products');

module.exports = async (_req, res, _next) => {
  const getProducts = await ModelProducts.find();
    
  return res.status(StatusCodes.OK).json({
    products: getProducts,
  });
};
