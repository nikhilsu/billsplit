var assert = require('assert');
var sinon = require('sinon'); //used for stubbing.
var jsdom = require('jsdom-global'); //used for getting the global document object.
require('node-import'); //used to import javascript files.
imports('src/js/index-script.js');

describe('index-script', function() {
    describe('getAllCheckedCheckboxes()', function () {

        function createMockHTMLCheckBox(name, checked) {
            var mockHTMLCheckboxElement = document.createElement('input');
            mockHTMLCheckboxElement.type = ('checkbox');
            mockHTMLCheckboxElement.name = 'people';
            mockHTMLCheckboxElement.value = name;
            mockHTMLCheckboxElement.checked = checked;
            return mockHTMLCheckboxElement;
        }

        before(function() {
            jsdom(); //fetches the document object.
            sinon.stub(document, 'getElementsByName');
        });

        it('should return the names of the checked checkboxes', function () {
            var mockHTMLCheckboxes = [];
            var mockHTMLRijuCheckbox = createMockHTMLCheckBox('Riju', true);
            var mockHTMLVarshaCheckbox = createMockHTMLCheckBox('Varsha', true);
            var mockHTMLThejasCheckbox = createMockHTMLCheckBox('Thejas', false);
            mockHTMLCheckboxes.push(mockHTMLRijuCheckbox, mockHTMLThejasCheckbox, mockHTMLVarshaCheckbox);
            document.getElementsByName.withArgs('people').returns(mockHTMLCheckboxes);
            var expectedValues = ['Riju', 'Varsha'];

            var actualValues = getAllCheckedCheckboxes('people');

            assert.deepEqual(expectedValues, actualValues);
        });

        it('should return the names of all the checkboxes which are checked', function () {
            var mockHTMLCheckboxes = [];
            var mockHTMLSPCheckbox = createMockHTMLCheckBox('SP', true);
            var mockHTMLKusumCheckbox = createMockHTMLCheckBox('Kusum', false);
            var mockHTMLMuskanCheckbox = createMockHTMLCheckBox('Muskan', true);
            mockHTMLCheckboxes.push(mockHTMLSPCheckbox, mockHTMLKusumCheckbox, mockHTMLMuskanCheckbox);
            document.getElementsByName.withArgs('people').returns(mockHTMLCheckboxes);
            var expectedValues = ['SP', 'Muskan'];

            var actualValues = getAllCheckedCheckboxes('people');

            assert.deepEqual(expectedValues, actualValues);
        });
    });
});