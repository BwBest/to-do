import './style.css';
import * as todo from './projects.js';
import { addProject } from './addProject.js';

todo.initalize();
initalizeCategories();

// Update categories
function initalizeCategories() {
  const categoriesEl = document.querySelector('#projects');

  categoriesEl.innerHTML = '';

  const h3 = document.createElement('h3');
  h3.textContent = 'All';
  h3.classList.add('active-text');
  categoriesEl.appendChild(h3);

  todo.projects.forEach((project) => {
    const h3 = document.createElement('h3');
    h3.textContent = project.projectName;
    h3.classList.add('white-text');
    categoriesEl.appendChild(h3);
  });
}

const addCategoryEl = document.querySelector('#add-category-button');
addCategoryEl.addEventListener('click', addProject);

export { initalizeCategories };
