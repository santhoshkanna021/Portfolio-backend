const express = require('express');
const router = express.Router();
const { Contact } = require('../api/contact');

router.post('/', Contact);

module.exports = router;
