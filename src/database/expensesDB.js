const connection = require('./connection');

function findAll() {
  const query = 'SELECT * FROM expenses';
  return connection.execute(query);
}

function findById(id) {
  const query = 'SELECT * FROM expenses WHERE id = ?';
  return connection.execute(query, [id]);
}

function insert(expense) {
  const { name, description, value } = expense;

  const query = 'INSERT INTO expenses (name, description, value) VALUES (?, ?, ?)';
  return connection.execute(query, [name, description, value]);
}

module.exports = {
  findAll,
  findById,
  insert,
};
