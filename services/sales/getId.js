const { StatusCodes } = require('http-status-codes');
const ModelSales = require('../../models/sales');
const { saleNotFound } = require('../../utilities/setErrors');


// agora implementa as regras de negócio(validações)

module.exports = async (id) => {
  if (id.length !== 24) {
    return saleNotFound;
  }
  const findSaleById = await ModelSales.find(id);
  console.log(findSaleById);
    
  if (!findSaleById) {
    return saleNotFound;
  }
    
  return { status: StatusCodes.OK, message: findSaleById };
};