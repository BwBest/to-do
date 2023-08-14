function renderTaskBox(
  title = 'Task Title',
  desc = 'Task Desc',
  date = 'Task date',
  priority = ''
) {
  const taskBoxDiv = document.createElement('div');
  taskBoxDiv.classList.add('task-box');
  taskBoxDiv.addEventListener('click', toogleExtended);

  const leftDiv = document.createElement('div');
  leftDiv.classList.add('flex');

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');

  const leftInnerDiv = document.createElement('div');
  const taskTitle = document.createElement('h2');
  const taskDesc = document.createElement('p');

  leftInnerDiv.appendChild(taskTitle);
  leftInnerDiv.appendChild(taskDesc);

  leftDiv.appendChild(checkBox);
  leftDiv.appendChild(leftInnerDiv);

  const rightDiv = document.createElement('div');
  rightDiv.classList.add('flex', 'flex-align-center');

  const priorityEl = document.createElement('div');
  priorityEl.classList.add('priority', 'hidden');

  const claendarIcon = document.createElement('i');
  claendarIcon.classList.add('fa-solid', 'fa-calendar-days');
  claendarIcon.style.color = '#2E2E2E';

  const dateText = document.createElement('p');
  dateText.classList.add('task-date');

  const seeMore = document.createElement('div');
  seeMore.classList.add('see-more');

  const expandButton = document.createElement('i');
  expandButton.classList.add('fa-solid', 'fa-chevron-down');

  const editButton = document.createElement('i');
  editButton.classList.add('fa-regular', 'fa-pen-to-square', 'hidden');

  seeMore.appendChild(expandButton);
  seeMore.appendChild(editButton);

  rightDiv.appendChild(priorityEl);
  rightDiv.appendChild(claendarIcon);
  rightDiv.appendChild(dateText);
  rightDiv.appendChild(seeMore);

  taskBoxDiv.appendChild(leftDiv);
  taskBoxDiv.appendChild(rightDiv);

  // Set values
  taskTitle.textContent = title;
  taskDesc.textContent = desc;
  priorityEl.textContent = priority;
  dateText.textContent = date;

  const taskView = document.querySelector('.task-view');

  taskView.appendChild(taskBoxDiv);
  console.log('BASTIK');
}

function toogleExtended(e) {
  e.stopPropagation();
  console.log('HELLO FROM I', e.target, this);
  if (
    e.target.classList.contains('task-box') ||
    e.target.classList.contains('fa-chevron-down')
  ) {
    this.classList.toggle('task-box-extended');
  }
}

function renderAddTaskModal(projectList) {
  // Modal
  const addTaskDiv = document.createElement('div');
  addTaskDiv.classList.add('modal');

  // Modal header
  const modalTitle = document.createElement('h2');
  modalTitle.textContent = 'Add Task';

  // Input div
  const inputDiv = document.createElement('div');
  inputDiv.classList.add('input-div');

  // Title input
  const titleDiv = document.createElement('div');
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'title-input';
  titleInput.placeholder = 'Add a title';
  titleDiv.appendChild(titleLabel);
  titleDiv.appendChild(titleInput);

  // Description input
  const descriptionDiv = document.createElement('div');
  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description';
  const descriptionInput = document.createElement('input');
  descriptionInput.type = 'text';
  descriptionInput.id = 'description-input';
  descriptionInput.placeholder = 'Add a description';
  descriptionDiv.appendChild(descriptionLabel);
  descriptionDiv.appendChild(descriptionInput);

  // Date input
  const dateDiv = document.createElement('div');
  const dateLabel = document.createElement('label');
  dateLabel.textContent = 'Due Date';
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.id = 'date-input';
  dateInput.placeholder = 'dd/mm/yyyy';
  dateDiv.appendChild(dateLabel);
  dateDiv.appendChild(dateInput);

  // Priority input
  const priorityDiv = document.createElement('div');
  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority';
  const priorityInput = document.createElement('select');
  priorityInput.id = 'priority-input';
  const lowP = document.createElement('option');
  lowP.value = 'low';
  lowP.textContent = 'Low';

  const medP = document.createElement('option');
  medP.value = 'medium';
  medP.textContent = 'Medium';

  const higP = document.createElement('option');
  higP.value = 'high';
  higP.textContent = 'High';

  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);
  priorityInput.appendChild(lowP);
  priorityInput.appendChild(medP);
  priorityInput.appendChild(higP);

  // Project input
  const projectDiv = document.createElement('div');
  const projectLabel = document.createElement('label');
  projectLabel.textContent = 'Project';
  const projectInput = document.createElement('select');
  projectInput.id = 'priority-input';

  projectDiv.appendChild(projectLabel);
  projectDiv.appendChild(projectInput);

  // Loop through projects and get project names, make them an option
  if (projectList != '') {
    projectList.forEach((project) => {
      const pName = project.projectName;
      const element = document.createElement('option');
      element.value = pName;
      element.text = pName;
      projectInput.appendChild(element);
    });
  }

  // Append all the inputs to inputDiv
  inputDiv.appendChild(titleDiv);
  inputDiv.appendChild(descriptionDiv);
  inputDiv.appendChild(dateDiv);
  inputDiv.appendChild(priorityDiv);
  inputDiv.appendChild(projectDiv);

  // Buttons
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons-div');

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.classList.add('btn-secondary');

  const addTaskBtn = document.createElement('button');
  addTaskBtn.id = 'confirm-add-task';
  addTaskBtn.classList.add('btn');
  addTaskBtn.textContent = 'Confirm';

  addTaskBtn.style.display = 'flex';
  addTaskBtn.style.flexDirection = 'row-reverse';
  addTaskBtn.style.alignItems = 'center';
  addTaskBtn.style.justifyContent = 'space-between';

  const addIcon = document.createElement('i');
  addIcon.classList = 'fa-solid fa-plus';
  addIcon.style.color = '#fff';

  addTaskBtn.appendChild(addIcon);

  buttonsDiv.appendChild(cancelBtn);
  buttonsDiv.appendChild(addTaskBtn);

  // Append childs to modal
  addTaskDiv.appendChild(modalTitle);
  addTaskDiv.appendChild(inputDiv);
  addTaskDiv.appendChild(buttonsDiv);

  document.body.appendChild(addTaskDiv);
}

export { renderTaskBox, renderAddTaskModal };
