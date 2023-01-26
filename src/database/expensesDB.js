const connection = require('./connection');

function findAll() {
  const query = 'SELECT * FROM expenses';
  return connection.execute(query);
}

module.exports = {
  findAll,
};
