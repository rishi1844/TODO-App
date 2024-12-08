const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const notificationBox = document.getElementById('notification-box');
const progressElement = document.getElementById('progress');
const numbersElement = document.getElementById('numbers');

let allTodos = JSON.parse(localStorage.getItem('allTodos')) || []; 

const saveTasks = () => {
    localStorage.setItem('allTodos', JSON.stringify(allTodos));
}

// Add event listener for form submission
todoForm.addEventListener('submit', function (e) {
    e.preventDefault(); 
    const todoText = todoInput.value.trim();
    if (todoText.length > 0) {
        allTodos.push({ text: todoText, completed: false });
        updateList();
        saveTasks();
        todoInput.value = ''; 
        showNotification('Todo added successfully!', 'success');
    } else {
        showNotification('Please enter a valid todo!', 'error');
    }
});

// Show notifications
function showNotification(message, type) {
    notificationBox.textContent = message;
    notificationBox.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
    notificationBox.classList.add('show');

    setTimeout(() => {
        notificationBox.classList.remove('show');
    }, 3000);
}

// Update the list with all todos
function updateList() {
    todoList.innerHTML = ""; 
    allTodos.forEach((todo, index) => {
        const todoItem = createTodoItem(todo, index);
        todoList.appendChild(todoItem);
    });
    updateStats();
    saveTasks();
}

function createTodoItem(todo, index) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    todoItem.innerHTML = `
        <input type="checkbox" id="todo-${index}" ${todo.completed ? 'checked' : ''} onclick="toggleComplete(${index})">
        <label class="custom-checkbox" for="todo-${index}">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
            </svg>
        </label>
        <span class="todo-text">${todo.text}</span>
        <button class="edit" onclick="editTodo(${index})">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4A4D57">
                <path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
        </button>
        <button class="delete-button" onclick="deleteTodo(${index})">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4A4D57">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
            </svg>
        </button>
    `;
    return todoItem;
}

// Toggle the completion status of a todo
function toggleComplete(index) {
    allTodos[index].completed = !allTodos[index].completed;
    updateStats();
    updateList();
    saveTasks();
}

// Update progress and stats
function updateStats() {
    const completedTodos = allTodos.filter(todo => todo.completed).length;
    const totalTodos = allTodos.length;
    const progress = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;

    progressElement.style.width = `${progress}%`;
    numbersElement.textContent = `${completedTodos} / ${totalTodos}`;

    if(allTodos.length && completedTodos == totalTodos){
        blask();
    }
}

// Edit a todo
function editTodo(index) {
    todoInput.value = allTodos[index].text; 
    allTodos.splice(index, 1); 
    updateList();
    saveTasks();
}

function deleteTodo(index) {
    const deletedTodo = allTodos[index].text;
    allTodos.splice(index, 1);
    updateList();
    saveTasks();
    showNotification(`Deleted: "${deletedTodo}"`, 'error');
}

updateList();

const blask = () => {
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}