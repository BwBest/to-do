function renderTaskBox() {
  const taskBoxDiv = document.createElement('div');
  taskBoxDiv.classList.add('task-box');

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

  const priority = document.createElement('div');
  priority.classList.add('priority', 'hidden');

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

  rightDiv.appendChild(priority);
  rightDiv.appendChild(claendarIcon);
  rightDiv.appendChild(dateText);
  rightDiv.appendChild(seeMore);

  taskBoxDiv.appendChild(leftDiv);
  taskBoxDiv.appendChild(rightDiv);
}

/* <div class="task-box task-box-extended">
<div class="flex">
    <input type="checkbox" class="checkbox">
    <div>
        <h2 id="task-title">Example Task</h2>
        <p class="task-desc">In a sleek spaceship, a daring crew embarks on a cosmic odyssey, venturing into distant galaxies to unveil the universe's enigmatic secrets.</p>
    </div>
</div>

<div class="flex flex-align-center">
    <div class="priority">High priority</div>
    <i class="fa-solid fa-calendar-days" style="color: #2E2E2E"></i>
    <p id="task-date">22.07.2023</p>
    <div class="see-more">
        <i class="fa-solid fa-chevron-down"></i>
        <i class="fa-regular fa-pen-to-square hidden"></i>
    </div>
</div>
</div> */
