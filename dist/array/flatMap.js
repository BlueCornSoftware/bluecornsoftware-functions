var concat = function (x, y) { return x.concat(y); };
exports.flatMap = function (array, func) { return array.map(func).reduce(concat, []); };
