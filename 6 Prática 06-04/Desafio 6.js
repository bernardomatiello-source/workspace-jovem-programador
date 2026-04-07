const inputValor1 = document.getElementById('valor1')
const inputValor2 = document.getElementById('valor2')
const operacaoMatematica = document.getElementById('mathOperation')
const resultadoMatematica = document.getElementById('mathResult')
const caclulateButton = document.getElementById('btn-calculate')

function calculate() {
    let valor1 = parseFloat(inputValor1.value)
    let valor2 = parseFloat(inputValor2.value)
    let seletor = (operacaoMatematica.value)
    let resultado

    if(seletor == 'Divisão') {
        resultado = valor1 / valor2
    } else if (seletor == 'Soma') {
        resultado = valor1 + valor2
    } else if (seletor == 'Subtração') {
        resultado = valor1 - valor2
    } else if (seletor == 'Vezes') {
        resultado = valor1 * valor2
    }

    resultadoMatematica.value = resultado.toFixed(4)
}

caclulateButton.addEventListener('click', calculate)