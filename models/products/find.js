const connect = require('../connection');

module.exports = async (product) => {
  const conn = await connect();
  const foundProduct = await conn.collection('products').findOne({ name: product.name });

  return foundProduct;
};
