const calculateNumber = require('./0-calcul.js');
var assert = require('assert');

describe('calculateNumber', () => {
    it('Rounds of a number', () => {
        assert.equal(Math.round(1.3), 1);
        assert.equal(Math.round(1.5), 2);
        assert.equal(Math.round(1.7), 2);
        assert.equal(Math.round(1), 1);
    })

    it('Sum of a numbers', () => {
        assert.equal(calculateNumber(1, 3), 4)
        assert.equal(calculateNumber(1, 3.7), 5)
        assert.equal(calculateNumber(1.2, 3.7), 5)
        assert.equal(calculateNumber(1.5, 3.7), 6)
    });
})