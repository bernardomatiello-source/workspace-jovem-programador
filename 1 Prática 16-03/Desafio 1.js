// Conversor de Celsius para Fahrenheit
const inputCelsius = document.getElementById("celsius")
const inputFahrenheit = document.getElementById("fahrenheit")

function conversor() {
    const celsius = Number(inputCelsius.value)

    const resultado = (celsius * 9 / 5) + 32

    inputFahrenheit.value = `${resultado} Fahrenheit`
}

inputCelsius.addEventListener('input', conversor)

// Comparação de Valores
const inputValor1 = document.getElementById("valor1")
const inputValor2 = document.getElementById("valor2")
const resultCompare = document.getElementById("result-compare")

function compareValue() {
    const v1 = inputValor1.value
    const v2 = inputValor2.value

    const num1 = Number(v1)
    const num2 = Number(v2)

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 > num2) {
            resultCompare.value = `${num1} é maior que ${num2}`
        } else if (num1 < num2) {
            resultCompare.value = `${num1} é menor que ${num2}`
        } else { 
            resultCompare.value = `Ambos os valores são iguais`
        }
    } else {
        if (v1 === v2) {
            resultCompare.value = `Os textos são iguais`
        } else {
            resultCompare.value = `Os textos são diferentes`
        }
    }
}

inputValor1.addEventListener('input', compareValue)
inputValor2.addEventListener('input', compareValue)

// Area do Retangulo
const alturaRetangulo = document.getElementById('height')
const larguraRetangulo = document.getElementById('width')
const areaRetangulo = document.getElementById('area')

function calculateArea() {
    areaRetangulo.value = `${alturaRetangulo.value * larguraRetangulo.value} unidades²`
}

larguraRetangulo.addEventListener('input', calculateArea)
alturaRetangulo.addEventListener('input', calculateArea)