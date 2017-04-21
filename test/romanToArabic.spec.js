"use strict";

const chai = require("chai");
const expect = chai.expect;

const romanToArabic = require("../lib/romanToArabic");

function testValue(input, output) {
    const result = romanToArabic(input);
    expect(result).to.equal(output);
}

describe("romanToArabic", () => {
    describe("single numeral", () => {
        it("I equals 1", () => testValue("I", 1));
        it("V equals 5", () => testValue("V", 5));
        it("X equals 10", () => testValue("X", 10));
        it("L equals 50", () => testValue("L", 50));
        it("C equals 100", () => testValue("C", 100));
        it("D equals 500", () => testValue("D", 500));
        it("M equals 1000", () => testValue("M", 1000));
    });

    describe("addition", () => {
        it("II equals 2", () => testValue("II", 2));
        it("III equals 3", () => testValue("III", 3));
        it("IIII equals 4", () => testValue("IIII", 4));
        it("VI equals 6", () => testValue("VI", 6));
        it("XVI equals 16", () => testValue("XVI", 16));
        it("LXVI equals 66", () => testValue("LXVI", 66));
        it("CLXVI equals 166", () => testValue("CLXVI", 166));
        it("DCLXVI equals 666", () => testValue("DCLXVI", 666));
        it("MDCLXVI equals 1666", () => testValue("MDCLXVI", 1666));
        it("MMMDCCCCLXXXXVIIII equals 3999", () => testValue("MMMDCCCCLXXXXVIIII", 3999));
    });

    describe("subtraction", () => {
        it("IV equals 4", () => testValue("IV", 4));
        it("IX equals 9", () => testValue("IX", 9));
        it("XL equals 40", () => testValue("XL", 40));
        it("XC equals 90", () => testValue("XC", 90));
        it("CD equals 400", () => testValue("CD", 400));
        it("CM equals 900", () => testValue("CM", 900));
    });

    describe("combination", () => {
        it("XLVI equals 46", () => testValue("XLVI", 46));
        it("XLIV equals 44", () => testValue("XLIV", 44));
        it("XCVI equals 96", () => testValue("XCVI", 96));
        it("XCIV equals 94", () => testValue("XCIV", 94));
        it("CDLXVI equals 466", () => testValue("CDLXVI", 466));
        it("CDXLIX equals 449", () => testValue("CDXLIX", 449));
        it("CMLXVI equals 966", () => testValue("CMLXVI", 966));
        it("CMXLIV equals 944", () => testValue("CMXLIV", 944));
    });

    describe("invalid input", () => {
        it("should not throw Error for empty string", () => {
            expect(() => romanToArabic("")).to.not.throw(Error);
        });
        it("should return NaN for non-numeral characters", () => {
            expect(romanToArabic("IQ")).to.be.NaN;
        });
    });

});
