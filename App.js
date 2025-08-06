// All your DOM manipulation must happen here.
// You will create and inject all elements into <main id="root"> using JavaScript only.
const root = document.getElementById('root');
root.style.width = '50%';
root.style.height = '100%';
root.style.display = 'flex';
root.style.flexDirection = 'column';
root.style.justifyContent = 'center';
root.style.alignItems = 'center';
root.style.backgroundColor = '#f0f0f0';
root.style.lineHeight = '40px';
root.style.fontFamily = 'Arial, sans-serif';
root.style.gap = "20px";
root.style.padding = '20px'; 

const label = document.createElement('label');
label.textContent = 'Task: ';
label.style.cssText = `
    ont-size: 20px;
    font-weight: bold;
    text-align: center;
`;

const input = document.createElement('input');
input.type = 'text';
input.style.cssText = `
    width: 60%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const button = document.createElement('button');
button.textContent = 'ADD TASK';
button.style.cssText = `
    padding: 10px 15px;
    font-size: 16px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 30%;
`;

const ul = document.createElement('ul');
const counter = document.createElement('div');
counter.style.marginTop = '1em';

root.appendChild(label);
root.appendChild(input);
root.appendChild(button);
root.appendChild(ul);
root.appendChild(counter);

function updateCounter() {
    const remaining = ul.querySelectorAll('li input[type="checkbox"]:not(:checked)').length;
    counter.textContent = `Tasks remaining: ${remaining}`;
}

function createTask(taskText) {
    const li = document.createElement('li');
    li.style.listStyle = 'none'

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through';
            span.style.color = 'gray';
        } else {
            span.style.textDecoration = '';
            span.style.color = '';
        }
        updateCounter();
    });

    const span = document.createElement('span');
    span.textContent = taskText;
    span.style.margin = '10px 70px';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', () => {
        ul.removeChild(li);
        updateCounter();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

button.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText !== '') {
        const li = createTask(taskText);
        ul.appendChild(li);
        input.value = '';
        updateCounter();
    } else {
        alert('please enter a task');
    }
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') button.click();
});

updateCounter();