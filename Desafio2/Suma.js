"use strict";
exports.__esModule = true;
exports.Suma = void 0;
var suma = function (a, b) { return a + b; };
var Suma = /** @class */ (function () {
    function Suma(valueA, valueB) {
        var _this = this;
        this.resultado = function () {
            return suma(_this.valueOne, _this.valueTwo);
        };
        this.valueOne = valueA;
        this.valueTwo = valueB;
    }
    return Suma;
}());
exports.Suma = Suma;
