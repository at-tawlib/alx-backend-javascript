const calculateNumber = require('./0-calcul.js');
var assert = require('assert');

describe('calculateNumber', () => {
    it('Rounds of a number', () => {
        assert.equal(calculateNumber(1, 3), 4)
        assert.equal(calculateNumber(1, 3.7), 5)
        assert.equal(calculateNumber(1.2, 3.7), 5)
        assert.equal(calculateNumber(1.5, 3.7), 6)
    });
})