const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (anything) => {
  const conn = await connect();
      
  if (!anything) {
    const noProduct = await conn.collection('products').find().toArray();
    return noProduct;
  }

  if (anything.name) {
    const foundProduct = await conn.collection('products').find({ name: anything.name }).toArray();
    return foundProduct;
  }
  if (anything) {
    const foundProductById = await conn.collection('products').findOne({ _id: ObjectId(anything) });
    return foundProductById;
  }
};
