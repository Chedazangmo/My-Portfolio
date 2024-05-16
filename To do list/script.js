// JavaScript code for the To-Do List functionality
document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("todo-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const taskStatus = document.getElementById("task-status");
    const historyButton = document.getElementById("history-button");
    const historySection = document.getElementById("history");
    const deletedTasksList = document.getElementById("deleted-tasks");
    const filterOptions = document.querySelectorAll('input[name="filter"]');

    let tasks = [];

    // Function to render tasks
    function renderTasks(filter) {
        taskList.innerHTML = ""; // Clear previous tasks
        tasks.forEach((task, index) => {
            if (filter === 'all' || (filter === 'active' && !task.completed) || (filter === 'completed' && task.completed)) {
                const taskItem = document.createElement("li");
                taskItem.innerHTML = `
                    <input type="checkbox" class="task-checkbox" id="task-${index}" ${task.completed ? 'checked' : ''}>
                    <label for="task-${index}" class="${task.completed ? 'completed' : ''}">${task.text}</label>
                    <button class="delete-btn" data-index="${index}">❌</button>
                `;
                taskList.appendChild(taskItem);

                // Add event listener to checkbox for task completion
                const checkbox = taskItem.querySelector(`#task-${index}`);
                checkbox.addEventListener('change', function() {
                    tasks[index].completed = this.checked;
                    renderTasks(filter);
                });

                // Add event listener to delete button
                const deleteButton = taskItem.querySelector('.delete-btn');
                deleteButton.addEventListener('click', function() {
                    deleteTask(index);
                });
            }
        });
        updateTaskStatus();
    }

    // Function to add new task
    function addTask(text) {
        tasks.push({ text, completed: false });
        renderTasks(getSelectedFilter());
    }

    // Function to delete task
    function deleteTask(index) {
        const deletedTask = tasks.splice(index, 1)[0];
        renderTasks(getSelectedFilter());
        showDeletedTask(deletedTask.text);
    }

    // Function to show deleted task in history
    function showDeletedTask(taskText) {
        const deletedTaskItem = document.createElement("li");
        deletedTaskItem.textContent = taskText;
        deletedTasksList.appendChild(deletedTaskItem);
    }

    // Event listener for form submission
    todoForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Clear input field
        }
    });

    // Event listener for history button click
    historyButton.addEventListener("click", function() {
        historySection.classList.toggle("hidden");
    });

    // Event listener for filter options
    filterOptions.forEach(option => {
        option.addEventListener('change', function() {
            renderTasks(getSelectedFilter());
        });
    });

    // Function to update task status
    function updateTaskStatus() {
        const completedTasks = tasks.filter(task => task.completed).length;
        const remainingTasks = tasks.length - completedTasks;
        taskStatus.textContent = `Completed Tasks: ${completedTasks}, Remaining Tasks: ${remainingTasks}`;
    }

    // Function to get the selected filter option
    function getSelectedFilter() {
        return document.querySelector('input[name="filter"]:checked').value;
    }

    // Initial rendering of tasks
    renderTasks(getSelectedFilter());
});
