// Verificação de Elegibilidade
const idadeDaPessoa = document.getElementById('personAge')
const verificacao = document.getElementById('verification')

function eligibilityVerification() {
    const idade = parseFloat(idadeDaPessoa.value)
    if(idade >= 18) {
        verificacao.value = `Pode Votar`
    } else {
        verificacao.value = `Não Pode Votar`
    }
}

idadeDaPessoa.addEventListener('input', eligibilityVerification)

// Calcular o IMC
const pesoDaPessoa = document.getElementById('weight')
const alturaDaPessoa = document.getElementById('height')
const IMC = document.getElementById('IMC')

function calculateIMC() {
    const peso = pesoDaPessoa.value
    const altura = alturaDaPessoa.value
    
    if(altura <= 0) {
        IMC.value = "Sem Valor de IMC"
        return
    }

    IMC.value = `${(peso / (altura * altura)).toFixed(2)} de IMC`
}

pesoDaPessoa.addEventListener('input', calculateIMC)
alturaDaPessoa.addEventListener('input', calculateIMC)

// Classificação de Números
const numberInput = document.getElementById('numberInput')
const classification = document.getElementById('classification')

function numberClassification() {
    if(numberInput.value > 0) {
        classification.value = "O Número é Positivo"
    } else if(numberInput.value < 0) {
        classification.value = "O Número é Negativo"
    } else {
        classification.value = "Zero"
    }
}

numberInput.addEventListener('input', numberClassification)