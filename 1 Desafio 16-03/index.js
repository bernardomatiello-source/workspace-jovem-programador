function soma(valor1, valor2) {
    return console.log(valor1 + valor2)
}

function maiorIdade(idade) {
    if (idade >= 18) {
        return console.log("Maior de Idade")
    }
    return console.log("Menor de Idade")
}

for(let i = 1; i <= 5; i++) {
    console.log(i)
}

let valor1 = 500
let valor2 = 510
soma(valor1, valor2)

let age1 = 18
let age2 = 17
maiorIdade(age1)
maiorIdade(age2)