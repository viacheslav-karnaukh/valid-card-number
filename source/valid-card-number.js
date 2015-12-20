'use strict';

let toDigits = (digits) =>
    digits.toString().split('').map(Number);

let toDigitsRev = (digits) =>
    toDigits(digits).reverse();
 
let doubleSecond = (arrOfDigits) =>
    arrOfDigits.map( (digit, i) =>
        i % 2 !== 0 ? digit * 2 : digit );

let sumDigits = (arrOfDigits) =>
    arrOfDigits.reduce( (pred, succ) =>
        pred + succ % 10 + parseInt(succ / 10, 10), 0 );

let isValid = (digits) =>
    sumDigits(doubleSecond(toDigitsRev(digits))) % 10 === 0;

exports.toDigits = toDigits;
exports.toDigitsRev = toDigitsRev;
exports.doubleSecond = doubleSecond;
exports.sumDigits = sumDigits;
exports.isValid = isValid;