"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Consecionaria = /** @class */ (function () {
    function Consecionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Consecionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Consecionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Consecionaria;
}());
exports.default = Consecionaria;
