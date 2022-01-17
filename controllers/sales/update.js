const ServiceSales = require('../../services/sales');

module.exports = async (req, res, _next) => {
  const { id } = req.params;
  const sale = req.body;
  const result = await ServiceSales.update(sale, id);
  
  return (typeof result.message === 'object'
  ? res.status(result.status).json(result.message)
  : res.status(result.status).json({
    err: {
      code: result.code,
      message: result.message,
    },
  }));
};