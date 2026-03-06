const input = document.getElementById("todoInput");
const saveBtn = document.getElementById("saveBtn");
const todoList = document.getElementById("todoList");

// Load todos when page loads
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function displayTodos() {
  todoList.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  });
}

displayTodos();

// Save new todo
saveBtn.addEventListener("click", () => {
  const todoText = input.value;

  if (todoText.trim() === "") return;

  todos.push(todoText);

  localStorage.setItem("todos", JSON.stringify(todos));

  input.value = "";

  displayTodos();
});