const addButton = document.querySelector(".js-add-task-button");
addButton.addEventListener("click", () => {
    const taskInputElement = document.querySelector(".js-task-input");
    const task = taskInputElement.value;
    if (task.trim()) {
        addTask(task);
        taskInputElement.value = ''; // Clear the input after adding
    }
});

function addTask(todo) {
    const taskList = document.querySelector(".js-task-list");
    const taskElement = document.createElement('div');
    taskElement.classList.add('task-container');
    taskElement.innerHTML = `
        <span class="taskName">${todo}</span>
        <button class="delete-button js-delete-button">Delete</button>
 
    `;
    taskList.appendChild(taskElement);

    // Add event listener to the new delete button
    const deleteButton = taskElement.querySelector('.js-delete-button');
    deleteButton.addEventListener('click', deleteTask);
}

function deleteTask(event) {
    const taskElement = event.target.closest(".task-container");
    if (taskElement) {
        taskElement.remove();
    }
    event.stopPropagation(); // Prevent the event from bubbling up
}

// Initial setup for existing delete buttons
document.querySelectorAll(".js-delete-button").forEach(button => {
    button.addEventListener("click", deleteTask);
});