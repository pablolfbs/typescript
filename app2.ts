import Carro from './Carro'
import Pessoa from './Pessoa'
import Consecionaria from './Consecionaria'

let carroA = new Carro('dodge journey', 4)
let carroB = new Carro('veloster', 3)
let carroC = new Carro('cerato', 4)

let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let consecionaria = new Consecionaria('Av. Paulista', listaDeCarros)

console.log(consecionaria.mostrarListaDeCarros())

let cliente = new Pessoa('João', 'veloster')

console.log(cliente.dizerCarroPreferido())

consecionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())