const userInput = document.getElementById('user-input')
const passwordInput = document.getElementById('password-input')
const countDiv = document.getElementById('message-count')
const loginBtn = document.getElementById('login-button')

const correctUser = 'admin'
const correctPassword = '123456'

const max_attempts = 3
let attemptsLeft = max_attempts

loginBtn.addEventListener('click', () => {
    const user = userInput.value
    const password = passwordInput.value

    if (user !== correctUser || password !== correctPassword) {
        attemptsLeft--

        countDiv.innerHTML = ''
        const span = document.createElement('span')
        span.innerText = `Numero de Tentativas Restantes: ${attemptsLeft}`
        span.classList.add('count-message')
        countDiv.appendChild(span)

        if (attemptsLeft <= 0) {
            loginBtn.disabled = true
            span.innerText = 'Numero de tentativas esgotado!'
        }
    }
})