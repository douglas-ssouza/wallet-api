const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../src/app');
const connection = require('../src/database/connection');

const { expect, use } = chai;

use(chaiHttp);

const expenses = require('./mocks/expenses');

describe('Testing GET endpoints', function () {
  describe('Testing "/expenses" route', function () {
    beforeEach(function () {
      sinon.stub(connection, 'execute').resolves([expenses.ALL_EXPENSES]);
    });

    afterEach(function () {
      sinon.restore();
    });

    it('returns status 200', async function () {
      const response = await chai.request(app).get('/expenses');
      expect(response).to.have.status(200);
    });

    it('returns all expenses', async function () {
      const response = await chai.request(app).get('/expenses');
      expect(response.body).to.deep.equal(expenses.ALL_EXPENSES);
    });
  });

  describe('Testing "/expenses/:id" route', function () {
    describe('When id is found', function () {
      beforeEach(function () {
        sinon.stub(connection, 'execute').resolves([[expenses.ALL_EXPENSES[0]]]);
      });

      afterEach(function () {
        sinon.restore();
      });

      it('returns status 200', async function () {
        const response = await chai.request(app).get('/expenses/1');
        expect(response).to.have.status(200);
      });

      it('returns the expense', async function () {
        const response = await chai.request(app).get('/expenses/1');
        expect(response.body).to.deep.equal(expenses.ALL_EXPENSES[0]);
      });
    });

    describe('When id is not found', function () {
      beforeEach(function () {
        sinon.stub(connection, 'execute').resolves([[]]);
      });

      afterEach(function () {
        sinon.restore();
      });

      it('returns status 404', async function () {
        const response = await chai.request(app).get('/expenses/111');
        expect(response).to.have.status(404);
      });

      it('return message "Expense not found."', async function () {
        const response = await chai.request(app).get('/expenses/111');
        expect(response.body).to.deep.equal({ message: 'Expense not found.' });
      });
    });
  });
});

describe('Testing POST endpoints', function () {
  beforeEach(function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 53 }]);
  });

  afterEach(function () {
    sinon.restore();
  });

  it('returns status 201', async function () {
    const response = await chai
      .request(app)
      .post('/expenses')
      .send(expenses.NEW_EXPENSE);

    expect(response).to.have.status(201);
  });

  it('returns the message with the id inserted', async function () {
    const response = await chai
      .request(app)
      .post('/expenses')
      .send(expenses.NEW_EXPENSE);
    
      expect(response.body).to.deep.equal({ message: 'Expense successfully posted with id 53' });
  });
});

describe('Testing PUT endpoints', function () {
  describe('When id is found', function () {
    it('returns status 200', async function () {
      const response = chai
        .request(app)
        .put('/expenses/1')
        .send(expenses.NEW_EXPENSE);
      expect(response).to.have.status(200);
    });

    it('returns message "Expense updated successfully"', async function () {
      const response = chai
        .request(app)
        .put('/expenses/1')
        .send(expenses.NEW_EXPENSE);
      expect(response.body).to.deep.equal({ message: 'Expense updated successfully.' });
    });
  });

  describe('When id is not found', function () {
    it('returns status 404', async function () {
      const response = chai
        .request(app)
        .put('/expenses/111')
        .send(expenses.NEW_EXPENSE);
      expect(response).to.have.status(404);
    });

    it('returns message "Expense not found."', async function () {
      const response = chai
        .request(app)
        .put('/expenses/1')
        .send(expenses.NEW_EXPENSE);
      expect(response.body).to.deep.equal({ message: 'Expense not found.' });
    });
  });
});
