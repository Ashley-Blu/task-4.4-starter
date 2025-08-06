// All your DOM manipulation must happen here.
// You will create and inject all elements into <main id="root"> using JavaScript only.
document.body.style.backgroundColor = '#B2B0E8';
const root = document.getElementById('root');
const todolist = document.createElement('div');
todolist.style.cssText = `
    display: grid;
    grid-template-columns: 1fr;
    line-height: 40px;
    font-family: Arial, sans-serif;
    gap: 20px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    border: 2px solid #7A85C1;
    height: 80vh;
    max-height: 100vh;
    width: 50%;
    margin: 50px auto;
`;



const label = document.createElement('label');
label.textContent = 'All Task List : ';
label.style.cssText = `
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    color: #1A2A80;
`;

const input = document.createElement('input');
input.type = 'text';
input.style.cssText = `
    width: 60%;
    height:20px;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 2px solid #C5B0CD;
`;

const button = document.createElement('button');
button.textContent = 'ADD TASK';
button.style.cssText = `
    padding: 10px 15px;
    font-size: 16px;
    background-color: #C5B0CD;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 30%;
    height: 40px;
`;

const submit = document.createElement('div')
submit.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

submit.appendChild(input);
submit.appendChild(button);

const ul = document.createElement('ul');
ul.style.cssText = `
    list-style: none;
    padding: 0;
    margin: 0;
    overflow-y: auto;
    max-height: 60vh;
`;
const counter = document.createElement('div');
const taskCounter = document.createElement('div');
const doneTasks = document.createElement('div');
const deteledTasks = document.createElement('div');

const countersWrapper = document.createElement('div');
countersWrapper.style.cssText = `
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 20px;
    flex-wrap: wrap;
    width: 100%;
`;

countersWrapper.appendChild(taskCounter);
countersWrapper.appendChild(doneTasks);
countersWrapper.appendChild(deteledTasks);
countersWrapper.appendChild(counter);

root.appendChild(todolist);
todolist.appendChild(label);
// todolist.appendChild(input);
// todolist.appendChild(button);
todolist.appendChild(submit);
todolist.appendChild(ul);
todolist.appendChild(countersWrapper);


function createTask(taskText) {
    const li = document.createElement('li');
    li.style.listStyle = 'none'
    li.style.cssText=`
    display: flex;
    flex-direxrtion: row;
    justify-content: space-between;
    gap: 10px;
    `;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.cssText = `
        accent-color: #B2B0E8;
    `;

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through';
            span.style.color = 'gray';
        } else {
            span.style.textDecoration = '';
            span.style.color = '';
        }
        updateCounter();
        addCounter();
        doneTasksCounter();
        deteledTasksCounter();
    });

    const span = document.createElement('span');
    span.textContent = taskText;
    span.style.margin = '10px 70px';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.style.cssText = `
        padding: 5px 10px;
        font-size: 14px;
        background-color: #7A85C1;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 10px;
    `;
    deleteButton.addEventListener('click', () => {
        ul.removeChild(li);
        deteledCount++;
        updateCounter();
        addCounter();
        doneTasksCounter();
        deteledTasksCounter();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

function addCounter(){
    const totalTasks = ul.querySelectorAll('li').length;
    taskCounter.textContent = `Total Tasks: ${totalTasks}`;
    taskCounter.style.cssText = `
        background-color: #7A85C1;
        color: white;
        padding: 10px 15px;
        width: 30%;
        border-radius: 10px ;
        `;
}

function doneTasksCounter() {
    const completedTasks = ul.querySelectorAll('li input[type="checkbox"]:checked').length;
    doneTasks.textContent = `Completed: ${completedTasks}`;
    doneTasks.style.cssText = `
        background-color: #C5B0CD;
        color: white;
        padding: 10px 15px;
        width: 30%;
        border-radius: 10px ;
    `;
}

let deteledCount = 0;
function deteledTasksCounter() {
    deteledTasks.textContent = `Deleted: ${deteledCount}`;
    deteledTasks.style.cssText = `
        background-color: #C5B0CD;
        color: white;
        padding: 10px 15px;
        width: 30%;
        border-radius: 10px ;
    `;
}

function updateCounter() {
    const remaining = ul.querySelectorAll('li input[type="checkbox"]:not(:checked)').length;
    counter.textContent = `Remaining: ${remaining}`;
    counter.style.cssText =`
        background-color: #7A85C1;
        color: white;
        padding: 10px 15px;
        width: 30%;
        border-radius: 10px ;
    `;
}

button.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText !== '') {
        const li = createTask(taskText);
        ul.appendChild(li);
        input.value = '';
        updateCounter();
        addCounter();
        doneTasksCounter();
        deteledTasksCounter();
    } else {
        alert('please enter a task');
    }
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') button.click();
});

updateCounter();
addCounter();
doneTasksCounter();
deteledTasksCounter();