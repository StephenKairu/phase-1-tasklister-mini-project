document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById("new-task-description");
  const output = document.getElementById("tasks");

  document.getElementById("create-task").addEventListener("click", (event) => {
    event.preventDefault()
    const list = document.createElement("li")
    list.innerHTML = input.value
    output.appendChild(list)
  })
});