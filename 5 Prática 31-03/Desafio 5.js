const tabulateInput = document.getElementById('tabulateValue')
const buttonTabulate = document.getElementById('btn-tabulate')
const exitTabulate = document.getElementById('exitTabulate')

function menssageTabulate() {
    const valorTabuada = parseFloat(tabulateInput.value)

    exitTabulate.innerHTML = ""

    if (isNaN(valorTabuada)) {
        exitTabulate.innerHTML = "Por favor, digite um número."
        exitTabulate.classList.remove('hidden')
        return
    }

    for (let i = 1; i <= 10; i++) {
        let resposta = valorTabuada * i

        const linha = document.createElement('p');
        
        linha.innerText = `${valorTabuada} x ${i} = ${resposta}`
        
        exitTabulate.appendChild(linha)
    }

    exitTabulate.classList.remove('hidden')
}

buttonTabulate.addEventListener('click', menssageTabulate)