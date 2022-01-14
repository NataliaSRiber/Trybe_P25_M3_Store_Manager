const ServicesSales = require('../../services/sales');

module.exports = async (req, res, _next) => {
  const sales = req.body;

  const result = await ServicesSales.create(sales);

  return (typeof result.message === 'object'
  ? res.status(result.status).json(result.message)
  : res.status(result.status).json({
    err: {
      code: 'invalid_data',
      message: result.message,
    },
  }));
};
