"use strict";
exports.__esModule = true;
function uniq(list) {
    var table = {};
    for (var i = 0; i < list.length; i++) {
        if (typeof list[i] === 'object') {
            table[JSON.stringify(list[i])] = list[i];
        }
        else {
            table[String(list[i])] = list[i];
        }
    }
    return Object.values(table);
}
exports.uniq = uniq;
