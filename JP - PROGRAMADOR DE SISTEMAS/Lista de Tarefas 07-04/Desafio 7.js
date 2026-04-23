const taskText = document.getElementById('taskText')
const addTaskBtn = document.getElementById('btn-task')
const taskList = document.getElementById('taskList')

const removeTaskButton = document.createElement('button')

function addTask() {
    
    
    const removeTaskButton = document.createElement('button')
    const addParagrafer = document.createElement('p')

    if(taskText.value == 0){
        return
    }
    
    removeTaskButton.addEventListener('click', function () {
        addParagrafer.remove()
    })

    removeTaskButton.innerText = `Excluir`
    addParagrafer.innerText = taskText.value

    addParagrafer.appendChild(removeTaskButton)
    taskList.appendChild(addParagrafer)

    taskText.value = ""
}

addTaskBtn.addEventListener('click', addTask)
taskText.addEventListener('keydown', function(event){
    if(event.key === 'Enter') {
        addTaskBtn.click()
    }
})