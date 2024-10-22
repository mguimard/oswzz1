"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.f = function () { };
    Box.prototype.get = function () {
        return this.value;
    };
    return Box;
}());
exports.default = Box;
