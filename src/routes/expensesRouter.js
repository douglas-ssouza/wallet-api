const express = require('express');

const { findAll, insert } = require('../middlewares/expenses');

const router = express.Router();

router.get('/', findAll);
router.post('/', insert);

module.exports = router;
