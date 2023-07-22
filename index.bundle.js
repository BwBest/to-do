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
    }
  });
  // Add task to project object if the 'project' input is available
  if (assignedProject !== null) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFPLHNDQUFzQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQU87QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBTyxxQ0FBcUM7QUFDbEQsYUFBYSxtREFBTztBQUNwQjtBQUNBO0FBQ0E7QUFDcUI7Ozs7Ozs7Ozs7Ozs7OztBQzdFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ21COzs7Ozs7O1VDekJuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ3RDO0FBQ0EsbURBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2F2ZVN5c3RlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zYXZlU3lzdGVtLmpzJztcclxuXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5sZXQgbG9hZGVkID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4gIHRoaXMub2JqZWN0cyA9IFtdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XHJcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpcnN0VGltZVRlc3QoKSB7XHJcbiAgaWYgKHN0b3JhZ2UuaXNGaXJzdFRpbWVMb2FkKCkgPT09IGZhbHNlKSByZXR1cm47IC8vIFNraXAgaWYgaXQncyBub3QgZmlyc3QgdGltZSBsb2FkaW5nXHJcbiAgLy8gQ3JlYXRlIGRlZmF1bHQgcHJvamVjdCBpZiBpdCdzIHRoZSBmaXJzdCB0aW1lXHJcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0Jyk7XHJcbiAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XHJcblxyXG4gIGxvYWRlZCA9IHRydWU7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGV4YW1wbGUgdGFza1xyXG4gIGNyZWF0ZU5ld1Rhc2soXHJcbiAgICAnRGVmYXVsdCBQcm9qZWN0JyxcclxuICAgICdCYcWfbMSxaycsXHJcbiAgICAnRGVuZW1lIGHDp8Sxa2xhbWFzxLEnLFxyXG4gICAgJzJiZG9uZScsXHJcbiAgICAnaGlnaCcsXHJcbiAgICAnR2VsaXJzZSBla2ltZSdcclxuICApO1xyXG5cclxuICAvLyBTYXZlIHRoZSB0YXNrIGFuZCBwcm9qZWN0XHJcbiAgc3RvcmFnZS5zYXZlKHByb2plY3RzKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ0xPQURFRCBGSVJTVCBUSU1FJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2socHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcclxuICBpZiAobG9hZGVkID09PSBmYWxzZSkge1xyXG4gICAgLy8gQ2FsbCB0aGUgbmV3dGFzayBmdW5jdGlvbiAxcyBsYXRlciBpZiB0aGUgc2F2ZXMgbm90IGxvYWRlZCB5ZXRcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjcmVhdGVOZXdUYXNrKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcclxuICAgIH0sIDEwMDApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xyXG4gIC8vIEZpbmQgdGhlIHByb2plY3Qgb2JqZWN0XHJcbiAgbGV0IGFzc2lnbmVkUHJvamVjdDtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdCkge1xyXG4gICAgICBhc3NpZ25lZFByb2plY3QgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vIEFkZCB0YXNrIHRvIHByb2plY3Qgb2JqZWN0IGlmIHRoZSAncHJvamVjdCcgaW5wdXQgaXMgYXZhaWxhYmxlXHJcbiAgaWYgKGFzc2lnbmVkUHJvamVjdCAhPT0gbnVsbCkge1xyXG4gICAgYXNzaWduZWRQcm9qZWN0Lm9iamVjdHMucHVzaCh0YXNrKTtcclxuICB9XHJcbiAgLy8gU2F2ZSB0aGUgdGFzayBhbmQgcHJvamVjdHNcclxuICBzdG9yYWdlLnNhdmUocHJvamVjdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0YWxpemUoKSB7XHJcbiAgbG9hZFRhc2tzKCk7XHJcbiAgZmlyc3RUaW1lVGVzdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVGFza3MoKSB7XHJcbiAgaWYgKHN0b3JhZ2UuaXNGaXJzdFRpbWVMb2FkKCkgPT09IHRydWUpIHJldHVybjsgLy8gc2tpcCBpZiBpdCdzIHRoZSBmaXJzdCB0aW1lIGxvYWRpbmdcclxuICBwcm9qZWN0cyA9IHN0b3JhZ2UubG9hZCgpO1xyXG4gIGxvYWRlZCA9IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGluaXRhbGl6ZSB9O1xyXG4iLCJjb25zdCBzdG9yYWdlID0gKCgpID0+IHtcclxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2F2ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xyXG4gICAgY29uc3Qgc3RyaW5naWZpZWQgPSBKU09OLnBhcnNlKHNhdmUpO1xyXG4gICAgY29uc29sZS5sb2coJ0xPQURFRCcpO1xyXG4gICAgY29uc29sZS5sb2coc3RyaW5naWZpZWQpO1xyXG4gICAgcmV0dXJuIHN0cmluZ2lmaWVkO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhdmUgPSAocHJvamVjdHMpID0+IHtcclxuICAgIGNvbnN0IHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xyXG4gICAgY29uc3Qgc2F2ZSA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIHN0cmluZ2lmaWVkKTtcclxuICAgIGNvbnNvbGUubG9nKCdTQVZFRCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzRmlyc3RUaW1lTG9hZCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSA9PT0gbnVsbDtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGVhclNhdmVzID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7XHJcbiAgfTtcclxuICByZXR1cm4geyBsb2FkLCBzYXZlLCBpc0ZpcnN0VGltZUxvYWQsIGNsZWFyU2F2ZXMgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IHN0b3JhZ2UgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyB0b2RvIGZyb20gJy4vcHJvamVjdHMuanMnO1xyXG5cclxudG9kby5pbml0YWxpemUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9