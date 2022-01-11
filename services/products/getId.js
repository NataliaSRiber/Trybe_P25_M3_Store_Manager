const { StatusCodes } = require('http-status-codes');
const ModelProducts = require('../../models/products');
const { wrongId } = require('../../utilities/setErrors');

// agora implementa as regras de negócio(validações)

module.exports = async (id) => {
  if (id.length !== 24) {
    return wrongId;
  }
  const findProductById = await ModelProducts.find(id);
    
    if (!findProductById) {
    return wrongId;
  }
    
  return { status: StatusCodes.OK, message: findProductById };
};