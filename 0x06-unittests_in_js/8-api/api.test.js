const request = require('request');
const chai = require('chai');
const expect = chai.expect

describe('API integration test', function() {
    const endpoint = 'http://localhost:7865';

    it('Checks the respnses', function(done) {
        request.get(`${endpoint}/`, (err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});