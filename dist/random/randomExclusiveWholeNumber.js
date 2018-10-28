"use strict";
exports.__esModule = true;
var randomInclusiveWholeNumber_1 = require("./randomInclusiveWholeNumber");
exports.randomExclusiveWholeNumber = function (a, b) {
    if (b === void 0) { b = 0; }
    return randomInclusiveWholeNumber_1.randomInclusiveWholeNumber(Math.max(a, b) - 1, Math.min(a, b) + 1);
};
