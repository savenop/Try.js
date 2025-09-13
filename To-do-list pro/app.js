const addBtn = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const filters = document.querySelectorAll('.filter');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = `
    <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
    <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
    <button class="delete-btn" data-id="${task.id}">🗑️</button>
  `;
  return li;
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks
    .filter(task => {
      if (currentFilter === 'active') return !task.completed;
      if (currentFilter === 'completed') return task.completed;
      return true;
    })
    .forEach(task => {
      const taskElement = createTaskElement(task);
      taskList.appendChild(taskElement);
    });
}

addBtn.addEventListener('click', () => {
  const text = newTaskInput.value.trim();
  if (text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    newTaskInput.value = '';
  }
});

taskList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.dataset.id;
    tasks = tasks.filter(task => task.id != id);
    saveTasks();
    renderTasks();
  }
  if (e.target.tagName === 'INPUT') {
    const id = e.target.dataset.id;
    tasks = tasks.map(task => {
      if (task.id == id) task.completed = e.target.checked;
      return task;
    });
    saveTasks();
    renderTasks();
  }
});

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    filter.classList.add('active');
    currentFilter = filter.dataset.filter;
    renderTasks();
  });
});

document.addEventListener('DOMContentLoaded', renderTasks);
let dragSourceEl = null;

// Modify createTaskElement function:
function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.draggable = true;
  li.dataset.id = task.id;
  li.innerHTML = `
    <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
    <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
    <button class="delete-btn" data-id="${task.id}">🗑️</button>
  `;

  // Drag events
  li.addEventListener('dragstart', handleDragStart);
  li.addEventListener('dragover', handleDragOver);
  li.addEventListener('drop', handleDrop);
  li.addEventListener('dragend', handleDragEnd);

  // Double-click to edit
  li.querySelector('span').addEventListener('dblclick', () => handleEditTask(task.id));

  return li;
}

// Drag and Drop Handlers
function handleDragStart(e) {
  dragSourceEl = this;
  this.classList.add('dragging');
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  if (dragSourceEl !== this) {
    const fromId = dragSourceEl.dataset.id;
    const toId = this.dataset.id;

    const fromIndex = tasks.findIndex(task => task.id == fromId);
    const toIndex = tasks.findIndex(task => task.id == toId);

    const movedTask = tasks.splice(fromIndex, 1)[0];
    tasks.splice(toIndex, 0, movedTask);

    saveTasks();
    renderTasks();
  }
}

function handleDragEnd(e) {
  this.classList.remove('dragging');
}

// Edit Task
function handleEditTask(id) {
  const task = tasks.find(t => t.id == id);
  const newText = prompt('Edit your task:', task.text);
  if (newText !== null && newText.trim() !== '') {
    task.text = newText.trim();
    saveTasks();
    renderTasks();
  }
}
const themeToggleBtn = document.getElementById('theme-toggle');

// Check if theme preference is saved
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  themeToggleBtn.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
});
