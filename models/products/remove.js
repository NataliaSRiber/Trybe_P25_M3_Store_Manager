const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (id) => {
  const conn = await connect();
  const updatedProduct = await conn.collection('products').deleteOne(
    { _id: ObjectId(id) },
  );

  return updatedProduct;
};
