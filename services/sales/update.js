const { StatusCodes } = require('http-status-codes');
const ModelSales = require('../../models/sales');
const { wrongProductSaleId } = require('../../utilities/setErrors');
const { validateSale } = require('./validations');

// agora implementa as regras de negócio(validações)

module.exports = async (sale, id) => {
  const validateError = validateSale(sale).error;

  if (id.length !== 24) {
    return wrongProductSaleId;
  }
  const findSaleById = await ModelSales.find(id);
    
  if (!findSaleById || validateError) {
    return wrongProductSaleId;
  }
  
  await ModelSales.update(sale, id);
  const updatedSale = await ModelSales.find(id);
    
  return { status: StatusCodes.OK, message: updatedSale };
};