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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\r\n\r\n:root{\r\n    --body-bg: #DEDEDE;\r\n    --white-bg: #F9F9F9;\r\n    --primary: #FF9838;\r\n    --secondary: #2E2E2E;\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody{\r\n    font-family: 'Poppins', sans-serif;\r\n    background: var(--body-bg);\r\n    width: 100%;\r\n    height: 100vh;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nh1{\r\n    color: var(--secondary);\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n}\r\n\r\nh2{\r\n    font-size: 1.25rem;\r\n    font-weight: 500;\r\n}\r\n\r\nh3{\r\n    font-size: 1.25rem;\r\n    font-weight: 400;\r\n}\r\n\r\np{\r\n    color: var(--secondary);\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n}\r\n\r\n.white-text{\r\n    color: var(--white-bg);\r\n}\r\n\r\n.active-text{\r\n    color: var(--primary);\r\n}\r\n\r\n.flex{\r\n    display: flex;\r\n}\r\n\r\n.flex-align-center{\r\n    align-items: center;\r\n}\r\n \r\n.hidden{\r\n    display: none;\r\n}\r\n\r\n.btn{\r\n    background: var(--primary);\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 0.625rem;\r\n    padding: 0.55rem 1.1rem;\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.btn-secondary{\r\n    background: none;\r\n    color: var(--secondary);\r\n    border: var(--secondary) 2px solid;\r\n    border-radius: 0.625rem;\r\n    padding: 0.55rem 1.1rem;\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.btn:hover, .btn-secondary:hover{\r\n    transform: translateY(-1px);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:active, .btn-secondary:active{\r\n    transform: translateY(0px);\r\n    filter: brightness(0.9);\r\n}\r\n\r\n/*************** LAYOUT ***************/\r\n\r\n.container{\r\n    width: 85%;\r\n    height: 85%;\r\n    display: flex;\r\n\r\n    border-radius: 0.625rem;\r\n    background: var(--white-bg, #F9F9F9);\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.10);\r\n}\r\n\r\n#left{\r\n    border-radius: 0.625rem 0rem 0rem 0.625rem;\r\n    background: var(--secondary, #2E2E2E);\r\n    flex: 1;\r\n    padding: 2rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n#right{\r\n    flex: 6;\r\n    margin: 3rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 2.5rem;\r\n\r\n    flex: 1;\r\n}\r\n\r\n.task-view{\r\n    flex: 10;\r\n    overflow-y: scroll;\r\n    scrollbar-color: var(--secondary);\r\n    scrollbar-width: thin;\r\n    scroll-behavior: smooth;\r\n    padding: 0 0.5rem;\r\n}\r\n\r\n.task-view::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n  \r\n.task-view::-webkit-scrollbar-track {\r\n    background-color: #e6e6e6;\r\n    border-radius: 10px;\r\n}\r\n  \r\n.task-view::-webkit-scrollbar-thumb {\r\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #dfdfdf;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom{\r\n    margin-top: 1.5rem;\r\n    text-align: right;\r\n}\r\n/*************** LAYOUT END ***************/\r\n\r\n/*************** ADD-EDIT TASK MODAL ***************/\r\n.modal{\r\n    background: #fff;\r\n\r\n    position: fixed;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    padding: 2rem 4rem;\r\n    border-radius: 0.625rem;\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.05);\r\n\r\n    z-index: 2;\r\n}\r\n\r\n.modal h2{\r\n    margin-bottom: 1rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.modal label{\r\n    color: var(--secondary);\r\n    font-size: 1.15rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.input-div select{\r\n    background: none;\r\n}\r\n\r\n.input-div input, .input-div select{\r\n    width: 100%;\r\n\r\n    padding: 0.25rem;\r\n    padding-left: 0.5rem;\r\n    margin-top: 0.25rem;\r\n    margin-bottom: 1rem;\r\n\r\n    border: none;\r\n    border-bottom: #727272 1px solid;\r\n\r\n    transition: border 0.2s linear;\r\n}\r\n\r\n.input-div input:focus, .input-div select:focus{\r\n    border-bottom: var(--primary) 1px solid;\r\n    outline: none;\r\n}\r\n\r\n.input-div{\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.buttons-div{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n\r\n/*************** ADD-EDIT TASK MODAL END ***************/\r\n\r\n/*************** TASK BOX ***************/\r\n.task-box{\r\n    border-radius: 0.625rem;\r\n    background: #FFF;\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.02);\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.task-box:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.task-box h2:hover, .task-box p:hover{\r\n    cursor: default;\r\n}\r\n\r\n.task-done .flex{\r\n    opacity: 0.6;\r\n}\r\n\r\n/* Show more and edit icons */\r\n.fa-chevron-down, .fa-pen-to-square{\r\n    transition: all 0.1s ease;\r\n}\r\n\r\n.fa-chevron-down:hover, .fa-pen-to-square:hover{\r\n    color: var(--primary);\r\n    transform: scale(1.15);\r\n}\r\n/****************************/\r\n\r\n.task-done h2, .task-done p{\r\n    text-decoration: line-through;\r\n}\r\n\r\ninput[type=\"checkbox\"]{\r\n    margin-left: 0.25rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.priority{\r\n    color: #FFF;\r\n    background: #FF6565;\r\n    font-size: 0.8rem;\r\n    font-style: normal;\r\n    border-radius: 0.625rem;\r\n    padding: 0.25rem 0.5rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.task-date{\r\n    margin-left: 0.5rem;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.see-more{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n\r\n    margin-left: 0.7rem;\r\n    margin-right: 0.7rem;\r\n}\r\n\r\n.see-more i:nth-child(2){\r\n    margin-top: 0.6rem;\r\n}\r\n\r\n.task-desc{\r\n    max-width: 25vw;\r\n    display: block;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.task-box-extended{\r\n    padding: 2rem 1rem;\r\n\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.05);\r\n}\r\n\r\n.task-box-extended p{\r\n    max-width: 40vw;\r\n    max-width: auto;\r\n    display: block;\r\n    overflow: normal;\r\n    white-space: normal;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.task-box-extended .hidden{\r\n    display: block;\r\n}\r\n\r\n/*************** TASK BOX END ***************/\r\n\r\n/*************** SIDEBAR ***************/\r\n\r\n/* Profile section */\r\n#profile-img{\r\n    width: 3.75rem;\r\n    height: 3.75rem;\r\n    border-radius: 50%;\r\n}\r\n\r\n#profile-img:hover{\r\n    filter: brightness(1.2);\r\n    transform: scale(1.02);\r\n}\r\n\r\n#profile-name{\r\n    color: white;\r\n}\r\n\r\n/* .profile{\r\n\r\n} */\r\n/* Profile section end*/\r\n\r\n/* View type section */\r\n.view-type h3, #projects h3{\r\n    transition: all 0.15s ease;\r\n}\r\n\r\n.view-type h3:hover, #projects h3:hover{\r\n    transform: scale(1.02);\r\n    color: var(--primary);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n.view-type h3:active, #projects h3:active{\r\n    transform: scale(1);\r\n    filter: brightness(0.9);\r\n}\r\n/* View type section end */\r\n\r\n/* Categories section*/\r\n\r\n.categories{\r\n    margin-bottom: 20vh;\r\n}\r\n\r\n.categories-title{\r\n    color: white;\r\n}\r\n\r\n.categories-title div{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.categories-divider{\r\n    width: 100%;\r\n    height: 1px;\r\n    border-radius: 10px;\r\n    background: rgba(217, 217, 217, 0.6);\r\n\r\n    margin-top: 0.1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n#add-category-button{\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n#add-category-button:hover{\r\n    cursor: pointer;\r\n    color: var(--primary) !important;\r\n    filter: brightness(1.1);\r\n}"],"sourceRoot":""}]);
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

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.classList.add('btn-secondary');

  const addTaskBtn = document.createElement('button');
  addTaskBtn.id = 'confirm-add-task';
  addTaskBtn.classList.add('btn');
  addTaskBtn.textContent = 'Confirm';
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
/* harmony export */   initalizeCategories: () => (/* binding */ initalizeCategories),
/* harmony export */   selectedCategory: () => (/* binding */ selectedCategory),
/* harmony export */   selectedDate: () => (/* binding */ selectedDate)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");
/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTask.js */ "./src/addTask.js");





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

    // Change colors of active and inactive category names
    document.querySelectorAll('#projects h3').forEach((ref) => {
      ref.classList = 'white-text';
    });
    h3.classList = 'active-text';
  });

  _projects_js__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsZ0hBQWdILElBQUksa0JBQWtCO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sYUFBYSxhQUFhLE1BQU0sYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsY0FBYyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0s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QTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYjJFO0FBQ3JDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQWdCO0FBQ3BCLElBQUksbURBQVc7QUFDZixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGd0I7QUFDUjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBVztBQUNmLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RLOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0U7QUFDbEM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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L3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2F2ZVN5c3RlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xyXG4gICAgLS1ib2R5LWJnOiAjREVERURFO1xyXG4gICAgLS13aGl0ZS1iZzogI0Y5RjlGOTtcclxuICAgIC0tcHJpbWFyeTogI0ZGOTgzODtcclxuICAgIC0tc2Vjb25kYXJ5OiAjMkUyRTJFO1xyXG59XHJcblxyXG4qe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWJnKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxucHtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLndoaXRlLXRleHR7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYmcpO1xyXG59XHJcblxyXG4uYWN0aXZlLXRleHR7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZsZXgtYWxpZ24tY2VudGVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4gXHJcbi5oaWRkZW57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgcGFkZGluZzogMC41NXJlbSAxLjFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgbGluZWFyO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeXtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgIGJvcmRlcjogdmFyKC0tc2Vjb25kYXJ5KSAycHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNTVyZW0gMS4xcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcclxufVxyXG5cclxuLmJ0bjpob3ZlciwgLmJ0bi1zZWNvbmRhcnk6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bjphY3RpdmUsIC5idG4tc2Vjb25kYXJ5OmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKiogTEFZT1VUICoqKioqKioqKioqKioqKi9cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtYmcsICNGOUY5RjkpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMnB4IDEzcHggMXB4IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4xMCk7XHJcbn1cclxuXHJcbiNsZWZ0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW0gMHJlbSAwcmVtIDAuNjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LCAjMkUyRTJFKTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4jcmlnaHR7XHJcbiAgICBmbGV4OiA2O1xyXG4gICAgbWFyZ2luOiAzcmVtO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcblxyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLnRhc2stdmlld3tcclxuICAgIGZsZXg6IDEwO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxufVxyXG5cclxuLnRhc2stdmlldzo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxufVxyXG4gIFxyXG4udGFzay12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4gIFxyXG4udGFzay12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYm90dG9te1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLyoqKioqKioqKioqKioqKiBMQVlPVVQgRU5EICoqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKiogQURELUVESVQgVEFTSyBNT0RBTCAqKioqKioqKioqKioqKiovXHJcbi5tb2RhbHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTJweCAxM3B4IDFweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMDUpO1xyXG5cclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5tb2RhbCBoMntcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubW9kYWwgbGFiZWx7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1kaXYgc2VsZWN0e1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWRpdiBpbnB1dCwgLmlucHV0LWRpdiBzZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAjNzI3MjcyIDFweCBzb2xpZDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycyBsaW5lYXI7XHJcbn1cclxuXHJcbi5pbnB1dC1kaXYgaW5wdXQ6Zm9jdXMsIC5pbnB1dC1kaXYgc2VsZWN0OmZvY3Vze1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tcHJpbWFyeSkgMXB4IHNvbGlkO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWRpdntcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5idXR0b25zLWRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKiBBREQtRURJVCBUQVNLIE1PREFMIEVORCAqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqIFRBU0sgQk9YICoqKioqKioqKioqKioqKi9cclxuLnRhc2stYm94e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMnB4IDEzcHggMXB4IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4wMik7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnRhc2stYm94OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFzay1ib3ggaDI6aG92ZXIsIC50YXNrLWJveCBwOmhvdmVye1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4udGFzay1kb25lIC5mbGV4e1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4vKiBTaG93IG1vcmUgYW5kIGVkaXQgaWNvbnMgKi9cclxuLmZhLWNoZXZyb24tZG93biwgLmZhLXBlbi10by1zcXVhcmV7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xyXG59XHJcblxyXG4uZmEtY2hldnJvbi1kb3duOmhvdmVyLCAuZmEtcGVuLXRvLXNxdWFyZTpob3ZlcntcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4udGFzay1kb25lIGgyLCAudGFzay1kb25lIHB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5wcmlvcml0eXtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGNjU2NTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLnRhc2stZGF0ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLnNlZS1tb3Jle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG59XHJcblxyXG4uc2VlLW1vcmUgaTpudGgtY2hpbGQoMil7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07XHJcbn1cclxuXHJcbi50YXNrLWRlc2N7XHJcbiAgICBtYXgtd2lkdGg6IDI1dnc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi50YXNrLWJveC1leHRlbmRlZHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuXHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEycHggMTNweCAxcHggcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjA1KTtcclxufVxyXG5cclxuLnRhc2stYm94LWV4dGVuZGVkIHB7XHJcbiAgICBtYXgtd2lkdGg6IDQwdnc7XHJcbiAgICBtYXgtd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBub3JtYWw7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi50YXNrLWJveC1leHRlbmRlZCAuaGlkZGVue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKiogVEFTSyBCT1ggRU5EICoqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKiogU0lERUJBUiAqKioqKioqKioqKioqKiovXHJcblxyXG4vKiBQcm9maWxlIHNlY3Rpb24gKi9cclxuI3Byb2ZpbGUtaW1ne1xyXG4gICAgd2lkdGg6IDMuNzVyZW07XHJcbiAgICBoZWlnaHQ6IDMuNzVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbiNwcm9maWxlLWltZzpob3ZlcntcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxufVxyXG5cclxuI3Byb2ZpbGUtbmFtZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogLnByb2ZpbGV7XHJcblxyXG59ICovXHJcbi8qIFByb2ZpbGUgc2VjdGlvbiBlbmQqL1xyXG5cclxuLyogVmlldyB0eXBlIHNlY3Rpb24gKi9cclxuLnZpZXctdHlwZSBoMywgI3Byb2plY3RzIGgze1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XHJcbn1cclxuXHJcbi52aWV3LXR5cGUgaDM6aG92ZXIsICNwcm9qZWN0cyBoMzpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnZpZXctdHlwZSBoMzphY3RpdmUsICNwcm9qZWN0cyBoMzphY3RpdmV7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XHJcbn1cclxuLyogVmlldyB0eXBlIHNlY3Rpb24gZW5kICovXHJcblxyXG4vKiBDYXRlZ29yaWVzIHNlY3Rpb24qL1xyXG5cclxuLmNhdGVnb3JpZXN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZoO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcy10aXRsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMtdGl0bGUgZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLWRpdmlkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjE3LCAyMTcsIDIxNywgMC42KTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAwLjFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4jYWRkLWNhdGVnb3J5LWJ1dHRvbntcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XHJcbn1cclxuXHJcbiNhZGQtY2F0ZWdvcnktYnV0dG9uOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxhQUFhOztJQUViLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2Qixl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QUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUEsNkNBQTZDOztBQUU3Qyx3Q0FBd0M7O0FBRXhDLG9CQUFvQjtBQUNwQjtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0dBRUc7QUFDSCx1QkFBdUI7O0FBRXZCLHNCQUFzQjtBQUN0QjtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0EsMEJBQTBCOztBQUUxQixzQkFBc0I7O0FBRXRCO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0NBQW9DOztJQUVwQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWJvZHktYmc6ICNERURFREU7XFxyXFxuICAgIC0td2hpdGUtYmc6ICNGOUY5Rjk7XFxyXFxuICAgIC0tcHJpbWFyeTogI0ZGOTgzODtcXHJcXG4gICAgLS1zZWNvbmRhcnk6ICMyRTJFMkU7XFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1iZyk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDN7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxucHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLXRleHR7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1iZyk7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtdGV4dHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtYWxpZ24tY2VudGVye1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4gXFxyXFxuLmhpZGRlbntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bntcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjU1cmVtIDEuMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1zZWNvbmRhcnl7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgICBib3JkZXI6IHZhcigtLXNlY29uZGFyeSkgMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41NXJlbSAxLjFyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIsIC5idG4tc2Vjb25kYXJ5OmhvdmVye1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG46YWN0aXZlLCAuYnRuLXNlY29uZGFyeTphY3RpdmV7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiBMQVlPVVQgKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi5jb250YWluZXJ7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIGhlaWdodDogODUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtYmcsICNGOUY5RjkpO1xcclxcbiAgICBib3gtc2hhZG93OiAxMHB4IDEycHggMTNweCAxcHggcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjEwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnR7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtIDByZW0gMHJlbSAwLjYyNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LCAjMkUyRTJFKTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHR7XFxyXFxuICAgIGZsZXg6IDY7XFxyXFxuICAgIG1hcmdpbjogM3JlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxyXFxuXFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXZpZXd7XFxyXFxuICAgIGZsZXg6IDEwO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gICAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDZweDtcXHJcXG59XFxyXFxuICBcXHJcXG4udGFzay12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLnRhc2stdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbXtcXHJcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuLyoqKioqKioqKioqKioqKiBMQVlPVVQgRU5EICoqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqIEFERC1FRElUIFRBU0sgTU9EQUwgKioqKioqKioqKioqKioqL1xcclxcbi5tb2RhbHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTJweCAxM3B4IDFweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMDUpO1xcclxcblxcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaDJ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBsYWJlbHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWRpdiBzZWxlY3R7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1kaXYgaW5wdXQsIC5pbnB1dC1kaXYgc2VsZWN0e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogIzcyNzI3MiAxcHggc29saWQ7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWRpdiBpbnB1dDpmb2N1cywgLmlucHV0LWRpdiBzZWxlY3Q6Zm9jdXN7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXByaW1hcnkpIDFweCBzb2xpZDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWRpdntcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtZGl2e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qKioqKioqKioqKioqKiogQURELUVESVQgVEFTSyBNT0RBTCBFTkQgKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi8qKioqKioqKioqKioqKiogVEFTSyBCT1ggKioqKioqKioqKioqKioqL1xcclxcbi50YXNrLWJveHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTJweCAxM3B4IDFweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMDIpO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJveDpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1ib3ggaDI6aG92ZXIsIC50YXNrLWJveCBwOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRvbmUgLmZsZXh7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2hvdyBtb3JlIGFuZCBlZGl0IGljb25zICovXFxyXFxuLmZhLWNoZXZyb24tZG93biwgLmZhLXBlbi10by1zcXVhcmV7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5mYS1jaGV2cm9uLWRvd246aG92ZXIsIC5mYS1wZW4tdG8tc3F1YXJlOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxyXFxufVxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi50YXNrLWRvbmUgaDIsIC50YXNrLWRvbmUgcHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eXtcXHJcXG4gICAgY29sb3I6ICNGRkY7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRjY1NjU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kYXRle1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlZS1tb3Jle1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWUtbW9yZSBpOm50aC1jaGlsZCgyKXtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNje1xcclxcbiAgICBtYXgtd2lkdGg6IDI1dnc7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYm94LWV4dGVuZGVke1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTJweCAxM3B4IDFweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1ib3gtZXh0ZW5kZWQgcHtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MHZ3O1xcclxcbiAgICBtYXgtd2lkdGg6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvdmVyZmxvdzogbm9ybWFsO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYm94LWV4dGVuZGVkIC5oaWRkZW57XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqIFRBU0sgQk9YIEVORCAqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiBTSURFQkFSICoqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4vKiBQcm9maWxlIHNlY3Rpb24gKi9cXHJcXG4jcHJvZmlsZS1pbWd7XFxyXFxuICAgIHdpZHRoOiAzLjc1cmVtO1xcclxcbiAgICBoZWlnaHQ6IDMuNzVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGUtaW1nOmhvdmVye1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGUtbmFtZXtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAucHJvZmlsZXtcXHJcXG5cXHJcXG59ICovXFxyXFxuLyogUHJvZmlsZSBzZWN0aW9uIGVuZCovXFxyXFxuXFxyXFxuLyogVmlldyB0eXBlIHNlY3Rpb24gKi9cXHJcXG4udmlldy10eXBlIGgzLCAjcHJvamVjdHMgaDN7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4udmlldy10eXBlIGgzOmhvdmVyLCAjcHJvamVjdHMgaDM6aG92ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXctdHlwZSBoMzphY3RpdmUsICNwcm9qZWN0cyBoMzphY3RpdmV7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcclxcbn1cXHJcXG4vKiBWaWV3IHR5cGUgc2VjdGlvbiBlbmQgKi9cXHJcXG5cXHJcXG4vKiBDYXRlZ29yaWVzIHNlY3Rpb24qL1xcclxcblxcclxcbi5jYXRlZ29yaWVze1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcmllcy10aXRsZXtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcmllcy10aXRsZSBkaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3JpZXMtZGl2aWRlcntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxNywgMjE3LCAyMTcsIDAuNik7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDAuMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1jYXRlZ29yeS1idXR0b257XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbiNhZGQtY2F0ZWdvcnktYnV0dG9uOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QsIHByb2plY3RzLCBzYXZlQW5kUmVmcmVzaCB9IGZyb20gJy4vcHJvamVjdHMuanMnO1xyXG5pbXBvcnQgeyByZW1vdmVNb2RhbCB9IGZyb20gJy4vdWkuanMnO1xyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuICAvLyBNb2RhbFxyXG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcblxyXG4gIC8vIE1vZGFsIGhlYWRlclxyXG4gIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIE5ldyBDYXRlZ29yeSc7XHJcblxyXG4gIC8vIElucHV0IGRpdlxyXG4gIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZGl2Jyk7XHJcblxyXG4gIC8vIENhdGVnb3J5IG5hbWUgaW5wdXRcclxuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnQ2F0ZWdvcnkgTmFtZSc7XHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIHRpdGxlSW5wdXQuaWQgPSAnY2F0ZWdvcnktaW5wdXQnO1xyXG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBjYXRlZ29yeSBuYW1lJztcclxuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuXHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG5cclxuICAvLyBCdXR0b25zXHJcbiAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1kaXYnKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1zZWNvbmRhcnknKTtcclxuXHJcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGFkZFRhc2tCdG4uaWQgPSAnY29uZmlybS1hZGQtdGFzayc7XHJcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBDYXRlZ29yeSc7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEFERCBUQVNLIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBJbnB1dCBjb250cm9sXHJcbiAgICBsZXQgZXJyb3IgPSBmYWxzZTtcclxuICAgIGlmICh0aXRsZUlucHV0LnZhbHVlID09ICcnKSB7XHJcbiAgICAgIHRpdGxlSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSAncmVkJztcclxuICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGVycm9yID09PSB0cnVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpO1xyXG4gICAgcmVtb3ZlTW9kYWwoKTtcclxuICB9KTtcclxuXHJcbiAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3ctcmV2ZXJzZSc7XHJcbiAgYWRkVGFza0J0bi5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XHJcbiAgYWRkVGFza0J0bi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJztcclxuXHJcbiAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBhZGRJY29uLmNsYXNzTGlzdCA9ICdmYS1zb2xpZCBmYS1wbHVzJztcclxuICBhZGRJY29uLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xyXG4gIGFkZEljb24uc3R5bGUubWFyZ2luUmlnaHQgPSAnMC4yNXJlbSc7XHJcblxyXG4gIGFkZFRhc2tCdG4uYXBwZW5kQ2hpbGQoYWRkSWNvbik7XHJcblxyXG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG5cclxuICAvLyBBcHBlbmQgY2hpbGRzIHRvIG1vZGFsXHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGlucHV0RGl2KTtcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyBhZGRQcm9qZWN0IH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZU5ld1Rhc2sgfSBmcm9tICcuL3Byb2plY3RzLmpzJztcclxuaW1wb3J0IHsgcmVtb3ZlTW9kYWwgfSBmcm9tICcuL3VpLmpzJztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckFkZFRhc2tNb2RhbChwcm9qZWN0TGlzdCkge1xyXG4gIC8vIE1vZGFsXHJcbiAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuXHJcbiAgLy8gTW9kYWwgaGVhZGVyXHJcbiAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcblxyXG4gIC8vIElucHV0IGRpdlxyXG4gIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZGl2Jyk7XHJcblxyXG4gIC8vIFRpdGxlIGlucHV0XHJcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcclxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZS1pbnB1dCc7XHJcbiAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICdBZGQgYSB0aXRsZSc7XHJcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcblxyXG4gIC8vIERlc2NyaXB0aW9uIGlucHV0XHJcbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcclxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdkZXNjcmlwdGlvbi1pbnB1dCc7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdBZGQgYSBkZXNjcmlwdGlvbic7XHJcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XHJcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcblxyXG4gIC8vIERhdGUgaW5wdXRcclxuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgZGF0ZUlucHV0LmlkID0gJ2RhdGUtaW5wdXQnO1xyXG4gIGRhdGVJbnB1dC5wbGFjZWhvbGRlciA9ICdkZC9tbS95eXl5JztcclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XHJcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG5cclxuICAvLyBQcmlvcml0eSBpbnB1dFxyXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XHJcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHByaW9yaXR5SW5wdXQuaWQgPSAncHJpb3JpdHktaW5wdXQnO1xyXG4gIGNvbnN0IGxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICBsb3dQLnZhbHVlID0gJ2xvdyc7XHJcbiAgbG93UC50ZXh0Q29udGVudCA9ICdMb3cnO1xyXG5cclxuICBjb25zdCBtZWRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgbWVkUC52YWx1ZSA9ICdtZWRpdW0nO1xyXG4gIG1lZFAudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcclxuXHJcbiAgY29uc3QgaGlnUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gIGhpZ1AudmFsdWUgPSAnaGlnaCc7XHJcbiAgaGlnUC50ZXh0Q29udGVudCA9ICdIaWdoJztcclxuXHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3dQKTtcclxuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG1lZFApO1xyXG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnUCk7XHJcblxyXG4gIC8vIFByb2plY3QgaW5wdXRcclxuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCc7XHJcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgcHJvamVjdElucHV0LmlkID0gJ3ByaW9yaXR5LWlucHV0JztcclxuXHJcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xyXG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcclxuXHJcbiAgLy8gTG9vcCB0aHJvdWdoIHByb2plY3RzIGFuZCBnZXQgcHJvamVjdCBuYW1lcywgbWFrZSB0aGVtIGFuIG9wdGlvblxyXG4gIGlmIChwcm9qZWN0TGlzdCAhPSAnJykge1xyXG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBwTmFtZSA9IHByb2plY3QucHJvamVjdE5hbWU7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgZWxlbWVudC52YWx1ZSA9IHBOYW1lO1xyXG4gICAgICBlbGVtZW50LnRleHQgPSBwTmFtZTtcclxuICAgICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBBcHBlbmQgYWxsIHRoZSBpbnB1dHMgdG8gaW5wdXREaXZcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcclxuXHJcbiAgLy8gQnV0dG9uc1xyXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5Jyk7XHJcblxyXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBhZGRUYXNrQnRuLmlkID0gJ2NvbmZpcm0tYWRkLXRhc2snO1xyXG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQUREIFRBU0sgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIElucHV0IGNvbnRyb2xcclxuICAgIGxldCBlcnJvciA9IGZhbHNlO1xyXG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT0gJycpIHtcclxuICAgICAgdGl0bGVJbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9ICdyZWQnO1xyXG4gICAgICBlcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICBkZXNjcmlwdGlvbklucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChkYXRlSW5wdXQudmFsdWUgPT0gJycpIHtcclxuICAgICAgZGF0ZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlcnJvciA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTmV3VGFzayhcclxuICAgICAgcHJvamVjdElucHV0LnZhbHVlLFxyXG4gICAgICB0aXRsZUlucHV0LnZhbHVlLFxyXG4gICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxyXG4gICAgICBkYXRlSW5wdXQudmFsdWUsXHJcbiAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUsXHJcbiAgICAgICcnXHJcbiAgICApO1xyXG4gICAgcmVtb3ZlTW9kYWwoKTtcclxuICB9KTtcclxuXHJcbiAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3ctcmV2ZXJzZSc7XHJcbiAgYWRkVGFza0J0bi5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XHJcbiAgYWRkVGFza0J0bi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJztcclxuXHJcbiAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBhZGRJY29uLmNsYXNzTGlzdCA9ICdmYS1zb2xpZCBmYS1wbHVzJztcclxuICBhZGRJY29uLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xyXG5cclxuICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZEljb24pO1xyXG5cclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcclxuXHJcbiAgLy8gQXBwZW5kIGNoaWxkcyB0byBtb2RhbFxyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSk7XHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChpbnB1dERpdik7XHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRUYXNrRGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyQWRkVGFza01vZGFsIH07XHJcbiIsIi8qXHJcbnByb2plY3RSZWZlcmVuY2Uub2JqZWN0cy5pbmRleE9mKG9iamVjdFJlZmVyZW5jZSlcclxuICAgIC8vIEZpbmQgdGhlIG9iamVjdCBpbiBvYmplY3RzIGFycmF5XHJcbiAgICBwcm9qZWN0UmVmZXJlbmNlLm9iamVjdHMuc3BsaWNlKFxyXG4gICAgICBwcm9qZWN0UmVmZXJlbmNlLm9iamVjdHMuaW5kZXhPZihvYmplY3RSZWZlcmVuY2UpLFxyXG4gICAgICAxXHJcbiAgICApO1xyXG5cclxuKi9cclxuXHJcbmltcG9ydCB7IHByb2plY3RzLCBjcmVhdGVOZXdUYXNrLCBzYXZlQW5kUmVmcmVzaCB9IGZyb20gJy4vcHJvamVjdHMuanMnO1xyXG5pbXBvcnQgeyByZW1vdmVNb2RhbCB9IGZyb20gJy4vdWkuanMnO1xyXG5cclxuZnVuY3Rpb24gZWRpdFRhc2sob2JqZWN0UmVmZXJlbmNlLCBwcm9qZWN0UmVmZXJlbmNlKSB7XHJcbiAgY29uc3QgdGl0bGUgPSBvYmplY3RSZWZlcmVuY2UudGl0bGU7XHJcbiAgY29uc3QgZGVzYyA9IG9iamVjdFJlZmVyZW5jZS5kZXNjcmlwdGlvbjtcclxuICBjb25zdCBkYXRlID0gb2JqZWN0UmVmZXJlbmNlLmR1ZURhdGU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBvYmplY3RSZWZlcmVuY2UucHJpb3JpdHk7XHJcbiAgLy8gTW9kYWxcclxuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkVGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xyXG5cclxuICAvLyBNb2RhbCBoZWFkZXJcclxuICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XHJcblxyXG4gIC8vIElucHV0IGRpdlxyXG4gIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZGl2Jyk7XHJcblxyXG4gIC8vIFRpdGxlIGlucHV0XHJcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcclxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZS1pbnB1dCc7XHJcbiAgdGl0bGVJbnB1dC52YWx1ZSA9IHRpdGxlO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAvLyBEZXNjcmlwdGlvbiBpbnB1dFxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb24taW5wdXQnO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkZXNjO1xyXG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG5cclxuICAvLyBEYXRlIGlucHV0XHJcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcclxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gIGRhdGVJbnB1dC5pZCA9ICdkYXRlLWlucHV0JztcclxuICBkYXRlSW5wdXQudmFsdWUgPSBkYXRlO1xyXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcblxyXG4gIC8vIFByaW9yaXR5IGlucHV0XHJcbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcclxuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgcHJpb3JpdHlJbnB1dC5pZCA9ICdwcmlvcml0eS1pbnB1dCc7XHJcbiAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHByaW9yaXR5O1xyXG4gIGNvbnN0IGxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICBsb3dQLnZhbHVlID0gJ2xvdyc7XHJcbiAgbG93UC50ZXh0Q29udGVudCA9ICdMb3cnO1xyXG5cclxuICBjb25zdCBtZWRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgbWVkUC52YWx1ZSA9ICdtZWRpdW0nO1xyXG4gIG1lZFAudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcclxuXHJcbiAgY29uc3QgaGlnUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gIGhpZ1AudmFsdWUgPSAnaGlnaCc7XHJcbiAgaGlnUC50ZXh0Q29udGVudCA9ICdIaWdoJztcclxuXHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3dQKTtcclxuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG1lZFApO1xyXG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnUCk7XHJcblxyXG4gIC8vIFByb2plY3QgaW5wdXRcclxuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCc7XHJcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgcHJvamVjdElucHV0LmlkID0gJ3ByaW9yaXR5LWlucHV0JztcclxuXHJcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xyXG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcclxuXHJcbiAgLy8gTG9vcCB0aHJvdWdoIHByb2plY3RzIGFuZCBnZXQgcHJvamVjdCBuYW1lcywgbWFrZSB0aGVtIGFuIG9wdGlvblxyXG4gIGlmIChwcm9qZWN0cyAhPSAnJykge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBwTmFtZSA9IHByb2plY3QucHJvamVjdE5hbWU7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgZWxlbWVudC52YWx1ZSA9IHBOYW1lO1xyXG4gICAgICBlbGVtZW50LnRleHQgPSBwTmFtZTtcclxuICAgICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm9qZWN0SW5wdXQudmFsdWUgPSBwcm9qZWN0UmVmZXJlbmNlLnByb2plY3ROYW1lO1xyXG5cclxuICAvLyBBcHBlbmQgYWxsIHRoZSBpbnB1dHMgdG8gaW5wdXREaXZcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcclxuXHJcbiAgLy8gQnV0dG9uc1xyXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5Jyk7XHJcblxyXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBhZGRUYXNrQnRuLmlkID0gJ2NvbmZpcm0tYWRkLXRhc2snO1xyXG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQUREIFRBU0sgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIElucHV0IGNvbnRyb2xcclxuICAgIGxldCBlcnJvciA9IGZhbHNlO1xyXG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT0gJycpIHtcclxuICAgICAgdGl0bGVJbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9ICdyZWQnO1xyXG4gICAgICBlcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICBkZXNjcmlwdGlvbklucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChkYXRlSW5wdXQudmFsdWUgPT0gJycpIHtcclxuICAgICAgZGF0ZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlcnJvciA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0UmVmZXJlbmNlLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgIG9iamVjdFJlZmVyZW5jZS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICBvYmplY3RSZWZlcmVuY2UuZHVlRGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcclxuICAgIG9iamVjdFJlZmVyZW5jZS5wcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XHJcblxyXG4gICAgLy8gVHJhbnNmZXIgdGFzayB0byBuZXcgcHJvamVjdCBpZiBuZWVkZWRcclxuICAgIGlmIChwcm9qZWN0SW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSAhPSBwcm9qZWN0UmVmZXJlbmNlLnByb2plY3ROYW1lKSB7XHJcbiAgICAgIC8vIERlbGV0ZSBmcm9tIG9sZCBwcm9qZWN0XHJcbiAgICAgIHByb2plY3RSZWZlcmVuY2Uub2JqZWN0cy5zcGxpY2UoXHJcbiAgICAgICAgcHJvamVjdFJlZmVyZW5jZS5vYmplY3RzLmluZGV4T2Yob2JqZWN0UmVmZXJlbmNlKSxcclxuICAgICAgICAxXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIENyZWF0ZSBuZXcgdGFzayB3aXRoIGVkaXRlZCB2YWx1ZXNcclxuICAgICAgY3JlYXRlTmV3VGFzayhcclxuICAgICAgICBwcm9qZWN0SW5wdXQudmFsdWUsXHJcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxyXG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSxcclxuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlLFxyXG4gICAgICAgICcnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUFuZFJlZnJlc2goKTtcclxuICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93LXJldmVyc2UnO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XHJcblxyXG4gIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYWRkSWNvbi5jbGFzc0xpc3QgPSAnZmEtc29saWQgZmEtcGx1cyc7XHJcbiAgYWRkSWNvbi5zdHlsZS5jb2xvciA9ICcjZmZmJztcclxuICBhZGRJY29uLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzAuMjVyZW0nO1xyXG5cclxuICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZEljb24pO1xyXG5cclxuICBjb25zdCByZW1vdmVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVtb3ZlVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5Jyk7XHJcbiAgcmVtb3ZlVGFza0J0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUgVGFzayc7XHJcbiAgcmVtb3ZlVGFza0J0bi5zdHlsZS5tYXJnaW4gPSAnMCAwLjVyZW0nO1xyXG4gIHJlbW92ZVRhc2tCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSAnI0ZGNjU2NSc7XHJcbiAgcmVtb3ZlVGFza0J0bi5zdHlsZS5jb2xvciA9ICcjRkY2NTY1JztcclxuXHJcbiAgcmVtb3ZlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz8nKSkge1xyXG4gICAgICBwcm9qZWN0UmVmZXJlbmNlLm9iamVjdHMuc3BsaWNlKFxyXG4gICAgICAgIHByb2plY3RSZWZlcmVuY2Uub2JqZWN0cy5pbmRleE9mKG9iamVjdFJlZmVyZW5jZSksXHJcbiAgICAgICAgMVxyXG4gICAgICApO1xyXG4gICAgICBzYXZlQW5kUmVmcmVzaCgpO1xyXG4gICAgICByZW1vdmVNb2RhbCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChyZW1vdmVUYXNrQnRuKTtcclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG5cclxuICAvLyBBcHBlbmQgY2hpbGRzIHRvIG1vZGFsXHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGlucHV0RGl2KTtcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyBlZGl0VGFzayB9O1xyXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICogYXMgdG9kbyBmcm9tICcuL3Byb2plY3RzLmpzJztcclxuaW1wb3J0IHsgYWRkUHJvamVjdCB9IGZyb20gJy4vYWRkUHJvamVjdC5qcyc7XHJcbmltcG9ydCB7IHJlbmRlckFkZFRhc2tNb2RhbCB9IGZyb20gJy4vYWRkVGFzay5qcyc7XHJcblxyXG4vLysrKysrKysrKysrKysrKysrKysrKysrKysrKyBBREQgVEFTSyBCVVRUT04gKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrTW9kZSk7XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrTW9kZSgpIHtcclxuICBpZiAodG9kby5sb2FkZWQgPT0gZmFsc2UpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgcmVuZGVyQWRkVGFza01vZGFsKHRvZG8ucHJvamVjdHMpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFERCBUQVNLIEJVVFRPTiBFTkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8rKysrKysrKysrKysrKysrKysrKysrKysrKysgRklMVEVSIEJZIERBVEUgKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrXHJcbmxldCBzZWxlY3RlZERhdGUgPSAnVG9kYXknO1xyXG5jb25zdCBkYXRlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRhbGl6ZURhdGVzKCkge1xyXG4gIGNvbnN0IGRhdGVGaWx0ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LXR5cGUnKTtcclxuICBjb25zdCBkYXRlQnV0dG9ucyA9IFsuLi5kYXRlRmlsdGVyRWwuY2hpbGRyZW5dO1xyXG5cclxuICBkYXRlQnV0dG9ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjaGFuZ2VBY3RpdmVEYXRlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG5cclxuICAgICAgLy8gQ2hhbmdlIGNvbG9ycyBvZiBhY3RpdmUgYW5kIGluYWN0aXZlIGNhdGVnb3J5IG5hbWVzXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWV3LXR5cGUgaDMnKS5mb3JFYWNoKChyZWYpID0+IHtcclxuICAgICAgICByZWYuY2xhc3NMaXN0ID0gJ3doaXRlLXRleHQnO1xyXG4gICAgICB9KTtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QgPSAnYWN0aXZlLXRleHQnO1xyXG5cclxuICAgICAgZGF0ZVRpdGxlLnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VBY3RpdmVEYXRlKG5ld0RhdGUpIHtcclxuICBzZWxlY3RlZERhdGUgPSBuZXdEYXRlO1xyXG4gIHRvZG8ucmVmcmVzaFVJKCk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRklMVEVSIEJZIERBVEUgRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8rKysrKysrKysrKysrKysrKysrKysrKysrKysgQ0FURUdPUlkgU0VMRUNUSU9OLCBJTklUQUxJWkUtVVBEQVRFIENBVEVHT1JZLCBBREQgQ0FURUdPUlkgKysrKysrKysrKysrKysrKysrKysrKysrKysrXHJcbmxldCBzZWxlY3RlZENhdGVnb3J5ID0gJ0FsbCc7XHJcblxyXG4vLyBVcGRhdGUgY2F0ZWdvcmllc1xyXG5mdW5jdGlvbiBpbml0YWxpemVDYXRlZ29yaWVzKCkge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xyXG5cclxuICBjYXRlZ29yaWVzRWwuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBoMy50ZXh0Q29udGVudCA9ICdBbGwnO1xyXG4gIGgzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10ZXh0Jyk7XHJcbiAgY2F0ZWdvcmllc0VsLmFwcGVuZENoaWxkKGgzKTtcclxuXHJcbiAgaDMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjaGFuZ2VBY3RpdmVDYXRlZ29yeShoMy50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgLy8gQ2hhbmdlIGNvbG9ycyBvZiBhY3RpdmUgYW5kIGluYWN0aXZlIGNhdGVnb3J5IG5hbWVzXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdHMgaDMnKS5mb3JFYWNoKChyZWYpID0+IHtcclxuICAgICAgcmVmLmNsYXNzTGlzdCA9ICd3aGl0ZS10ZXh0JztcclxuICAgIH0pO1xyXG4gICAgaDMuY2xhc3NMaXN0ID0gJ2FjdGl2ZS10ZXh0JztcclxuICB9KTtcclxuXHJcbiAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoMy50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdE5hbWU7XHJcbiAgICBoMy5jbGFzc0xpc3QuYWRkKCd3aGl0ZS10ZXh0Jyk7XHJcbiAgICBjYXRlZ29yaWVzRWwuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuICAgIGgzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjaGFuZ2VBY3RpdmVDYXRlZ29yeShoMy50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAvLyBDaGFuZ2UgY29sb3JzIG9mIGFjdGl2ZSBhbmQgaW5hY3RpdmUgY2F0ZWdvcnkgbmFtZXNcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3RzIGgzJykuZm9yRWFjaCgocmVmKSA9PiB7XHJcbiAgICAgICAgcmVmLmNsYXNzTGlzdCA9ICd3aGl0ZS10ZXh0JztcclxuICAgICAgfSk7XHJcbiAgICAgIGgzLmNsYXNzTGlzdCA9ICdhY3RpdmUtdGV4dCc7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlQ2F0ZWdvcnkobmV3Q2F0KSB7XHJcbiAgc2VsZWN0ZWRDYXRlZ29yeSA9IG5ld0NhdDtcclxuICB0b2RvLnNhdmVBbmRSZWZyZXNoKCk7XHJcbn1cclxuXHJcbmNvbnN0IGFkZENhdGVnb3J5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNhdGVnb3J5LWJ1dHRvbicpO1xyXG5hZGRDYXRlZ29yeUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ0FURUdPUlkgU0VMRUNUSU9OLCBJTklUQUxJWkUtVVBEQVRFIENBVEVHT1JZLCBBREQgQ0FURUdPUlkgRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vL1xyXG5cclxudG9kby5pbml0YWxpemUoKTtcclxuaW5pdGFsaXplQ2F0ZWdvcmllcygpO1xyXG5pbml0YWxpemVEYXRlcygpO1xyXG5cclxuZXhwb3J0IHsgaW5pdGFsaXplQ2F0ZWdvcmllcywgc2VsZWN0ZWRDYXRlZ29yeSwgc2VsZWN0ZWREYXRlIH07XHJcbiIsImltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3NhdmVTeXN0ZW0uanMnO1xyXG5pbXBvcnQgeyByZW5kZXJUYXNrQm94IH0gZnJvbSAnLi91aS5qcyc7XHJcbmltcG9ydCB7XHJcbiAgaW5pdGFsaXplQ2F0ZWdvcmllcyxcclxuICBzZWxlY3RlZENhdGVnb3J5LFxyXG4gIHNlbGVjdGVkRGF0ZSxcclxufSBmcm9tICcuL2luZGV4LmpzJztcclxuXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5sZXQgbG9hZGVkID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4gIHRoaXMub2JqZWN0cyA9IFtdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XHJcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpcnN0VGltZVRlc3QoKSB7XHJcbiAgaWYgKHN0b3JhZ2UuaXNGaXJzdFRpbWVMb2FkKCkgPT09IGZhbHNlKSByZXR1cm47IC8vIFNraXAgaWYgaXQncyBub3QgZmlyc3QgdGltZSBsb2FkaW5nXHJcbiAgLy8gQ3JlYXRlIGRlZmF1bHQgcHJvamVjdCBpZiBpdCdzIHRoZSBmaXJzdCB0aW1lXHJcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0Jyk7XHJcbiAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XHJcblxyXG4gIGxvYWRlZCA9IHRydWU7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGV4YW1wbGUgdGFza1xyXG4gIGNyZWF0ZU5ld1Rhc2soXHJcbiAgICAnRGVmYXVsdCBQcm9qZWN0JyxcclxuICAgICdCYcWfbMSxaycsXHJcbiAgICAnRGVuZW1lIGHDp8Sxa2xhbWFzxLEnLFxyXG4gICAgJzJiZG9uZScsXHJcbiAgICAnaGlnaCcsXHJcbiAgICAnR2VsaXJzZSBla2ltZSdcclxuICApO1xyXG5cclxuICAvLyBTYXZlIHRoZSB0YXNrIGFuZCBwcm9qZWN0XHJcbiAgc3RvcmFnZS5zYXZlKHByb2plY3RzKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ0xPQURFRCBGSVJTVCBUSU1FJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUgPSAnUHJvamVjdCBOYW1lJykge1xyXG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICBzYXZlQW5kUmVmcmVzaCgpO1xyXG4gIGluaXRhbGl6ZUNhdGVnb3JpZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3VGFzayhwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xyXG4gIGlmIChsb2FkZWQgPT09IGZhbHNlKSB7XHJcbiAgICAvLyBDYWxsIHRoZSBuZXd0YXNrIGZ1bmN0aW9uIDFzIGxhdGVyIGlmIHRoZSBzYXZlcyBub3QgbG9hZGVkIHlldFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNyZWF0ZU5ld1Rhc2socHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XHJcbiAgLy8gRmluZCB0aGUgcHJvamVjdCBvYmplY3RcclxuICBsZXQgYXNzaWduZWRQcm9qZWN0O1xyXG4gIHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LnByb2plY3ROYW1lID09PSBwcm9qZWN0KSB7XHJcbiAgICAgIGFzc2lnbmVkUHJvamVjdCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8gQWRkIHRhc2sgdG8gcHJvamVjdCBvYmplY3QgaWYgdGhlICdwcm9qZWN0JyBpbnB1dCBpcyBhdmFpbGFibGVcclxuICBpZiAoYXNzaWduZWRQcm9qZWN0ICE9PSBudWxsKSB7XHJcbiAgICBsZXQgdGVzdCA9IGFzc2lnbmVkUHJvamVjdC5vYmplY3RzLnB1c2godGFzayk7XHJcbiAgICBjb25zb2xlLmxvZyh0ZXN0KTtcclxuICB9XHJcbiAgLy8gU2F2ZSB0aGUgdGFzayBhbmQgcHJvamVjdHNcclxuICBzdG9yYWdlLnNhdmUocHJvamVjdHMpO1xyXG4gIC8vIFJlbmRlciB0aGUgdGFza1xyXG4gIHJlbmRlclRhc2tCb3godGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdGFzaywgYXNzaWduZWRQcm9qZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGFsaXplKCkge1xyXG4gIGxvYWRUYXNrcygpO1xyXG4gIGZpcnN0VGltZVRlc3QoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xyXG4gIGlmIChzdG9yYWdlLmlzRmlyc3RUaW1lTG9hZCgpID09PSB0cnVlKSByZXR1cm47IC8vIHNraXAgaWYgaXQncyB0aGUgZmlyc3QgdGltZSBsb2FkaW5nXHJcbiAgcHJvamVjdHMgPSBzdG9yYWdlLmxvYWQoKTtcclxuICBsb2FkZWQgPSB0cnVlO1xyXG4gIHJlZnJlc2hVSSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlQW5kUmVmcmVzaCgpIHtcclxuICBzdG9yYWdlLnNhdmUocHJvamVjdHMpO1xyXG4gIHJlZnJlc2hVSSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWZyZXNoVUkoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdmlldycpLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAvLyBSZW5kZXIgbG9hZGVkIHRhc2tzIHRvIHBhZ2VcclxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAvLyBGaWx0ZXIgYnkgcHJvamVjdFxyXG4gICAgaWYgKGZpbHRlckJ5UHJvamVjdChzZWxlY3RlZENhdGVnb3J5LCBwcm9qZWN0LnByb2plY3ROYW1lKSkge1xyXG4gICAgICBwcm9qZWN0Lm9iamVjdHMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgIC8vRmlsdGVyIGJ5IGRhdGVcclxuICAgICAgICBpZiAoZmlsdGVyQnlEYXRlKHNlbGVjdGVkRGF0ZSwgdGFzay5kdWVEYXRlKSkge1xyXG4gICAgICAgICAgcmVuZGVyVGFza0JveChcclxuICAgICAgICAgICAgdGFzay50aXRsZSxcclxuICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgdGFzay5kdWVEYXRlLFxyXG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5LFxyXG4gICAgICAgICAgICB0YXNrLFxyXG4gICAgICAgICAgICBwcm9qZWN0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlckJ5UHJvamVjdChzZWxlY3RlZFByb2plY3QsIHByb2plY3ROYW1lKSB7XHJcbiAgaWYgKFxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0LnRvTG93ZXJDYXNlKCkgPT0gJ2FsbCcgfHxcclxuICAgIHNlbGVjdGVkUHJvamVjdC50b0xvd2VyQ2FzZSgpID09IHByb2plY3ROYW1lLnRvTG93ZXJDYXNlKClcclxuICApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyQnlEYXRlKHNlbGVjdGVkVHlwZSwgdGFza0R1ZURhdGUpIHtcclxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IHNlbGVjdGVkVHlwZUxvd2VyID0gc2VsZWN0ZWRUeXBlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIGxldCB0YXNrRGF5ID0gdGFza0R1ZURhdGUuc3Vic3RyaW5nKDgsIDEwKTtcclxuICBsZXQgdGFza01vbnRoID0gdGFza0R1ZURhdGUuc3Vic3RyaW5nKDUsIDcpO1xyXG4gIGxldCB0YXNrWWVhciA9IHRhc2tEdWVEYXRlLnN1YnN0cmluZygwLCA0KTtcclxuXHJcbiAgaWYgKHNlbGVjdGVkVHlwZUxvd2VyID09ICdhbGwnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKFxyXG4gICAgc2VsZWN0ZWRUeXBlTG93ZXIgPT0gJ3RvZGF5JyAmJlxyXG4gICAgZGF0ZS5nZXREYXRlKCkgPT0gdGFza0RheSAmJlxyXG4gICAgZGF0ZS5nZXRNb250aCgpICsgMSA9PSB0YXNrTW9udGggJiZcclxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSA9PSB0YXNrWWVhclxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGlmIChcclxuICAgIHNlbGVjdGVkVHlwZUxvd2VyID09ICd0aGlzIHdlZWsnICYmXHJcbiAgICBkYXRlLmdldERhdGUoKSAtIHRhc2tEYXkgPD0gNyAmJlxyXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpID09IHRhc2tZZWFyXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKFxyXG4gICAgc2VsZWN0ZWRUeXBlTG93ZXIgPT0gJ3RoaXMgbW9udGgnICYmXHJcbiAgICBkYXRlLmdldE1vbnRoKCkgKyAxID09IHRhc2tNb250aCAmJlxyXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpID09IHRhc2tZZWFyXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgaW5pdGFsaXplLFxyXG4gIGNyZWF0ZU5ld1Rhc2ssXHJcbiAgY3JlYXRlTmV3UHJvamVjdCxcclxuICByZWZyZXNoVUksXHJcbiAgc2F2ZUFuZFJlZnJlc2gsXHJcbiAgcHJvamVjdHMsXHJcbiAgbG9hZGVkLFxyXG59O1xyXG4iLCJjb25zdCBzdG9yYWdlID0gKCgpID0+IHtcclxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2F2ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xyXG4gICAgY29uc3Qgc3RyaW5naWZpZWQgPSBKU09OLnBhcnNlKHNhdmUpO1xyXG4gICAgY29uc29sZS5sb2coJ0xPQURFRCcpO1xyXG4gICAgY29uc29sZS5sb2coc3RyaW5naWZpZWQpO1xyXG4gICAgcmV0dXJuIHN0cmluZ2lmaWVkO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhdmUgPSAocHJvamVjdHMpID0+IHtcclxuICAgIGNvbnN0IHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xyXG4gICAgY29uc3Qgc2F2ZSA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIHN0cmluZ2lmaWVkKTtcclxuICAgIGNvbnNvbGUubG9nKCdTQVZFRCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzRmlyc3RUaW1lTG9hZCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSA9PT0gbnVsbDtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGVhclNhdmVzID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7XHJcbiAgfTtcclxuICByZXR1cm4geyBsb2FkLCBzYXZlLCBpc0ZpcnN0VGltZUxvYWQsIGNsZWFyU2F2ZXMgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IHN0b3JhZ2UgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlTmV3VGFzaywgc2F2ZUFuZFJlZnJlc2ggfSBmcm9tICcuL3Byb2plY3RzLmpzJztcclxuaW1wb3J0IHsgZWRpdFRhc2sgfSBmcm9tICcuL2VkaXRUYXNrLmpzJztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRhc2tCb3goXHJcbiAgdGl0bGUgPSAnVGFzayBUaXRsZScsXHJcbiAgZGVzYyA9ICdUYXNrIERlc2MnLFxyXG4gIGRhdGUgPSAnVGFzayBkYXRlJyxcclxuICBwcmlvcml0eSA9ICcnLFxyXG4gIG9iamVjdFJlZmVyZW5jZSxcclxuICBwcm9qZWN0UmVmZXJlbmNlXHJcbikge1xyXG4gIGNvbnN0IHRhc2tCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0YXNrQm94RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYm94Jyk7XHJcbiAgdGFza0JveERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvb2dsZUV4dGVuZGVkKTtcclxuXHJcbiAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxlZnREaXYuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xyXG5cclxuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcblxyXG4gIGNvbnN0IGxlZnRJbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGxlZnRJbm5lckRpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gIGxlZnRJbm5lckRpdi5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XHJcblxyXG4gIGxlZnREaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xyXG4gIGxlZnREaXYuYXBwZW5kQ2hpbGQobGVmdElubmVyRGl2KTtcclxuXHJcbiAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByaWdodERpdi5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2ZsZXgtYWxpZ24tY2VudGVyJyk7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcmlvcml0eUVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5JywgJ2hpZGRlbicpO1xyXG5cclxuICBjb25zdCBjbGFlbmRhckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgY2xhZW5kYXJJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWNhbGVuZGFyLWRheXMnKTtcclxuICBjbGFlbmRhckljb24uc3R5bGUuY29sb3IgPSAnIzJFMkUyRSc7XHJcblxyXG4gIGNvbnN0IGRhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGRhdGVUZXh0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xyXG5cclxuICBjb25zdCBzZWVNb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2VlTW9yZS5jbGFzc0xpc3QuYWRkKCdzZWUtbW9yZScpO1xyXG5cclxuICBjb25zdCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWNoZXZyb24tZG93bicpO1xyXG5cclxuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsICdmYS1wZW4tdG8tc3F1YXJlJywgJ2hpZGRlbicpO1xyXG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBlZGl0VGFzayhvYmplY3RSZWZlcmVuY2UsIHByb2plY3RSZWZlcmVuY2UpO1xyXG4gIH0pO1xyXG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnIERPVUJMRSBDTENJQ0tFRCAnKTtcclxuXHJcbiAgICBwcm9qZWN0UmVmZXJlbmNlLm9iamVjdHMuc3BsaWNlKFxyXG4gICAgICBwcm9qZWN0UmVmZXJlbmNlLm9iamVjdHMuaW5kZXhPZihvYmplY3RSZWZlcmVuY2UpLFxyXG4gICAgICAxXHJcbiAgICApO1xyXG4gICAgc2F2ZUFuZFJlZnJlc2goKTtcclxuICB9KTtcclxuXHJcbiAgc2VlTW9yZS5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xyXG4gIHNlZU1vcmUuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcblxyXG4gIHJpZ2h0RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RWwpO1xyXG4gIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGNsYWVuZGFySWNvbik7XHJcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQoZGF0ZVRleHQpO1xyXG4gIHJpZ2h0RGl2LmFwcGVuZENoaWxkKHNlZU1vcmUpO1xyXG5cclxuICB0YXNrQm94RGl2LmFwcGVuZENoaWxkKGxlZnREaXYpO1xyXG4gIHRhc2tCb3hEaXYuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xyXG5cclxuICAvLyBTZXQgdmFsdWVzXHJcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSBkZXNjO1xyXG4gIHByaW9yaXR5RWwudGV4dENvbnRlbnQgPSBwcmlvcml0eTtcclxuICBkYXRlVGV4dC50ZXh0Q29udGVudCA9IGRhdGU7XHJcblxyXG4gIGNvbnN0IHRhc2tWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdmlldycpO1xyXG5cclxuICB0YXNrVmlldy5hcHBlbmRDaGlsZCh0YXNrQm94RGl2KTtcclxuICBjb25zb2xlLmxvZygnQkFTVElLJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvb2dsZUV4dGVuZGVkKGUpIHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGNvbnNvbGUubG9nKCdIRUxMTyBGUk9NIEknLCBlLnRhcmdldCwgdGhpcyk7XHJcbiAgaWYgKFxyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWJveCcpIHx8XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWNoZXZyb24tZG93bicpXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2stYm94LWV4dGVuZGVkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVNb2RhbCgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyVGFza0JveCwgcmVtb3ZlTW9kYWwgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=