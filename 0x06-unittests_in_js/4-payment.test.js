const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment')
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    const spyCheck = sinon.spy(console, 'log');
    it('checks if numbers rounds with spies and stubs', function () {
        sendPaymentRequestToApi(100, 20);
        const stubCheck = sinon.stub(Utils, 'calculateNumber');
        stubCheck.withArgs('SUM', 100, 20).returns(120);
        expect(spyCheck.calledOnce).to.be.true;
        expect(console.log('The total is: 120')).to.be.all;
        spyCheck.restore();
        stubCheck.restore();
    });
});