"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomInclusiveWholeNumber_1 = require("./randomInclusiveWholeNumber");
describe('randomInclusiveWholeNumber', function () {
    it('should always return a number that could be either the upper or lower limit', function () {
        var result = randomInclusiveWholeNumber_1.randomInclusiveWholeNumber(1, 1);
        expect(result).toBe(1);
    });
    it('should produce value between those specified', function () {
        var result = randomInclusiveWholeNumber_1.randomInclusiveWholeNumber(0, 20);
        expect(result).toBeLessThanOrEqual(20);
        expect(result).toBeGreaterThanOrEqual(0);
    });
});
//# sourceMappingURL=randomInclusiveWholeNumber.test.js.map