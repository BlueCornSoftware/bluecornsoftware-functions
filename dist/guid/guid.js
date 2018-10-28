"use strict";
exports.__esModule = true;
var table = {};
var s = function () { return Math
    .floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1); };
var uuid = function () { return s() + s() + '-' + s() + '-' + s() + '-' + s() + '-' + s() + s() + s(); };
exports.guid = function () {
    var u = uuid();
    while (table[u]) {
        u = uuid();
    }
    table[u] = true;
    return u;
};
