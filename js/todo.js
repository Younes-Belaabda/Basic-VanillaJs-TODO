const task_title = document.querySelector("#task_title");
const task_body = document.querySelector("#task_body");
const btn_add_task = document.querySelector("#btn_add_task");
const btn_done_task = document.querySelector("#btn_done_task");

btn_add_task.addEventListener("click", () => {
  // Create Task Object
  const task = new Task(task_title.value, task_body.value, false);

  // Append Task Element To Tasks Table
  add_element(task);
  show_elements();
});

const confirm_update = function (task) {
  task._title = task_title.value;
  task._body = task_body.value;
};

btn_done_task.addEventListener("click", () => {
  confirm_update(temp_task);
  show_elements();
});
