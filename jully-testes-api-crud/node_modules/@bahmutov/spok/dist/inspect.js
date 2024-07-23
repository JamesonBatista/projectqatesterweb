"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require('./util/util');
function inspect(obj, color) {
    return util.inspect(obj, false, 5, color);
}
exports.default = inspect;
//# sourceMappingURL=inspect.js.map