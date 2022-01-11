const connect = require('../connection');

module.exports = async (product) => {
  const conn = await connect();
  const newProduct = await conn.collection('products').insertOne(product);

  return newProduct;
};
