// All your DOM manipulation must happen here.
// You will create and inject all elements into <main id="root"> using JavaScript only.
document.body.style.backgroundColor = '#D2D0A0';
const root = document.getElementById('root');
root.style.cssText = `
bx-sizing: border-box;
width: 100%;
`;
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
    border: 2px solid #626F47;
    height: 80vh;
    max-height: 100vh;
    width: 500px ;
    margin: 50px auto;
`;

const label = document.createElement('label');
label.textContent = 'All Task List : ';
label.style.cssText = `
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    color: #626F47;
`;

const input = document.createElement('input');
input.type = 'text';
input.style.cssText = `
    width: 60%;
    height:20px;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 2px solid #626F47;
`;

const button = document.createElement('button');
button.textContent = 'ADD TASK';
button.style.cssText = `
    padding: 10px 15px;
    font-size: 11px;
    background-color: #90C67C;
    color: white;
    border: 2px solid #626F47;
    border-radius: 4px;
    cursor: pointer;
    width: 30%;
    height: 40px;

    @media (max-width: 600px) {
    font-size: 10px;
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
    flex-direction: row;
    align-items: center;

    `;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.cssText = `
        accent-color: #626F47;
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

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.style.cssText = `
        padding: 5px 10px;
        font-size: 14px;
        background-color: #889E73;
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
        background-color: #90C67C;
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
        background-color: #889E73;
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
        background-color: #889E73;
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
        background-color: #90C67C;
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

function myFunction(x){
    if(x.matches){
        todolist.style.width = '70%';
        todolist.style.height = 'auto';
        todolist.style.fontSize = '12px';
    }else{
        todolist.style.width = '500px';
        todolist.style.height = '80vh';
        todolist.style.margin = '50px auto';
    }
}

    var x = window.matchMedia("(max-width: 600px)");

    myFunction(x);

    x.addEventListener("change", function(){
        myFunction(x);
    });
