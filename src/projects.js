import { storage } from './saveSystem.js';
import { renderAddTaskModal, renderTaskBox } from './ui.js';
import { initalizeCategories, selectedCategory } from './index.js';

let projects = [];
let loaded = false;

function Project(projectName) {
  this.projectName = projectName;
  this.objects = [];
}

function Task(title, description, dueDate, priority, notes) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
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
    'Başlık',
    'Deneme açıklaması',
    '2bdone',
    'high',
    'Gelirse ekime'
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

function createNewTask(project, title, description, dueDate, priority, notes) {
  if (loaded === false) {
    // Call the newtask function 1s later if the saves not loaded yet
    setTimeout(() => {
      createNewTask(project, title, description, dueDate, priority, notes);
    }, 1000);
    return;
  }
  const task = new Task(title, description, dueDate, priority, notes);
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
  // Render the task
  renderTaskBox(title, description, dueDate, priority, task, assignedProject);
}

function initalize() {
  loadTasks();
  firstTimeTest();
}

function loadTasks() {
  if (storage.isFirstTimeLoad() === true) return; // skip if it's the first time loading
  projects = storage.load();
  loaded = true;

  // Render loaded tasks to page
  projects.forEach((project) => {
    if (
      selectedCategory.toLowerCase() == 'all' ||
      selectedCategory.toLowerCase() == project.projectName.toLowerCase()
    ) {
      project.objects.forEach((task) => {
        renderTaskBox(
          task.title,
          task.description,
          task.dueDate,
          task.priority,
          task,
          project
        );
      });
    }
  });
}

function addTaskMode() {
  if (loaded == false) {
    return;
  }
  renderAddTaskModal(projects);
}

function saveAndRefresh() {
  storage.save(projects);

  document.querySelector('.task-view').innerHTML = '';

  // Render loaded tasks to page
  projects.forEach((project) => {
    if (
      selectedCategory.toLowerCase() == 'all' ||
      selectedCategory.toLowerCase() == project.projectName.toLowerCase()
    ) {
      project.objects.forEach((task) => {
        renderTaskBox(
          task.title,
          task.description,
          task.dueDate,
          task.priority,
          task,
          project
        );
      });
    }
  });
}

// Event listeners
document.querySelector('#add-task').addEventListener('click', addTaskMode);

export { initalize, createNewTask, createNewProject, saveAndRefresh, projects };
