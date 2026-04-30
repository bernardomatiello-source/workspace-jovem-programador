function testarCalculadora(nome, callback) {
    try {
        callback();
        console.log(`${nome}: Passou`);
    } catch (e) {
        console.error(`${nome}: Falhou -> ${e.message}`);
    }
} 

testarCalculadora('Somar Positivos', () => {
    if (calculator(10, 20, 'sum') !== '30.00') throw new Error('Esperado 30')
})
    
testarCalculadora('Multiplicar Positivos', () => {
    if (calculator(10, 20, 'multiply') !== '200.00') throw new Error('Esperado 200')
})

testarCalculadora('Dividir Positivos', () => {
    if (calculator(20, 10, 'division') !== '2.00') throw new Error('Esperado 2')
})

testarCalculadora('Subtracao Positivos', () => {
    if (calculator(20, 10, 'subtraction') !== '0') throw new Error('Esperado 10')
})