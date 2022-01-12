const { StatusCodes } = require('http-status-codes');
const ModelProducts = require('../../models/products');
const { wrongId, invalidData } = require('../../utilities/setErrors');
const { validateProduct } = require('./validations');

// agora implementa as regras de negócio(validações)

module.exports = async (product, id) => {
  const validateError = validateProduct(product).error;

  if (id.length !== 24) {
    return wrongId;
  }
  const findProductById = await ModelProducts.find(id);
    
    if (!findProductById) {
    return wrongId;
  }
  if (validateError) {
    return invalidData(StatusCodes.UNPROCESSABLE_ENTITY, validateError.message.includes('greater')
    ? validateError.message.replace('greater', 'larger') 
    : validateError.message);
  }
  await ModelProducts.update(product, id);
  const updatedProduct = await ModelProducts.find(id);
    
  return { status: StatusCodes.OK, message: updatedProduct };
};
