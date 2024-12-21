const assert = require('assert');
const add = require('../add');

// Describe the test suite
describe('Add Function', function() {
    // Test case for adding two positive numbers
    it('should return 5 when adding 2 and 3', function() {
        assert.strictEqual(add(2, 3), 5);
    });

    // Test case for adding two negative numbers
    it('should return -5 when adding -2 and -3', function() {
        assert.strictEqual(add(-2, -3), -5);
    });

    // Test case for adding a positive and a negative number
    it('should return 1 when adding 3 and -2', function() {
        assert.strictEqual(add(3, -2), 1);
    });
});
