const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    it('checks if numbers rounds with spies', function () {
        const checkSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(1, 3);
        expect(checkSpy.calledOnce).to.be.true;
        expect(checkSpy.calledWith('SUM', 1, 3)).to.be.true;
        checkSpy.restore();
    })
});