function beforeEach() {
    display = { value: '' };
}

function test(descricao, fn) {
    beforeEach();
    try {
        fn();
        console.log('✅ ' + descricao);
    } catch (e) {
        console.log('❌ ' + descricao);
        console.log('   ' + e.message);
    }
}

function expect(valor) {
    return {
        toBe: function(esperado) {
            if (valor !== esperado) {
                throw new Error('Esperado: ' + esperado + ' | Recebido: ' + valor);
            }
        }
    };
}

// ---- TESTES ----

test('soma 2 + 3 deve ser 5', () => {
    adicionar('2');
    adicionar('+');
    adicionar('3');
    calcular();
    expect(display.value).toBe(5);
});

test('subtração 10 - 4 deve ser 6', () => {
    adicionar('10');
    adicionar('-');
    adicionar('4');
    calcular();
    expect(display.value).toBe(6);
});

test('multiplicação 6 * 7 deve ser 42', () => {
    adicionar('6');
    adicionar('*');
    adicionar('7');
    calcular();
    expect(display.value).toBe(42);
});

test('divisão 20 / 4 deve ser 5', () => {
    adicionar('20');
    adicionar('/');
    adicionar('4');
    calcular();
    expect(display.value).toBe(5);
});

test('porcentagem 50% deve ser 0.5', () => {
    adicionar('50');
    adicionar('%');
    calcular();
    expect(display.value).toBe(0.5);
});

test('limpar deve deixar o display vazio', () => {
    adicionar('123');
    limpar();
    expect(display.value).toBe('');
});

test('expressão inválida deve retornar Erro', () => {
    adicionar('abc');
    calcular();
    expect(display.value).toBe('Erro');
});