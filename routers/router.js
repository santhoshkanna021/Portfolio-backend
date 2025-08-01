const express = require('express');
const router = express.Router();
const { Contact } = require('../api/controllers');

router.post('/', Contact);

module.exports = router;
