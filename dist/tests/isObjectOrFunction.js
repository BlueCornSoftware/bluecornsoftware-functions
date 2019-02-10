"use strict";
exports.__esModule = true;
exports.isObjectOrFunction = function (subject) {
    var t = typeof subject;
    return t === 'object' || t === 'function';
};
