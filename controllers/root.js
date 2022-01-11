const express = require('express');
const products = require('./products/router');

const root = express.Router({ mergeParams: true });
// todas as rotas ficam neste arquivo de rotas e chama o controller nelas
root.use('/products', products);

module.exports = root;
