const { StatusCodes } = require('http-status-codes');

const invalidData = (status, message) => ({
  code: 'invalid_data',
  status,
  message,
});

const alreadyExists = (status) => ({
  code: 'invalid_data',
  status,
  message: 'Product already exists',
});

const notFound = (status, message) => ({
  code: 'not_found',
  status,
  message,
});

const stockProblem = (status, message) => ({
  code: 'stock_problem',
  status,
  message,
});

const wrongId = {
  code: 'invalid_data',
  status: StatusCodes.UNPROCESSABLE_ENTITY,
  message: 'Wrong id format',
};

const wrongProductSaleId = {
  code: 'invalid_data',
  status: StatusCodes.UNPROCESSABLE_ENTITY,
  message: 'Wrong product ID or invalid quantity',
};

const saleNotFound = {
  code: 'not_found',
  status: StatusCodes.NOT_FOUND,
  message: 'Sale not found',
};

module.exports = {
  invalidData,
  notFound,
  stockProblem,
  alreadyExists,
  wrongId,
  wrongProductSaleId,
  saleNotFound,
};
