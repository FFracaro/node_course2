const field = document.querySelector(".input-task");
const fieldButton = document.querySelector(".btn-task");
const tasks = document.querySelector(".tasks");

console.log(field, fieldButton, tasks);

field.addEventListener("keypress", (e) => {
    if(e.keyCode === 13){
        if(!field.value) return;  

        createTask(field.value); 
    }
})

fieldButton.addEventListener("click", (e) => {
    if(!field.value) return;

    createTask(field.value);
})

const clearInput = () => {
    field.value = "";

    field.focus();
}

const createTask = (text) => {
    const li = createElement('li');

    li.innerText = text;

    createButtonDelete(li);

    tasks.appendChild(li);

    clearInput();

    saveTasks();
}

const createElement = (element) => {
    return document.createElement(element);
}

const createButtonDelete = (li) => {
    li.innerText += " ";

    const b = createElement('button');

    //b.className = "btn-delete";
    b.setAttribute('class', 'btn-delete');

    b.setAttribute('title', 'Delete this task.');

    b.innerText = "Delete"

    li.appendChild(b);
}

document.addEventListener("click", (e) => {
    const elementClicked = e.target;
    if(elementClicked.classList.contains('btn-delete'))
    {
        elementClicked.parentElement.remove(); 
        saveTasks();
    }
})

const saveTasks = () => {
    const allTasks = tasks.querySelectorAll("li");
    const taskList = [];
    let taskText;

    for(let task of allTasks)
    {
        taskText = task.innerText;
        taskText = taskText.replace('Delete', '').trim();
        taskList.push(taskText);
    }

    const tasksJSON = JSON.stringify(taskList);

    localStorage.setItem('tasks', tasksJSON);
}

const addSavedTasks = () => {
    const taskList = JSON.parse(localStorage.getItem('tasks'));

    for(let task of taskList)
    {
        createTask(task);
    }
}

addSavedTasks();