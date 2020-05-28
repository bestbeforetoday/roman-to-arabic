import { romanToArabic } from "../src/romanToArabic";

describe("romanToArabic", () => {
    describe("single numeral", () => {
        test("I is 1", () => expect(romanToArabic("I")).toEqual(1));
        test("V is 5", () => expect(romanToArabic("V")).toEqual(5));
        test("X is 10", () => expect(romanToArabic("X")).toEqual(10));
        test("L is 50", () => expect(romanToArabic("L")).toEqual(50));
        test("C is 100", () => expect(romanToArabic("C")).toEqual(100));
        test("D is 500", () => expect(romanToArabic("D")).toEqual(500));
        test("M is 1000", () => expect(romanToArabic("M")).toEqual(1000));
    });

    describe("addition", () => {
        test("II is 2", () => expect(romanToArabic("II")).toEqual(2));
        test("III is 3", () => expect(romanToArabic("III")).toEqual(3));
        test("IIII is 4", () => expect(romanToArabic("IIII")).toEqual(4));
        test("VI is 6", () => expect(romanToArabic("VI")).toEqual(6));
        test("XVI is 16", () => expect(romanToArabic("XVI")).toEqual(16));
        test("LXVI is 66", () => expect(romanToArabic("LXVI")).toEqual(66));
        test("CLXVI is 166", () => expect(romanToArabic("CLXVI")).toEqual(166));
        test("DCLXVI is 666", () => expect(romanToArabic("DCLXVI")).toEqual(666));
        test("MDCLXVI is 1666", () => expect(romanToArabic("MDCLXVI")).toEqual(1666));
        test("MMMDCCCCLXXXXVIIII is 3999", () => expect(romanToArabic("MMMDCCCCLXXXXVIIII")).toEqual(3999));
    });

    describe("subtraction", () => {
        test("IV is 4", () => expect(romanToArabic("IV")).toEqual(4));
        test("IX is 9", () => expect(romanToArabic("IX")).toEqual(9));
        test("XL is 40", () => expect(romanToArabic("XL")).toEqual(40));
        test("XC is 90", () => expect(romanToArabic("XC")).toEqual(90));
        test("CD is 400", () => expect(romanToArabic("CD")).toEqual(400));
        test("CM is 900", () => expect(romanToArabic("CM")).toEqual(900));
    });

    describe("combination", () => {
        test("XLVI is 46", () => expect(romanToArabic("XLVI")).toEqual(46));
        test("XLIV is 44", () => expect(romanToArabic("XLIV")).toEqual(44));
        test("XCVI is 96", () => expect(romanToArabic("XCVI")).toEqual(96));
        test("XCIV is 94", () => expect(romanToArabic("XCIV")).toEqual(94));
        test("CDLXVI is 466", () => expect(romanToArabic("CDLXVI")).toEqual(466));
        test("CDXLIX is 449", () => expect(romanToArabic("CDXLIX")).toEqual(449));
        test("CMLXVI is 966", () => expect(romanToArabic("CMLXVI")).toEqual(966));
        test("CMXLIV is 944", () => expect(romanToArabic("CMXLIV")).toEqual(944));
    });

    describe("invalid input", () => {
        test("return 0 for empty string", () => expect(romanToArabic("")).toEqual(0));
        test("return NaN for non-numeral characters", () => expect(romanToArabic("IQ")).toBeNaN());
    });
});
