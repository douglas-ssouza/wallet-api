const express = require('express');

const { findAll } = require('../middlewares/expenses');

const router = express.Router();

router.get('/', findAll);

module.exports = router;
