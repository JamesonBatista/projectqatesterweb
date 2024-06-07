document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskTitle = document.getElementById('taskTitle');
    const taskDescription = document.getElementById('taskDescription');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        createTask(taskTitle.value, taskDescription.value);
        taskForm.reset();
    });

    function createTask(title, description) {
        const task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `
            <h4>${title}</h4>
            <p>${description}</p>
            <select onchange="moveTask(this)">
                <option value="backlog">Backlog</option>
                <option value="in-development">In Development</option>
                <option value="developed">Developed</option>
                <option value="in-test">In Test</option>
                <option value="deploy">Deploy</option>
                <option value="in-production">In Production</option>
            </select>
        `;
        document.getElementById('backlog-tasks').appendChild(task);
    }

    window.moveTask = function (selectElement) {
        const task = selectElement.parentElement;
        const status = selectElement.value;
        if (status === "close") {
            task.remove();
        } else {
            document.getElementById(`${status}-tasks`).appendChild(task);
        }
    };
});
