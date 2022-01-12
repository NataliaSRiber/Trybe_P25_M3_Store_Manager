const ServiceProducts = require('../../services/products');

module.exports = async (req, res, _next) => {
  const { id } = req.params;
  
  const result = await ServiceProducts.remove(id);
  
  return (typeof result.message === 'object'
  ? res.status(result.status).json(result.message)
  : res.status(result.status).json({
    err: {
      code: 'invalid_data',
      message: result.message,
    },
  }));
};
