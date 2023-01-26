const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');

const expensesRouter = require('./routes/expensesRouter');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/expenses', expensesRouter);

app.use((_req, res) => res.status(404).json({ message: 'Route not found.' }));

module.exports = app;
