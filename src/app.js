const express = require('express');
require('express-async-errors');

const expensesRouter = require('./routes/expensesRouter');

const app = express();

app.use(express.json());

app.use('/expenses', expensesRouter);

module.exports = app;
