const display = document.getElementById('display');

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = '';
}

function calcular() {
    try {
        var expressao = display.value.replace(/%/g, '/100');
        display.value = eval(expressao);
    } catch (e) {
        display.value = 'Erro';
    }
}