"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flatMap_1 = require("./flatMap");
describe('flatMap', function () {
    it('should unnest multidimensional arrays', function () {
        var multidimensionalArray = [
            [0, 1],
            [2, 3],
        ];
        var result = flatMap_1.flatMap(multidimensionalArray, function (el) { return el; });
        expect(result.length).toBe(4);
    });
});
//# sourceMappingURL=flatMap.test.js.map