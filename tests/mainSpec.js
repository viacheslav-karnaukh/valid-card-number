'use strict';

describe('Validation of card numbers or IMEI according to Luhn algorithm.', () => {

    describe('toDigits function converts strings of digits and numbers to array of digits.', () => {
        let toDigits = require('../source/valid-card-number').toDigits;
        it('should convert string of digits to array of digits', () => {
            expect(toDigits('123')).toEqual([1,2,3]);
            expect(toDigits('WAT')[0]).toBeNaN();
            expect(toDigits('5244162726358685')).toEqual([5,2,4,4,1,6,2,7,2,6,3,5,8,6,8,5]);
        });
        it('should convert number to array of digits', () => {
            expect(toDigits(123)).toEqual([1,2,3]);
            expect(toDigits(5244162726358685)).toEqual([5,2,4,4,1,6,2,7,2,6,3,5,8,6,8,5]);
        });
    });

    describe('toDigitsRev function returns an array of digits of inputed parameter in reversed order.', () => {
        let toDigitsRev = require('../source/valid-card-number').toDigitsRev;
        it('should return array', () => {
            expect(Array.isArray(toDigitsRev(''))).toBe(true);
        });
        it('should return array of inputed digits in reversed order', () => {
            expect(toDigitsRev('12345')).toEqual([5,4,3,2,1]);
        });
    });

    describe('doubleSecond function doubles every second number in the array of digits.', function() {
        let doubleSecond = require('../source/valid-card-number').doubleSecond;
        it('should return array with doubled value of every second digit', () => {
            expect(doubleSecond([1,1,1,1,1,1])).toEqual([1,2,1,2,1,2]);
            expect(doubleSecond([1,2,3,4,5])).toEqual([1,4,3,8,5]);
        });
        it('should return array with the same quantity of digits as in the inputed one', () => {
            expect(doubleSecond([]).length).toBe(0);
            expect(doubleSecond([1,2,3,4,5]).length).toBe(5);
        });
    });

    describe('sumDigits function sums all digits of the array\'s numbers even if the number has two digits.', () => {
        let sumDigits = require('../source/valid-card-number').sumDigits;
        it('should sum all numbers in the array', function() {
            expect(sumDigits([1,2,3])).toBe(6);
            expect(sumDigits([1,1,1,1,1,1,1])).toBe(7);
        });
        it('should sum all numbers and digits of those which consist of two digits', function() {
            expect(sumDigits([1,14])).toBe(6);
            expect(sumDigits([1,12,18])).toBe(13);
        });
    });

    describe('isValid function validate card number or IMEI.', () => {
        let isValid = require('../source/valid-card-number').isValid;
        let validNumbers =  [
                                4716347184862961,
                                4929778869082405,
                                5256283618614517,
                                5507514403575522,
                                5191806267524120,
                                5396452857080331,
                                6011798764103720,
                                6011970953092861,
                                6011486447384806,
                                6011337752144550,
                                6011442159205994,
                                4916188093226163,
                                4916699537435624,
                                4556945538735693,
                                5349308918130507,
                                5156469512589415,
                                5210896944802939,
                                5442782486960998,
                                5385907818416901,
                                6011920409800508,
                                6011978316213975,
                                6011285399268094,
                                6011111757787451,
                                4024007106747875,
                                4916148692391990,
                                4916918116659358
                            ];
        let invalidNumbers =    [
                                    4532899082537349,
                                    4485429517622493,
                                    4320635998241421,
                                    5567798501168013,
                                    4024607115319476,
                                    4532818294886666,
                                    6011221666280064,
                                    5370975221279675,
                                    5586822747605880,
                                    6011660634944997,
                                    6011887079002610,
                                    4532462702719400,
                                    5452898762612993,
                                    6011582769987164,
                                    6011450326200252,
                                    6011141461689343,
                                    347171902952673,
                                    345449316207827,
                                    340860752032008,
                                    349569393937707,
                                    379610201376008,
                                    347556554119626,
                                    346734548488728,
                                    370697814213115,
                                    345835454524671,
                                    345763240913232
                                ];
        it('should return true for valid numbers', () => {
            validNumbers.forEach((validNumber) => {
                expect(isValid(validNumber)).toBe(true);
            });                       
        });
        it('should return false for invalid numbers', () => {
            invalidNumbers.forEach((invalidNumber) => {
                expect(isValid(invalidNumber)).toBe(false);
            });
        });
    });

});