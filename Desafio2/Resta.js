"use strict";
exports.__esModule = true;
exports.Resta = void 0;
var resta = function (a, b) { return a - b; };
var Resta = /** @class */ (function () {
    function Resta(valueA, valueB) {
        var _this = this;
        this.resultado = function () {
            return resta(_this.valueOne, _this.valueTwo);
        };
        this.valueOne = valueA;
        this.valueTwo = valueB;
    }
    return Resta;
}());
exports.Resta = Resta;
