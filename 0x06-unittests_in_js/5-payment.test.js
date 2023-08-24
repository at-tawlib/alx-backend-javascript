const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment')
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    // const spyCheck = sinon.spy(console, 'log');
    let spyCheck;
    beforeEach(() => {
        spyCheck = sinon.spy(console, 'log');
    });
    afterEach(() => {
        sinon.restore();
    });

    it('checks if numbers rounds with spies and stubs', function () {
        sendPaymentRequestToApi(100, 20);
        expect(spyCheck.calledOnce).to.be.true;
        expect(spyCheck.calledWith('The total is: 120')).to.be.true;
    });

    it('checks if numbers rounds with spies and stubs', function () {
        sendPaymentRequestToApi(10, 10);
        expect(spyCheck.calledOnce).to.be.true;
        expect(spyCheck.calledWith('The total is: 20')).to.be.true;
    });
});