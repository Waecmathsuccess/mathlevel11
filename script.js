// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
    `;

    // Add functionality to mark as completed
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Add functionality to delete task
    li.querySelector(".delete").addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent marking as completed
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input field
}

// Add event listener to add task button
addTaskButton.addEventListener("click", addTask);

// Add task on pressing Enter key
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
