const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
    it('returns a promise', function () {
        const res = getPaymentTokenFromAPI();
        expect(res).to.be.an.instanceOf(Promise);
    });

    it("returns a JSON data object from the API on success", function () {
        getPaymentTokenFromAPI(true)
            .then((res) => {
                expect(res.data).to.be.equal('Successful response from the API');
                done();
            });
    });

    it('does nothing if not successful', function () {
        getPaymentTokenFromAPI(false)
            .then((res) => {
                expect(res).to.equal('');
            });
    });
});