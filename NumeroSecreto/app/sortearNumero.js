const menorNumero = 1
const maiorNumero = 1000
const numeroSecreto = gerarNumeroSecreto()

function gerarNumeroSecreto(){
    return parseInt(Math.random() * maiorNumero + 1)
}

document.getElementById("menor-valor").innerHTML = menorNumero
document.getElementById("maior-valor").innerHTML = maiorNumero