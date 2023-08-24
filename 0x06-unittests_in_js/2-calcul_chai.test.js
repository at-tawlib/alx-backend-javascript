const calculateNumber = require('./1-calcul.js');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', () => {
    it('sums two numbers', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('subtracts two numbers', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('divides two numbers', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('divides two numbers with denominator zero', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
})