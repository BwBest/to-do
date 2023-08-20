import { storage } from './saveSystem.js';
import { renderTaskBox } from './ui.js';
import {
  initalizeCategories,
  selectedCategory,
  selectedDate,
} from './index.js';

let projects = [];
let loaded = false;

function Project(projectName) {
  this.projectName = projectName;
  this.objects = [];
}

function Task(title, description, dueDate, priority, completed) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.completed = completed;
}

function firstTimeTest() {
  if (storage.isFirstTimeLoad() === false) return; // Skip if it's not first time loading
  // Create default project if it's the first time
  const defaultProject = new Project('Default Project');
  projects.push(defaultProject);

  loaded = true;

  // Create a example task
  createNewTask(
    'Default Project',
    'Awesome Task',
    'This is an example task for you to edit',
    '2023-08-20',
    'important',
    'false'
  );

  // Save the task and project
  storage.save(projects);

  console.log('LOADED FIRST TIME');
}

function createNewProject(projectName = 'Project Name') {
  const newProject = new Project(projectName);
  projects.push(newProject);
  saveAndRefresh();
  initalizeCategories();
}

function createNewTask(
  project,
  title,
  description,
  dueDate,
  priority,
  completed
) {
  if (loaded === false) {
    // Call the newtask function 1s later if the saves not loaded yet
    setTimeout(() => {
      createNewTask(project, title, description, dueDate, priority, completed);
    }, 1000);
    return;
  }
  const task = new Task(title, description, dueDate, priority, completed);
  // Find the project object
  let assignedProject;
  projects.forEach((element) => {
    if (element.projectName === project) {
      assignedProject = element;
    }
  });
  // Add task to project object if the 'project' input is available
  if (assignedProject !== null) {
    let test = assignedProject.objects.push(task);
    console.log(test);
  }
  // Save the task and projects
  storage.save(projects);
  // Refresh ui
  refreshUI();
}

function initalize() {
  loadTasks();
  firstTimeTest();
}

function loadTasks() {
  if (storage.isFirstTimeLoad() === true) return; // skip if it's the first time loading
  projects = storage.load();
  loaded = true;
  refreshUI();
}

function saveAndRefresh() {
  storage.save(projects);
  refreshUI();
}

function refreshUI() {
  document.querySelector('.task-view').innerHTML = '';

  // Render loaded tasks to page
  projects.forEach((project) => {
    // Filter by project
    if (filterByProject(selectedCategory, project.projectName)) {
      project.objects.forEach((task) => {
        //Filter by date
        if (filterByDate(selectedDate, task.dueDate)) {
          renderTaskBox(
            task.title,
            task.description,
            task.dueDate,
            task.priority,
            task,
            project
          );
        }
      });
    }
  });

  if (document.querySelector('.task-view').innerHTML == '') {
    emptyText();
  }
}

function filterByProject(selectedProject, projectName) {
  if (
    selectedProject.toLowerCase() == 'all' ||
    selectedProject.toLowerCase() == projectName.toLowerCase()
  ) {
    return true;
  }
}

function filterByDate(selectedType, taskDueDate) {
  let date = new Date();
  let selectedTypeLower = selectedType.toLowerCase();

  let taskDay = taskDueDate.substring(8, 10);
  let taskMonth = taskDueDate.substring(5, 7);
  let taskYear = taskDueDate.substring(0, 4);

  if (selectedTypeLower == 'all') {
    return true;
  }
  if (
    selectedTypeLower == 'today' &&
    date.getDate() == taskDay &&
    date.getMonth() + 1 == taskMonth &&
    date.getFullYear() == taskYear
  ) {
    return true;
  }
  if (
    selectedTypeLower == 'this week' &&
    date.getDate() - taskDay <= 7 &&
    date.getFullYear() == taskYear
  ) {
    return true;
  }
  if (
    selectedTypeLower == 'this month' &&
    date.getMonth() + 1 == taskMonth &&
    date.getFullYear() == taskYear
  ) {
    return true;
  }
}

function emptyText() {
  const div = document.createElement('div');
  div.classList.add('empty-text-div');

  const icon = document.createElement('i');
  icon.classList = 'fa-regular fa-face-frown fa-2xl';

  const p = document.createElement('p');
  p.classList.add('empty-text');
  p.textContent = 'Seems like there is no task here, start by adding one!';

  div.appendChild(icon);
  div.appendChild(p);
  document.querySelector('.task-view').appendChild(div);
}

export {
  initalize,
  createNewTask,
  createNewProject,
  refreshUI,
  saveAndRefresh,
  projects,
  loaded,
};
