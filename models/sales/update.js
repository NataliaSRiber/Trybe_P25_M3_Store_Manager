const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (sale, id) => {
  const conn = await connect();
  const updatedSale = await conn.collection('sales').updateOne(
    { _id: ObjectId(id) },
    {
      $set: { itensSold: sale },
    },
  );

  return updatedSale;
};