import { romanToArabic } from "../src/romanToArabic";

function testValue(input: string, output: number): void {
    const result = romanToArabic(input);
    expect(result).toEqual(output);
}

describe("romanToArabic", () => {
    describe("single numeral", () => {
        test("I equals 1", () => testValue("I", 1));
        test("V equals 5", () => testValue("V", 5));
        test("X equals 10", () => testValue("X", 10));
        test("L equals 50", () => testValue("L", 50));
        test("C equals 100", () => testValue("C", 100));
        test("D equals 500", () => testValue("D", 500));
        test("M equals 1000", () => testValue("M", 1000));
    });

    describe("addition", () => {
        test("II equals 2", () => testValue("II", 2));
        test("III equals 3", () => testValue("III", 3));
        test("IIII equals 4", () => testValue("IIII", 4));
        test("VI equals 6", () => testValue("VI", 6));
        test("XVI equals 16", () => testValue("XVI", 16));
        test("LXVI equals 66", () => testValue("LXVI", 66));
        test("CLXVI equals 166", () => testValue("CLXVI", 166));
        test("DCLXVI equals 666", () => testValue("DCLXVI", 666));
        test("MDCLXVI equals 1666", () => testValue("MDCLXVI", 1666));
        test("MMMDCCCCLXXXXVIIII equals 3999", () => testValue("MMMDCCCCLXXXXVIIII", 3999));
    });

    describe("subtraction", () => {
        test("IV equals 4", () => testValue("IV", 4));
        test("IX equals 9", () => testValue("IX", 9));
        test("XL equals 40", () => testValue("XL", 40));
        test("XC equals 90", () => testValue("XC", 90));
        test("CD equals 400", () => testValue("CD", 400));
        test("CM equals 900", () => testValue("CM", 900));
    });

    describe("combination", () => {
        test("XLVI equals 46", () => testValue("XLVI", 46));
        test("XLIV equals 44", () => testValue("XLIV", 44));
        test("XCVI equals 96", () => testValue("XCVI", 96));
        test("XCIV equals 94", () => testValue("XCIV", 94));
        test("CDLXVI equals 466", () => testValue("CDLXVI", 466));
        test("CDXLIX equals 449", () => testValue("CDXLIX", 449));
        test("CMLXVI equals 966", () => testValue("CMLXVI", 966));
        test("CMXLIV equals 944", () => testValue("CMXLIV", 944));
    });

    describe("invalid input", () => {
        test("return 0 for empty string", () => {
            expect(romanToArabic("")).toEqual(0);
        });
        test("return NaN for non-numeral characters", () => {
            expect(romanToArabic("IQ")).toBeNaN;
        });
    });

});
