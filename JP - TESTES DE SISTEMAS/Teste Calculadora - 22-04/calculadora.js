const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const sumButton = document.getElementById('sum')
const subtractionButton = document.getElementById('subtraction')
const divisionButton = document.getElementById('division')
const multiplyButton = document.getElementById('multiply')
const calcResult = document.getElementById('result')

let operation

function calculator(a, b, operacao) {
    const num1 = Number(a)
    const num2 = Number(b)

    if (operacao === 'subtraction') return (num1 - num2).toFixed(2)
    if (operacao === 'sum') return (num1 + num2).toFixed(2)
    if (operacao === 'division') return (num1 / num2).toFixed(2)
    if (operacao === 'multiply') return (num1 * num2).toFixed(2)
}

subtractionButton.addEventListener('click', function () {
    operation = 'subtraction'
    const resultado = calculator(number1.value, number2.value, operation)
    calcResult.value = resultado
})
sumButton.addEventListener('click', function () {
    operation = 'sum'
    const resultado = calculator(number1.value, number2.value, operation)
    calcResult.value = resultado
})
divisionButton.addEventListener('click', function () {
    operation = 'division'
    const resultado = calculator(number1.value, number2.value, operation)
    calcResult.value = resultado
})
multiplyButton.addEventListener('click', function () {
    operation = 'multiply'
    const resultado = calculator(number1.value, number2.value, operation)
    calcResult.value = resultado
})

if (typeof module !== 'undefined') {
    module.exports = calculator;
}