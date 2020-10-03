const add_element = (task) => {
  // Push Task Item To Tasks Table
  tasks.push(task);
};
const show_elements = () => {
  // Push Tasks To Document
  const tasks_dom = document.querySelector("#tasks > tbody");
  tasks_dom.innerHTML = "";
  tasks.forEach((value) => {
    tasks_dom.append(create_element(value));
  });
};
const remove_element = function (id) {
  let index = -1;
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i]._id === id) {
      index = i;
      break;
    }
  }
  tasks.splice(index, 1);
  show_elements();
};
const modify_element = function (id) {
  // Get index of the Task Object
  let index = -1;
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i]._id == id) {
      index = i;
      break;
    }
  }
  // Fill The Inputs
  task_title.value = tasks[index]._title;
  task_body.value = tasks[index]._body;
  // Update The Object
  btn_done_task.removeAttribute("hidden");
  get_task(tasks[index]);
  // Show Tasks
  show_elements();
};
const create_element = (task) => {
  // Create Task Item
  const task_item = document.createElement("tr");
  task_item.classList.add("task-item");

  // Create Title Task Item
  const task_title = document.createElement("td");
  task_title.innerText = task._title;
  task_item.classList.add("task-title");

  // Create Body Task Item
  const task_body = document.createElement("td");
  task_body.innerText = task._body;
  task_body.classList.add("task-body");

  // Create Completed Checkbox
  const task_completed = document.createElement("td");
  task_completed.classList.add("task-completed");
  const task_completed_btn = document.createElement("input");
  task_completed_btn.setAttribute("type", "checkbox");
  task_completed_btn.addEventListener("change", () => {
    if (task_completed_btn.checked) {
      task._completed = true;
      task_item.style.backgroundColor = "#e91e63e0";
    } else {
      task._completed = false;
      task_item.style.backgroundColor = "";
    }
    // console.log(tasks);
  });
  task_completed.append(task_completed_btn);

  // Create Supprimer Button Item
  const task_supprimer = document.createElement("td");
  task_supprimer.classList.add("task-remove");
  const btn_supprimer = document.createElement("button");
  btn_supprimer.innerText = "Supprimer";
  btn_supprimer.classList.add('btn');
  btn_supprimer.classList.add('btn-yellow');
  btn_supprimer.onclick = function () {
    remove_element(task._id);
  };
  task_supprimer.append(btn_supprimer);

  // Create Modify Button Item
  const task_modify = document.createElement("td");
  task_modify.classList.add("task-modify");
  const btn_modify = document.createElement("button");
  btn_modify.innerText = "Modifier";
  btn_modify.classList.add('btn');
  btn_modify.classList.add('btn-yellow');
  btn_modify.onclick = function () {
    // console.log('Not Implemented Yet!');
    modify_element(task._id);
  };
  task_modify.append(btn_modify);

  // Completed Tasks
  if (task._completed) {
    task_item.style.backgroundColor = "#e91e63e0";
    task_completed_btn.checked = true;
  } else {
    task_item.style.backgroundColor = "";
  }
  // Build Task Item
  task_item.append(task_title);
  task_item.append(task_body);
  task_item.append(task_completed);
  task_item.append(task_modify);
  task_item.append(task_supprimer);

  return task_item;
};
