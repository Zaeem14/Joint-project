const addButton = document.querySelector(".js-add-task-button");
addButton.addEventListener("click", () => {
    const taskInput = document.querySelector(".js-task-input");
    const taskList = document.querySelector(".js-task-list");
    const task = taskInput.value;
    const html = `
        <div class="js-task">${task}</div>
    `
    
})