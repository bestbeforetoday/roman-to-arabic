const numeralToArabicMap: { [numeral: string]: number } = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
};

function applySubtraction(value: number, index: number, values: number[]): number {
    // Numerals that precede a higher value numeral are subtractions
    const nextValue = values[index + 1];
    return value < nextValue ? -value : value;
}

/**
 * Converts Roman numerals to an (arabic, base10) number.
 * @param roman Roman numerals.
 * @returns Numeric value.
 */
export function romanToArabic(roman: string): number {
    return Array.from(roman)
        .map((numeral) => numeralToArabicMap[numeral])
        .map(applySubtraction)
        .reduce((a, b) => a + b, 0);
}
