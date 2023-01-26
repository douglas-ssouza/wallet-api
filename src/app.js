const express = require('express');

const expensesRouter = require('./routes/expensesRouter');

const app = express();

app.use(express.json());

app.use('/expenses', expensesRouter);

module.exports = app;
