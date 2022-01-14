// importa a camada de modelo
const { StatusCodes } = require('http-status-codes');
const ModelProducts = require('../../models/products');
const ModelSales = require('../../models/sales');
const { wrongProductSaleId } = require('../../utilities/setErrors');
const { validateSale } = require('./validations');

// agora implementa as regras de negócio(validações)

const salesValidation = (sale) => {
  const validateError = validateSale(sale).error;
  // console.log(validateError);
  
  if (validateError) {
    return wrongProductSaleId;
  }
  
  const { productId } = sale;
  const findSale = ModelProducts.find(productId);
  
  if (findSale.length === 0) {
    return wrongProductSaleId(StatusCodes.UNPROCESSABLE_ENTITY);
  }
};

module.exports = async (sales) => {
  const mapSales = sales.map((sale) => salesValidation(sale));

  const getError = mapSales.find((a) => typeof a === 'object');
  console.log(getError);

  if (getError) {
    return getError;
  }

  const newSale = (await ModelSales.create(sales)).ops[0];
  
  return { status: StatusCodes.OK, message: newSale };
};