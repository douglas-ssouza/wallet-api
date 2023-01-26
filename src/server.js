const app = require('./app');
const connection = require('../src/database/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`Wallet API running on PORT ${PORT}`);

  const [result] = await connection.execute('SELECT * FROM expenses');

  console.log(result);
});
