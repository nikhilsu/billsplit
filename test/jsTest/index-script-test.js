var assert = require('assert');
require('node-import'); //used to import javascript files.
imports('src/js/index-script.js');

describe('index-script', function() {
    describe('getAllCheckedCheckboxes()', function () {

        it('should return the names of all the checkboxes which are checked', function () {
            var expectedValues = ['Riju', 'Varsha'];

            var actualValues = getAllCheckedCheckboxes('people');

            assert.deepEqual(expectedValues, actualValues);
        });
    });
});