const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const sumButton = document.getElementById('sum')
const subtractionButton = document.getElementById('subtraction')
const divisionButton = document.getElementById('division')
const multiplyButton = document.getElementById('multiply')
const calcResult = document.getElementById('result')

let operation 

function calculator() {
    if(operation === 'sum') {
         calcResult.value = (Number(number1.value) + Number(number2.value)).toFixed(2)
    } else if (operation === 'multiply') {
        calcResult.value = (Number(number1.value) * Number(number2.value)).toFixed(2)
    } else if (operation === 'division') {
        calcResult.value = (Number(number1.value) / Number(number2.value)).toFixed(2)
    } else if (operation === 'subtraction') {
        calcResult.value = (Number(number1.value) - Number(number2.value)).toFixed(2)
    }
}

subtractionButton.addEventListener('click', function() {
    operation = 'subtraction'
    calculator()
})
sumButton.addEventListener('click', function() {
    operation = 'sum'
    calculator()
})
divisionButton.addEventListener('click', function() {
    operation = 'division'
    calculator()
})
multiplyButton.addEventListener('click', function() {
    operation = 'multiply'
    calculator()
})