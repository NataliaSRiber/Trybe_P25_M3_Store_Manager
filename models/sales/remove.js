const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (id) => {
  const conn = await connect();
  await conn.collection('sales').deleteOne(
    { _id: ObjectId(id) },
  );
};
