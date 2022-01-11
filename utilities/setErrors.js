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

module.exports = {
  invalidData,
  notFound,
  stockProblem,
  alreadyExists,
};
