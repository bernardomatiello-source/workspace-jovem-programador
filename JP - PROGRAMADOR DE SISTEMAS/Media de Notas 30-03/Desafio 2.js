// Calcular Média das Notas
const primeiraNota = document.getElementById('firstGrade')
const segundaNota = document.getElementById('secondGrade')
const terceiraNota = document.getElementById('thirdGrade')
const mediaNotas = document.getElementById('halfGrade')

function calculateHalfGrade() {
    const n1 = parseFloat(primeiraNota.value) || 0
    const n2 = parseFloat(segundaNota.value) || 0
    const n3 = parseFloat(terceiraNota.value) || 0
    
    const media = (n1 + n2 + n3) / 3
    
    mediaNotas.value = `${media.toFixed(2)} Média das Notas`
}

primeiraNota.addEventListener('input', calculateHalfGrade)
segundaNota.addEventListener('input', calculateHalfGrade)
terceiraNota.addEventListener('input', calculateHalfGrade)

// Converter Reais em Dolares
const reais = document.getElementById('reais')
const dolars = document.getElementById('dolars')

function dolarConversor() {
    const valorConvertido = reais.value * 5.27

    dolars.value = `$${valorConvertido.toFixed(2)} Dolares`
}

reais.addEventListener('input', dolarConversor)

// Calcular valor com desconto
const valorProduto = document.getElementById('productValue')
const porcentagemDesconto = document.getElementById('discountPercentage')
const valorComDesconto = document.getElementById('valueWithDiscount')

function calculateDiscount() {
    const vP = valorProduto.value
    const pD = porcentagemDesconto.value
    
    valorComDesconto.value = `R$ ${vP - (vP * pD / 100)} Reais`
}

valorProduto.addEventListener('input', calculateDiscount)
porcentagemDesconto.addEventListener('input', calculateDiscount)