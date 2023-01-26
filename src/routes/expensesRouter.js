const express = require('express');

const { findAll, findById, insert } = require('../middlewares/expenses');

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', insert);

module.exports = router;
