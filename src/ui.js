import { saveAndRefresh } from './projects.js';
import { editTask } from './editTask.js';

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
  editButton.addEventListener('click', () => {
    editTask(objectReference, projectReference);
  });
  editButton.addEventListener('dblclick', () => {
    console.log(' DOUBLE CLCICKED ');

    projectReference.objects.splice(
      projectReference.objects.indexOf(objectReference),
      1
    );
    saveAndRefresh();
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

  const taskView = document.querySelector('.task-view');

  taskView.appendChild(taskBoxDiv);
  console.log('BASTIK');
}

const renderMessage = (() => {
  const msgDiv = document.querySelector('.msg-div');
  const msgIcon = document.querySelector('.msg-icon');
  const msgText = document.querySelector('.msg-msg');
  const error = (text) => {
    msgDiv.classList = 'msg-div error';
    msgIcon.classList = 'msg-icon fa-solid fa-circle-exclamation fa-lg';
    msgText.classList = 'msg-msg error';
    msgText.textContent = text;
    clearTimer();
  };

  const success = (text) => {
    msgDiv.classList = 'msg-div success';
    msgIcon.classList = 'msg-icon fa-solid fa-circle-check fa-lg';
    msgText.classList = 'msg-msg success';
    msgDiv.classList.add('msg-div-out');
    msgText.textContent = text;
  };

  const clearTimer = () => {
    setTimeout(() => {
      // Slideout animation
      msgDiv.classList.add('msg-div-out');
      // Add hidden class and clear msg after animation finishes
      setTimeout(() => {
        msgDiv.classList.add('hidden');
        msgText.textContent = '';
      }, 400);
    }, 4000);
  };

  return { error, success };
})();

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

function removeModal() {
  document.querySelector('.modal').remove();
}

renderMessage.error('EBÊN');

export { renderTaskBox, removeModal };
