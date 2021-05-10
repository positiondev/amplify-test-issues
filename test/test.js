var assert = require('assert');
describe('String Reversal', () => {
    describe('#reverseString', () => {
        it('should reverse a string', () => {
            const string = "This is a string."
            let reversedString = string.split('').reverse().join('')
            assert.equal(reversedString, ".gnirts a si sihT" )
        })
    })
})