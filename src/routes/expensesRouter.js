const express = require('express');

const { findAll, findById, insert, update, remove } = require('../middlewares/expenses');

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', insert);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
