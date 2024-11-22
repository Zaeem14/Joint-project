const addButton = document.querySelector(".js-add-task-button");
addButton.addEventListener("click", () => {
    const taskInputElement = document.querySelector(".js-task-input");
    const task = taskInputElement.value;
    const html = `
        <div>${task}</div>
    `

    document.querySelector(".js-task-list").innerHTML += html;
})