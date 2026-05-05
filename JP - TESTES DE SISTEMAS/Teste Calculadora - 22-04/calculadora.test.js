function testesCalculadora(nome, callback) {
    try {
        callback();
        console.log(`${nome}: Passou`);
    } catch (e) {
        console.error(`${nome}: Falhou -> ${e.message}`);
    }
} 

// Testar as Operações
testesCalculadora('Somar Positivos', () => {
    if (calculator(10, 20, 'sum') !== '30.00') throw new Error('Esperado 30')
})
    
testesCalculadora('Multiplicar Positivos', () => {
    if (calculator(10, 20, 'multiply') !== '200.00') throw new Error('Esperado 200')
})

testesCalculadora('Dividir Positivos', () => {
    if (calculator(20, 10, 'division') !== '2.00') throw new Error('Esperado 2')
})

testesCalculadora('Subtracao Positivos', () => {
    if (calculator(20, 10, 'subtraction') !== '0') throw new Error('Esperado 10')
})

// Testar os Elementos numeros
testesCalculadora('Existe o number1', () => {
    if(num === null) throw new Error('O Elemento não existe')
        const num = document.getElementById('number1')
})

testesCalculadora('Existe o number2', () => {
    const num = document.getElementById('number2')
    if(num === null) throw new Error('O Elemento não existe')
})