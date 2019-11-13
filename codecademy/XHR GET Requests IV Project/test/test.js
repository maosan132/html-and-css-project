console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const getSuggestions = () => {
        const topicQuery = topicField.value
      }
    };

    let isMatchOne = Structured.match(code, structureOne)
    assert.isOk(isMatchOne, 'Did you create a `const` `topicQuery` and assign it to `topicField.value`?')
  });
});
