const expensesDB = require('../database/expensesDB');

async function findAll(_req, res, next) {
  try {
    const [result] = await expensesDB.findAll();
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
}

async function findById(req, res, next) {
  const { id } = req.params;

  try {
    const [[result]] = await expensesDB.findById(id);

    if (result) {
      return res.status(200).json(result);
    }

    return res.status(404).json({ message: 'Expense not found.' });
  } catch (err) {
    return next(err);
  }
}

async function insert(req, res, next) {
  const expense = req.body;

  try {
    const [result] = await expensesDB.insert(expense);
    return res
      .status(201)
      .json({ message: `Expense successfully posted with id ${result.insertId}` });
  } catch (err) {
    return next(err);
  }
}

async function update(req, res, next) {
  const { id } = req.params;
  const expense = req.body;

  try {
    const [result] = await expensesDB.update(id, expense);

    if (result.affectedRows) {
      return res.status(200).json({ message: 'Expense updated successfully.' });
    }

    return res.status(404).json({ message: 'Expense not found.' });
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  const { id } = req.params;

  try {
    const [result] = await expensesDB.remove(id);

    if (result.affectedRows) {
      return res.status(200).json({ message: 'Expense deleted successfully.' });
    }

    return res.status(404).json({ message: 'Expense not found.' });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove,
};
