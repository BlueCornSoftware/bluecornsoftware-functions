"use strict";
exports.__esModule = true;
var randomInclusiveWholeNumber_1 = require("./randomInclusiveWholeNumber");
var randomExclusiveWholeNumber_1 = require("./randomExclusiveWholeNumber");
exports.randomWholeNumber = function (a, b, opts) {
    if (!opts) {
        return randomInclusiveWholeNumber_1.randomInclusiveWholeNumber(a, b || 0);
    }
    var inclusive = opts.inclusive;
    if (typeof inclusive === 'boolean') {
        if (inclusive) {
            return randomInclusiveWholeNumber_1.randomInclusiveWholeNumber(a, b || 0);
        }
        else {
            return randomExclusiveWholeNumber_1.randomExclusiveWholeNumber(a, b);
        }
    }
    return randomInclusiveWholeNumber_1.randomInclusiveWholeNumber(a, b || 0);
};
