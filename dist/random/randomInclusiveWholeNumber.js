"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNumber = function (num) { return typeof num === 'number'; };
exports.randomInclusiveWholeNumber = function (a, b) {
    var bIsNumber = isNumber(b);
    var lowerLimit = bIsNumber ? Math.min(a, b) : 0;
    var upperLimit = bIsNumber ? Math.max(a, b) : a;
    var randomSeed = Math.random() * (upperLimit - lowerLimit + 1);
    return Math.floor(randomSeed + lowerLimit);
};
//# sourceMappingURL=randomInclusiveWholeNumber.js.map