"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid_1 = require("./guid");
describe('Function: guid()', function () {
    it('should return a unique string', function () {
        var table = {};
        var u;
        Array(1000).slice().forEach(function () {
            u = guid_1.guid();
            expect(table[u]).toBeFalsy();
            table[u] = true;
        });
    });
});
//# sourceMappingURL=guid.test.js.map