/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --body-bg: #DEDEDE;
    --white-bg: #F9F9F9;
    --primary: #FF9838;
    --secondary: #2E2E2E;
}

*{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Poppins', sans-serif;
    background: var(--body-bg);
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
}

h1{
    color: var(--secondary);
    font-size: 2.5rem;
    font-weight: 700;
}

h2{
    font-size: 1.25rem;
    font-weight: 500;
}

h3{
    font-size: 1.25rem;
    font-weight: 400;
}

p{
    color: var(--secondary);
    font-size: 1rem;
    font-weight: 400;
}

.white-text{
    color: var(--white-bg);
}

.active-text{
    color: var(--primary);
}

.flex{
    display: flex;
}

.flex-align-center{
    align-items: center;
}
 
.hidden{
    display: none;
}

.btn{
    background: var(--primary);
    color: #fff;
    border: none;
    border-radius: 0.625rem;
    padding: 0.55rem 1.1rem;
    transition: all 0.15s linear;
}

.btn-secondary{
    background: none;
    color: var(--secondary);
    border: var(--secondary) 2px solid;
    border-radius: 0.625rem;
    padding: 0.55rem 1.1rem;
    transition: all 0.15s linear;
}

.btn:hover, .btn-secondary:hover{
    transform: translateY(-1px);
    filter: brightness(1.2);
    cursor: pointer;
}

.btn:active, .btn-secondary:active{
    transform: translateY(0px);
    filter: brightness(0.9);
}

/*************** LAYOUT ***************/

.container{
    width: 85%;
    height: 85%;
    display: flex;

    border-radius: 0.625rem;
    background: var(--white-bg, #F9F9F9);
    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.10);
}

#left{
    border-radius: 0.625rem 0rem 0rem 0.625rem;
    background: var(--secondary, #2E2E2E);
    flex: 1;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#right{
    flex: 6;
    margin: 3rem;

    display: flex;
    flex-direction: column;
}

.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    flex: 1;
}

.task-view{
    flex: 10;
    overflow-y: scroll;
    scrollbar-color: var(--secondary);
    scrollbar-width: thin;
    scroll-behavior: smooth;
    padding: 0 0.5rem;
}

.task-view::-webkit-scrollbar {
    width: 6px;
}
  
.task-view::-webkit-scrollbar-track {
    background-color: #e6e6e6;
    border-radius: 10px;
}
  
.task-view::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #dfdfdf;
    border-radius: 20px;
}

.bottom{
    margin-top: 1.5rem;
    text-align: right;
}
/*************** LAYOUT END ***************/

/*************** ADD-EDIT TASK MODAL ***************/
.modal{
    background: #fff;

    position: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 4rem;
    border-radius: 0.625rem;
    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.05);

    z-index: 2;
}

.modal h2{
    margin-bottom: 1rem;
    font-weight: 600;
}

.modal label{
    color: var(--secondary);
    font-size: 1.15rem;
    margin-bottom: 2rem;
}

.input-div select{
    background: none;
}

.input-div input, .input-div select{
    width: 100%;

    padding: 0.25rem;
    padding-left: 0.5rem;
    margin-top: 0.25rem;
    margin-bottom: 1rem;

    border: none;
    border-bottom: #727272 1px solid;

    transition: border 0.2s linear;
}

.input-div input:focus, .input-div select:focus{
    border-bottom: var(--primary) 1px solid;
    outline: none;
}

.input-div{
    margin-bottom: 1rem;
}

.buttons-div{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}


/*************** ADD-EDIT TASK MODAL END ***************/

/*************** TASK BOX ***************/
.task-box{
    border-radius: 0.625rem;
    background: #FFF;
    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.02);

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom: 1rem;
}

.task-box:hover{
    cursor: pointer;
}

.task-box h2:hover, .task-box p:hover{
    cursor: default;
}

.task-done .flex{
    opacity: 0.6;
}

/* Show more and edit icons */
.fa-chevron-down, .fa-pen-to-square{
    transition: all 0.1s ease;
}

.fa-chevron-down:hover, .fa-pen-to-square:hover{
    color: var(--primary);
    transform: scale(1.15);
}
/****************************/

.task-done h2, .task-done p{
    text-decoration: line-through;
}

input[type="checkbox"]{
    margin-left: 0.25rem;
    margin-right: 1rem;
}

.priority{
    color: #FFF;
    background: #FF6565;
    font-size: 0.8rem;
    font-style: normal;
    border-radius: 0.625rem;
    padding: 0.25rem 0.5rem;
    margin-right: 1rem;
}

.task-date{
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

.see-more{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    margin-left: 0.7rem;
    margin-right: 0.7rem;
}

.see-more i:nth-child(2){
    margin-top: 0.6rem;
}

.task-desc{
    max-width: 25vw;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.task-box-extended{
    padding: 2rem 1rem;

    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.05);
}

.task-box-extended p{
    max-width: 40vw;
    max-width: auto;
    display: block;
    overflow: normal;
    white-space: normal;
    text-overflow: ellipsis;
}

.task-box-extended .hidden{
    display: block;
}

/*************** TASK BOX END ***************/

/*************** SIDEBAR ***************/

/* Profile section */
#profile-img{
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
}

#profile-img:hover{
    filter: brightness(1.2);
    transform: scale(1.02);
}

#profile-name{
    color: white;
}

/* .profile{

} */
/* Profile section end*/

/* View type section */
.view-type h3, #projects h3{
    transition: all 0.15s ease;
}

.view-type h3:hover, #projects h3:hover{
    transform: scale(1.02);
    color: var(--primary);
    filter: brightness(1.2);
    cursor: pointer;
}

.view-type h3:active, #projects h3:active{
    transform: scale(1);
    filter: brightness(0.9);
}
/* View type section end */

/* Categories section*/

.categories{
    margin-bottom: 20vh;
}

.categories-title{
    color: white;
}

.categories-title div{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.categories-divider{
    width: 100%;
    height: 1px;
    border-radius: 10px;
    background: rgba(217, 217, 217, 0.6);

    margin-top: 0.1rem;
    margin-bottom: 1rem;
}

#add-category-button{
    transition: all 0.15s linear;
}

#add-category-button:hover{
    cursor: pointer;
    color: var(--primary) !important;
    filter: brightness(1.1);
}

.category-edit-btn{
    color: var(--white-bg);
    transition: all 0.15s linear;
}

.category-edit-btn:hover{
    filter: brightness(1.2);
    transform: scale(1.02);
    cursor: pointer;
}

.category-edit-btn:active{
    transform: translateY(1px);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\r\n\r\n:root{\r\n    --body-bg: #DEDEDE;\r\n    --white-bg: #F9F9F9;\r\n    --primary: #FF9838;\r\n    --secondary: #2E2E2E;\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody{\r\n    font-family: 'Poppins', sans-serif;\r\n    background: var(--body-bg);\r\n    width: 100%;\r\n    height: 100vh;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nh1{\r\n    color: var(--secondary);\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n}\r\n\r\nh2{\r\n    font-size: 1.25rem;\r\n    font-weight: 500;\r\n}\r\n\r\nh3{\r\n    font-size: 1.25rem;\r\n    font-weight: 400;\r\n}\r\n\r\np{\r\n    color: var(--secondary);\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n}\r\n\r\n.white-text{\r\n    color: var(--white-bg);\r\n}\r\n\r\n.active-text{\r\n    color: var(--primary);\r\n}\r\n\r\n.flex{\r\n    display: flex;\r\n}\r\n\r\n.flex-align-center{\r\n    align-items: center;\r\n}\r\n \r\n.hidden{\r\n    display: none;\r\n}\r\n\r\n.btn{\r\n    background: var(--primary);\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 0.625rem;\r\n    padding: 0.55rem 1.1rem;\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.btn-secondary{\r\n    background: none;\r\n    color: var(--secondary);\r\n    border: var(--secondary) 2px solid;\r\n    border-radius: 0.625rem;\r\n    padding: 0.55rem 1.1rem;\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.btn:hover, .btn-secondary:hover{\r\n    transform: translateY(-1px);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:active, .btn-secondary:active{\r\n    transform: translateY(0px);\r\n    filter: brightness(0.9);\r\n}\r\n\r\n/*************** LAYOUT ***************/\r\n\r\n.container{\r\n    width: 85%;\r\n    height: 85%;\r\n    display: flex;\r\n\r\n    border-radius: 0.625rem;\r\n    background: var(--white-bg, #F9F9F9);\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.10);\r\n}\r\n\r\n#left{\r\n    border-radius: 0.625rem 0rem 0rem 0.625rem;\r\n    background: var(--secondary, #2E2E2E);\r\n    flex: 1;\r\n    padding: 2rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n#right{\r\n    flex: 6;\r\n    margin: 3rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 2.5rem;\r\n\r\n    flex: 1;\r\n}\r\n\r\n.task-view{\r\n    flex: 10;\r\n    overflow-y: scroll;\r\n    scrollbar-color: var(--secondary);\r\n    scrollbar-width: thin;\r\n    scroll-behavior: smooth;\r\n    padding: 0 0.5rem;\r\n}\r\n\r\n.task-view::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n  \r\n.task-view::-webkit-scrollbar-track {\r\n    background-color: #e6e6e6;\r\n    border-radius: 10px;\r\n}\r\n  \r\n.task-view::-webkit-scrollbar-thumb {\r\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #dfdfdf;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom{\r\n    margin-top: 1.5rem;\r\n    text-align: right;\r\n}\r\n/*************** LAYOUT END ***************/\r\n\r\n/*************** ADD-EDIT TASK MODAL ***************/\r\n.modal{\r\n    background: #fff;\r\n\r\n    position: fixed;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    padding: 2rem 4rem;\r\n    border-radius: 0.625rem;\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.05);\r\n\r\n    z-index: 2;\r\n}\r\n\r\n.modal h2{\r\n    margin-bottom: 1rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.modal label{\r\n    color: var(--secondary);\r\n    font-size: 1.15rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.input-div select{\r\n    background: none;\r\n}\r\n\r\n.input-div input, .input-div select{\r\n    width: 100%;\r\n\r\n    padding: 0.25rem;\r\n    padding-left: 0.5rem;\r\n    margin-top: 0.25rem;\r\n    margin-bottom: 1rem;\r\n\r\n    border: none;\r\n    border-bottom: #727272 1px solid;\r\n\r\n    transition: border 0.2s linear;\r\n}\r\n\r\n.input-div input:focus, .input-div select:focus{\r\n    border-bottom: var(--primary) 1px solid;\r\n    outline: none;\r\n}\r\n\r\n.input-div{\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.buttons-div{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n\r\n/*************** ADD-EDIT TASK MODAL END ***************/\r\n\r\n/*************** TASK BOX ***************/\r\n.task-box{\r\n    border-radius: 0.625rem;\r\n    background: #FFF;\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.02);\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.task-box:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.task-box h2:hover, .task-box p:hover{\r\n    cursor: default;\r\n}\r\n\r\n.task-done .flex{\r\n    opacity: 0.6;\r\n}\r\n\r\n/* Show more and edit icons */\r\n.fa-chevron-down, .fa-pen-to-square{\r\n    transition: all 0.1s ease;\r\n}\r\n\r\n.fa-chevron-down:hover, .fa-pen-to-square:hover{\r\n    color: var(--primary);\r\n    transform: scale(1.15);\r\n}\r\n/****************************/\r\n\r\n.task-done h2, .task-done p{\r\n    text-decoration: line-through;\r\n}\r\n\r\ninput[type=\"checkbox\"]{\r\n    margin-left: 0.25rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.priority{\r\n    color: #FFF;\r\n    background: #FF6565;\r\n    font-size: 0.8rem;\r\n    font-style: normal;\r\n    border-radius: 0.625rem;\r\n    padding: 0.25rem 0.5rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.task-date{\r\n    margin-left: 0.5rem;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.see-more{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n\r\n    margin-left: 0.7rem;\r\n    margin-right: 0.7rem;\r\n}\r\n\r\n.see-more i:nth-child(2){\r\n    margin-top: 0.6rem;\r\n}\r\n\r\n.task-desc{\r\n    max-width: 25vw;\r\n    display: block;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.task-box-extended{\r\n    padding: 2rem 1rem;\r\n\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.05);\r\n}\r\n\r\n.task-box-extended p{\r\n    max-width: 40vw;\r\n    max-width: auto;\r\n    display: block;\r\n    overflow: normal;\r\n    white-space: normal;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.task-box-extended .hidden{\r\n    display: block;\r\n}\r\n\r\n/*************** TASK BOX END ***************/\r\n\r\n/*************** SIDEBAR ***************/\r\n\r\n/* Profile section */\r\n#profile-img{\r\n    width: 3.75rem;\r\n    height: 3.75rem;\r\n    border-radius: 50%;\r\n}\r\n\r\n#profile-img:hover{\r\n    filter: brightness(1.2);\r\n    transform: scale(1.02);\r\n}\r\n\r\n#profile-name{\r\n    color: white;\r\n}\r\n\r\n/* .profile{\r\n\r\n} */\r\n/* Profile section end*/\r\n\r\n/* View type section */\r\n.view-type h3, #projects h3{\r\n    transition: all 0.15s ease;\r\n}\r\n\r\n.view-type h3:hover, #projects h3:hover{\r\n    transform: scale(1.02);\r\n    color: var(--primary);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n.view-type h3:active, #projects h3:active{\r\n    transform: scale(1);\r\n    filter: brightness(0.9);\r\n}\r\n/* View type section end */\r\n\r\n/* Categories section*/\r\n\r\n.categories{\r\n    margin-bottom: 20vh;\r\n}\r\n\r\n.categories-title{\r\n    color: white;\r\n}\r\n\r\n.categories-title div{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.categories-divider{\r\n    width: 100%;\r\n    height: 1px;\r\n    border-radius: 10px;\r\n    background: rgba(217, 217, 217, 0.6);\r\n\r\n    margin-top: 0.1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n#add-category-button{\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n#add-category-button:hover{\r\n    cursor: pointer;\r\n    color: var(--primary) !important;\r\n    filter: brightness(1.1);\r\n}\r\n\r\n.category-edit-btn{\r\n    color: var(--white-bg);\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.category-edit-btn:hover{\r\n    filter: brightness(1.2);\r\n    transform: scale(1.02);\r\n    cursor: pointer;\r\n}\r\n\r\n.category-edit-btn:active{\r\n    transform: translateY(1px);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");



function addProject() {
  // Modal
  const addTaskDiv = document.createElement('div');
  addTaskDiv.classList.add('modal');

  // Modal header
  const modalTitle = document.createElement('h2');
  modalTitle.textContent = 'Add New Category';

  // Input div
  const inputDiv = document.createElement('div');
  inputDiv.classList.add('input-div');

  // Category name input
  const titleDiv = document.createElement('div');
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Category Name';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'category-input';
  titleInput.placeholder = 'Enter a category name';
  titleDiv.appendChild(titleLabel);
  titleDiv.appendChild(titleInput);

  inputDiv.appendChild(titleDiv);

  // Buttons
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons-div');

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.classList.add('btn-secondary');
  cancelBtn.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.removeModal)();
  });

  const addTaskBtn = document.createElement('button');
  addTaskBtn.id = 'confirm-add-task';
  addTaskBtn.classList.add('btn');
  addTaskBtn.textContent = 'Create Category';
  ////////////////////////////////////////////////////////////////// ADD TASK /////////////////////////////////////////////////////////////////////////////////////////////
  addTaskBtn.addEventListener('click', () => {
    // Input control
    let error = false;
    if (titleInput.value == '') {
      titleInput.style.borderBottomColor = 'red';
      error = true;
    }
    if (error === true) {
      return;
    }

    (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(titleInput.value);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.removeModal)();
  });

  addTaskBtn.style.display = 'flex';
  addTaskBtn.style.flexDirection = 'row-reverse';
  addTaskBtn.style.alignItems = 'center';
  addTaskBtn.style.justifyContent = 'space-between';

  const addIcon = document.createElement('i');
  addIcon.classList = 'fa-solid fa-plus';
  addIcon.style.color = '#fff';
  addIcon.style.marginRight = '0.25rem';

  addTaskBtn.appendChild(addIcon);

  buttonsDiv.appendChild(cancelBtn);
  buttonsDiv.appendChild(addTaskBtn);

  // Append childs to modal
  addTaskDiv.appendChild(modalTitle);
  addTaskDiv.appendChild(inputDiv);
  addTaskDiv.appendChild(buttonsDiv);

  document.body.appendChild(addTaskDiv);
}




/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAddTaskModal: () => (/* binding */ renderAddTaskModal)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");



function renderAddTaskModal(projectList) {
  // Modal
  const addTaskDiv = document.createElement('div');
  addTaskDiv.classList.add('modal');

  // Modal header
  const modalTitle = document.createElement('h2');
  modalTitle.textContent = 'Add Task';

  // Input div
  const inputDiv = document.createElement('div');
  inputDiv.classList.add('input-div');

  // Title input
  const titleDiv = document.createElement('div');
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'title-input';
  titleInput.placeholder = 'Add a title';
  titleDiv.appendChild(titleLabel);
  titleDiv.appendChild(titleInput);

  // Description input
  const descriptionDiv = document.createElement('div');
  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description';
  const descriptionInput = document.createElement('input');
  descriptionInput.type = 'text';
  descriptionInput.id = 'description-input';
  descriptionInput.placeholder = 'Add a description';
  descriptionDiv.appendChild(descriptionLabel);
  descriptionDiv.appendChild(descriptionInput);

  // Date input
  const dateDiv = document.createElement('div');
  const dateLabel = document.createElement('label');
  dateLabel.textContent = 'Due Date';
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.id = 'date-input';
  dateInput.placeholder = 'dd/mm/yyyy';
  dateDiv.appendChild(dateLabel);
  dateDiv.appendChild(dateInput);

  // Priority input
  const priorityDiv = document.createElement('div');
  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority';
  const priorityInput = document.createElement('select');
  priorityInput.id = 'priority-input';
  const lowP = document.createElement('option');
  lowP.value = 'low';
  lowP.textContent = 'Low';

  const medP = document.createElement('option');
  medP.value = 'medium';
  medP.textContent = 'Medium';

  const higP = document.createElement('option');
  higP.value = 'high';
  higP.textContent = 'High';

  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);
  priorityInput.appendChild(lowP);
  priorityInput.appendChild(medP);
  priorityInput.appendChild(higP);

  // Project input
  const projectDiv = document.createElement('div');
  const projectLabel = document.createElement('label');
  projectLabel.textContent = 'Project';
  const projectInput = document.createElement('select');
  projectInput.id = 'priority-input';

  projectDiv.appendChild(projectLabel);
  projectDiv.appendChild(projectInput);

  // Loop through projects and get project names, make them an option
  if (projectList != '') {
    projectList.forEach((project) => {
      const pName = project.projectName;
      const element = document.createElement('option');
      element.value = pName;
      element.text = pName;
      projectInput.appendChild(element);
    });
  }

  // Append all the inputs to inputDiv
  inputDiv.appendChild(titleDiv);
  inputDiv.appendChild(descriptionDiv);
  inputDiv.appendChild(dateDiv);
  inputDiv.appendChild(priorityDiv);
  inputDiv.appendChild(projectDiv);

  // Buttons
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons-div');

  /////////////////////////////////////////////////////////////////// CANCEL BUTTON ///////////////////////////////////////////////////////////////////////////////////////
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.classList.add('btn-secondary');
  cancelBtn.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.removeModal)();
  });

  ////////////////////////////////////////////////////////////////// ADD TASK /////////////////////////////////////////////////////////////////////////////////////////////
  const addTaskBtn = document.createElement('button');
  addTaskBtn.id = 'confirm-add-task';
  addTaskBtn.classList.add('btn');
  addTaskBtn.textContent = 'Confirm';

  addTaskBtn.addEventListener('click', () => {
    // Input control
    let error = false;
    if (titleInput.value == '') {
      titleInput.style.borderBottomColor = 'red';
      error = true;
    }
    if (descriptionInput.value == '') {
      descriptionInput.style.borderBottomColor = 'red';
      error = true;
    }
    if (dateInput.value == '') {
      dateInput.style.borderBottomColor = 'red';
      error = true;
    }
    if (error === true) {
      return;
    }

    (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createNewTask)(
      projectInput.value,
      titleInput.value,
      descriptionInput.value,
      dateInput.value,
      priorityInput.value,
      ''
    );
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.removeModal)();
  });

  addTaskBtn.style.display = 'flex';
  addTaskBtn.style.flexDirection = 'row-reverse';
  addTaskBtn.style.alignItems = 'center';
  addTaskBtn.style.justifyContent = 'space-between';

  const addIcon = document.createElement('i');
  addIcon.classList = 'fa-solid fa-plus';
  addIcon.style.color = '#fff';

  addTaskBtn.appendChild(addIcon);

  buttonsDiv.appendChild(cancelBtn);
  buttonsDiv.appendChild(addTaskBtn);

  // Append childs to modal
  addTaskDiv.appendChild(modalTitle);
  addTaskDiv.appendChild(inputDiv);
  addTaskDiv.appendChild(buttonsDiv);

  document.body.appendChild(addTaskDiv);
}




/***/ }),

/***/ "./src/editProject.js":
/*!****************************!*\
  !*** ./src/editProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editProject: () => (/* binding */ editProject)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");




function editProject(projectReference) {
  const projectName = projectReference.projectName;

  // Modal
  const addTaskDiv = document.createElement('div');
  addTaskDiv.classList.add('modal');

  // Modal header
  const modalTitle = document.createElement('h2');
  modalTitle.textContent = 'Edit Category';

  // Input div
  const inputDiv = document.createElement('div');
  inputDiv.classList.add('input-div');

  // Title input
  const titleDiv = document.createElement('div');
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Category Name';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'title-input';
  titleInput.value = projectName;
  titleDiv.appendChild(titleLabel);
  titleDiv.appendChild(titleInput);

  // Append all the inputs to inputDiv
  inputDiv.appendChild(titleDiv);

  // Buttons
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons-div');

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.classList.add('btn-secondary');
  cancelBtn.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.removeModal)();
  });

  const addTaskBtn = document.createElement('button');
  addTaskBtn.id = 'confirm-add-task';
  addTaskBtn.classList.add('btn');
  addTaskBtn.textContent = 'Save';
  ////////////////////////////////////////////////////////////////// ADD TASK /////////////////////////////////////////////////////////////////////////////////////////////
  addTaskBtn.addEventListener('click', () => {
    // Input control
    let error = false;
    if (titleInput.value == '') {
      titleInput.style.borderBottomColor = 'red';
      error = true;
    }
    if (error === true) {
      return;
    }

    projectReference.projectName = titleInput.value;

    (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.saveAndRefresh)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.initalizeCategories)();
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.removeModal)();
  });

  addTaskBtn.style.display = 'flex';
  addTaskBtn.style.flexDirection = 'row-reverse';
  addTaskBtn.style.alignItems = 'center';
  addTaskBtn.style.justifyContent = 'space-between';

  const addIcon = document.createElement('i');
  addIcon.classList = 'fa-solid fa-plus';
  addIcon.style.color = '#fff';
  addIcon.style.marginRight = '0.25rem';

  addTaskBtn.appendChild(addIcon);

  const removeTaskBtn = document.createElement('button');
  removeTaskBtn.classList.add('btn-secondary');
  removeTaskBtn.textContent = 'Remove Category';
  removeTaskBtn.style.margin = '0 0.5rem';
  removeTaskBtn.style.borderColor = '#FF6565';
  removeTaskBtn.style.color = '#FF6565';

  removeTaskBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this category?')) {
      _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects.splice(_projects_js__WEBPACK_IMPORTED_MODULE_0__.projects.indexOf(projectReference), 1);
      (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.changeActiveCategory)('All');
      (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.saveAndRefresh)();
      (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.initalizeCategories)();
      (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.removeModal)();
    }
  });

  buttonsDiv.appendChild(cancelBtn);
  buttonsDiv.appendChild(removeTaskBtn);
  buttonsDiv.appendChild(addTaskBtn);

  // Append childs to modal
  addTaskDiv.appendChild(modalTitle);
  addTaskDiv.appendChild(inputDiv);
  addTaskDiv.appendChild(buttonsDiv);

  document.body.appendChild(addTaskDiv);
}




/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTask: () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/*
projectReference.objects.indexOf(objectReference)
    // Find the object in objects array
    projectReference.objects.splice(
      projectReference.objects.indexOf(objectReference),
      1
    );

*/




function editTask(objectReference, projectReference) {
  const title = objectReference.title;
  const desc = objectReference.description;
  const date = objectReference.dueDate;
  const priority = objectReference.priority;
  // Modal
  const addTaskDiv = document.createElement('div');
  addTaskDiv.classList.add('modal');

  // Modal header
  const modalTitle = document.createElement('h2');
  modalTitle.textContent = 'Edit Task';

  // Input div
  const inputDiv = document.createElement('div');
  inputDiv.classList.add('input-div');

  // Title input
  const titleDiv = document.createElement('div');
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'title-input';
  titleInput.value = title;
  titleDiv.appendChild(titleLabel);
  titleDiv.appendChild(titleInput);

  // Description input
  const descriptionDiv = document.createElement('div');
  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description';
  const descriptionInput = document.createElement('input');
  descriptionInput.type = 'text';
  descriptionInput.id = 'description-input';
  descriptionInput.value = desc;
  descriptionDiv.appendChild(descriptionLabel);
  descriptionDiv.appendChild(descriptionInput);

  // Date input
  const dateDiv = document.createElement('div');
  const dateLabel = document.createElement('label');
  dateLabel.textContent = 'Due Date';
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.id = 'date-input';
  dateInput.value = date;
  dateDiv.appendChild(dateLabel);
  dateDiv.appendChild(dateInput);

  // Priority input
  const priorityDiv = document.createElement('div');
  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority';
  const priorityInput = document.createElement('select');
  priorityInput.id = 'priority-input';
  priorityInput.value = priority;
  const lowP = document.createElement('option');
  lowP.value = 'low';
  lowP.textContent = 'Low';

  const medP = document.createElement('option');
  medP.value = 'medium';
  medP.textContent = 'Medium';

  const higP = document.createElement('option');
  higP.value = 'high';
  higP.textContent = 'High';

  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);
  priorityInput.appendChild(lowP);
  priorityInput.appendChild(medP);
  priorityInput.appendChild(higP);

  // Project input
  const projectDiv = document.createElement('div');
  const projectLabel = document.createElement('label');
  projectLabel.textContent = 'Project';
  const projectInput = document.createElement('select');
  projectInput.id = 'priority-input';

  projectDiv.appendChild(projectLabel);
  projectDiv.appendChild(projectInput);

  // Loop through projects and get project names, make them an option
  if (_projects_js__WEBPACK_IMPORTED_MODULE_0__.projects != '') {
    _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
      const pName = project.projectName;
      const element = document.createElement('option');
      element.value = pName;
      element.text = pName;
      projectInput.appendChild(element);
    });
  }

  projectInput.value = projectReference.projectName;

  // Append all the inputs to inputDiv
  inputDiv.appendChild(titleDiv);
  inputDiv.appendChild(descriptionDiv);
  inputDiv.appendChild(dateDiv);
  inputDiv.appendChild(priorityDiv);
  inputDiv.appendChild(projectDiv);

  // Buttons
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons-div');

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.classList.add('btn-secondary');
  cancelBtn.addEventListener('click', () => {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.removeModal)();
  });

  const addTaskBtn = document.createElement('button');
  addTaskBtn.id = 'confirm-add-task';
  addTaskBtn.classList.add('btn');
  addTaskBtn.textContent = 'Save';
  ////////////////////////////////////////////////////////////////// ADD TASK /////////////////////////////////////////////////////////////////////////////////////////////
  addTaskBtn.addEventListener('click', () => {
    // Input control
    let error = false;
    if (titleInput.value == '') {
      titleInput.style.borderBottomColor = 'red';
      error = true;
    }
    if (descriptionInput.value == '') {
      descriptionInput.style.borderBottomColor = 'red';
      error = true;
    }
    if (dateInput.value == '') {
      dateInput.style.borderBottomColor = 'red';
      error = true;
    }
    if (error === true) {
      return;
    }

    objectReference.title = titleInput.value;
    objectReference.description = descriptionInput.value;
    objectReference.dueDate = dateInput.value;
    objectReference.priority = priorityInput.value;

    // Transfer task to new project if needed
    if (projectInput.value.toLowerCase() != projectReference.projectName) {
      // Delete from old project
      projectReference.objects.splice(
        projectReference.objects.indexOf(objectReference),
        1
      );
      // Create new task with edited values
      (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createNewTask)(
        projectInput.value,
        titleInput.value,
        descriptionInput.value,
        dateInput.value,
        priorityInput.value,
        ''
      );
    }

    (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.saveAndRefresh)();
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.removeModal)();
  });

  addTaskBtn.style.display = 'flex';
  addTaskBtn.style.flexDirection = 'row-reverse';
  addTaskBtn.style.alignItems = 'center';
  addTaskBtn.style.justifyContent = 'space-between';

  const addIcon = document.createElement('i');
  addIcon.classList = 'fa-solid fa-plus';
  addIcon.style.color = '#fff';
  addIcon.style.marginRight = '0.25rem';

  addTaskBtn.appendChild(addIcon);

  const removeTaskBtn = document.createElement('button');
  removeTaskBtn.classList.add('btn-secondary');
  removeTaskBtn.textContent = 'Remove Task';
  removeTaskBtn.style.margin = '0 0.5rem';
  removeTaskBtn.style.borderColor = '#FF6565';
  removeTaskBtn.style.color = '#FF6565';

  removeTaskBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this task?')) {
      projectReference.objects.splice(
        projectReference.objects.indexOf(objectReference),
        1
      );
      (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.saveAndRefresh)();
      (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.removeModal)();
    }
  });

  buttonsDiv.appendChild(cancelBtn);
  buttonsDiv.appendChild(removeTaskBtn);
  buttonsDiv.appendChild(addTaskBtn);

  // Append childs to modal
  addTaskDiv.appendChild(modalTitle);
  addTaskDiv.appendChild(inputDiv);
  addTaskDiv.appendChild(buttonsDiv);

  document.body.appendChild(addTaskDiv);
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeActiveCategory: () => (/* binding */ changeActiveCategory),
/* harmony export */   initalizeCategories: () => (/* binding */ initalizeCategories),
/* harmony export */   selectedCategory: () => (/* binding */ selectedCategory),
/* harmony export */   selectedDate: () => (/* binding */ selectedDate)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");
/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTask.js */ "./src/addTask.js");
/* harmony import */ var _editProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editProject.js */ "./src/editProject.js");






//+++++++++++++++++++++++++++ ADD TASK BUTTON +++++++++++++++++++++++++++++
document.querySelector('#add-task').addEventListener('click', addTaskMode);

function addTaskMode() {
  if (_projects_js__WEBPACK_IMPORTED_MODULE_1__.loaded == false) {
    return;
  }
  (0,_addTask_js__WEBPACK_IMPORTED_MODULE_3__.renderAddTaskModal)(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projects);
}
//--------------------------- ADD TASK BUTTON END -------------------------

//+++++++++++++++++++++++++++ FILTER BY DATE ++++++++++++++++++++++++++++++
let selectedDate = 'Today';
const dateTitle = document.querySelector('#title');

function initalizeDates() {
  const dateFilterEl = document.querySelector('.view-type');
  const dateButtons = [...dateFilterEl.children];

  dateButtons.forEach((element) => {
    element.addEventListener('click', () => {
      changeActiveDate(element.textContent);

      // Change colors of active and inactive category names
      document.querySelectorAll('.view-type h3').forEach((ref) => {
        ref.classList = 'white-text';
      });
      element.classList = 'active-text';

      dateTitle.textContent = element.textContent;
    });
  });
}

function changeActiveDate(newDate) {
  selectedDate = newDate;
  _projects_js__WEBPACK_IMPORTED_MODULE_1__.refreshUI();
}
//--------------------------- FILTER BY DATE END ---------------------------

//+++++++++++++++++++++++++++ CATEGORY SELECTION, INITALIZE-UPDATE CATEGORY, ADD CATEGORY +++++++++++++++++++++++++++
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
    resetOtherCategories();
    h3.classList = 'active-text';
  });

  // Create category elements from storage
  _projects_js__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project) => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.justifyContent = 'space-between';

    const h3 = document.createElement('h3');
    h3.textContent = project.projectName;
    h3.classList.add('white-text');

    const editBtn = document.createElement('i');
    editBtn.classList = 'category-edit-btn fa-regular fa-pen-to-square hidden';

    wrapper.appendChild(h3);
    wrapper.appendChild(editBtn);

    categoriesEl.appendChild(wrapper);

    h3.addEventListener('click', () => {
      changeActiveCategory(h3.textContent);
      resetOtherCategories();
      h3.classList = 'active-text';
      editBtn.classList.remove('hidden');
    });

    editBtn.addEventListener('click', () => {
      (0,_editProject_js__WEBPACK_IMPORTED_MODULE_4__.editProject)(project);
    });
  });
}

function resetOtherCategories() {
  // Change colors of active and inactive category names and hide edit buttons
  document.querySelectorAll('#projects h3').forEach((ref) => {
    ref.classList = 'white-text';
  });
  document.querySelectorAll('#projects i').forEach((ref) => {
    ref.classList.add('hidden');
  });
}

function changeActiveCategory(newCat) {
  selectedCategory = newCat;
  _projects_js__WEBPACK_IMPORTED_MODULE_1__.saveAndRefresh();
}

const addCategoryEl = document.querySelector('#add-category-button');
addCategoryEl.addEventListener('click', _addProject_js__WEBPACK_IMPORTED_MODULE_2__.addProject);
//-------------------------------- CATEGORY SELECTION, INITALIZE-UPDATE CATEGORY, ADD CATEGORY END --------------------------------

//

_projects_js__WEBPACK_IMPORTED_MODULE_1__.initalize();
initalizeCategories();
initalizeDates();




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   createNewTask: () => (/* binding */ createNewTask),
/* harmony export */   initalize: () => (/* binding */ initalize),
/* harmony export */   loaded: () => (/* binding */ loaded),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   refreshUI: () => (/* binding */ refreshUI),
/* harmony export */   saveAndRefresh: () => (/* binding */ saveAndRefresh)
/* harmony export */ });
/* harmony import */ var _saveSystem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveSystem.js */ "./src/saveSystem.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




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

function createNewProject(projectName = 'Project Name') {
  const newProject = new Project(projectName);
  projects.push(newProject);
  saveAndRefresh();
  (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.initalizeCategories)();
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
  _saveSystem_js__WEBPACK_IMPORTED_MODULE_0__.storage.save(projects);
  // Render the task
  (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.renderTaskBox)(title, description, dueDate, priority, task, assignedProject);
}

function initalize() {
  loadTasks();
  firstTimeTest();
}

function loadTasks() {
  if (_saveSystem_js__WEBPACK_IMPORTED_MODULE_0__.storage.isFirstTimeLoad() === true) return; // skip if it's the first time loading
  projects = _saveSystem_js__WEBPACK_IMPORTED_MODULE_0__.storage.load();
  loaded = true;
  refreshUI();
}

function saveAndRefresh() {
  _saveSystem_js__WEBPACK_IMPORTED_MODULE_0__.storage.save(projects);
  refreshUI();
}

function refreshUI() {
  document.querySelector('.task-view').innerHTML = '';

  // Render loaded tasks to page
  projects.forEach((project) => {
    // Filter by project
    if (filterByProject(_index_js__WEBPACK_IMPORTED_MODULE_2__.selectedCategory, project.projectName)) {
      project.objects.forEach((task) => {
        //Filter by date
        if (filterByDate(_index_js__WEBPACK_IMPORTED_MODULE_2__.selectedDate, task.dueDate)) {
          (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.renderTaskBox)(
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




/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeModal: () => (/* binding */ removeModal),
/* harmony export */   renderTaskBox: () => (/* binding */ renderTaskBox)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTask.js */ "./src/editTask.js");



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
    (0,_editTask_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(objectReference, projectReference);
  });
  editButton.addEventListener('dblclick', () => {
    console.log(' DOUBLE CLCICKED ');

    projectReference.objects.splice(
      projectReference.objects.indexOf(objectReference),
      1
    );
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.saveAndRefresh)();
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsZ0hBQWdILElBQUksa0JBQWtCO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sYUFBYSxhQUFhLE1BQU0sYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFXO0FBQ2YsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBVztBQUNmLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSzJCO0FBQ2M7QUFDakM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTRTs7Ozs7Ozs7Ozs7Ozs7O0FDL0tGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekIyQztBQUNyQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBYztBQUNsQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NDOzs7Ozs7O1VDdkd0QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2F2ZVN5c3RlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xyXG4gICAgLS1ib2R5LWJnOiAjREVERURFO1xyXG4gICAgLS13aGl0ZS1iZzogI0Y5RjlGOTtcclxuICAgIC0tcHJpbWFyeTogI0ZGOTgzODtcclxuICAgIC0tc2Vjb25kYXJ5OiAjMkUyRTJFO1xyXG59XHJcblxyXG4qe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWJnKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxucHtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLndoaXRlLXRleHR7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYmcpO1xyXG59XHJcblxyXG4uYWN0aXZlLXRleHR7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZsZXgtYWxpZ24tY2VudGVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4gXHJcbi5oaWRkZW57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgcGFkZGluZzogMC41NXJlbSAxLjFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgbGluZWFyO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeXtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgIGJvcmRlcjogdmFyKC0tc2Vjb25kYXJ5KSAycHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNTVyZW0gMS4xcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcclxufVxyXG5cclxuLmJ0bjpob3ZlciwgLmJ0bi1zZWNvbmRhcnk6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bjphY3RpdmUsIC5idG4tc2Vjb25kYXJ5OmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKiogTEFZT1VUICoqKioqKioqKioqKioqKi9cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtYmcsICNGOUY5RjkpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMnB4IDEzcHggMXB4IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4xMCk7XHJcbn1cclxuXHJcbiNsZWZ0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW0gMHJlbSAwcmVtIDAuNjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LCAjMkUyRTJFKTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4jcmlnaHR7XHJcbiAgICBmbGV4OiA2O1xyXG4gICAgbWFyZ2luOiAzcmVtO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcblxyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLnRhc2stdmlld3tcclxuICAgIGZsZXg6IDEwO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxufVxyXG5cclxuLnRhc2stdmlldzo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxufVxyXG4gIFxyXG4udGFzay12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4gIFxyXG4udGFzay12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYm90dG9te1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLyoqKioqKioqKioqKioqKiBMQVlPVVQgRU5EICoqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKiogQURELUVESVQgVEFTSyBNT0RBTCAqKioqKioqKioqKioqKiovXHJcbi5tb2RhbHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTJweCAxM3B4IDFweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMDUpO1xyXG5cclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5tb2RhbCBoMntcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubW9kYWwgbGFiZWx7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1kaXYgc2VsZWN0e1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWRpdiBpbnB1dCwgLmlucHV0LWRpdiBzZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAjNzI3MjcyIDFweCBzb2xpZDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycyBsaW5lYXI7XHJcbn1cclxuXHJcbi5pbnB1dC1kaXYgaW5wdXQ6Zm9jdXMsIC5pbnB1dC1kaXYgc2VsZWN0OmZvY3Vze1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tcHJpbWFyeSkgMXB4IHNvbGlkO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWRpdntcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5idXR0b25zLWRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKiBBREQtRURJVCBUQVNLIE1PREFMIEVORCAqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqIFRBU0sgQk9YICoqKioqKioqKioqKioqKi9cclxuLnRhc2stYm94e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMnB4IDEzcHggMXB4IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4wMik7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnRhc2stYm94OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFzay1ib3ggaDI6aG92ZXIsIC50YXNrLWJveCBwOmhvdmVye1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4udGFzay1kb25lIC5mbGV4e1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4vKiBTaG93IG1vcmUgYW5kIGVkaXQgaWNvbnMgKi9cclxuLmZhLWNoZXZyb24tZG93biwgLmZhLXBlbi10by1zcXVhcmV7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xyXG59XHJcblxyXG4uZmEtY2hldnJvbi1kb3duOmhvdmVyLCAuZmEtcGVuLXRvLXNxdWFyZTpob3ZlcntcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4udGFzay1kb25lIGgyLCAudGFzay1kb25lIHB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5wcmlvcml0eXtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGNjU2NTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLnRhc2stZGF0ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLnNlZS1tb3Jle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG59XHJcblxyXG4uc2VlLW1vcmUgaTpudGgtY2hpbGQoMil7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07XHJcbn1cclxuXHJcbi50YXNrLWRlc2N7XHJcbiAgICBtYXgtd2lkdGg6IDI1dnc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi50YXNrLWJveC1leHRlbmRlZHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuXHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEycHggMTNweCAxcHggcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjA1KTtcclxufVxyXG5cclxuLnRhc2stYm94LWV4dGVuZGVkIHB7XHJcbiAgICBtYXgtd2lkdGg6IDQwdnc7XHJcbiAgICBtYXgtd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBub3JtYWw7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi50YXNrLWJveC1leHRlbmRlZCAuaGlkZGVue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKiogVEFTSyBCT1ggRU5EICoqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKiogU0lERUJBUiAqKioqKioqKioqKioqKiovXHJcblxyXG4vKiBQcm9maWxlIHNlY3Rpb24gKi9cclxuI3Byb2ZpbGUtaW1ne1xyXG4gICAgd2lkdGg6IDMuNzVyZW07XHJcbiAgICBoZWlnaHQ6IDMuNzVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbiNwcm9maWxlLWltZzpob3ZlcntcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxufVxyXG5cclxuI3Byb2ZpbGUtbmFtZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogLnByb2ZpbGV7XHJcblxyXG59ICovXHJcbi8qIFByb2ZpbGUgc2VjdGlvbiBlbmQqL1xyXG5cclxuLyogVmlldyB0eXBlIHNlY3Rpb24gKi9cclxuLnZpZXctdHlwZSBoMywgI3Byb2plY3RzIGgze1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XHJcbn1cclxuXHJcbi52aWV3LXR5cGUgaDM6aG92ZXIsICNwcm9qZWN0cyBoMzpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnZpZXctdHlwZSBoMzphY3RpdmUsICNwcm9qZWN0cyBoMzphY3RpdmV7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XHJcbn1cclxuLyogVmlldyB0eXBlIHNlY3Rpb24gZW5kICovXHJcblxyXG4vKiBDYXRlZ29yaWVzIHNlY3Rpb24qL1xyXG5cclxuLmNhdGVnb3JpZXN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZoO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcy10aXRsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMtdGl0bGUgZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLWRpdmlkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjE3LCAyMTcsIDIxNywgMC42KTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAwLjFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4jYWRkLWNhdGVnb3J5LWJ1dHRvbntcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XHJcbn1cclxuXHJcbiNhZGQtY2F0ZWdvcnktYnV0dG9uOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcclxufVxyXG5cclxuLmNhdGVnb3J5LWVkaXQtYnRue1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWJnKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1lZGl0LWJ0bjpob3ZlcntcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhdGVnb3J5LWVkaXQtYnRuOmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJ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Q3RCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQSwwQkFBMEI7O0FBRTFCLHNCQUFzQjs7QUFFdEI7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQ0FBb0M7O0lBRXBDLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWJvZHktYmc6ICNERURFREU7XFxyXFxuICAgIC0td2hpdGUtYmc6ICNGOUY5Rjk7XFxyXFxuICAgIC0tcHJpbWFyeTogI0ZGOTgzODtcXHJcXG4gICAgLS1zZWNvbmRhcnk6ICMyRTJFMkU7XFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1iZyk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDN7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxucHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLXRleHR7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1iZyk7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtdGV4dHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtYWxpZ24tY2VudGVye1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4gXFxyXFxuLmhpZGRlbntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bntcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjU1cmVtIDEuMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1zZWNvbmRhcnl7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgICBib3JkZXI6IHZhcigtLXNlY29uZGFyeSkgMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41NXJlbSAxLjFyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIsIC5idG4tc2Vjb25kYXJ5OmhvdmVye1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG46YWN0aXZlLCAuYnRuLXNlY29uZGFyeTphY3RpdmV7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiBMQVlPVVQgKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi5jb250YWluZXJ7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIGhlaWdodDogODUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtYmcsICNGOUY5RjkpO1xcclxcbiAgICBib3gtc2hhZG93OiAxMHB4IDEycHggMTNweCAxcHggcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjEwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnR7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtIDByZW0gMHJlbSAwLjYyNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LCAjMkUyRTJFKTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHR7XFxyXFxuICAgIGZsZXg6IDY7XFxyXFxuICAgIG1hcmdpbjogM3JlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxyXFxuXFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXZpZXd7XFxyXFxuICAgIGZsZXg6IDEwO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gICAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDZweDtcXHJcXG59XFxyXFxuICBcXHJcXG4udGFzay12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLnRhc2stdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbXtcXHJcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuLyoqKioqKioqKioqKioqKiBMQVlPVVQgRU5EICoqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqIEFERC1FRElUIFRBU0sgTU9EQUwgKioqKioqKioqKioqKioqL1xcclxcbi5tb2RhbHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTJweCAxM3B4IDFweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMDUpO1xcclxcblxcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaDJ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBsYWJlbHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWRpdiBzZWxlY3R7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1kaXYgaW5wdXQsIC5pbnB1dC1kaXYgc2VsZWN0e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogIzcyNzI3MiAxcHggc29saWQ7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWRpdiBpbnB1dDpmb2N1cywgLmlucHV0LWRpdiBzZWxlY3Q6Zm9jdXN7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXByaW1hcnkpIDFweCBzb2xpZDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWRpdntcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtZGl2e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qKioqKioqKioqKioqKiogQURELUVESVQgVEFTSyBNT0RBTCBFTkQgKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi8qKioqKioqKioqKioqKiogVEFTSyBCT1ggKioqKioqKioqKioqKioqL1xcclxcbi50YXNrLWJveHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTJweCAxM3B4IDFweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMDIpO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJveDpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1ib3ggaDI6aG92ZXIsIC50YXNrLWJveCBwOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRvbmUgLmZsZXh7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2hvdyBtb3JlIGFuZCBlZGl0IGljb25zICovXFxyXFxuLmZhLWNoZXZyb24tZG93biwgLmZhLXBlbi10by1zcXVhcmV7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5mYS1jaGV2cm9uLWRvd246aG92ZXIsIC5mYS1wZW4tdG8tc3F1YXJlOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxyXFxufVxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi50YXNrLWRvbmUgaDIsIC50YXNrLWRvbmUgcHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eXtcXHJcXG4gICAgY29sb3I6ICNGRkY7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRjY1NjU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kYXRle1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlZS1tb3Jle1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWUtbW9yZSBpOm50aC1jaGlsZCgyKXtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNje1xcclxcbiAgICBtYXgtd2lkdGg6IDI1dnc7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYm94LWV4dGVuZGVke1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTJweCAxM3B4IDFweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1ib3gtZXh0ZW5kZWQgcHtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MHZ3O1xcclxcbiAgICBtYXgtd2lkdGg6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvdmVyZmxvdzogbm9ybWFsO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYm94LWV4dGVuZGVkIC5oaWRkZW57XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqIFRBU0sgQk9YIEVORCAqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiBTSURFQkFSICoqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4vKiBQcm9maWxlIHNlY3Rpb24gKi9cXHJcXG4jcHJvZmlsZS1pbWd7XFxyXFxuICAgIHdpZHRoOiAzLjc1cmVtO1xcclxcbiAgICBoZWlnaHQ6IDMuNzVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGUtaW1nOmhvdmVye1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGUtbmFtZXtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAucHJvZmlsZXtcXHJcXG5cXHJcXG59ICovXFxyXFxuLyogUHJvZmlsZSBzZWN0aW9uIGVuZCovXFxyXFxuXFxyXFxuLyogVmlldyB0eXBlIHNlY3Rpb24gKi9cXHJcXG4udmlldy10eXBlIGgzLCAjcHJvamVjdHMgaDN7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4udmlldy10eXBlIGgzOmhvdmVyLCAjcHJvamVjdHMgaDM6aG92ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXctdHlwZSBoMzphY3RpdmUsICNwcm9qZWN0cyBoMzphY3RpdmV7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcclxcbn1cXHJcXG4vKiBWaWV3IHR5cGUgc2VjdGlvbiBlbmQgKi9cXHJcXG5cXHJcXG4vKiBDYXRlZ29yaWVzIHNlY3Rpb24qL1xcclxcblxcclxcbi5jYXRlZ29yaWVze1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcmllcy10aXRsZXtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcmllcy10aXRsZSBkaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3JpZXMtZGl2aWRlcntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxNywgMjE3LCAyMTcsIDAuNik7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDAuMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1jYXRlZ29yeS1idXR0b257XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbiNhZGQtY2F0ZWdvcnktYnV0dG9uOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5LWVkaXQtYnRue1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYmcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnktZWRpdC1idG46aG92ZXJ7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeS1lZGl0LWJ0bjphY3RpdmV7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCwgcHJvamVjdHMsIHNhdmVBbmRSZWZyZXNoIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XHJcbmltcG9ydCB7IHJlbW92ZU1vZGFsIH0gZnJvbSAnLi91aS5qcyc7XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xyXG4gIC8vIE1vZGFsXHJcbiAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuXHJcbiAgLy8gTW9kYWwgaGVhZGVyXHJcbiAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgTmV3IENhdGVnb3J5JztcclxuXHJcbiAgLy8gSW5wdXQgZGl2XHJcbiAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1kaXYnKTtcclxuXHJcbiAgLy8gQ2F0ZWdvcnkgbmFtZSBpbnB1dFxyXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdDYXRlZ29yeSBOYW1lJztcclxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgdGl0bGVJbnB1dC5pZCA9ICdjYXRlZ29yeS1pbnB1dCc7XHJcbiAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBhIGNhdGVnb3J5IG5hbWUnO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcblxyXG4gIC8vIEJ1dHRvbnNcclxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWRpdicpO1xyXG5cclxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLXNlY29uZGFyeScpO1xyXG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBhZGRUYXNrQnRuLmlkID0gJ2NvbmZpcm0tYWRkLXRhc2snO1xyXG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUgQ2F0ZWdvcnknO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBBREQgVEFTSyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gSW5wdXQgY29udHJvbFxyXG4gICAgbGV0IGVycm9yID0gZmFsc2U7XHJcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICB0aXRsZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlcnJvciA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTmV3UHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKTtcclxuICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93LXJldmVyc2UnO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XHJcblxyXG4gIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYWRkSWNvbi5jbGFzc0xpc3QgPSAnZmEtc29saWQgZmEtcGx1cyc7XHJcbiAgYWRkSWNvbi5zdHlsZS5jb2xvciA9ICcjZmZmJztcclxuICBhZGRJY29uLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzAuMjVyZW0nO1xyXG5cclxuICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZEljb24pO1xyXG5cclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcclxuXHJcbiAgLy8gQXBwZW5kIGNoaWxkcyB0byBtb2RhbFxyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSk7XHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChpbnB1dERpdik7XHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRUYXNrRGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgYWRkUHJvamVjdCB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVOZXdUYXNrIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XHJcbmltcG9ydCB7IHJlbW92ZU1vZGFsIH0gZnJvbSAnLi91aS5qcyc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJBZGRUYXNrTW9kYWwocHJvamVjdExpc3QpIHtcclxuICAvLyBNb2RhbFxyXG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcblxyXG4gIC8vIE1vZGFsIGhlYWRlclxyXG4gIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG5cclxuICAvLyBJbnB1dCBkaXZcclxuICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWRpdicpO1xyXG5cclxuICAvLyBUaXRsZSBpbnB1dFxyXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUtaW5wdXQnO1xyXG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnQWRkIGEgdGl0bGUnO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAvLyBEZXNjcmlwdGlvbiBpbnB1dFxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb24taW5wdXQnO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnQWRkIGEgZGVzY3JpcHRpb24nO1xyXG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG5cclxuICAvLyBEYXRlIGlucHV0XHJcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcclxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gIGRhdGVJbnB1dC5pZCA9ICdkYXRlLWlucHV0JztcclxuICBkYXRlSW5wdXQucGxhY2Vob2xkZXIgPSAnZGQvbW0veXl5eSc7XHJcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xyXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuXHJcbiAgLy8gUHJpb3JpdHkgaW5wdXRcclxuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xyXG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICBwcmlvcml0eUlucHV0LmlkID0gJ3ByaW9yaXR5LWlucHV0JztcclxuICBjb25zdCBsb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgbG93UC52YWx1ZSA9ICdsb3cnO1xyXG4gIGxvd1AudGV4dENvbnRlbnQgPSAnTG93JztcclxuXHJcbiAgY29uc3QgbWVkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gIG1lZFAudmFsdWUgPSAnbWVkaXVtJztcclxuICBtZWRQLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XHJcblxyXG4gIGNvbnN0IGhpZ1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICBoaWdQLnZhbHVlID0gJ2hpZ2gnO1xyXG4gIGhpZ1AudGV4dENvbnRlbnQgPSAnSGlnaCc7XHJcblxyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xyXG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93UCk7XHJcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWRQKTtcclxuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGhpZ1ApO1xyXG5cclxuICAvLyBQcm9qZWN0IGlucHV0XHJcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xyXG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHByb2plY3RJbnB1dC5pZCA9ICdwcmlvcml0eS1pbnB1dCc7XHJcblxyXG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcclxuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XHJcblxyXG4gIC8vIExvb3AgdGhyb3VnaCBwcm9qZWN0cyBhbmQgZ2V0IHByb2plY3QgbmFtZXMsIG1ha2UgdGhlbSBhbiBvcHRpb25cclxuICBpZiAocHJvamVjdExpc3QgIT0gJycpIHtcclxuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgY29uc3QgcE5hbWUgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIGVsZW1lbnQudmFsdWUgPSBwTmFtZTtcclxuICAgICAgZWxlbWVudC50ZXh0ID0gcE5hbWU7XHJcbiAgICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gQXBwZW5kIGFsbCB0aGUgaW5wdXRzIHRvIGlucHV0RGl2XHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZChkYXRlRGl2KTtcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcblxyXG4gIC8vIEJ1dHRvbnNcclxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWRpdicpO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIENBTkNFTCBCVVRUT04gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1zZWNvbmRhcnknKTtcclxuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZW1vdmVNb2RhbCgpO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQUREIFRBU0sgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGFkZFRhc2tCdG4uaWQgPSAnY29uZmlybS1hZGQtdGFzayc7XHJcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xyXG5cclxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gSW5wdXQgY29udHJvbFxyXG4gICAgbGV0IGVycm9yID0gZmFsc2U7XHJcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICB0aXRsZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChkZXNjcmlwdGlvbklucHV0LnZhbHVlID09ICcnKSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSAncmVkJztcclxuICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICBkYXRlSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSAncmVkJztcclxuICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGVycm9yID09PSB0cnVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOZXdUYXNrKFxyXG4gICAgICBwcm9qZWN0SW5wdXQudmFsdWUsXHJcbiAgICAgIHRpdGxlSW5wdXQudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXHJcbiAgICAgIGRhdGVJbnB1dC52YWx1ZSxcclxuICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSxcclxuICAgICAgJydcclxuICAgICk7XHJcbiAgICByZW1vdmVNb2RhbCgpO1xyXG4gIH0pO1xyXG5cclxuICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgYWRkVGFza0J0bi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ3Jvdy1yZXZlcnNlJztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xyXG5cclxuICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGFkZEljb24uY2xhc3NMaXN0ID0gJ2ZhLXNvbGlkIGZhLXBsdXMnO1xyXG4gIGFkZEljb24uc3R5bGUuY29sb3IgPSAnI2ZmZic7XHJcblxyXG4gIGFkZFRhc2tCdG4uYXBwZW5kQ2hpbGQoYWRkSWNvbik7XHJcblxyXG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG5cclxuICAvLyBBcHBlbmQgY2hpbGRzIHRvIG1vZGFsXHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGlucHV0RGl2KTtcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJBZGRUYXNrTW9kYWwgfTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMsIHNhdmVBbmRSZWZyZXNoIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XHJcbmltcG9ydCB7IGNoYW5nZUFjdGl2ZUNhdGVnb3J5LCBpbml0YWxpemVDYXRlZ29yaWVzIH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcbmltcG9ydCB7IHJlbW92ZU1vZGFsIH0gZnJvbSAnLi91aS5qcyc7XHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0UmVmZXJlbmNlKSB7XHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0UmVmZXJlbmNlLnByb2plY3ROYW1lO1xyXG5cclxuICAvLyBNb2RhbFxyXG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcblxyXG4gIC8vIE1vZGFsIGhlYWRlclxyXG4gIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnRWRpdCBDYXRlZ29yeSc7XHJcblxyXG4gIC8vIElucHV0IGRpdlxyXG4gIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZGl2Jyk7XHJcblxyXG4gIC8vIFRpdGxlIGlucHV0XHJcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ0NhdGVnb3J5IE5hbWUnO1xyXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlLWlucHV0JztcclxuICB0aXRsZUlucHV0LnZhbHVlID0gcHJvamVjdE5hbWU7XHJcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcblxyXG4gIC8vIEFwcGVuZCBhbGwgdGhlIGlucHV0cyB0byBpbnB1dERpdlxyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuXHJcbiAgLy8gQnV0dG9uc1xyXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5Jyk7XHJcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVtb3ZlTW9kYWwoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGFkZFRhc2tCdG4uaWQgPSAnY29uZmlybS1hZGQtdGFzayc7XHJcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBBREQgVEFTSyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gSW5wdXQgY29udHJvbFxyXG4gICAgbGV0IGVycm9yID0gZmFsc2U7XHJcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICB0aXRsZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlcnJvciA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHJvamVjdFJlZmVyZW5jZS5wcm9qZWN0TmFtZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcblxyXG4gICAgc2F2ZUFuZFJlZnJlc2goKTtcclxuICAgIGluaXRhbGl6ZUNhdGVnb3JpZXMoKTtcclxuICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93LXJldmVyc2UnO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XHJcblxyXG4gIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYWRkSWNvbi5jbGFzc0xpc3QgPSAnZmEtc29saWQgZmEtcGx1cyc7XHJcbiAgYWRkSWNvbi5zdHlsZS5jb2xvciA9ICcjZmZmJztcclxuICBhZGRJY29uLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzAuMjVyZW0nO1xyXG5cclxuICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZEljb24pO1xyXG5cclxuICBjb25zdCByZW1vdmVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVtb3ZlVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5Jyk7XHJcbiAgcmVtb3ZlVGFza0J0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUgQ2F0ZWdvcnknO1xyXG4gIHJlbW92ZVRhc2tCdG4uc3R5bGUubWFyZ2luID0gJzAgMC41cmVtJztcclxuICByZW1vdmVUYXNrQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gJyNGRjY1NjUnO1xyXG4gIHJlbW92ZVRhc2tCdG4uc3R5bGUuY29sb3IgPSAnI0ZGNjU2NSc7XHJcblxyXG4gIHJlbW92ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNhdGVnb3J5PycpKSB7XHJcbiAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHByb2plY3RSZWZlcmVuY2UpLCAxKTtcclxuICAgICAgY2hhbmdlQWN0aXZlQ2F0ZWdvcnkoJ0FsbCcpO1xyXG4gICAgICBzYXZlQW5kUmVmcmVzaCgpO1xyXG4gICAgICBpbml0YWxpemVDYXRlZ29yaWVzKCk7XHJcbiAgICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKHJlbW92ZVRhc2tCdG4pO1xyXG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XHJcblxyXG4gIC8vIEFwcGVuZCBjaGlsZHMgdG8gbW9kYWxcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0Rpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGVkaXRQcm9qZWN0IH07XHJcbiIsIi8qXHJcbnByb2plY3RSZWZlcmVuY2Uub2JqZWN0cy5pbmRleE9mKG9iamVjdFJlZmVyZW5jZSlcclxuICAgIC8vIEZpbmQgdGhlIG9iamVjdCBpbiBvYmplY3RzIGFycmF5XHJcbiAgICBwcm9qZWN0UmVmZXJlbmNlLm9iamVjdHMuc3BsaWNlKFxyXG4gICAgICBwcm9qZWN0UmVmZXJlbmNlLm9iamVjdHMuaW5kZXhPZihvYmplY3RSZWZlcmVuY2UpLFxyXG4gICAgICAxXHJcbiAgICApO1xyXG5cclxuKi9cclxuXHJcbmltcG9ydCB7IHByb2plY3RzLCBjcmVhdGVOZXdUYXNrLCBzYXZlQW5kUmVmcmVzaCB9IGZyb20gJy4vcHJvamVjdHMuanMnO1xyXG5pbXBvcnQgeyByZW1vdmVNb2RhbCB9IGZyb20gJy4vdWkuanMnO1xyXG5cclxuZnVuY3Rpb24gZWRpdFRhc2sob2JqZWN0UmVmZXJlbmNlLCBwcm9qZWN0UmVmZXJlbmNlKSB7XHJcbiAgY29uc3QgdGl0bGUgPSBvYmplY3RSZWZlcmVuY2UudGl0bGU7XHJcbiAgY29uc3QgZGVzYyA9IG9iamVjdFJlZmVyZW5jZS5kZXNjcmlwdGlvbjtcclxuICBjb25zdCBkYXRlID0gb2JqZWN0UmVmZXJlbmNlLmR1ZURhdGU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBvYmplY3RSZWZlcmVuY2UucHJpb3JpdHk7XHJcbiAgLy8gTW9kYWxcclxuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkVGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xyXG5cclxuICAvLyBNb2RhbCBoZWFkZXJcclxuICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XHJcblxyXG4gIC8vIElucHV0IGRpdlxyXG4gIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZGl2Jyk7XHJcblxyXG4gIC8vIFRpdGxlIGlucHV0XHJcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcclxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZS1pbnB1dCc7XHJcbiAgdGl0bGVJbnB1dC52YWx1ZSA9IHRpdGxlO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAvLyBEZXNjcmlwdGlvbiBpbnB1dFxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb24taW5wdXQnO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkZXNjO1xyXG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG5cclxuICAvLyBEYXRlIGlucHV0XHJcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcclxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gIGRhdGVJbnB1dC5pZCA9ICdkYXRlLWlucHV0JztcclxuICBkYXRlSW5wdXQudmFsdWUgPSBkYXRlO1xyXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcblxyXG4gIC8vIFByaW9yaXR5IGlucHV0XHJcbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcclxuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgcHJpb3JpdHlJbnB1dC5pZCA9ICdwcmlvcml0eS1pbnB1dCc7XHJcbiAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHByaW9yaXR5O1xyXG4gIGNvbnN0IGxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICBsb3dQLnZhbHVlID0gJ2xvdyc7XHJcbiAgbG93UC50ZXh0Q29udGVudCA9ICdMb3cnO1xyXG5cclxuICBjb25zdCBtZWRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgbWVkUC52YWx1ZSA9ICdtZWRpdW0nO1xyXG4gIG1lZFAudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcclxuXHJcbiAgY29uc3QgaGlnUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gIGhpZ1AudmFsdWUgPSAnaGlnaCc7XHJcbiAgaGlnUC50ZXh0Q29udGVudCA9ICdIaWdoJztcclxuXHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3dQKTtcclxuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG1lZFApO1xyXG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnUCk7XHJcblxyXG4gIC8vIFByb2plY3QgaW5wdXRcclxuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCc7XHJcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgcHJvamVjdElucHV0LmlkID0gJ3ByaW9yaXR5LWlucHV0JztcclxuXHJcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xyXG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcclxuXHJcbiAgLy8gTG9vcCB0aHJvdWdoIHByb2plY3RzIGFuZCBnZXQgcHJvamVjdCBuYW1lcywgbWFrZSB0aGVtIGFuIG9wdGlvblxyXG4gIGlmIChwcm9qZWN0cyAhPSAnJykge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBwTmFtZSA9IHByb2plY3QucHJvamVjdE5hbWU7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgZWxlbWVudC52YWx1ZSA9IHBOYW1lO1xyXG4gICAgICBlbGVtZW50LnRleHQgPSBwTmFtZTtcclxuICAgICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm9qZWN0SW5wdXQudmFsdWUgPSBwcm9qZWN0UmVmZXJlbmNlLnByb2plY3ROYW1lO1xyXG5cclxuICAvLyBBcHBlbmQgYWxsIHRoZSBpbnB1dHMgdG8gaW5wdXREaXZcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcclxuXHJcbiAgLy8gQnV0dG9uc1xyXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5Jyk7XHJcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVtb3ZlTW9kYWwoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGFkZFRhc2tCdG4uaWQgPSAnY29uZmlybS1hZGQtdGFzayc7XHJcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBBREQgVEFTSyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gSW5wdXQgY29udHJvbFxyXG4gICAgbGV0IGVycm9yID0gZmFsc2U7XHJcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICB0aXRsZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChkZXNjcmlwdGlvbklucHV0LnZhbHVlID09ICcnKSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSAncmVkJztcclxuICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICBkYXRlSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSAncmVkJztcclxuICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGVycm9yID09PSB0cnVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBvYmplY3RSZWZlcmVuY2UudGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgb2JqZWN0UmVmZXJlbmNlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICAgIG9iamVjdFJlZmVyZW5jZS5kdWVEYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgb2JqZWN0UmVmZXJlbmNlLnByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcclxuXHJcbiAgICAvLyBUcmFuc2ZlciB0YXNrIHRvIG5ldyBwcm9qZWN0IGlmIG5lZWRlZFxyXG4gICAgaWYgKHByb2plY3RJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpICE9IHByb2plY3RSZWZlcmVuY2UucHJvamVjdE5hbWUpIHtcclxuICAgICAgLy8gRGVsZXRlIGZyb20gb2xkIHByb2plY3RcclxuICAgICAgcHJvamVjdFJlZmVyZW5jZS5vYmplY3RzLnNwbGljZShcclxuICAgICAgICBwcm9qZWN0UmVmZXJlbmNlLm9iamVjdHMuaW5kZXhPZihvYmplY3RSZWZlcmVuY2UpLFxyXG4gICAgICAgIDFcclxuICAgICAgKTtcclxuICAgICAgLy8gQ3JlYXRlIG5ldyB0YXNrIHdpdGggZWRpdGVkIHZhbHVlc1xyXG4gICAgICBjcmVhdGVOZXdUYXNrKFxyXG4gICAgICAgIHByb2plY3RJbnB1dC52YWx1ZSxcclxuICAgICAgICB0aXRsZUlucHV0LnZhbHVlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXHJcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlLFxyXG4gICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUsXHJcbiAgICAgICAgJydcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQW5kUmVmcmVzaCgpO1xyXG4gICAgcmVtb3ZlTW9kYWwoKTtcclxuICB9KTtcclxuXHJcbiAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3ctcmV2ZXJzZSc7XHJcbiAgYWRkVGFza0J0bi5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XHJcbiAgYWRkVGFza0J0bi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJztcclxuXHJcbiAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBhZGRJY29uLmNsYXNzTGlzdCA9ICdmYS1zb2xpZCBmYS1wbHVzJztcclxuICBhZGRJY29uLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xyXG4gIGFkZEljb24uc3R5bGUubWFyZ2luUmlnaHQgPSAnMC4yNXJlbSc7XHJcblxyXG4gIGFkZFRhc2tCdG4uYXBwZW5kQ2hpbGQoYWRkSWNvbik7XHJcblxyXG4gIGNvbnN0IHJlbW92ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICByZW1vdmVUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1zZWNvbmRhcnknKTtcclxuICByZW1vdmVUYXNrQnRuLnRleHRDb250ZW50ID0gJ1JlbW92ZSBUYXNrJztcclxuICByZW1vdmVUYXNrQnRuLnN0eWxlLm1hcmdpbiA9ICcwIDAuNXJlbSc7XHJcbiAgcmVtb3ZlVGFza0J0bi5zdHlsZS5ib3JkZXJDb2xvciA9ICcjRkY2NTY1JztcclxuICByZW1vdmVUYXNrQnRuLnN0eWxlLmNvbG9yID0gJyNGRjY1NjUnO1xyXG5cclxuICByZW1vdmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrPycpKSB7XHJcbiAgICAgIHByb2plY3RSZWZlcmVuY2Uub2JqZWN0cy5zcGxpY2UoXHJcbiAgICAgICAgcHJvamVjdFJlZmVyZW5jZS5vYmplY3RzLmluZGV4T2Yob2JqZWN0UmVmZXJlbmNlKSxcclxuICAgICAgICAxXHJcbiAgICAgICk7XHJcbiAgICAgIHNhdmVBbmRSZWZyZXNoKCk7XHJcbiAgICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKHJlbW92ZVRhc2tCdG4pO1xyXG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XHJcblxyXG4gIC8vIEFwcGVuZCBjaGlsZHMgdG8gbW9kYWxcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0Rpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGVkaXRUYXNrIH07XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgKiBhcyB0b2RvIGZyb20gJy4vcHJvamVjdHMuanMnO1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnLi9hZGRQcm9qZWN0LmpzJztcclxuaW1wb3J0IHsgcmVuZGVyQWRkVGFza01vZGFsIH0gZnJvbSAnLi9hZGRUYXNrLmpzJztcclxuaW1wb3J0IHsgZWRpdFByb2plY3QgfSBmcm9tICcuL2VkaXRQcm9qZWN0LmpzJztcclxuXHJcbi8vKysrKysrKysrKysrKysrKysrKysrKysrKysrIEFERCBUQVNLIEJVVFRPTiArKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2tNb2RlKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2tNb2RlKCkge1xyXG4gIGlmICh0b2RvLmxvYWRlZCA9PSBmYWxzZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICByZW5kZXJBZGRUYXNrTW9kYWwodG9kby5wcm9qZWN0cyk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQUREIFRBU0sgQlVUVE9OIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLysrKysrKysrKysrKysrKysrKysrKysrKysrKyBGSUxURVIgQlkgREFURSArKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxubGV0IHNlbGVjdGVkRGF0ZSA9ICdUb2RheSc7XHJcbmNvbnN0IGRhdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xyXG5cclxuZnVuY3Rpb24gaW5pdGFsaXplRGF0ZXMoKSB7XHJcbiAgY29uc3QgZGF0ZUZpbHRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctdHlwZScpO1xyXG4gIGNvbnN0IGRhdGVCdXR0b25zID0gWy4uLmRhdGVGaWx0ZXJFbC5jaGlsZHJlbl07XHJcblxyXG4gIGRhdGVCdXR0b25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNoYW5nZUFjdGl2ZURhdGUoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAvLyBDaGFuZ2UgY29sb3JzIG9mIGFjdGl2ZSBhbmQgaW5hY3RpdmUgY2F0ZWdvcnkgbmFtZXNcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXctdHlwZSBoMycpLmZvckVhY2goKHJlZikgPT4ge1xyXG4gICAgICAgIHJlZi5jbGFzc0xpc3QgPSAnd2hpdGUtdGV4dCc7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdCA9ICdhY3RpdmUtdGV4dCc7XHJcblxyXG4gICAgICBkYXRlVGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZURhdGUobmV3RGF0ZSkge1xyXG4gIHNlbGVjdGVkRGF0ZSA9IG5ld0RhdGU7XHJcbiAgdG9kby5yZWZyZXNoVUkoKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGSUxURVIgQlkgREFURSBFTkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLysrKysrKysrKysrKysrKysrKysrKysrKysrKyBDQVRFR09SWSBTRUxFQ1RJT04sIElOSVRBTElaRS1VUERBVEUgQ0FURUdPUlksIEFERCBDQVRFR09SWSArKysrKysrKysrKysrKysrKysrKysrKysrKytcclxubGV0IHNlbGVjdGVkQ2F0ZWdvcnkgPSAnQWxsJztcclxuXHJcbi8vIFVwZGF0ZSBjYXRlZ29yaWVzXHJcbmZ1bmN0aW9uIGluaXRhbGl6ZUNhdGVnb3JpZXMoKSB7XHJcbiAgY29uc3QgY2F0ZWdvcmllc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XHJcblxyXG4gIGNhdGVnb3JpZXNFbC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGgzLnRleHRDb250ZW50ID0gJ0FsbCc7XHJcbiAgaDMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRleHQnKTtcclxuICBjYXRlZ29yaWVzRWwuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuICBoMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNoYW5nZUFjdGl2ZUNhdGVnb3J5KGgzLnRleHRDb250ZW50KTtcclxuICAgIHJlc2V0T3RoZXJDYXRlZ29yaWVzKCk7XHJcbiAgICBoMy5jbGFzc0xpc3QgPSAnYWN0aXZlLXRleHQnO1xyXG4gIH0pO1xyXG5cclxuICAvLyBDcmVhdGUgY2F0ZWdvcnkgZWxlbWVudHMgZnJvbSBzdG9yYWdlXHJcbiAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB3cmFwcGVyLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcclxuICAgIHdyYXBwZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XHJcblxyXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaDMudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xyXG4gICAgaDMuY2xhc3NMaXN0LmFkZCgnd2hpdGUtdGV4dCcpO1xyXG5cclxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBlZGl0QnRuLmNsYXNzTGlzdCA9ICdjYXRlZ29yeS1lZGl0LWJ0biBmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmUgaGlkZGVuJztcclxuXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGgzKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcblxyXG4gICAgY2F0ZWdvcmllc0VsLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG5cclxuICAgIGgzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjaGFuZ2VBY3RpdmVDYXRlZ29yeShoMy50ZXh0Q29udGVudCk7XHJcbiAgICAgIHJlc2V0T3RoZXJDYXRlZ29yaWVzKCk7XHJcbiAgICAgIGgzLmNsYXNzTGlzdCA9ICdhY3RpdmUtdGV4dCc7XHJcbiAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBlZGl0UHJvamVjdChwcm9qZWN0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldE90aGVyQ2F0ZWdvcmllcygpIHtcclxuICAvLyBDaGFuZ2UgY29sb3JzIG9mIGFjdGl2ZSBhbmQgaW5hY3RpdmUgY2F0ZWdvcnkgbmFtZXMgYW5kIGhpZGUgZWRpdCBidXR0b25zXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3RzIGgzJykuZm9yRWFjaCgocmVmKSA9PiB7XHJcbiAgICByZWYuY2xhc3NMaXN0ID0gJ3doaXRlLXRleHQnO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0cyBpJykuZm9yRWFjaCgocmVmKSA9PiB7XHJcbiAgICByZWYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUNhdGVnb3J5KG5ld0NhdCkge1xyXG4gIHNlbGVjdGVkQ2F0ZWdvcnkgPSBuZXdDYXQ7XHJcbiAgdG9kby5zYXZlQW5kUmVmcmVzaCgpO1xyXG59XHJcblxyXG5jb25zdCBhZGRDYXRlZ29yeUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jYXRlZ29yeS1idXR0b24nKTtcclxuYWRkQ2F0ZWdvcnlFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENBVEVHT1JZIFNFTEVDVElPTiwgSU5JVEFMSVpFLVVQREFURSBDQVRFR09SWSwgQUREIENBVEVHT1JZIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy9cclxuXHJcbnRvZG8uaW5pdGFsaXplKCk7XHJcbmluaXRhbGl6ZUNhdGVnb3JpZXMoKTtcclxuaW5pdGFsaXplRGF0ZXMoKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgaW5pdGFsaXplQ2F0ZWdvcmllcyxcclxuICBzZWxlY3RlZENhdGVnb3J5LFxyXG4gIHNlbGVjdGVkRGF0ZSxcclxuICBjaGFuZ2VBY3RpdmVDYXRlZ29yeSxcclxufTtcclxuIiwiaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc2F2ZVN5c3RlbS5qcyc7XHJcbmltcG9ydCB7IHJlbmRlclRhc2tCb3ggfSBmcm9tICcuL3VpLmpzJztcclxuaW1wb3J0IHtcclxuICBpbml0YWxpemVDYXRlZ29yaWVzLFxyXG4gIHNlbGVjdGVkQ2F0ZWdvcnksXHJcbiAgc2VsZWN0ZWREYXRlLFxyXG59IGZyb20gJy4vaW5kZXguanMnO1xyXG5cclxubGV0IHByb2plY3RzID0gW107XHJcbmxldCBsb2FkZWQgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgdGhpcy5vYmplY3RzID0gW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcclxuICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIHRoaXMubm90ZXMgPSBub3RlcztcclxufVxyXG5cclxuZnVuY3Rpb24gZmlyc3RUaW1lVGVzdCgpIHtcclxuICBpZiAoc3RvcmFnZS5pc0ZpcnN0VGltZUxvYWQoKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gU2tpcCBpZiBpdCdzIG5vdCBmaXJzdCB0aW1lIGxvYWRpbmdcclxuICAvLyBDcmVhdGUgZGVmYXVsdCBwcm9qZWN0IGlmIGl0J3MgdGhlIGZpcnN0IHRpbWVcclxuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnKTtcclxuICBwcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcclxuXHJcbiAgbG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgZXhhbXBsZSB0YXNrXHJcbiAgY3JlYXRlTmV3VGFzayhcclxuICAgICdEZWZhdWx0IFByb2plY3QnLFxyXG4gICAgJ0JhxZ9sxLFrJyxcclxuICAgICdEZW5lbWUgYcOnxLFrbGFtYXPEsScsXHJcbiAgICAnMmJkb25lJyxcclxuICAgICdoaWdoJyxcclxuICAgICdHZWxpcnNlIGVraW1lJ1xyXG4gICk7XHJcblxyXG4gIC8vIFNhdmUgdGhlIHRhc2sgYW5kIHByb2plY3RcclxuICBzdG9yYWdlLnNhdmUocHJvamVjdHMpO1xyXG5cclxuICBjb25zb2xlLmxvZygnTE9BREVEIEZJUlNUIFRJTUUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZSA9ICdQcm9qZWN0IE5hbWUnKSB7XHJcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gIHNhdmVBbmRSZWZyZXNoKCk7XHJcbiAgaW5pdGFsaXplQ2F0ZWdvcmllcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XHJcbiAgaWYgKGxvYWRlZCA9PT0gZmFsc2UpIHtcclxuICAgIC8vIENhbGwgdGhlIG5ld3Rhc2sgZnVuY3Rpb24gMXMgbGF0ZXIgaWYgdGhlIHNhdmVzIG5vdCBsb2FkZWQgeWV0XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY3JlYXRlTmV3VGFzayhwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcclxuICAvLyBGaW5kIHRoZSBwcm9qZWN0IG9iamVjdFxyXG4gIGxldCBhc3NpZ25lZFByb2plY3Q7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQucHJvamVjdE5hbWUgPT09IHByb2plY3QpIHtcclxuICAgICAgYXNzaWduZWRQcm9qZWN0ID0gZWxlbWVudDtcclxuICAgIH1cclxuICB9KTtcclxuICAvLyBBZGQgdGFzayB0byBwcm9qZWN0IG9iamVjdCBpZiB0aGUgJ3Byb2plY3QnIGlucHV0IGlzIGF2YWlsYWJsZVxyXG4gIGlmIChhc3NpZ25lZFByb2plY3QgIT09IG51bGwpIHtcclxuICAgIGxldCB0ZXN0ID0gYXNzaWduZWRQcm9qZWN0Lm9iamVjdHMucHVzaCh0YXNrKTtcclxuICAgIGNvbnNvbGUubG9nKHRlc3QpO1xyXG4gIH1cclxuICAvLyBTYXZlIHRoZSB0YXNrIGFuZCBwcm9qZWN0c1xyXG4gIHN0b3JhZ2Uuc2F2ZShwcm9qZWN0cyk7XHJcbiAgLy8gUmVuZGVyIHRoZSB0YXNrXHJcbiAgcmVuZGVyVGFza0JveCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCB0YXNrLCBhc3NpZ25lZFByb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0YWxpemUoKSB7XHJcbiAgbG9hZFRhc2tzKCk7XHJcbiAgZmlyc3RUaW1lVGVzdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVGFza3MoKSB7XHJcbiAgaWYgKHN0b3JhZ2UuaXNGaXJzdFRpbWVMb2FkKCkgPT09IHRydWUpIHJldHVybjsgLy8gc2tpcCBpZiBpdCdzIHRoZSBmaXJzdCB0aW1lIGxvYWRpbmdcclxuICBwcm9qZWN0cyA9IHN0b3JhZ2UubG9hZCgpO1xyXG4gIGxvYWRlZCA9IHRydWU7XHJcbiAgcmVmcmVzaFVJKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVBbmRSZWZyZXNoKCkge1xyXG4gIHN0b3JhZ2Uuc2F2ZShwcm9qZWN0cyk7XHJcbiAgcmVmcmVzaFVJKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hVSSgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay12aWV3JykuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIC8vIFJlbmRlciBsb2FkZWQgdGFza3MgdG8gcGFnZVxyXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIC8vIEZpbHRlciBieSBwcm9qZWN0XHJcbiAgICBpZiAoZmlsdGVyQnlQcm9qZWN0KHNlbGVjdGVkQ2F0ZWdvcnksIHByb2plY3QucHJvamVjdE5hbWUpKSB7XHJcbiAgICAgIHByb2plY3Qub2JqZWN0cy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgLy9GaWx0ZXIgYnkgZGF0ZVxyXG4gICAgICAgIGlmIChmaWx0ZXJCeURhdGUoc2VsZWN0ZWREYXRlLCB0YXNrLmR1ZURhdGUpKSB7XHJcbiAgICAgICAgICByZW5kZXJUYXNrQm94KFxyXG4gICAgICAgICAgICB0YXNrLnRpdGxlLFxyXG4gICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUsXHJcbiAgICAgICAgICAgIHRhc2sucHJpb3JpdHksXHJcbiAgICAgICAgICAgIHRhc2ssXHJcbiAgICAgICAgICAgIHByb2plY3RcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyQnlQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCwgcHJvamVjdE5hbWUpIHtcclxuICBpZiAoXHJcbiAgICBzZWxlY3RlZFByb2plY3QudG9Mb3dlckNhc2UoKSA9PSAnYWxsJyB8fFxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0LnRvTG93ZXJDYXNlKCkgPT0gcHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJCeURhdGUoc2VsZWN0ZWRUeXBlLCB0YXNrRHVlRGF0ZSkge1xyXG4gIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBsZXQgc2VsZWN0ZWRUeXBlTG93ZXIgPSBzZWxlY3RlZFR5cGUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgbGV0IHRhc2tEYXkgPSB0YXNrRHVlRGF0ZS5zdWJzdHJpbmcoOCwgMTApO1xyXG4gIGxldCB0YXNrTW9udGggPSB0YXNrRHVlRGF0ZS5zdWJzdHJpbmcoNSwgNyk7XHJcbiAgbGV0IHRhc2tZZWFyID0gdGFza0R1ZURhdGUuc3Vic3RyaW5nKDAsIDQpO1xyXG5cclxuICBpZiAoc2VsZWN0ZWRUeXBlTG93ZXIgPT0gJ2FsbCcpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBpZiAoXHJcbiAgICBzZWxlY3RlZFR5cGVMb3dlciA9PSAndG9kYXknICYmXHJcbiAgICBkYXRlLmdldERhdGUoKSA9PSB0YXNrRGF5ICYmXHJcbiAgICBkYXRlLmdldE1vbnRoKCkgKyAxID09IHRhc2tNb250aCAmJlxyXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpID09IHRhc2tZZWFyXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKFxyXG4gICAgc2VsZWN0ZWRUeXBlTG93ZXIgPT0gJ3RoaXMgd2VlaycgJiZcclxuICAgIGRhdGUuZ2V0RGF0ZSgpIC0gdGFza0RheSA8PSA3ICYmXHJcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCkgPT0gdGFza1llYXJcclxuICApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBpZiAoXHJcbiAgICBzZWxlY3RlZFR5cGVMb3dlciA9PSAndGhpcyBtb250aCcgJiZcclxuICAgIGRhdGUuZ2V0TW9udGgoKSArIDEgPT0gdGFza01vbnRoICYmXHJcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCkgPT0gdGFza1llYXJcclxuICApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBpbml0YWxpemUsXHJcbiAgY3JlYXRlTmV3VGFzayxcclxuICBjcmVhdGVOZXdQcm9qZWN0LFxyXG4gIHJlZnJlc2hVSSxcclxuICBzYXZlQW5kUmVmcmVzaCxcclxuICBwcm9qZWN0cyxcclxuICBsb2FkZWQsXHJcbn07XHJcbiIsImNvbnN0IHN0b3JhZ2UgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XHJcbiAgICBjb25zdCBzdHJpbmdpZmllZCA9IEpTT04ucGFyc2Uoc2F2ZSk7XHJcbiAgICBjb25zb2xlLmxvZygnTE9BREVEJyk7XHJcbiAgICBjb25zb2xlLmxvZyhzdHJpbmdpZmllZCk7XHJcbiAgICByZXR1cm4gc3RyaW5naWZpZWQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2F2ZSA9IChwcm9qZWN0cykgPT4ge1xyXG4gICAgY29uc3Qgc3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0cyk7XHJcbiAgICBjb25zdCBzYXZlID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgc3RyaW5naWZpZWQpO1xyXG4gICAgY29uc29sZS5sb2coJ1NBVkVEJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNGaXJzdFRpbWVMb2FkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpID09PSBudWxsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFyU2F2ZXMgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTtcclxuICB9O1xyXG4gIHJldHVybiB7IGxvYWQsIHNhdmUsIGlzRmlyc3RUaW1lTG9hZCwgY2xlYXJTYXZlcyB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgc3RvcmFnZSB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVOZXdUYXNrLCBzYXZlQW5kUmVmcmVzaCB9IGZyb20gJy4vcHJvamVjdHMuanMnO1xyXG5pbXBvcnQgeyBlZGl0VGFzayB9IGZyb20gJy4vZWRpdFRhc2suanMnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGFza0JveChcclxuICB0aXRsZSA9ICdUYXNrIFRpdGxlJyxcclxuICBkZXNjID0gJ1Rhc2sgRGVzYycsXHJcbiAgZGF0ZSA9ICdUYXNrIGRhdGUnLFxyXG4gIHByaW9yaXR5ID0gJycsXHJcbiAgb2JqZWN0UmVmZXJlbmNlLFxyXG4gIHByb2plY3RSZWZlcmVuY2VcclxuKSB7XHJcbiAgY29uc3QgdGFza0JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRhc2tCb3hEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1ib3gnKTtcclxuICB0YXNrQm94RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9vZ2xlRXh0ZW5kZWQpO1xyXG5cclxuICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGVmdERpdi5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XHJcblxyXG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuXHJcbiAgY29uc3QgbGVmdElubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgbGVmdElubmVyRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgbGVmdElubmVyRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjKTtcclxuXHJcbiAgbGVmdERpdi5hcHBlbmRDaGlsZChjaGVja0JveCk7XHJcbiAgbGVmdERpdi5hcHBlbmRDaGlsZChsZWZ0SW5uZXJEaXYpO1xyXG5cclxuICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZmxleC1hbGlnbi1jZW50ZXInKTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHByaW9yaXR5RWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknLCAnaGlkZGVuJyk7XHJcblxyXG4gIGNvbnN0IGNsYWVuZGFySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBjbGFlbmRhckljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2FsZW5kYXItZGF5cycpO1xyXG4gIGNsYWVuZGFySWNvbi5zdHlsZS5jb2xvciA9ICcjMkUyRTJFJztcclxuXHJcbiAgY29uc3QgZGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZGF0ZVRleHQuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlJyk7XHJcblxyXG4gIGNvbnN0IHNlZU1vcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzZWVNb3JlLmNsYXNzTGlzdC5hZGQoJ3NlZS1tb3JlJyk7XHJcblxyXG4gIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2hldnJvbi1kb3duJyk7XHJcblxyXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJywgJ2ZhLXBlbi10by1zcXVhcmUnLCAnaGlkZGVuJyk7XHJcbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGVkaXRUYXNrKG9iamVjdFJlZmVyZW5jZSwgcHJvamVjdFJlZmVyZW5jZSk7XHJcbiAgfSk7XHJcbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCcgRE9VQkxFIENMQ0lDS0VEICcpO1xyXG5cclxuICAgIHByb2plY3RSZWZlcmVuY2Uub2JqZWN0cy5zcGxpY2UoXHJcbiAgICAgIHByb2plY3RSZWZlcmVuY2Uub2JqZWN0cy5pbmRleE9mKG9iamVjdFJlZmVyZW5jZSksXHJcbiAgICAgIDFcclxuICAgICk7XHJcbiAgICBzYXZlQW5kUmVmcmVzaCgpO1xyXG4gIH0pO1xyXG5cclxuICBzZWVNb3JlLmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XHJcbiAgc2VlTW9yZS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuXHJcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlFbCk7XHJcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQoY2xhZW5kYXJJY29uKTtcclxuICByaWdodERpdi5hcHBlbmRDaGlsZChkYXRlVGV4dCk7XHJcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQoc2VlTW9yZSk7XHJcblxyXG4gIHRhc2tCb3hEaXYuYXBwZW5kQ2hpbGQobGVmdERpdik7XHJcbiAgdGFza0JveERpdi5hcHBlbmRDaGlsZChyaWdodERpdik7XHJcblxyXG4gIC8vIFNldCB2YWx1ZXNcclxuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IGRlc2M7XHJcbiAgcHJpb3JpdHlFbC50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xyXG4gIGRhdGVUZXh0LnRleHRDb250ZW50ID0gZGF0ZTtcclxuXHJcbiAgY29uc3QgdGFza1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay12aWV3Jyk7XHJcblxyXG4gIHRhc2tWaWV3LmFwcGVuZENoaWxkKHRhc2tCb3hEaXYpO1xyXG4gIGNvbnNvbGUubG9nKCdCQVNUSUsnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9vZ2xlRXh0ZW5kZWQoZSkge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgY29uc29sZS5sb2coJ0hFTExPIEZST00gSScsIGUudGFyZ2V0LCB0aGlzKTtcclxuICBpZiAoXHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stYm94JykgfHxcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtY2hldnJvbi1kb3duJylcclxuICApIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1ib3gtZXh0ZW5kZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU1vZGFsKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLnJlbW92ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJUYXNrQm94LCByZW1vdmVNb2RhbCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==