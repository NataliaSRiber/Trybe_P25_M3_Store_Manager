const connect = require('../connection');

module.exports = async (sale) => {
  const conn = await connect();
  const newSale = await conn.collection('sales').insertOne({ itensSold: sale });
  
  // const allSales = {
  //   _id: newSale.insertedId,
  //   itensSold: products,
  // };

  return newSale;
};
