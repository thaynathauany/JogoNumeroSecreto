const menorValor = 1
const maiorValor = 500
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

//A função Math.random() é usado para retornar um número pseudoaleatório de ponto flutuante entre 0 e 1. 
// parseInt - transforma em número inteiro