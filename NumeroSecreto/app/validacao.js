function verificaValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido!</div>
        `
        return
    }

    if (foraDoAlcancePermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: o número secreto precisa estar entre ${menorNumero} e ${maiorNumero}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto é ${numeroSecreto}</h3>
        <button id="botao-jogar" class="btn-jogar-novamente">Jogar novamente</button>
        `
    }
    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }
    else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function foraDoAlcancePermitido(numero) {
    return numero > maiorNumero || numero < menorNumero
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'botao-jogar') {
        window.location.reload()
    }
})