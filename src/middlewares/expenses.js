const expensesDB = require('../database/expensesDB');

async function findAll(_req, res) {
  try {
    const [result] = await expensesDB.findAll();
    return res.status(200).json(result);
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

module.exports = {
  findAll,
  insert,
};
