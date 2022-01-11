// importa a camada de modelo
const { StatusCodes } = require('http-status-codes');
const ModelProducts = require('../../models/products');
const { invalidData, alreadyExists } = require('../../utilities/setErrors');
const { validateProduct } = require('./validations');

// agora implementa as regras de negócio(validações)

module.exports = async (product) => {
  const findProduct = await ModelProducts.find(product);
  
  const validateError = validateProduct(product).error;

  if (findProduct.length > 0) {
    return alreadyExists(StatusCodes.UNPROCESSABLE_ENTITY);
  }

  if (validateError) {
    return invalidData(StatusCodes.UNPROCESSABLE_ENTITY, validateError.message.includes('greater')
    ? validateError.message.replace('greater', 'larger') 
    : validateError.message);
  }

  const newProduct = (await ModelProducts.create(product)).ops[0];
  
  return { status: StatusCodes.CREATED, message: newProduct };
};
