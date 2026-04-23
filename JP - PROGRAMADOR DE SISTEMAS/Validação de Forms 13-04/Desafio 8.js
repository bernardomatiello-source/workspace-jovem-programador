const formEmail = document.getElementById('form-email')
const formPassword = document.getElementById('form-password')
const formButton = document.getElementById('form-button')
const formResult = document.getElementById('form-result')
const togglePassword = document.getElementById('togglePassword')

function formValidate() {
    const email = (formEmail.value).trim()
    const password = formPassword.value

    if (!email || !password) {
        formResult.value = 'Preencha todos os campos ⚠️'
        return
    }

    if (password.length < 6) {
        formResult.value = 'Senha Precisa de 6 ou mais Caracteres 😡'
        return
    } else if (email.includes(' ')) {
        formResult.value = 'Email não possue espaços!'
        return
    }

    if (email === 'bernardo@gmail.com' && password === '123456') {
        formResult.value = 'Email e Senha Aprovados! 😉'
    } else {
        formResult.value = 'Credenciais incorretas. Tente novamente! 🫥'
    }
}

function showPassword() {
    const passwordType = formPassword.getAttribute('type')

    if (passwordType === 'password') {
        formPassword.setAttribute('type', 'text')
        togglePassword.innerText = 'Ocultar'
    } else {
        formPassword.setAttribute('type', 'password')
        togglePassword.innerText = 'Mostrar'
    }
}

formButton.addEventListener('click', formValidate)

formPassword.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        formButton.click()
    }
})

togglePassword.addEventListener('click', showPassword)