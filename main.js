const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// add event listener
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

function addToDo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //   complete button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "<i class = 'fas fa-check'>";
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  //   trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class = 'fas fa-trash'>";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //   append to the list
  todoList.appendChild(todoDiv);
  // clear the todo input value
  todoInput.value = "";
}
// function to delete an input
function deleteCheck(e) {
  const item = e.target;
  // delete the todo input
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // checkmark area
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e){
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
