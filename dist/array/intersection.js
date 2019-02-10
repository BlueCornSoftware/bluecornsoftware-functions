"use strict";
exports.__esModule = true;
function intersection(arr1, arr2) {
    var shortArr = arr1;
    var longArr = arr2;
    if (arr2.length < arr1.length) {
        shortArr = arr2;
        longArr = arr1;
    }
    var table = {};
    for (var i = 0; i < shortArr.length; i++) {
        if (typeof shortArr[i] !== 'object' &&
            typeof shortArr[i] !== 'function') {
            table[String(shortArr[i])] = shortArr[i];
        }
        else if (typeof shortArr[i] === 'object') {
            table[JSON.stringify(shortArr[i])] = shortArr[i];
        }
    }
    var common = [];
    var el;
    for (var j = 0; j < longArr.length; j++) {
        el = longArr[j];
        if (typeof el !== 'object' &&
            typeof el !== 'function') {
            if (table[String(el)]) {
                common.push(el);
            }
        }
        else if (typeof el === 'object') {
            if (table[JSON.stringify(el)]) {
                common.push(el);
            }
        }
    }
    return common;
}
exports.intersection = intersection;
