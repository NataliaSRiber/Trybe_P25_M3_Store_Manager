// importa a camada de modelo
const { StatusCodes } = require('http-status-codes');
const ModelProducts = require('../../models/products');
const ModelSales = require('../../models/sales');
const { wrongProductSaleId } = require('../../utilities/setErrors');
const { validateSale } = require('./validations');

// agora implementa as regras de negócio(validações)

const salesValidation = async (sale) => {
  const validateError = validateSale(sale).error;
  // console.log(validateError);
  
  if (validateError) {
    return wrongProductSaleId;
  }
  
  const { productId } = sale;

  const findSale = await ModelProducts.find(productId);
  
  if (findSale === null || findSale.length === 0) {
    return wrongProductSaleId;
  }
};

module.exports = async (sales) => {
  const validationsError = await sales.reduce(async (acc, currVar) => {
    const errObject = await salesValidation(currVar);

    if (errObject) {
      return errObject; 
    };
    return acc;
  }, undefined);

  if (validationsError) {
    return validationsError;
  }

  const newSale = (await ModelSales.create(sales)).ops[0];
  
  return { status: StatusCodes.OK, message: newSale };
};