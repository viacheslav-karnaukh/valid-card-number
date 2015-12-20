describe('Validation of card numbers or IMEI according to Luhn algorithm.', function() {
    describe('A helper function converting strings of digits and numbers to array of numbers.', function() {
        var toDigits = require('../source/valid-card-number.js').toDigits;
        it('should convert string of digits to array of numbers', function() {
            expect(toDigits('123')).toEqual([1,2,3]);
            expect(toDigits('WAT')[0]).toBeNaN();
            expect(toDigits('5244162726358685')).toEqual([5,2,4,4,1,6,2,7,2,6,3,5,8,6,8,5]);
        });
        it('should convert number to array of numbers', function() {
            expect(toDigits(123)).toEqual([1,2,3]);
            expect(toDigits(5244162726358685)).toEqual([5,2,4,4,1,6,2,7,2,6,3,5,8,6,8,5]);
        });
    });
    
});