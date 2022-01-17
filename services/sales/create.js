// importa a camada de modelo
const { ObjectId } = require('mongodb');
const { StatusCodes } = require('http-status-codes');
const ModelProducts = require('../../models/products');
const ModelSales = require('../../models/sales');
const { wrongProductSaleId } = require('../../utilities/setErrors');
const { validateSale } = require('./validations');

// agora implementa as regras de negócio(validações)

module.exports = async (sales) => {
  const validateError = validateSale(sales).error;
    
  if (validateError) {
    return wrongProductSaleId;
  }

  const findProducts = await ModelProducts.find(sales);
  const mapProducts = findProducts.map(({ _id: id }) => ObjectId(id).toString());
  
  const mapSales = sales.map((sale) => sale.productId); 
  
  const comparingProducts = mapSales.filter((id) => mapProducts.includes(id));
  
  if (sales.length !== comparingProducts.length) {
    return wrongProductSaleId;
  }

  const newSale = (await ModelSales.create(sales)).ops[0];
  
  return { status: StatusCodes.OK, message: newSale };
};