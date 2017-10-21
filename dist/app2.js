"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
var Consecionaria_1 = require("./Consecionaria");
var carroA = new Carro_1.default('dodge journey', 4);
var carroB = new Carro_1.default('veloster', 3);
var carroC = new Carro_1.default('cerato', 4);
var listaDeCarros = [carroA, carroB, carroC];
var consecionaria = new Consecionaria_1.default('Av. Paulista', listaDeCarros);
console.log(consecionaria.mostrarListaDeCarros());
var cliente = new Pessoa_1.default('João', 'veloster');
console.log(cliente.dizerCarroPreferido());
consecionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
