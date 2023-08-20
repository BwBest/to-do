import { editTask } from './editTask.js';
import { saveAndRefresh } from './projects.js';

function renderTaskBox(
  title = 'Task Title',
  desc = 'Task Desc',
  date = 'Task date',
  priority = '',
  objectReference,
  projectReference
) {
  const taskBoxDiv = document.createElement('div');
  taskBoxDiv.classList.add('task-box');
  taskBoxDiv.addEventListener('click', toogleExtended);

  const leftDiv = document.createElement('div');
  leftDiv.classList.add('flex');

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  if (objectReference.completed == true) {
    checkBox.checked = true;
    taskBoxDiv.classList.add('task-done');
  }
  checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
      taskBoxDiv.classList.add('task-done');
      objectReference.completed = true;
      saveAndRefresh();
    } else {
      taskBoxDiv.classList.remove('task-done');
      objectReference.completed = false;
      saveAndRefresh();
    }
  });

  const leftInnerDiv = document.createElement('div');
  const taskTitle = document.createElement('h2');
  const taskDesc = document.createElement('p');

  leftInnerDiv.classList.add('task-desc');

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
  editButton.addEventListener('click', () => {
    editTask(objectReference, projectReference);
  });

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

  if (priority == 'important') {
    priorityEl.classList.remove('hidden');
    priorityEl.style.textTransform = 'capitalize';
  }

  const taskView = document.querySelector('.task-view');
  taskView.appendChild(taskBoxDiv);
}

function MessageBox() {
  this.msgDiv = document.querySelector('.msg-div');
  this.msgIcon = document.querySelector('.msg-icon');
  this.msgText = document.querySelector('.msg-msg');
  this.error = function (text) {
    if (this.timerRef != undefined) {
      clearTimeout(this.timerRef);
      this.timerRef = undefined;
    }

    this.msgDiv.classList = 'msg-div error';
    this.msgIcon.classList = 'msg-icon fa-solid fa-circle-exclamation fa-lg';
    this.msgText.classList = 'msg-msg error';
    this.msgText.textContent = text;
    this.clearTimer();
  };

  this.success = function (text) {
    if (this.timerRef != undefined) {
      clearTimeout(this.timerRef);
      this.timerRef = undefined;
    }

    this.msgDiv.classList = 'msg-div success';
    this.msgIcon.classList = 'msg-icon fa-solid fa-circle-check fa-lg';
    this.msgText.classList = 'msg-msg success';
    this.msgText.textContent = text;
    this.clearTimer();
  };

  this.timerRef = undefined;

  this.clearTimer = function () {
    this.timerRef = setTimeout(() => {
      // Slideout animation
      this.msgDiv.classList.add('msg-div-out');
      // Add hidden class and clear msg after animation finishes
      setTimeout(() => {
        this.msgDiv.classList.add('hidden');
        this.msgText.textContent = '';
      }, 400);
    }, 2500);
  };
}

const renderMessage = new MessageBox();

function toogleExtended(e) {
  e.stopPropagation();
  if (
    e.target.classList.contains('task-box') ||
    e.target.classList.contains('fa-chevron-down')
  ) {
    this.classList.toggle('task-box-extended');
    this.querySelector('.fa-chevron-down').classList.toggle('fa-rotate-180');
    this.querySelector('.fa-pen-to-square').classList.toggle('hidden');
  }
}

function removeModal() {
  document.querySelector('.modal').remove();
}

export { renderTaskBox, removeModal, renderMessage };
