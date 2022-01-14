const express = require('express');
const rescue = require('express-rescue'); // substitui o try e o catch
const create = require('./create'); 

const router = express.Router({ mergeParams: true });

router.post('/', rescue(create));

module.exports = router;