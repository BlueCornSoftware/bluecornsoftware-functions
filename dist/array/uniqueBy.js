"use strict";
exports.__esModule = true;
function uniqueBy(items, key) {
    var itemsWithKey = items.filter(function (item) { return item.hasOwnProperty && item.hasOwnProperty(key); });
    var table = {};
    for (var _i = 0, itemsWithKey_1 = itemsWithKey; _i < itemsWithKey_1.length; _i++) {
        var item = itemsWithKey_1[_i];
        table[item[key]] = item;
    }
    return Object.values(table);
}
exports.uniqueBy = uniqueBy;
