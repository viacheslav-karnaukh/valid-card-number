function toDigits (strOfDigits) {
    return strOfDigits.toString().split('').map(Number);
}

exports.toDigits = toDigits;