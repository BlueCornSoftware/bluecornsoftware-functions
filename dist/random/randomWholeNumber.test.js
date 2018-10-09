"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomWholeNumber_1 = require("./randomWholeNumber");
describe('randomWholeNumber', function () {
    it('should always return a number between those specified', function () {
        var result = randomWholeNumber_1.randomWholeNumber(1, 3);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(3);
    });
    it('should return an exclusive value if inclusive is false', function () {
        var result = randomWholeNumber_1.randomWholeNumber(1, 3, { inclusive: false });
        expect(result).toBe(2);
    });
    it('should return a number inclusive between 0 and x when no second arg specified', function () {
        var result = randomWholeNumber_1.randomWholeNumber(1);
        expect(result).toBeLessThanOrEqual(1);
    });
});
//# sourceMappingURL=randomWholeNumber.test.js.map