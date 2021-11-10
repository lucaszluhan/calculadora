"use strict";
var calculadora = /** @class */ (function () {
    function calculadora() {
    }
    calculadora.prototype.somar = function (num1, num2) {
        var soma = num1 + num2;
        return soma;
    };
    return calculadora;
}());
function main() {
    var calc = new calculadora();
    var result = calc.somar(1, 3);
    console.log(result);
}
main();
