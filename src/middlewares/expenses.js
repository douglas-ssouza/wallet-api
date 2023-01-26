const expensesDB = require('../database/expensesDB');

async function findAll(_req, res) {
  try {
    const [result] = await expensesDB.findAll();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = {
  findAll,
};
