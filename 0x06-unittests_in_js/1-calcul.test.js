const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
    it('sums two numbers', () => {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6)
    });

    it('subtracts two numbers', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    });

    it('divides two numbers', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    });

    it('divides two numbers with denominator zero', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    });
})