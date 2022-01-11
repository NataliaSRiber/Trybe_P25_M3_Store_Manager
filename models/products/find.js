const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (anything) => {
  const conn = await connect();
      
  if (!anything) {
   return await conn.collection('products').find().toArray();
  }

  if (anything.name) {
    const foundProduct = await conn.collection('products').find({ name: anything.name }).toArray();
    return foundProduct;
  }
  if (anything) {
    const foundProductById = await conn.collection('products').findOne({ _id: ObjectId(anything) });
  console.log(foundProductById);

    return foundProductById;
  }
};
