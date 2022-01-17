const { StatusCodes } = require('http-status-codes');
const ModelSales = require('../../models/sales');
const { wrongSaleId } = require('../../utilities/setErrors');

// agora implementa as regras de negócio(validações)

module.exports = async (id) => {
  if (id.length !== 24) {
    return wrongSaleId;
  }
  const findSaleById = await ModelSales.find(id);
    
  if (!findSaleById) {
    return wrongSaleId;
  }

  await ModelSales.remove(id);
    
  return { status: StatusCodes.OK, message: findSaleById };
};