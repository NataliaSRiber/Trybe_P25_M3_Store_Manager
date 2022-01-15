const express = require('express');
const rescue = require('express-rescue'); // substitui o try e o catch
const create = require('./create');
const get = require('./get'); 
const getId = require('./getId');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(create));
router.get('/', rescue(get));
router.get('/:id', rescue(getId));

module.exports = router;