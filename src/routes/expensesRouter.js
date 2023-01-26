const express = require('express');

const { findAll, findById, insert, update } = require('../middlewares/expenses');

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', insert);
router.put('/:id', update);

module.exports = router;
