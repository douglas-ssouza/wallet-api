const express = require('express');
require('express-async-errors');
const morgan = require('morgan');

const expensesRouter = require('./routes/expensesRouter');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/expenses', expensesRouter);

module.exports = app;
