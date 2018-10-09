"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomExclusiveWholeNumber_1 = require("./randomExclusiveWholeNumber");
describe('randomExclusiveWholeNumber', function () {
    it('should return 2 if given 1 and 3', function () {
        var result = randomExclusiveWholeNumber_1.randomExclusiveWholeNumber(3, 1);
        expect(result).toBe(2);
    });
});
//# sourceMappingURL=randomExclusiveWholeNumber.test.js.map