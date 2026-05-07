function testesCalculadora(nome, callback) {
    try {
        callback();
        console.log(`${nome}: Passou`);
    } catch (e) {
        console.error(`${nome}: Falhou -> ${e.message}`);
    }
}

// TESTAR AS OPERAÇÕES
testesCalculadora('Somar Positivos', () => {
    if (calculator(10, 20, 'sum') !== '30.00') throw new Error('Esperado 30')
    if (calculator(10, 100, 'sum') !== '110.00') throw new Error('Esperado 110')
})
    
testesCalculadora('Multiplicar Positivos', () => {
    if (calculator(10, 20, 'multiply') !== '200.00') throw new Error('Esperado 200')
    if (calculator(10, 1000, 'multiply') !== '10000.00') throw new Error('Esperado 10000')
})

testesCalculadora('Dividir Positivos', () => {
    if (calculator(20, 10, 'division') !== '2.00') throw new Error('Esperado 2')
    if (calculator(100, 10, 'division') !== '10.00') throw new Error('Esperado 10')
})

testesCalculadora('Subtracao Positivos', () => {
    if (calculator(20, 10, 'subtraction') !== '10.00') throw new Error('Esperado 10')
    if (calculator(250, 75, 'subtraction') !== '175.00') throw new Error('Esperado 175')
})

// TESTAR OS ELEMENTOS
testesCalculadora('Existe o number1', () => {
    const element = document.getElementById('number1')
    if(element === null) throw new Error(`O elemento: ${element} não existe`)
})

testesCalculadora('Existe o number2', () => {
    const element = document.getElementById('number2')
    if(element === null) throw new Error(`O elemento: ${element} não existe`)
})

testesCalculadora('Existe o Botão Soma', () => {
    const element = document.getElementById('sum')
    if(element === null) throw new Error(`O elemento: ${element} não existe`)
})

testesCalculadora('Existe o Botão Subtração', () => {
    const element = document.getElementById('subtraction')
    if(element === null) throw new Error(`O elemento: ${element} não existe`)
})

testesCalculadora('Existe o Botão Divisão', () => {
    const element = document.getElementById('division')
    if(element === null) throw new Error(`O elemento: ${element} não existe`)
})

testesCalculadora('Existe o Botão Multiplicação', () => {
    const element = document.getElementById('multiply')
    if(element === null) throw new Error(`O elemento: ${element} não existe`)
})