"use strict";

const numeralToArabicMap = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
}

function applySubtractions(accumulator, value, index) {
    // Subtract numerals that preceed a higher value numeral
    if (index > 0 && accumulator[index - 1] < value) {
        accumulator[index - 1] = -accumulator[index - 1];
    }
    accumulator.push(value);
    return accumulator;
};

function romanToArabic(roman) {
    return Array.from(roman)
        .map((numeral) => numeralToArabicMap[numeral])
        .reduce(applySubtractions, [])
        .reduce((a, b) => a + b, 0);
}

module.exports = romanToArabic;