function sum() {
    //Pegar os campos do HTML pelo ID e alocar em uma variavel
    const campo1 = document.getElementById("num1")
    const campo2 = document.getElementById("num2")
    const campoResultado = document.getElementById("resultado");

    //Converter as variaveis para number
    const valor1 = Number(campo1.value)
    const valor2 = Number(campo2.value)

    //Realizar a soma e guardar na variavel
    const soma = valor1 + valor2

    campoResultado.value = soma
}