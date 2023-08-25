const request = require('request');
const chai = require('chai');
const expect = chai.expect

describe('API integration test', function () {
    const endpoint = 'http://localhost:7865';

    it('Checks the respones', function (done) {
        request.get(`${endpoint}/`, (err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it('checks correct response for valid :id', (done) => {
        request.get(`${endpoint}/cart/11`, (err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 11');
            done();
        });
    });

    it('check 404 response for negative number values in :id', (done) => {
        request.get(`${endpoint}/cart/-7`, (err, res, body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('checks 404 response for non-numeric values in :id', (done) => {
        request.get(`${endpoint}/cart/aac-343e6`, (err, res, body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('checks /available_payments for valid response', (done) => {
        request.get(`${endpoint}/available_payments`, (err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(JSON.parse(body))
                .to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
            done();
        });
    });

    it('checks login returns valid response', (done) => {
        request.post(`${endpoint}/login`, {json: {userName: 'Abdul'}}, (err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal('Welcome Abdul');
          done();
        });
      });
});