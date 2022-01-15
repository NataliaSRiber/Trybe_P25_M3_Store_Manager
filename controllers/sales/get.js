const { StatusCodes } = require('http-status-codes');
const ModelSales = require('../../models/sales');

module.exports = async (_req, res, _next) => {
  const getSales= await ModelSales.find();
    
  return res.status(StatusCodes.OK).json({
    sales: getSales,
  });
};