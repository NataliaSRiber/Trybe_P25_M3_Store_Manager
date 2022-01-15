const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (anything) => {
  const conn = await connect();
      
  if (!anything) {
    const noSale = await conn.collection('sales').find().toArray();
    return noSale;
  }

  if (anything) {
    const foundSaleById = await conn.collection('sales').findOne({ _id: ObjectId(anything) });
    return foundSaleById;
  }
};
