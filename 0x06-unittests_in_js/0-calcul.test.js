const calculateNumber = require('./0-calcul.js');
var assert = require('assert');

describe('calculateNumber', () => {
    it('calculateNumber', () => {
        assert.equal(calculateNumber(1, 3), 4)
    });

    it('calculateNumber', () => {
        assert.equal(calculateNumber(1, 3.7), 5)
    });

    it('calculateNumber', () => {
        assert.equal(calculateNumber(1.2, 3.7), 5)
    });

    it('calculateNumber', () => {
        assert.equal(calculateNumber(1.2, 3.7), 5)
    });

    it('calculateNumber', () => {
        assert.equal(calculateNumber(1.5, 3.7), 6)
    });
})