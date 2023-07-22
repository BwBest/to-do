/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initalize: () => (/* binding */ initalize)
/* harmony export */ });
/* harmony import */ var _saveSystem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveSystem.js */ "./src/saveSystem.js");


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
  if (_saveSystem_js__WEBPACK_IMPORTED_MODULE_0__.storage.isFirstTimeLoad() === false) return; // Skip if it's not first time loading
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
  _saveSystem_js__WEBPACK_IMPORTED_MODULE_0__.storage.save(projects);

  console.log('LOADED FIRST TIME');
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
      console.log(assignedProject);
    }
  });
  // Add task to project object if the 'project' input is available
  if (assignedProject !== null) {
    console.log(assignedProject);
    assignedProject.objects.push(task);
  }
  // Save the task and projects
  _saveSystem_js__WEBPACK_IMPORTED_MODULE_0__.storage.save(projects);
}

function initalize() {
  loadTasks();
  firstTimeTest();
}

function loadTasks() {
  if (_saveSystem_js__WEBPACK_IMPORTED_MODULE_0__.storage.isFirstTimeLoad() === true) return; // skip if it's the first time loading
  projects = _saveSystem_js__WEBPACK_IMPORTED_MODULE_0__.storage.load();
  loaded = true;
}

console.log(projects);




/***/ }),

/***/ "./src/saveSystem.js":
/*!***************************!*\
  !*** ./src/saveSystem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
const storage = (() => {
  const load = () => {
    const save = localStorage.getItem('projects');
    const stringified = JSON.parse(save);
    console.log('LOADED');
    console.log(stringified);
    return stringified;
  };

  const save = (projects) => {
    const stringified = JSON.stringify(projects);
    const save = localStorage.setItem('projects', stringified);
    console.log('SAVED');
  };

  const isFirstTimeLoad = () => {
    return localStorage.getItem('projects') === null;
  };

  const clearSaves = () => {
    localStorage.removeItem('projects');
  };
  return { load, save, isFirstTimeLoad, clearSaves };
})();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


_projects_js__WEBPACK_IMPORTED_MODULE_0__.initalize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFPLHNDQUFzQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFPO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQU8scUNBQXFDO0FBQ2xELGFBQWEsbURBQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxQjs7Ozs7Ozs7Ozs7Ozs7O0FDakZyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDbUI7Ozs7Ozs7VUN6Qm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7QUFDdEM7QUFDQSxtREFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zYXZlU3lzdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3NhdmVTeXN0ZW0uanMnO1xyXG5cclxubGV0IHByb2plY3RzID0gW107XHJcbmxldCBsb2FkZWQgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgdGhpcy5vYmplY3RzID0gW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcclxuICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIHRoaXMubm90ZXMgPSBub3RlcztcclxufVxyXG5cclxuZnVuY3Rpb24gZmlyc3RUaW1lVGVzdCgpIHtcclxuICBpZiAoc3RvcmFnZS5pc0ZpcnN0VGltZUxvYWQoKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gU2tpcCBpZiBpdCdzIG5vdCBmaXJzdCB0aW1lIGxvYWRpbmdcclxuICAvLyBDcmVhdGUgZGVmYXVsdCBwcm9qZWN0IGlmIGl0J3MgdGhlIGZpcnN0IHRpbWVcclxuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnKTtcclxuICBwcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcclxuXHJcbiAgbG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgZXhhbXBsZSB0YXNrXHJcbiAgY3JlYXRlTmV3VGFzayhcclxuICAgICdEZWZhdWx0IFByb2plY3QnLFxyXG4gICAgJ0JhxZ9sxLFrJyxcclxuICAgICdEZW5lbWUgYcOnxLFrbGFtYXPEsScsXHJcbiAgICAnMmJkb25lJyxcclxuICAgICdoaWdoJyxcclxuICAgICdHZWxpcnNlIGVraW1lJ1xyXG4gICk7XHJcblxyXG4gIC8vIFNhdmUgdGhlIHRhc2sgYW5kIHByb2plY3RcclxuICBzdG9yYWdlLnNhdmUocHJvamVjdHMpO1xyXG5cclxuICBjb25zb2xlLmxvZygnTE9BREVEIEZJUlNUIFRJTUUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3VGFzayhwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xyXG4gIGlmIChsb2FkZWQgPT09IGZhbHNlKSB7XHJcbiAgICAvLyBDYWxsIHRoZSBuZXd0YXNrIGZ1bmN0aW9uIDFzIGxhdGVyIGlmIHRoZSBzYXZlcyBub3QgbG9hZGVkIHlldFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNyZWF0ZU5ld1Rhc2socHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XHJcbiAgLy8gRmluZCB0aGUgcHJvamVjdCBvYmplY3RcclxuICBsZXQgYXNzaWduZWRQcm9qZWN0O1xyXG4gIHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LnByb2plY3ROYW1lID09PSBwcm9qZWN0KSB7XHJcbiAgICAgIGFzc2lnbmVkUHJvamVjdCA9IGVsZW1lbnQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFzc2lnbmVkUHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8gQWRkIHRhc2sgdG8gcHJvamVjdCBvYmplY3QgaWYgdGhlICdwcm9qZWN0JyBpbnB1dCBpcyBhdmFpbGFibGVcclxuICBpZiAoYXNzaWduZWRQcm9qZWN0ICE9PSBudWxsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhc3NpZ25lZFByb2plY3QpO1xyXG4gICAgYXNzaWduZWRQcm9qZWN0Lm9iamVjdHMucHVzaCh0YXNrKTtcclxuICB9XHJcbiAgLy8gU2F2ZSB0aGUgdGFzayBhbmQgcHJvamVjdHNcclxuICBzdG9yYWdlLnNhdmUocHJvamVjdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0YWxpemUoKSB7XHJcbiAgbG9hZFRhc2tzKCk7XHJcbiAgZmlyc3RUaW1lVGVzdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVGFza3MoKSB7XHJcbiAgaWYgKHN0b3JhZ2UuaXNGaXJzdFRpbWVMb2FkKCkgPT09IHRydWUpIHJldHVybjsgLy8gc2tpcCBpZiBpdCdzIHRoZSBmaXJzdCB0aW1lIGxvYWRpbmdcclxuICBwcm9qZWN0cyA9IHN0b3JhZ2UubG9hZCgpO1xyXG4gIGxvYWRlZCA9IHRydWU7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuXHJcbmV4cG9ydCB7IGluaXRhbGl6ZSB9O1xyXG4iLCJjb25zdCBzdG9yYWdlID0gKCgpID0+IHtcclxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2F2ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xyXG4gICAgY29uc3Qgc3RyaW5naWZpZWQgPSBKU09OLnBhcnNlKHNhdmUpO1xyXG4gICAgY29uc29sZS5sb2coJ0xPQURFRCcpO1xyXG4gICAgY29uc29sZS5sb2coc3RyaW5naWZpZWQpO1xyXG4gICAgcmV0dXJuIHN0cmluZ2lmaWVkO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhdmUgPSAocHJvamVjdHMpID0+IHtcclxuICAgIGNvbnN0IHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xyXG4gICAgY29uc3Qgc2F2ZSA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIHN0cmluZ2lmaWVkKTtcclxuICAgIGNvbnNvbGUubG9nKCdTQVZFRCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzRmlyc3RUaW1lTG9hZCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSA9PT0gbnVsbDtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGVhclNhdmVzID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7XHJcbiAgfTtcclxuICByZXR1cm4geyBsb2FkLCBzYXZlLCBpc0ZpcnN0VGltZUxvYWQsIGNsZWFyU2F2ZXMgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IHN0b3JhZ2UgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyB0b2RvIGZyb20gJy4vcHJvamVjdHMuanMnO1xyXG5cclxudG9kby5pbml0YWxpemUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9