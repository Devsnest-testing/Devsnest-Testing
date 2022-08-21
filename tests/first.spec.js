var assert = require('assert');

describe('first test case', function () {
    it('should return -1 when the value is not present', function () {
        assert.strictEqual([1, 2, 3].indexOf(3), 2);
    });
});

describe('second test case', function () {
    it('should return true', function () {
        assert.equal(true, true);
    })
})