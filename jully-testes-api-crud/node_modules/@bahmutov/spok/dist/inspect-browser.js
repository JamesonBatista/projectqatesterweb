"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util = require('./util/util');
const spok_1 = __importDefault(require("./spok"));
// terminal colors won't show properly in the browser
if (spok_1.default && spok_1.default.color) {
    spok_1.default.color = false;
}
function inspect(obj, color) {
    return util.inspect(obj, false, 5, color);
}
exports.default = inspect;
//# sourceMappingURL=inspect-browser.js.map