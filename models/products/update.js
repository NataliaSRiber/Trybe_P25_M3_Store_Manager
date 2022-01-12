const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (product, id) => {
  const conn = await connect();
  const updatedProduct = await conn.collection('products').updateOne(
    { _id: ObjectId(id) },
    {
      $set: product,
    },
  );

  return updatedProduct;
};
