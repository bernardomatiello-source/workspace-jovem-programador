const tasks = document.getElementById('tasks')
const calcBtn = document.getElementById('calc-bonus')
const bonusResult = document.getElementById('bonus-result')

const baseSalary = 1200

function bonusCalculate() {
    if (tasks.value > 10) return baseSalary * (1 + (30 / 100))
    if (tasks.value > 5) return baseSalary + 100

    return baseSalary
}

function showResult(bonusSalary) {
    bonusResult.innerHTML = bonusSalary
}

calcBtn.addEventListener('click', () => {
    const finalSalary = bonusCalculate()
    showResult(finalSalary)
})