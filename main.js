document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const clearButton = document.getElementById('clearButton');
    const removeCompletedButton = document.getElementById('removeCompletedButton');
    const taskList = document.getElementById('taskList');

    // Add a new task
    addButton.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox">
                <span>${taskValue}</span>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    // Clear all tasks
    clearButton.addEventListener('click', () => {
        taskList.innerHTML = '';
    });

    // Remove completed tasks
    removeCompletedButton.addEventListener('click', () => {
        const tasks = taskList.querySelectorAll('li');
        tasks.forEach(task => {
            if (task.querySelector('input').checked) {
                taskList.removeChild(task);
            }
        });
    });

    // Toggle task completion
    taskList.addEventListener('change', (event) => {
        if (event.target.type === 'checkbox') {
            const li = event.target.parentElement;
            li.classList.toggle('completed');
        }
    });
});
