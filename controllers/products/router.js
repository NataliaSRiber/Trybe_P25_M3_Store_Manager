const express = require('express');
const rescue = require('express-rescue'); // substitui o try e o catch
const create = require('./create'); 
const getAll = require('./get');
const getbyId = require('./getId');
const update = require('./update');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });
// todas as rotas ficam neste arquivo de rotas e chama o controller nelas
router.post('/', rescue(create)/* aqui vem o controller */);
router.get('/', rescue(getAll));
router.get('/:id', rescue(getbyId));
router.put('/:id', rescue(update));
router.delete('/:id', rescue(remove));

module.exports = router;
