const express = require('express');
const products = require('./products/router');
const sales = require('./sales/router');

const root = express.Router({ mergeParams: true });

root.use('/products', products);
root.use('/sales', sales);

module.exports = root;
