const expensesDB = require('../database/expensesDB');

async function findAll(_req, res) {
  try {
    const [result] = await expensesDB.findAll();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function findById(req, res) {
  const { id } = req.params;

  try {
    const [[result]] = await expensesDB.findById(id);

    if (result) {
      return res.status(200).json(result);
    }

    return res.status(404).json({ message: 'Expense not found.' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function insert(req, res) {
  const expense = req.body;

  try {
    const [result] = await expensesDB.insert(expense);
    return res
      .status(201)
      .json({ message: `Expense successfully posted with id ${result.insertId}` });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function update(req, res) {
  const { id } = req.params;
  const expense = req.body;

  try {
    const [result] = await expensesDB.update(id, expense);

    if (result.affectedRows) {
      return res.status(200).json({ message: 'Expense updated successfully.' });
    }

    return res.status(404).json({ message: 'Expense not found.' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function remove(req, res) {
  const { id } = req.params;

  try {
    const [result] = await expensesDB.remove(id);

    if (result.affectedRows) {
      return res.status(200).json({ message: 'Expense deleted successfully.' });
    }

    return res.status(404).json({ message: 'Expense not found.' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove,
};
