"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function omit(obj) {
    var bannedKeys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bannedKeys[_i - 1] = arguments[_i];
    }
    var copy = __assign({}, obj);
    for (var i = 0; i < bannedKeys.length; i++) {
        delete copy[bannedKeys[i]];
    }
    return copy;
}
exports.omit = omit;
