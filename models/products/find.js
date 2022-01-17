const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (anything) => {
  const conn = await connect();
      
  if (!anything) {
    const noProduct = await conn.collection('products').find().toArray(); // traz uma lista de todos os produtos
    return noProduct;
  }

  if (anything.name) {
    const foundProduct = await conn.collection('products').find({ name: anything.name }).toArray(); // utilizado para verificar se o nome do produto cadastrado já consta no banco de dados
    return foundProduct;
  }

  if (typeof anything === 'object') {
    const foundProductById = await conn.collection('products')
      .find({ _id: { $in: anything.map(({ productId }) => ObjectId(productId)) } }).toArray(); // funciona em um array de produtos para diversos ids. Utilizado para verificar existencia de diversos produtos passados em sales. 
    return foundProductById;
  }

  if (anything) {
    const foundProductById = await conn.collection('products').findOne({ _id: ObjectId(anything) }); // funciona para um unico id
    return foundProductById;
  }
};
