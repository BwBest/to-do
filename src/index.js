import './style.css';
import * as todo from './projects.js';
import { addProject } from './addProject.js';

let selectedCategory = 'All';

// Update categories
function initalizeCategories() {
  const categoriesEl = document.querySelector('#projects');

  categoriesEl.innerHTML = '';

  const h3 = document.createElement('h3');
  h3.textContent = 'All';
  h3.classList.add('active-text');
  categoriesEl.appendChild(h3);

  h3.addEventListener('click', () => {
    changeActiveCategory(h3.textContent);

    // Change colors of active and inactive category names
    document.querySelectorAll('#projects h3').forEach((ref) => {
      ref.classList = 'white-text';
    });
    h3.classList = 'active-text';
  });

  todo.projects.forEach((project) => {
    const h3 = document.createElement('h3');
    h3.textContent = project.projectName;
    h3.classList.add('white-text');
    categoriesEl.appendChild(h3);

    h3.addEventListener('click', () => {
      changeActiveCategory(h3.textContent);

      // Change colors of active and inactive category names
      document.querySelectorAll('#projects h3').forEach((ref) => {
        ref.classList = 'white-text';
      });
      h3.classList = 'active-text';
    });
  });
}

function changeActiveCategory(newCat) {
  selectedCategory = newCat;
  todo.saveAndRefresh();
}

const addCategoryEl = document.querySelector('#add-category-button');
addCategoryEl.addEventListener('click', addProject);

todo.initalize();
initalizeCategories();

export { initalizeCategories, selectedCategory };
