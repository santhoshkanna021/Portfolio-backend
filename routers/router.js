const express = require('express');
const router = express.Router();
const { Contact } = require('../controllers/controllers');

router.post('/', Contact);

module.exports = router;
