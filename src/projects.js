import { storage } from './saveSystem.js';

const projects = [];

function Project(projectName) {
  this.projectName = projectName;
  this.objects = [];
}

function createNewTask(project, title, description, dueDate, priority, notes) {
  console.log('New Task Generated');
}

function initalize() {
  firstTimeTest();
  createNewTask(
    'Default Project',
    'Başlık',
    'Deneme açıklaması',
    '2bdone',
    'high',
    'Gelirse ekime'
  );
}

function firstTimeTest() {
  if (storage.isFirstTimeLoad() === false) return; // Skip if it's not first time loading
}

storage.clearSaves();

console.log(storage.isFirstTimeLoad());

export { initalize };
