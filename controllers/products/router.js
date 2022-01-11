const express = require('express');
const rescue = require('express-rescue'); // substitui o try e o catch
const create = require('./create'); 

const router = express.Router({ mergeParams: true });
// todas as rotas ficam neste arquivo de rotas e chama o controller nelas
router.post('/', rescue(create)/* aqui vem o controller */);

module.exports = router;
