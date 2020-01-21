// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = docuemnt.querySelector('.clear-tasks');
const taskInput = documtnt.querySelector('#task');

// Load all event listeners
loadEventListners();

// Loas all event listeners
function loadEventListners(){
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn = document.querySelector('click', clearTask);
}

// Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task')
    }

    // Create li element
    const li = document.createElement('li');   
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Creat new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content'

    






}

