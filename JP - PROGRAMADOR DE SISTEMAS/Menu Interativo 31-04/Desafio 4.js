const select = document.getElementById('bebidaSelect')
const display = document.getElementById('mensagemSaida')

const frases = {
    coffee: 'Boa escolha! Café é ótimo para acordar! ☕',
    tea: 'Excelente! Um chá traz paz e relaxamento. 🍵',
    juice: 'Saudável! Suco de fruta é pura energia! 🍹',
    corote: 'Não é Saudável! Escolha outra coisa para seu próprio bem! 🍺'
}

function displayFrase() {
    const escolha = select.value
    display.innerText = frases[escolha]
    display.style.display = 'block'
}

select.addEventListener('change', displayFrase)