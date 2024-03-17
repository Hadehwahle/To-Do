const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addToDo);
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
}
