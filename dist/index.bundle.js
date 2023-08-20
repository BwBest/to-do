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
    display: none !important;
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
}

/* Category section end */

/* Message box */
.msg-div{
    position: fixed;
    top: 0vh;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 3rem;

    background: var(--body-bg);
    border: #FF6565 solid 2px;
    border-radius: 8px;
    animation: slideIn 0.4s linear 1 normal forwards;
}

.msg-div-out{
    animation: slideOut 0.3s linear normal forwards;
}

@keyframes slideIn {
    from{
        opacity: 0;
    }
    to{
        transform: translateY(10vh);
        opacity: 1;
    }
}
@keyframes slideOut {
    to{
        opacity: 0;
        transform: translateY(0);
    }
    from{
        transform: translateY(10vh);
        opacity: 1;
    }
}

.msg-icon{
    margin-right: 0.5rem;
}

/* .msg-msg{

} */

.error{
    background: #FFC1C1;
    color: #FF3535;
    border-color: #FF6363;
}

.success{
    background: #c6ffc1;
    color: #019c01;
    border-color: #70ff63;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\r\n\r\n:root{\r\n    --body-bg: #DEDEDE;\r\n    --white-bg: #F9F9F9;\r\n    --primary: #FF9838;\r\n    --secondary: #2E2E2E;\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody{\r\n    font-family: 'Poppins', sans-serif;\r\n    background: var(--body-bg);\r\n    width: 100%;\r\n    height: 100vh;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nh1{\r\n    color: var(--secondary);\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n}\r\n\r\nh2{\r\n    font-size: 1.25rem;\r\n    font-weight: 500;\r\n}\r\n\r\nh3{\r\n    font-size: 1.25rem;\r\n    font-weight: 400;\r\n}\r\n\r\np{\r\n    color: var(--secondary);\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n}\r\n\r\n.white-text{\r\n    color: var(--white-bg);\r\n}\r\n\r\n.active-text{\r\n    color: var(--primary);\r\n}\r\n\r\n.flex{\r\n    display: flex;\r\n}\r\n\r\n.flex-align-center{\r\n    align-items: center;\r\n}\r\n \r\n.hidden{\r\n    display: none !important;\r\n}\r\n\r\n.btn{\r\n    background: var(--primary);\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 0.625rem;\r\n    padding: 0.55rem 1.1rem;\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.btn-secondary{\r\n    background: none;\r\n    color: var(--secondary);\r\n    border: var(--secondary) 2px solid;\r\n    border-radius: 0.625rem;\r\n    padding: 0.55rem 1.1rem;\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.btn:hover, .btn-secondary:hover{\r\n    transform: translateY(-1px);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:active, .btn-secondary:active{\r\n    transform: translateY(0px);\r\n    filter: brightness(0.9);\r\n}\r\n\r\n/*************** LAYOUT ***************/\r\n\r\n.container{\r\n    width: 85%;\r\n    height: 85%;\r\n    display: flex;\r\n\r\n    border-radius: 0.625rem;\r\n    background: var(--white-bg, #F9F9F9);\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.10);\r\n}\r\n\r\n#left{\r\n    border-radius: 0.625rem 0rem 0rem 0.625rem;\r\n    background: var(--secondary, #2E2E2E);\r\n    flex: 1;\r\n    padding: 2rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n#right{\r\n    flex: 6;\r\n    margin: 3rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 2.5rem;\r\n\r\n    flex: 1;\r\n}\r\n\r\n.task-view{\r\n    flex: 10;\r\n    overflow-y: scroll;\r\n    scrollbar-color: var(--secondary);\r\n    scrollbar-width: thin;\r\n    scroll-behavior: smooth;\r\n    padding: 0 0.5rem;\r\n}\r\n\r\n.task-view::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n  \r\n.task-view::-webkit-scrollbar-track {\r\n    background-color: #e6e6e6;\r\n    border-radius: 10px;\r\n}\r\n  \r\n.task-view::-webkit-scrollbar-thumb {\r\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #dfdfdf;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom{\r\n    margin-top: 1.5rem;\r\n    text-align: right;\r\n}\r\n/*************** LAYOUT END ***************/\r\n\r\n/*************** ADD-EDIT TASK MODAL ***************/\r\n.modal{\r\n    background: #fff;\r\n\r\n    position: fixed;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    padding: 2rem 4rem;\r\n    border-radius: 0.625rem;\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.05);\r\n\r\n    z-index: 2;\r\n}\r\n\r\n.modal h2{\r\n    margin-bottom: 1rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.modal label{\r\n    color: var(--secondary);\r\n    font-size: 1.15rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.input-div select{\r\n    background: none;\r\n}\r\n\r\n.input-div input, .input-div select{\r\n    width: 100%;\r\n\r\n    padding: 0.25rem;\r\n    padding-left: 0.5rem;\r\n    margin-top: 0.25rem;\r\n    margin-bottom: 1rem;\r\n\r\n    border: none;\r\n    border-bottom: #727272 1px solid;\r\n\r\n    transition: border 0.2s linear;\r\n}\r\n\r\n.input-div input:focus, .input-div select:focus{\r\n    border-bottom: var(--primary) 1px solid;\r\n    outline: none;\r\n}\r\n\r\n.input-div{\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.buttons-div{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n\r\n/*************** ADD-EDIT TASK MODAL END ***************/\r\n\r\n/*************** TASK BOX ***************/\r\n.task-box{\r\n    border-radius: 0.625rem;\r\n    background: #FFF;\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.02);\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.task-box:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.task-box h2:hover, .task-box p:hover{\r\n    cursor: default;\r\n}\r\n\r\n.task-done .flex{\r\n    opacity: 0.6;\r\n}\r\n\r\n/* Show more and edit icons */\r\n.fa-chevron-down, .fa-pen-to-square{\r\n    transition: all 0.1s ease;\r\n}\r\n\r\n.fa-chevron-down:hover, .fa-pen-to-square:hover{\r\n    color: var(--primary);\r\n    transform: scale(1.15);\r\n}\r\n/****************************/\r\n\r\n.task-done h2, .task-done p{\r\n    text-decoration: line-through;\r\n}\r\n\r\ninput[type=\"checkbox\"]{\r\n    margin-left: 0.25rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.priority{\r\n    color: #FFF;\r\n    background: #FF6565;\r\n    font-size: 0.8rem;\r\n    font-style: normal;\r\n    border-radius: 0.625rem;\r\n    padding: 0.25rem 0.5rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.task-date{\r\n    margin-left: 0.5rem;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.see-more{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n\r\n    margin-left: 0.7rem;\r\n    margin-right: 0.7rem;\r\n}\r\n\r\n.see-more i:nth-child(2){\r\n    margin-top: 0.6rem;\r\n}\r\n\r\n.task-desc{\r\n    max-width: 25vw;\r\n    display: block;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.task-box-extended{\r\n    padding: 2rem 1rem;\r\n\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.05);\r\n}\r\n\r\n.task-box-extended p{\r\n    max-width: 40vw;\r\n    max-width: auto;\r\n    display: block;\r\n    overflow: normal;\r\n    white-space: normal;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.task-box-extended .hidden{\r\n    display: block;\r\n}\r\n\r\n/*************** TASK BOX END ***************/\r\n\r\n/*************** SIDEBAR ***************/\r\n\r\n/* Profile section */\r\n#profile-img{\r\n    width: 3.75rem;\r\n    height: 3.75rem;\r\n    border-radius: 50%;\r\n}\r\n\r\n#profile-img:hover{\r\n    filter: brightness(1.2);\r\n    transform: scale(1.02);\r\n}\r\n\r\n#profile-name{\r\n    color: white;\r\n}\r\n\r\n/* .profile{\r\n\r\n} */\r\n/* Profile section end*/\r\n\r\n/* View type section */\r\n.view-type h3, #projects h3{\r\n    transition: all 0.15s ease;\r\n}\r\n\r\n.view-type h3:hover, #projects h3:hover{\r\n    transform: scale(1.02);\r\n    color: var(--primary);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n.view-type h3:active, #projects h3:active{\r\n    transform: scale(1);\r\n    filter: brightness(0.9);\r\n}\r\n/* View type section end */\r\n\r\n/* Categories section*/\r\n\r\n.categories{\r\n    margin-bottom: 20vh;\r\n}\r\n\r\n.categories-title{\r\n    color: white;\r\n}\r\n\r\n.categories-title div{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.categories-divider{\r\n    width: 100%;\r\n    height: 1px;\r\n    border-radius: 10px;\r\n    background: rgba(217, 217, 217, 0.6);\r\n\r\n    margin-top: 0.1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n#add-category-button{\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n#add-category-button:hover{\r\n    cursor: pointer;\r\n    color: var(--primary) !important;\r\n    filter: brightness(1.1);\r\n}\r\n\r\n.category-edit-btn{\r\n    color: var(--white-bg);\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.category-edit-btn:hover{\r\n    filter: brightness(1.2);\r\n    transform: scale(1.02);\r\n    cursor: pointer;\r\n}\r\n\r\n.category-edit-btn:active{\r\n    transform: translateY(1px);\r\n}\r\n\r\n/* Category section end */\r\n\r\n/* Message box */\r\n.msg-div{\r\n    position: fixed;\r\n    top: 0vh;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0.8rem 3rem;\r\n\r\n    background: var(--body-bg);\r\n    border: #FF6565 solid 2px;\r\n    border-radius: 8px;\r\n    animation: slideIn 0.4s linear 1 normal forwards;\r\n}\r\n\r\n.msg-div-out{\r\n    animation: slideOut 0.3s linear normal forwards;\r\n}\r\n\r\n@keyframes slideIn {\r\n    from{\r\n        opacity: 0;\r\n    }\r\n    to{\r\n        transform: translateY(10vh);\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes slideOut {\r\n    to{\r\n        opacity: 0;\r\n        transform: translateY(0);\r\n    }\r\n    from{\r\n        transform: translateY(10vh);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.msg-icon{\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n/* .msg-msg{\r\n\r\n} */\r\n\r\n.error{\r\n    background: #FFC1C1;\r\n    color: #FF3535;\r\n    border-color: #FF6363;\r\n}\r\n\r\n.success{\r\n    background: #c6ffc1;\r\n    color: #019c01;\r\n    border-color: #70ff63;\r\n}"],"sourceRoot":""}]);
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
      _ui_js__WEBPACK_IMPORTED_MODULE_1__.renderMessage.error('Plase enter a valid category name');
      return;
    }

    (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(titleInput.value);
    _ui_js__WEBPACK_IMPORTED_MODULE_1__.renderMessage.success('Category created!');
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
      _ui_js__WEBPACK_IMPORTED_MODULE_1__.renderMessage.error('Please check your input values');
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
    _ui_js__WEBPACK_IMPORTED_MODULE_1__.renderMessage.success('Task created!');
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
      _ui_js__WEBPACK_IMPORTED_MODULE_2__.renderMessage.error('Plase enter a valid category name');
      return;
    }

    projectReference.projectName = titleInput.value;
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.saveAndRefresh)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.initalizeCategories)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.changeActiveCategory)(titleInput.value);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.removeModal)();
    _ui_js__WEBPACK_IMPORTED_MODULE_2__.renderMessage.success('Category saved!');
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
      _ui_js__WEBPACK_IMPORTED_MODULE_2__.renderMessage.success('Category removed');
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
    _ui_js__WEBPACK_IMPORTED_MODULE_1__.renderMessage.success('Task saved!');
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
      _ui_js__WEBPACK_IMPORTED_MODULE_1__.renderMessage.success('Task deleted!');
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
  resetOtherCategories();
  document.querySelectorAll('#projects div').forEach((ref) => {
    const h3 = ref.querySelector('h3');
    const icon = ref.querySelector('i');
    if (h3.textContent == newCat) {
      h3.classList = 'active-text';
      icon.classList.remove('hidden');
    }
  });
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
  // Refresh ui
  refreshUI();
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
/* harmony export */   renderMessage: () => (/* binding */ renderMessage),
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

function MessageBox() {
  this.msgDiv = document.querySelector('.msg-div');
  this.msgIcon = document.querySelector('.msg-icon');
  this.msgText = document.querySelector('.msg-msg');
  this.error = function (text) {
    if (this.timerRef != undefined) {
      clearTimeout(this.timerRef);
      this.timerRef = undefined;
    }

    this.msgDiv.classList = 'msg-div error';
    this.msgIcon.classList = 'msg-icon fa-solid fa-circle-exclamation fa-lg';
    this.msgText.classList = 'msg-msg error';
    this.msgText.textContent = text;
    this.clearTimer();
  };

  this.success = function (text) {
    if (this.timerRef != undefined) {
      clearTimeout(this.timerRef);
      this.timerRef = undefined;
    }

    this.msgDiv.classList = 'msg-div success';
    this.msgIcon.classList = 'msg-icon fa-solid fa-circle-check fa-lg';
    this.msgText.classList = 'msg-msg success';
    this.msgText.textContent = text;
    this.clearTimer();
  };

  this.timerRef = undefined;

  this.clearTimer = function () {
    this.timerRef = setTimeout(() => {
      // Slideout animation
      this.msgDiv.classList.add('msg-div-out');
      // Add hidden class and clear msg after animation finishes
      setTimeout(() => {
        this.msgDiv.classList.add('hidden');
        this.msgText.textContent = '';
      }, 400);
    }, 2500);
  };
}

const renderMessage = new MessageBox();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsZ0hBQWdILElBQUksa0JBQWtCO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sYUFBYSxhQUFhLE1BQU0sYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsY0FBYyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sS0FBSyxhQUFhLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxhQUFhLGNBQWMsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxhQUFhLE1BQU0sVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVks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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0U7Ozs7Ozs7Ozs7Ozs7OztBQy9LRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjRCO0FBQ047QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBUTtBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWM7QUFDbEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FEOzs7Ozs7O1VDdEpyRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2F2ZVN5c3RlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xyXG4gICAgLS1ib2R5LWJnOiAjREVERURFO1xyXG4gICAgLS13aGl0ZS1iZzogI0Y5RjlGOTtcclxuICAgIC0tcHJpbWFyeTogI0ZGOTgzODtcclxuICAgIC0tc2Vjb25kYXJ5OiAjMkUyRTJFO1xyXG59XHJcblxyXG4qe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWJnKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxucHtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLndoaXRlLXRleHR7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYmcpO1xyXG59XHJcblxyXG4uYWN0aXZlLXRleHR7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZsZXgtYWxpZ24tY2VudGVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4gXHJcbi5oaWRkZW57XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjU1cmVtIDEuMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5e1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1zZWNvbmRhcnkpIDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgcGFkZGluZzogMC41NXJlbSAxLjFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgbGluZWFyO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyLCAuYnRuLXNlY29uZGFyeTpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuOmFjdGl2ZSwgLmJ0bi1zZWNvbmRhcnk6YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKiBMQVlPVVQgKioqKioqKioqKioqKioqL1xyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1iZywgI0Y5RjlGOSk7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEycHggMTNweCAxcHggcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjEwKTtcclxufVxyXG5cclxuI2xlZnR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbSAwcmVtIDByZW0gMC42MjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnksICMyRTJFMkUpO1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiNyaWdodHtcclxuICAgIGZsZXg6IDY7XHJcbiAgICBtYXJnaW46IDNyZW07XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuXHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4udGFzay12aWV3e1xyXG4gICAgZmxleDogMTA7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG59XHJcblxyXG4udGFzay12aWV3Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNnB4O1xyXG59XHJcbiAgXHJcbi50YXNrLXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiAgXHJcbi50YXNrLXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3R0b217XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4vKioqKioqKioqKioqKioqIExBWU9VVCBFTkQgKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKiBBREQtRURJVCBUQVNLIE1PREFMICoqKioqKioqKioqKioqKi9cclxuLm1vZGFse1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMnB4IDEzcHggMXB4IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4wNSk7XHJcblxyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLm1vZGFsIGgye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5tb2RhbCBsYWJlbHtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmlucHV0LWRpdiBzZWxlY3R7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uaW5wdXQtZGl2IGlucHV0LCAuaW5wdXQtZGl2IHNlbGVjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206ICM3MjcyNzIgMXB4IHNvbGlkO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzIGxpbmVhcjtcclxufVxyXG5cclxuLmlucHV0LWRpdiBpbnB1dDpmb2N1cywgLmlucHV0LWRpdiBzZWxlY3Q6Zm9jdXN7XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1wcmltYXJ5KSAxcHggc29saWQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaW5wdXQtZGl2e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmJ1dHRvbnMtZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqIEFERC1FRElUIFRBU0sgTU9EQUwgRU5EICoqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKiogVEFTSyBCT1ggKioqKioqKioqKioqKioqL1xyXG4udGFzay1ib3h7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEycHggMTNweCAxcHggcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjAyKTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4udGFzay1ib3g6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWJveCBoMjpob3ZlciwgLnRhc2stYm94IHA6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi50YXNrLWRvbmUgLmZsZXh7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi8qIFNob3cgbW9yZSBhbmQgZWRpdCBpY29ucyAqL1xyXG4uZmEtY2hldnJvbi1kb3duLCAuZmEtcGVuLXRvLXNxdWFyZXtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XHJcbn1cclxuXHJcbi5mYS1jaGV2cm9uLWRvd246aG92ZXIsIC5mYS1wZW4tdG8tc3F1YXJlOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi50YXNrLWRvbmUgaDIsIC50YXNrLWRvbmUgcHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl17XHJcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLnByaW9yaXR5e1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY2NTY1O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4udGFzay1kYXRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4uc2VlLW1vcmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogMC43cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XHJcbn1cclxuXHJcbi5zZWUtbW9yZSBpOm50aC1jaGlsZCgyKXtcclxuICAgIG1hcmdpbi10b3A6IDAuNnJlbTtcclxufVxyXG5cclxuLnRhc2stZGVzY3tcclxuICAgIG1heC13aWR0aDogMjV2dztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnRhc2stYm94LWV4dGVuZGVke1xyXG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTJweCAxM3B4IDFweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMDUpO1xyXG59XHJcblxyXG4udGFzay1ib3gtZXh0ZW5kZWQgcHtcclxuICAgIG1heC13aWR0aDogNDB2dztcclxuICAgIG1heC13aWR0aDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IG5vcm1hbDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnRhc2stYm94LWV4dGVuZGVkIC5oaWRkZW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKiBUQVNLIEJPWCBFTkQgKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKiBTSURFQkFSICoqKioqKioqKioqKioqKi9cclxuXHJcbi8qIFByb2ZpbGUgc2VjdGlvbiAqL1xyXG4jcHJvZmlsZS1pbWd7XHJcbiAgICB3aWR0aDogMy43NXJlbTtcclxuICAgIGhlaWdodDogMy43NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuI3Byb2ZpbGUtaW1nOmhvdmVye1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG59XHJcblxyXG4jcHJvZmlsZS1uYW1le1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiAucHJvZmlsZXtcclxuXHJcbn0gKi9cclxuLyogUHJvZmlsZSBzZWN0aW9uIGVuZCovXHJcblxyXG4vKiBWaWV3IHR5cGUgc2VjdGlvbiAqL1xyXG4udmlldy10eXBlIGgzLCAjcHJvamVjdHMgaDN7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcclxufVxyXG5cclxuLnZpZXctdHlwZSBoMzpob3ZlciwgI3Byb2plY3RzIGgzOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udmlldy10eXBlIGgzOmFjdGl2ZSwgI3Byb2plY3RzIGgzOmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxufVxyXG4vKiBWaWV3IHR5cGUgc2VjdGlvbiBlbmQgKi9cclxuXHJcbi8qIENhdGVnb3JpZXMgc2VjdGlvbiovXHJcblxyXG4uY2F0ZWdvcmllc3tcclxuICAgIG1hcmdpbi1ib3R0b206IDIwdmg7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXRpdGxle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcy10aXRsZSBkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMtZGl2aWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTcsIDIxNywgMjE3LCAwLjYpO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDAuMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNhZGQtY2F0ZWdvcnktYnV0dG9ue1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcclxufVxyXG5cclxuI2FkZC1jYXRlZ29yeS1idXR0b246aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktZWRpdC1idG57XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYmcpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcclxufVxyXG5cclxuLmNhdGVnb3J5LWVkaXQtYnRuOmhvdmVye1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktZWRpdC1idG46YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbn1cclxuXHJcbi8qIENhdGVnb3J5IHNlY3Rpb24gZW5kICovXHJcblxyXG4vKiBNZXNzYWdlIGJveCAqL1xyXG4ubXNnLWRpdntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHZoO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gM3JlbTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWJnKTtcclxuICAgIGJvcmRlcjogI0ZGNjU2NSBzb2xpZCAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBhbmltYXRpb246IHNsaWRlSW4gMC40cyBsaW5lYXIgMSBub3JtYWwgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5tc2ctZGl2LW91dHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVPdXQgMC4zcyBsaW5lYXIgbm9ybWFsIGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xyXG4gICAgZnJvbXtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG97XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwdmgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBzbGlkZU91dCB7XHJcbiAgICB0b3tcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICAgIGZyb217XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwdmgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tc2ctaWNvbntcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4vKiAubXNnLW1zZ3tcclxuXHJcbn0gKi9cclxuXHJcbi5lcnJvcntcclxuICAgIGJhY2tncm91bmQ6ICNGRkMxQzE7XHJcbiAgICBjb2xvcjogI0ZGMzUzNTtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGNjM2MztcclxufVxyXG5cclxuLnN1Y2Nlc3N7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzZmZmMxO1xyXG4gICAgY29sb3I6ICMwMTljMDE7XHJcbiAgICBib3JkZXItY29sb3I6ICM3MGZmNjM7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsYUFBYTs7SUFFYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFF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a0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBLHlCQUF5Qjs7QUFFekIsZ0JBQWdCO0FBQ2hCO0lBQ0ksZUFBZTtJQUNmLFFBQVE7O0lBRVIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0JBQW9COztJQUVwQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksMkJBQTJCO1FBQzNCLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWJvZHktYmc6ICNERURFREU7XFxyXFxuICAgIC0td2hpdGUtYmc6ICNGOUY5Rjk7XFxyXFxuICAgIC0tcHJpbWFyeTogI0ZGOTgzODtcXHJcXG4gICAgLS1zZWNvbmRhcnk6ICMyRTJFMkU7XFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1iZyk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDN7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxucHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLXRleHR7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1iZyk7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtdGV4dHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtYWxpZ24tY2VudGVye1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4gXFxyXFxuLmhpZGRlbntcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNTVyZW0gMS4xcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXNlY29uZGFyeXtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICAgIGJvcmRlcjogdmFyKC0tc2Vjb25kYXJ5KSAycHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjU1cmVtIDEuMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciwgLmJ0bi1zZWNvbmRhcnk6aG92ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjphY3RpdmUsIC5idG4tc2Vjb25kYXJ5OmFjdGl2ZXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqIExBWU9VVCAqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lcntcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgaGVpZ2h0OiA4NSU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1iZywgI0Y5RjlGOSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTJweCAxM3B4IDFweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMTApO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW0gMHJlbSAwcmVtIDAuNjI1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnksICMyRTJFMkUpO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbiNyaWdodHtcXHJcXG4gICAgZmxleDogNjtcXHJcXG4gICAgbWFyZ2luOiAzcmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcXHJcXG5cXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdmlld3tcXHJcXG4gICAgZmxleDogMTA7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdmlldzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogNnB4O1xcclxcbn1cXHJcXG4gIFxcclxcbi50YXNrLXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4udGFzay12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9te1xcclxcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG4vKioqKioqKioqKioqKioqIExBWU9VVCBFTkQgKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi8qKioqKioqKioqKioqKiogQURELUVESVQgVEFTSyBNT0RBTCAqKioqKioqKioqKioqKiovXFxyXFxuLm1vZGFse1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMnB4IDEzcHggMXB4IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4wNSk7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBoMntcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGxhYmVse1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZGl2IHNlbGVjdHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWRpdiBpbnB1dCwgLmlucHV0LWRpdiBzZWxlY3R7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAjNzI3MjcyIDFweCBzb2xpZDtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMnMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZGl2IGlucHV0OmZvY3VzLCAuaW5wdXQtZGl2IHNlbGVjdDpmb2N1c3tcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tcHJpbWFyeSkgMXB4IHNvbGlkO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZGl2e1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1kaXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiBBREQtRURJVCBUQVNLIE1PREFMIEVORCAqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiBUQVNLIEJPWCAqKioqKioqKioqKioqKiovXFxyXFxuLnRhc2stYm94e1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcXHJcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMnB4IDEzcHggMXB4IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4wMik7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYm94OmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJveCBoMjpob3ZlciwgLnRhc2stYm94IHA6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZG9uZSAuZmxleHtcXHJcXG4gICAgb3BhY2l0eTogMC42O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaG93IG1vcmUgYW5kIGVkaXQgaWNvbnMgKi9cXHJcXG4uZmEtY2hldnJvbi1kb3duLCAuZmEtcGVuLXRvLXNxdWFyZXtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWNoZXZyb24tZG93bjpob3ZlciwgLmZhLXBlbi10by1zcXVhcmU6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXHJcXG59XFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLnRhc2stZG9uZSBoMiwgLnRhc2stZG9uZSBwe1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5e1xcclxcbiAgICBjb2xvcjogI0ZGRjtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGNjU2NTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRhdGV7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VlLW1vcmV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcclxcbiAgICBtYXJnaW4tbGVmdDogMC43cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlZS1tb3JlIGk6bnRoLWNoaWxkKDIpe1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2N7XFxyXFxuICAgIG1heC13aWR0aDogMjV2dztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1ib3gtZXh0ZW5kZWR7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcXHJcXG5cXHJcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMnB4IDEzcHggMXB4IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4wNSk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJveC1leHRlbmRlZCBwe1xcclxcbiAgICBtYXgtd2lkdGg6IDQwdnc7XFxyXFxuICAgIG1heC13aWR0aDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG92ZXJmbG93OiBub3JtYWw7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1ib3gtZXh0ZW5kZWQgLmhpZGRlbntcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKiogVEFTSyBCT1ggRU5EICoqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqIFNJREVCQVIgKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi8qIFByb2ZpbGUgc2VjdGlvbiAqL1xcclxcbiNwcm9maWxlLWltZ3tcXHJcXG4gICAgd2lkdGg6IDMuNzVyZW07XFxyXFxuICAgIGhlaWdodDogMy43NXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZmlsZS1pbWc6aG92ZXJ7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZmlsZS1uYW1le1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIC5wcm9maWxle1xcclxcblxcclxcbn0gKi9cXHJcXG4vKiBQcm9maWxlIHNlY3Rpb24gZW5kKi9cXHJcXG5cXHJcXG4vKiBWaWV3IHR5cGUgc2VjdGlvbiAqL1xcclxcbi52aWV3LXR5cGUgaDMsICNwcm9qZWN0cyBoM3tcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi52aWV3LXR5cGUgaDM6aG92ZXIsICNwcm9qZWN0cyBoMzpob3ZlcntcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udmlldy10eXBlIGgzOmFjdGl2ZSwgI3Byb2plY3RzIGgzOmFjdGl2ZXtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxyXFxufVxcclxcbi8qIFZpZXcgdHlwZSBzZWN0aW9uIGVuZCAqL1xcclxcblxcclxcbi8qIENhdGVnb3JpZXMgc2VjdGlvbiovXFxyXFxuXFxyXFxuLmNhdGVnb3JpZXN7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwdmg7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yaWVzLXRpdGxle1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yaWVzLXRpdGxlIGRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcmllcy1kaXZpZGVye1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjE3LCAyMTcsIDIxNywgMC42KTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLXRvcDogMC4xcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWNhdGVnb3J5LWJ1dHRvbntcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1jYXRlZ29yeS1idXR0b246aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnktZWRpdC1idG57XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1iZyk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeS1lZGl0LWJ0bjpob3ZlcntcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5LWVkaXQtYnRuOmFjdGl2ZXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxyXFxufVxcclxcblxcclxcbi8qIENhdGVnb3J5IHNlY3Rpb24gZW5kICovXFxyXFxuXFxyXFxuLyogTWVzc2FnZSBib3ggKi9cXHJcXG4ubXNnLWRpdntcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDB2aDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbSAzcmVtO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWJnKTtcXHJcXG4gICAgYm9yZGVyOiAjRkY2NTY1IHNvbGlkIDJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlSW4gMC40cyBsaW5lYXIgMSBub3JtYWwgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbi5tc2ctZGl2LW91dHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZU91dCAwLjNzIGxpbmVhciBub3JtYWwgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRve1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwdmgpO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0IHtcXHJcXG4gICAgdG97XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICB9XFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTB2aCk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5tc2ctaWNvbntcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIC5tc2ctbXNne1xcclxcblxcclxcbn0gKi9cXHJcXG5cXHJcXG4uZXJyb3J7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkMxQzE7XFxyXFxuICAgIGNvbG9yOiAjRkYzNTM1O1xcclxcbiAgICBib3JkZXItY29sb3I6ICNGRjYzNjM7XFxyXFxufVxcclxcblxcclxcbi5zdWNjZXNze1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYzZmZmMxO1xcclxcbiAgICBjb2xvcjogIzAxOWMwMTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjNzBmZjYzO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCwgcHJvamVjdHMsIHNhdmVBbmRSZWZyZXNoIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XHJcbmltcG9ydCB7IHJlbW92ZU1vZGFsLCByZW5kZXJNZXNzYWdlIH0gZnJvbSAnLi91aS5qcyc7XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xyXG4gIC8vIE1vZGFsXHJcbiAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuXHJcbiAgLy8gTW9kYWwgaGVhZGVyXHJcbiAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgTmV3IENhdGVnb3J5JztcclxuXHJcbiAgLy8gSW5wdXQgZGl2XHJcbiAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1kaXYnKTtcclxuXHJcbiAgLy8gQ2F0ZWdvcnkgbmFtZSBpbnB1dFxyXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdDYXRlZ29yeSBOYW1lJztcclxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgdGl0bGVJbnB1dC5pZCA9ICdjYXRlZ29yeS1pbnB1dCc7XHJcbiAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBhIGNhdGVnb3J5IG5hbWUnO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcblxyXG4gIC8vIEJ1dHRvbnNcclxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWRpdicpO1xyXG5cclxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLXNlY29uZGFyeScpO1xyXG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBhZGRUYXNrQnRuLmlkID0gJ2NvbmZpcm0tYWRkLXRhc2snO1xyXG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUgQ2F0ZWdvcnknO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBBREQgVEFTSyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gSW5wdXQgY29udHJvbFxyXG4gICAgbGV0IGVycm9yID0gZmFsc2U7XHJcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICB0aXRsZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlcnJvciA9PT0gdHJ1ZSkge1xyXG4gICAgICByZW5kZXJNZXNzYWdlLmVycm9yKCdQbGFzZSBlbnRlciBhIHZhbGlkIGNhdGVnb3J5IG5hbWUnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5ld1Byb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XHJcbiAgICByZW5kZXJNZXNzYWdlLnN1Y2Nlc3MoJ0NhdGVnb3J5IGNyZWF0ZWQhJyk7XHJcbiAgICByZW1vdmVNb2RhbCgpO1xyXG4gIH0pO1xyXG5cclxuICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgYWRkVGFza0J0bi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ3Jvdy1yZXZlcnNlJztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xyXG5cclxuICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGFkZEljb24uY2xhc3NMaXN0ID0gJ2ZhLXNvbGlkIGZhLXBsdXMnO1xyXG4gIGFkZEljb24uc3R5bGUuY29sb3IgPSAnI2ZmZic7XHJcbiAgYWRkSWNvbi5zdHlsZS5tYXJnaW5SaWdodCA9ICcwLjI1cmVtJztcclxuXHJcbiAgYWRkVGFza0J0bi5hcHBlbmRDaGlsZChhZGRJY29uKTtcclxuXHJcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xyXG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XHJcblxyXG4gIC8vIEFwcGVuZCBjaGlsZHMgdG8gbW9kYWxcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0Rpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZFByb2plY3QgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlTmV3VGFzayB9IGZyb20gJy4vcHJvamVjdHMuanMnO1xyXG5pbXBvcnQgeyByZW1vdmVNb2RhbCwgcmVuZGVyTWVzc2FnZSB9IGZyb20gJy4vdWkuanMnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQWRkVGFza01vZGFsKHByb2plY3RMaXN0KSB7XHJcbiAgLy8gTW9kYWxcclxuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkVGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xyXG5cclxuICAvLyBNb2RhbCBoZWFkZXJcclxuICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuXHJcbiAgLy8gSW5wdXQgZGl2XHJcbiAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1kaXYnKTtcclxuXHJcbiAgLy8gVGl0bGUgaW5wdXRcclxuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xyXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlLWlucHV0JztcclxuICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ0FkZCBhIHRpdGxlJztcclxuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuXHJcbiAgLy8gRGVzY3JpcHRpb24gaW5wdXRcclxuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uLWlucHV0JztcclxuICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0FkZCBhIGRlc2NyaXB0aW9uJztcclxuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuXHJcbiAgLy8gRGF0ZSBpbnB1dFxyXG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XHJcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICBkYXRlSW5wdXQuaWQgPSAnZGF0ZS1pbnB1dCc7XHJcbiAgZGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gJ2RkL21tL3l5eXknO1xyXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcblxyXG4gIC8vIFByaW9yaXR5IGlucHV0XHJcbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcclxuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgcHJpb3JpdHlJbnB1dC5pZCA9ICdwcmlvcml0eS1pbnB1dCc7XHJcbiAgY29uc3QgbG93UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gIGxvd1AudmFsdWUgPSAnbG93JztcclxuICBsb3dQLnRleHRDb250ZW50ID0gJ0xvdyc7XHJcblxyXG4gIGNvbnN0IG1lZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICBtZWRQLnZhbHVlID0gJ21lZGl1bSc7XHJcbiAgbWVkUC50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xyXG5cclxuICBjb25zdCBoaWdQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgaGlnUC52YWx1ZSA9ICdoaWdoJztcclxuICBoaWdQLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xyXG5cclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcclxuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxvd1ApO1xyXG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobWVkUCk7XHJcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdQKTtcclxuXHJcbiAgLy8gUHJvamVjdCBpbnB1dFxyXG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcclxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICBwcm9qZWN0SW5wdXQuaWQgPSAncHJpb3JpdHktaW5wdXQnO1xyXG5cclxuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XHJcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xyXG5cclxuICAvLyBMb29wIHRocm91Z2ggcHJvamVjdHMgYW5kIGdldCBwcm9qZWN0IG5hbWVzLCBtYWtlIHRoZW0gYW4gb3B0aW9uXHJcbiAgaWYgKHByb2plY3RMaXN0ICE9ICcnKSB7XHJcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHBOYW1lID0gcHJvamVjdC5wcm9qZWN0TmFtZTtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBlbGVtZW50LnZhbHVlID0gcE5hbWU7XHJcbiAgICAgIGVsZW1lbnQudGV4dCA9IHBOYW1lO1xyXG4gICAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEFwcGVuZCBhbGwgdGhlIGlucHV0cyB0byBpbnB1dERpdlxyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xyXG5cclxuICAvLyBCdXR0b25zXHJcbiAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1kaXYnKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBDQU5DRUwgQlVUVE9OIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5Jyk7XHJcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVtb3ZlTW9kYWwoKTtcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEFERCBUQVNLIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBhZGRUYXNrQnRuLmlkID0gJ2NvbmZpcm0tYWRkLXRhc2snO1xyXG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcclxuXHJcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIElucHV0IGNvbnRyb2xcclxuICAgIGxldCBlcnJvciA9IGZhbHNlO1xyXG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT0gJycpIHtcclxuICAgICAgdGl0bGVJbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9ICdyZWQnO1xyXG4gICAgICBlcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICBkZXNjcmlwdGlvbklucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChkYXRlSW5wdXQudmFsdWUgPT0gJycpIHtcclxuICAgICAgZGF0ZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlcnJvciA9PT0gdHJ1ZSkge1xyXG4gICAgICByZW5kZXJNZXNzYWdlLmVycm9yKCdQbGVhc2UgY2hlY2sgeW91ciBpbnB1dCB2YWx1ZXMnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5ld1Rhc2soXHJcbiAgICAgIHByb2plY3RJbnB1dC52YWx1ZSxcclxuICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcclxuICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcclxuICAgICAgZGF0ZUlucHV0LnZhbHVlLFxyXG4gICAgICBwcmlvcml0eUlucHV0LnZhbHVlLFxyXG4gICAgICAnJ1xyXG4gICAgKTtcclxuICAgIHJlbmRlck1lc3NhZ2Uuc3VjY2VzcygnVGFzayBjcmVhdGVkIScpO1xyXG4gICAgcmVtb3ZlTW9kYWwoKTtcclxuICB9KTtcclxuXHJcbiAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3ctcmV2ZXJzZSc7XHJcbiAgYWRkVGFza0J0bi5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XHJcbiAgYWRkVGFza0J0bi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJztcclxuXHJcbiAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBhZGRJY29uLmNsYXNzTGlzdCA9ICdmYS1zb2xpZCBmYS1wbHVzJztcclxuICBhZGRJY29uLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xyXG5cclxuICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZEljb24pO1xyXG5cclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcclxuXHJcbiAgLy8gQXBwZW5kIGNoaWxkcyB0byBtb2RhbFxyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSk7XHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChpbnB1dERpdik7XHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRUYXNrRGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyQWRkVGFza01vZGFsIH07XHJcbiIsImltcG9ydCB7IHByb2plY3RzLCBzYXZlQW5kUmVmcmVzaCB9IGZyb20gJy4vcHJvamVjdHMuanMnO1xyXG5pbXBvcnQgeyBjaGFuZ2VBY3RpdmVDYXRlZ29yeSwgaW5pdGFsaXplQ2F0ZWdvcmllcyB9IGZyb20gJy4vaW5kZXguanMnO1xyXG5pbXBvcnQgeyByZW1vdmVNb2RhbCwgcmVuZGVyTWVzc2FnZSB9IGZyb20gJy4vdWkuanMnO1xyXG5cclxuZnVuY3Rpb24gZWRpdFByb2plY3QocHJvamVjdFJlZmVyZW5jZSkge1xyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdFJlZmVyZW5jZS5wcm9qZWN0TmFtZTtcclxuXHJcbiAgLy8gTW9kYWxcclxuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkVGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xyXG5cclxuICAvLyBNb2RhbCBoZWFkZXJcclxuICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXQgQ2F0ZWdvcnknO1xyXG5cclxuICAvLyBJbnB1dCBkaXZcclxuICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWRpdicpO1xyXG5cclxuICAvLyBUaXRsZSBpbnB1dFxyXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdDYXRlZ29yeSBOYW1lJztcclxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZS1pbnB1dCc7XHJcbiAgdGl0bGVJbnB1dC52YWx1ZSA9IHByb2plY3ROYW1lO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAvLyBBcHBlbmQgYWxsIHRoZSBpbnB1dHMgdG8gaW5wdXREaXZcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcblxyXG4gIC8vIEJ1dHRvbnNcclxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWRpdicpO1xyXG5cclxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLXNlY29uZGFyeScpO1xyXG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBhZGRUYXNrQnRuLmlkID0gJ2NvbmZpcm0tYWRkLXRhc2snO1xyXG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQUREIFRBU0sgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIElucHV0IGNvbnRyb2xcclxuICAgIGxldCBlcnJvciA9IGZhbHNlO1xyXG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT0gJycpIHtcclxuICAgICAgdGl0bGVJbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9ICdyZWQnO1xyXG4gICAgICBlcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZXJyb3IgPT09IHRydWUpIHtcclxuICAgICAgcmVuZGVyTWVzc2FnZS5lcnJvcignUGxhc2UgZW50ZXIgYSB2YWxpZCBjYXRlZ29yeSBuYW1lJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwcm9qZWN0UmVmZXJlbmNlLnByb2plY3ROYW1lID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgIHNhdmVBbmRSZWZyZXNoKCk7XHJcbiAgICBpbml0YWxpemVDYXRlZ29yaWVzKCk7XHJcbiAgICBjaGFuZ2VBY3RpdmVDYXRlZ29yeSh0aXRsZUlucHV0LnZhbHVlKTtcclxuICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgICByZW5kZXJNZXNzYWdlLnN1Y2Nlc3MoJ0NhdGVnb3J5IHNhdmVkIScpO1xyXG4gIH0pO1xyXG5cclxuICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgYWRkVGFza0J0bi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ3Jvdy1yZXZlcnNlJztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xyXG5cclxuICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGFkZEljb24uY2xhc3NMaXN0ID0gJ2ZhLXNvbGlkIGZhLXBsdXMnO1xyXG4gIGFkZEljb24uc3R5bGUuY29sb3IgPSAnI2ZmZic7XHJcbiAgYWRkSWNvbi5zdHlsZS5tYXJnaW5SaWdodCA9ICcwLjI1cmVtJztcclxuXHJcbiAgYWRkVGFza0J0bi5hcHBlbmRDaGlsZChhZGRJY29uKTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlbW92ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLXNlY29uZGFyeScpO1xyXG4gIHJlbW92ZVRhc2tCdG4udGV4dENvbnRlbnQgPSAnUmVtb3ZlIENhdGVnb3J5JztcclxuICByZW1vdmVUYXNrQnRuLnN0eWxlLm1hcmdpbiA9ICcwIDAuNXJlbSc7XHJcbiAgcmVtb3ZlVGFza0J0bi5zdHlsZS5ib3JkZXJDb2xvciA9ICcjRkY2NTY1JztcclxuICByZW1vdmVUYXNrQnRuLnN0eWxlLmNvbG9yID0gJyNGRjY1NjUnO1xyXG5cclxuICByZW1vdmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjYXRlZ29yeT8nKSkge1xyXG4gICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0UmVmZXJlbmNlKSwgMSk7XHJcbiAgICAgIGNoYW5nZUFjdGl2ZUNhdGVnb3J5KCdBbGwnKTtcclxuICAgICAgc2F2ZUFuZFJlZnJlc2goKTtcclxuICAgICAgaW5pdGFsaXplQ2F0ZWdvcmllcygpO1xyXG4gICAgICByZW1vdmVNb2RhbCgpO1xyXG4gICAgICByZW5kZXJNZXNzYWdlLnN1Y2Nlc3MoJ0NhdGVnb3J5IHJlbW92ZWQnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xyXG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQocmVtb3ZlVGFza0J0bik7XHJcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcclxuXHJcbiAgLy8gQXBwZW5kIGNoaWxkcyB0byBtb2RhbFxyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSk7XHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChpbnB1dERpdik7XHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRUYXNrRGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgZWRpdFByb2plY3QgfTtcclxuIiwiLypcclxucHJvamVjdFJlZmVyZW5jZS5vYmplY3RzLmluZGV4T2Yob2JqZWN0UmVmZXJlbmNlKVxyXG4gICAgLy8gRmluZCB0aGUgb2JqZWN0IGluIG9iamVjdHMgYXJyYXlcclxuICAgIHByb2plY3RSZWZlcmVuY2Uub2JqZWN0cy5zcGxpY2UoXHJcbiAgICAgIHByb2plY3RSZWZlcmVuY2Uub2JqZWN0cy5pbmRleE9mKG9iamVjdFJlZmVyZW5jZSksXHJcbiAgICAgIDFcclxuICAgICk7XHJcblxyXG4qL1xyXG5cclxuaW1wb3J0IHsgcHJvamVjdHMsIGNyZWF0ZU5ld1Rhc2ssIHNhdmVBbmRSZWZyZXNoIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XHJcbmltcG9ydCB7IHJlbW92ZU1vZGFsLCByZW5kZXJNZXNzYWdlIH0gZnJvbSAnLi91aS5qcyc7XHJcblxyXG5mdW5jdGlvbiBlZGl0VGFzayhvYmplY3RSZWZlcmVuY2UsIHByb2plY3RSZWZlcmVuY2UpIHtcclxuICBjb25zdCB0aXRsZSA9IG9iamVjdFJlZmVyZW5jZS50aXRsZTtcclxuICBjb25zdCBkZXNjID0gb2JqZWN0UmVmZXJlbmNlLmRlc2NyaXB0aW9uO1xyXG4gIGNvbnN0IGRhdGUgPSBvYmplY3RSZWZlcmVuY2UuZHVlRGF0ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IG9iamVjdFJlZmVyZW5jZS5wcmlvcml0eTtcclxuICAvLyBNb2RhbFxyXG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcblxyXG4gIC8vIE1vZGFsIGhlYWRlclxyXG4gIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnRWRpdCBUYXNrJztcclxuXHJcbiAgLy8gSW5wdXQgZGl2XHJcbiAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1kaXYnKTtcclxuXHJcbiAgLy8gVGl0bGUgaW5wdXRcclxuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xyXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlLWlucHV0JztcclxuICB0aXRsZUlucHV0LnZhbHVlID0gdGl0bGU7XHJcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcblxyXG4gIC8vIERlc2NyaXB0aW9uIGlucHV0XHJcbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcclxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdkZXNjcmlwdGlvbi1pbnB1dCc7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGRlc2M7XHJcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XHJcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcblxyXG4gIC8vIERhdGUgaW5wdXRcclxuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgZGF0ZUlucHV0LmlkID0gJ2RhdGUtaW5wdXQnO1xyXG4gIGRhdGVJbnB1dC52YWx1ZSA9IGRhdGU7XHJcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xyXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuXHJcbiAgLy8gUHJpb3JpdHkgaW5wdXRcclxuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xyXG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICBwcmlvcml0eUlucHV0LmlkID0gJ3ByaW9yaXR5LWlucHV0JztcclxuICBwcmlvcml0eUlucHV0LnZhbHVlID0gcHJpb3JpdHk7XHJcbiAgY29uc3QgbG93UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gIGxvd1AudmFsdWUgPSAnbG93JztcclxuICBsb3dQLnRleHRDb250ZW50ID0gJ0xvdyc7XHJcblxyXG4gIGNvbnN0IG1lZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICBtZWRQLnZhbHVlID0gJ21lZGl1bSc7XHJcbiAgbWVkUC50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xyXG5cclxuICBjb25zdCBoaWdQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgaGlnUC52YWx1ZSA9ICdoaWdoJztcclxuICBoaWdQLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xyXG5cclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcclxuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxvd1ApO1xyXG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobWVkUCk7XHJcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdQKTtcclxuXHJcbiAgLy8gUHJvamVjdCBpbnB1dFxyXG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcclxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICBwcm9qZWN0SW5wdXQuaWQgPSAncHJpb3JpdHktaW5wdXQnO1xyXG5cclxuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XHJcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xyXG5cclxuICAvLyBMb29wIHRocm91Z2ggcHJvamVjdHMgYW5kIGdldCBwcm9qZWN0IG5hbWVzLCBtYWtlIHRoZW0gYW4gb3B0aW9uXHJcbiAgaWYgKHByb2plY3RzICE9ICcnKSB7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHBOYW1lID0gcHJvamVjdC5wcm9qZWN0TmFtZTtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBlbGVtZW50LnZhbHVlID0gcE5hbWU7XHJcbiAgICAgIGVsZW1lbnQudGV4dCA9IHBOYW1lO1xyXG4gICAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb2plY3RJbnB1dC52YWx1ZSA9IHByb2plY3RSZWZlcmVuY2UucHJvamVjdE5hbWU7XHJcblxyXG4gIC8vIEFwcGVuZCBhbGwgdGhlIGlucHV0cyB0byBpbnB1dERpdlxyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xyXG5cclxuICAvLyBCdXR0b25zXHJcbiAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1kaXYnKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1zZWNvbmRhcnknKTtcclxuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZW1vdmVNb2RhbCgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYWRkVGFza0J0bi5pZCA9ICdjb25maXJtLWFkZC10YXNrJztcclxuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEFERCBUQVNLIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBJbnB1dCBjb250cm9sXHJcbiAgICBsZXQgZXJyb3IgPSBmYWxzZTtcclxuICAgIGlmICh0aXRsZUlucHV0LnZhbHVlID09ICcnKSB7XHJcbiAgICAgIHRpdGxlSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSAncmVkJztcclxuICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPT0gJycpIHtcclxuICAgICAgZGVzY3JpcHRpb25JbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9ICdyZWQnO1xyXG4gICAgICBlcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0ZUlucHV0LnZhbHVlID09ICcnKSB7XHJcbiAgICAgIGRhdGVJbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9ICdyZWQnO1xyXG4gICAgICBlcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZXJyb3IgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdFJlZmVyZW5jZS50aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICBvYmplY3RSZWZlcmVuY2UuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgb2JqZWN0UmVmZXJlbmNlLmR1ZURhdGUgPSBkYXRlSW5wdXQudmFsdWU7XHJcbiAgICBvYmplY3RSZWZlcmVuY2UucHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xyXG5cclxuICAgIC8vIFRyYW5zZmVyIHRhc2sgdG8gbmV3IHByb2plY3QgaWYgbmVlZGVkXHJcbiAgICBpZiAocHJvamVjdElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkgIT0gcHJvamVjdFJlZmVyZW5jZS5wcm9qZWN0TmFtZSkge1xyXG4gICAgICAvLyBEZWxldGUgZnJvbSBvbGQgcHJvamVjdFxyXG4gICAgICBwcm9qZWN0UmVmZXJlbmNlLm9iamVjdHMuc3BsaWNlKFxyXG4gICAgICAgIHByb2plY3RSZWZlcmVuY2Uub2JqZWN0cy5pbmRleE9mKG9iamVjdFJlZmVyZW5jZSksXHJcbiAgICAgICAgMVxyXG4gICAgICApO1xyXG4gICAgICAvLyBDcmVhdGUgbmV3IHRhc2sgd2l0aCBlZGl0ZWQgdmFsdWVzXHJcbiAgICAgIGNyZWF0ZU5ld1Rhc2soXHJcbiAgICAgICAgcHJvamVjdElucHV0LnZhbHVlLFxyXG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcclxuICAgICAgICBkYXRlSW5wdXQudmFsdWUsXHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSxcclxuICAgICAgICAnJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyTWVzc2FnZS5zdWNjZXNzKCdUYXNrIHNhdmVkIScpO1xyXG4gICAgc2F2ZUFuZFJlZnJlc2goKTtcclxuICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93LXJldmVyc2UnO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XHJcblxyXG4gIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYWRkSWNvbi5jbGFzc0xpc3QgPSAnZmEtc29saWQgZmEtcGx1cyc7XHJcbiAgYWRkSWNvbi5zdHlsZS5jb2xvciA9ICcjZmZmJztcclxuICBhZGRJY29uLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzAuMjVyZW0nO1xyXG5cclxuICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZEljb24pO1xyXG5cclxuICBjb25zdCByZW1vdmVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVtb3ZlVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5Jyk7XHJcbiAgcmVtb3ZlVGFza0J0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUgVGFzayc7XHJcbiAgcmVtb3ZlVGFza0J0bi5zdHlsZS5tYXJnaW4gPSAnMCAwLjVyZW0nO1xyXG4gIHJlbW92ZVRhc2tCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSAnI0ZGNjU2NSc7XHJcbiAgcmVtb3ZlVGFza0J0bi5zdHlsZS5jb2xvciA9ICcjRkY2NTY1JztcclxuXHJcbiAgcmVtb3ZlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz8nKSkge1xyXG4gICAgICBwcm9qZWN0UmVmZXJlbmNlLm9iamVjdHMuc3BsaWNlKFxyXG4gICAgICAgIHByb2plY3RSZWZlcmVuY2Uub2JqZWN0cy5pbmRleE9mKG9iamVjdFJlZmVyZW5jZSksXHJcbiAgICAgICAgMVxyXG4gICAgICApO1xyXG4gICAgICBzYXZlQW5kUmVmcmVzaCgpO1xyXG4gICAgICByZW1vdmVNb2RhbCgpO1xyXG4gICAgICByZW5kZXJNZXNzYWdlLnN1Y2Nlc3MoJ1Rhc2sgZGVsZXRlZCEnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xyXG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQocmVtb3ZlVGFza0J0bik7XHJcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcclxuXHJcbiAgLy8gQXBwZW5kIGNoaWxkcyB0byBtb2RhbFxyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSk7XHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChpbnB1dERpdik7XHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRUYXNrRGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgZWRpdFRhc2sgfTtcclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAqIGFzIHRvZG8gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XHJcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tICcuL2FkZFByb2plY3QuanMnO1xyXG5pbXBvcnQgeyByZW5kZXJBZGRUYXNrTW9kYWwgfSBmcm9tICcuL2FkZFRhc2suanMnO1xyXG5pbXBvcnQgeyBlZGl0UHJvamVjdCB9IGZyb20gJy4vZWRpdFByb2plY3QuanMnO1xyXG5cclxuLy8rKysrKysrKysrKysrKysrKysrKysrKysrKysgQUREIFRBU0sgQlVUVE9OICsrKysrKysrKysrKysrKysrKysrKysrKysrKysrXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFza01vZGUpO1xyXG5cclxuZnVuY3Rpb24gYWRkVGFza01vZGUoKSB7XHJcbiAgaWYgKHRvZG8ubG9hZGVkID09IGZhbHNlKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHJlbmRlckFkZFRhc2tNb2RhbCh0b2RvLnByb2plY3RzKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBREQgVEFTSyBCVVRUT04gRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vKysrKysrKysrKysrKysrKysrKysrKysrKysrIEZJTFRFUiBCWSBEQVRFICsrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG5sZXQgc2VsZWN0ZWREYXRlID0gJ1RvZGF5JztcclxuY29uc3QgZGF0ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XHJcblxyXG5mdW5jdGlvbiBpbml0YWxpemVEYXRlcygpIHtcclxuICBjb25zdCBkYXRlRmlsdGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy10eXBlJyk7XHJcbiAgY29uc3QgZGF0ZUJ1dHRvbnMgPSBbLi4uZGF0ZUZpbHRlckVsLmNoaWxkcmVuXTtcclxuXHJcbiAgZGF0ZUJ1dHRvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2hhbmdlQWN0aXZlRGF0ZShlbGVtZW50LnRleHRDb250ZW50KTtcclxuXHJcbiAgICAgIC8vIENoYW5nZSBjb2xvcnMgb2YgYWN0aXZlIGFuZCBpbmFjdGl2ZSBjYXRlZ29yeSBuYW1lc1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlldy10eXBlIGgzJykuZm9yRWFjaCgocmVmKSA9PiB7XHJcbiAgICAgICAgcmVmLmNsYXNzTGlzdCA9ICd3aGl0ZS10ZXh0JztcclxuICAgICAgfSk7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ID0gJ2FjdGl2ZS10ZXh0JztcclxuXHJcbiAgICAgIGRhdGVUaXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlRGF0ZShuZXdEYXRlKSB7XHJcbiAgc2VsZWN0ZWREYXRlID0gbmV3RGF0ZTtcclxuICB0b2RvLnJlZnJlc2hVSSgpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZJTFRFUiBCWSBEQVRFIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vKysrKysrKysrKysrKysrKysrKysrKysrKysrIENBVEVHT1JZIFNFTEVDVElPTiwgSU5JVEFMSVpFLVVQREFURSBDQVRFR09SWSwgQUREIENBVEVHT1JZICsrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG5sZXQgc2VsZWN0ZWRDYXRlZ29yeSA9ICdBbGwnO1xyXG5cclxuLy8gVXBkYXRlIGNhdGVnb3JpZXNcclxuZnVuY3Rpb24gaW5pdGFsaXplQ2F0ZWdvcmllcygpIHtcclxuICBjb25zdCBjYXRlZ29yaWVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcclxuXHJcbiAgY2F0ZWdvcmllc0VsLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgaDMudGV4dENvbnRlbnQgPSAnQWxsJztcclxuICBoMy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGV4dCcpO1xyXG4gIGNhdGVnb3JpZXNFbC5hcHBlbmRDaGlsZChoMyk7XHJcblxyXG4gIGgzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY2hhbmdlQWN0aXZlQ2F0ZWdvcnkoaDMudGV4dENvbnRlbnQpO1xyXG4gICAgcmVzZXRPdGhlckNhdGVnb3JpZXMoKTtcclxuICAgIGgzLmNsYXNzTGlzdCA9ICdhY3RpdmUtdGV4dCc7XHJcbiAgfSk7XHJcblxyXG4gIC8vIENyZWF0ZSBjYXRlZ29yeSBlbGVtZW50cyBmcm9tIHN0b3JhZ2VcclxuICB0b2RvLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIHdyYXBwZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gICAgd3JhcHBlci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJztcclxuXHJcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoMy50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdE5hbWU7XHJcbiAgICBoMy5jbGFzc0xpc3QuYWRkKCd3aGl0ZS10ZXh0Jyk7XHJcblxyXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGVkaXRCdG4uY2xhc3NMaXN0ID0gJ2NhdGVnb3J5LWVkaXQtYnRuIGZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZSBoaWRkZW4nO1xyXG5cclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaDMpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcclxuXHJcbiAgICBjYXRlZ29yaWVzRWwuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcblxyXG4gICAgaDMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNoYW5nZUFjdGl2ZUNhdGVnb3J5KGgzLnRleHRDb250ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGVkaXRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0T3RoZXJDYXRlZ29yaWVzKCkge1xyXG4gIC8vIENoYW5nZSBjb2xvcnMgb2YgYWN0aXZlIGFuZCBpbmFjdGl2ZSBjYXRlZ29yeSBuYW1lcyBhbmQgaGlkZSBlZGl0IGJ1dHRvbnNcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdHMgaDMnKS5mb3JFYWNoKChyZWYpID0+IHtcclxuICAgIHJlZi5jbGFzc0xpc3QgPSAnd2hpdGUtdGV4dCc7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3RzIGknKS5mb3JFYWNoKChyZWYpID0+IHtcclxuICAgIHJlZi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlQ2F0ZWdvcnkobmV3Q2F0KSB7XHJcbiAgc2VsZWN0ZWRDYXRlZ29yeSA9IG5ld0NhdDtcclxuICByZXNldE90aGVyQ2F0ZWdvcmllcygpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0cyBkaXYnKS5mb3JFYWNoKChyZWYpID0+IHtcclxuICAgIGNvbnN0IGgzID0gcmVmLnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XHJcbiAgICBjb25zdCBpY29uID0gcmVmLnF1ZXJ5U2VsZWN0b3IoJ2knKTtcclxuICAgIGlmIChoMy50ZXh0Q29udGVudCA9PSBuZXdDYXQpIHtcclxuICAgICAgaDMuY2xhc3NMaXN0ID0gJ2FjdGl2ZS10ZXh0JztcclxuICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICB9KTtcclxuICB0b2RvLnNhdmVBbmRSZWZyZXNoKCk7XHJcbn1cclxuXHJcbmNvbnN0IGFkZENhdGVnb3J5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNhdGVnb3J5LWJ1dHRvbicpO1xyXG5hZGRDYXRlZ29yeUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ0FURUdPUlkgU0VMRUNUSU9OLCBJTklUQUxJWkUtVVBEQVRFIENBVEVHT1JZLCBBREQgQ0FURUdPUlkgRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vL1xyXG5cclxudG9kby5pbml0YWxpemUoKTtcclxuaW5pdGFsaXplQ2F0ZWdvcmllcygpO1xyXG5pbml0YWxpemVEYXRlcygpO1xyXG5cclxuZXhwb3J0IHtcclxuICBpbml0YWxpemVDYXRlZ29yaWVzLFxyXG4gIHNlbGVjdGVkQ2F0ZWdvcnksXHJcbiAgc2VsZWN0ZWREYXRlLFxyXG4gIGNoYW5nZUFjdGl2ZUNhdGVnb3J5LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zYXZlU3lzdGVtLmpzJztcclxuaW1wb3J0IHsgcmVuZGVyVGFza0JveCB9IGZyb20gJy4vdWkuanMnO1xyXG5pbXBvcnQge1xyXG4gIGluaXRhbGl6ZUNhdGVnb3JpZXMsXHJcbiAgc2VsZWN0ZWRDYXRlZ29yeSxcclxuICBzZWxlY3RlZERhdGUsXHJcbn0gZnJvbSAnLi9pbmRleC5qcyc7XHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxubGV0IGxvYWRlZCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICB0aGlzLm9iamVjdHMgPSBbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xyXG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgdGhpcy5ub3RlcyA9IG5vdGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaXJzdFRpbWVUZXN0KCkge1xyXG4gIGlmIChzdG9yYWdlLmlzRmlyc3RUaW1lTG9hZCgpID09PSBmYWxzZSkgcmV0dXJuOyAvLyBTa2lwIGlmIGl0J3Mgbm90IGZpcnN0IHRpbWUgbG9hZGluZ1xyXG4gIC8vIENyZWF0ZSBkZWZhdWx0IHByb2plY3QgaWYgaXQncyB0aGUgZmlyc3QgdGltZVxyXG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcpO1xyXG4gIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xyXG5cclxuICBsb2FkZWQgPSB0cnVlO1xyXG5cclxuICAvLyBDcmVhdGUgYSBleGFtcGxlIHRhc2tcclxuICBjcmVhdGVOZXdUYXNrKFxyXG4gICAgJ0RlZmF1bHQgUHJvamVjdCcsXHJcbiAgICAnQmHFn2zEsWsnLFxyXG4gICAgJ0RlbmVtZSBhw6fEsWtsYW1hc8SxJyxcclxuICAgICcyYmRvbmUnLFxyXG4gICAgJ2hpZ2gnLFxyXG4gICAgJ0dlbGlyc2UgZWtpbWUnXHJcbiAgKTtcclxuXHJcbiAgLy8gU2F2ZSB0aGUgdGFzayBhbmQgcHJvamVjdFxyXG4gIHN0b3JhZ2Uuc2F2ZShwcm9qZWN0cyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdMT0FERUQgRklSU1QgVElNRScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lID0gJ1Byb2plY3QgTmFtZScpIHtcclxuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgc2F2ZUFuZFJlZnJlc2goKTtcclxuICBpbml0YWxpemVDYXRlZ29yaWVzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2socHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcclxuICBpZiAobG9hZGVkID09PSBmYWxzZSkge1xyXG4gICAgLy8gQ2FsbCB0aGUgbmV3dGFzayBmdW5jdGlvbiAxcyBsYXRlciBpZiB0aGUgc2F2ZXMgbm90IGxvYWRlZCB5ZXRcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjcmVhdGVOZXdUYXNrKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcclxuICAgIH0sIDEwMDApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xyXG4gIC8vIEZpbmQgdGhlIHByb2plY3Qgb2JqZWN0XHJcbiAgbGV0IGFzc2lnbmVkUHJvamVjdDtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdCkge1xyXG4gICAgICBhc3NpZ25lZFByb2plY3QgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vIEFkZCB0YXNrIHRvIHByb2plY3Qgb2JqZWN0IGlmIHRoZSAncHJvamVjdCcgaW5wdXQgaXMgYXZhaWxhYmxlXHJcbiAgaWYgKGFzc2lnbmVkUHJvamVjdCAhPT0gbnVsbCkge1xyXG4gICAgbGV0IHRlc3QgPSBhc3NpZ25lZFByb2plY3Qub2JqZWN0cy5wdXNoKHRhc2spO1xyXG4gICAgY29uc29sZS5sb2codGVzdCk7XHJcbiAgfVxyXG4gIC8vIFNhdmUgdGhlIHRhc2sgYW5kIHByb2plY3RzXHJcbiAgc3RvcmFnZS5zYXZlKHByb2plY3RzKTtcclxuICAvLyBSZWZyZXNoIHVpXHJcbiAgcmVmcmVzaFVJKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRhbGl6ZSgpIHtcclxuICBsb2FkVGFza3MoKTtcclxuICBmaXJzdFRpbWVUZXN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRUYXNrcygpIHtcclxuICBpZiAoc3RvcmFnZS5pc0ZpcnN0VGltZUxvYWQoKSA9PT0gdHJ1ZSkgcmV0dXJuOyAvLyBza2lwIGlmIGl0J3MgdGhlIGZpcnN0IHRpbWUgbG9hZGluZ1xyXG4gIHByb2plY3RzID0gc3RvcmFnZS5sb2FkKCk7XHJcbiAgbG9hZGVkID0gdHJ1ZTtcclxuICByZWZyZXNoVUkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZUFuZFJlZnJlc2goKSB7XHJcbiAgc3RvcmFnZS5zYXZlKHByb2plY3RzKTtcclxuICByZWZyZXNoVUkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVmcmVzaFVJKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXZpZXcnKS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgLy8gUmVuZGVyIGxvYWRlZCB0YXNrcyB0byBwYWdlXHJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgLy8gRmlsdGVyIGJ5IHByb2plY3RcclxuICAgIGlmIChmaWx0ZXJCeVByb2plY3Qoc2VsZWN0ZWRDYXRlZ29yeSwgcHJvamVjdC5wcm9qZWN0TmFtZSkpIHtcclxuICAgICAgcHJvamVjdC5vYmplY3RzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAvL0ZpbHRlciBieSBkYXRlXHJcbiAgICAgICAgaWYgKGZpbHRlckJ5RGF0ZShzZWxlY3RlZERhdGUsIHRhc2suZHVlRGF0ZSkpIHtcclxuICAgICAgICAgIHJlbmRlclRhc2tCb3goXHJcbiAgICAgICAgICAgIHRhc2sudGl0bGUsXHJcbiAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHRhc2suZHVlRGF0ZSxcclxuICAgICAgICAgICAgdGFzay5wcmlvcml0eSxcclxuICAgICAgICAgICAgdGFzayxcclxuICAgICAgICAgICAgcHJvamVjdFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJCeVByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0LCBwcm9qZWN0TmFtZSkge1xyXG4gIGlmIChcclxuICAgIHNlbGVjdGVkUHJvamVjdC50b0xvd2VyQ2FzZSgpID09ICdhbGwnIHx8XHJcbiAgICBzZWxlY3RlZFByb2plY3QudG9Mb3dlckNhc2UoKSA9PSBwcm9qZWN0TmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlckJ5RGF0ZShzZWxlY3RlZFR5cGUsIHRhc2tEdWVEYXRlKSB7XHJcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGxldCBzZWxlY3RlZFR5cGVMb3dlciA9IHNlbGVjdGVkVHlwZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICBsZXQgdGFza0RheSA9IHRhc2tEdWVEYXRlLnN1YnN0cmluZyg4LCAxMCk7XHJcbiAgbGV0IHRhc2tNb250aCA9IHRhc2tEdWVEYXRlLnN1YnN0cmluZyg1LCA3KTtcclxuICBsZXQgdGFza1llYXIgPSB0YXNrRHVlRGF0ZS5zdWJzdHJpbmcoMCwgNCk7XHJcblxyXG4gIGlmIChzZWxlY3RlZFR5cGVMb3dlciA9PSAnYWxsJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGlmIChcclxuICAgIHNlbGVjdGVkVHlwZUxvd2VyID09ICd0b2RheScgJiZcclxuICAgIGRhdGUuZ2V0RGF0ZSgpID09IHRhc2tEYXkgJiZcclxuICAgIGRhdGUuZ2V0TW9udGgoKSArIDEgPT0gdGFza01vbnRoICYmXHJcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCkgPT0gdGFza1llYXJcclxuICApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBpZiAoXHJcbiAgICBzZWxlY3RlZFR5cGVMb3dlciA9PSAndGhpcyB3ZWVrJyAmJlxyXG4gICAgZGF0ZS5nZXREYXRlKCkgLSB0YXNrRGF5IDw9IDcgJiZcclxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSA9PSB0YXNrWWVhclxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGlmIChcclxuICAgIHNlbGVjdGVkVHlwZUxvd2VyID09ICd0aGlzIG1vbnRoJyAmJlxyXG4gICAgZGF0ZS5nZXRNb250aCgpICsgMSA9PSB0YXNrTW9udGggJiZcclxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSA9PSB0YXNrWWVhclxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGluaXRhbGl6ZSxcclxuICBjcmVhdGVOZXdUYXNrLFxyXG4gIGNyZWF0ZU5ld1Byb2plY3QsXHJcbiAgcmVmcmVzaFVJLFxyXG4gIHNhdmVBbmRSZWZyZXNoLFxyXG4gIHByb2plY3RzLFxyXG4gIGxvYWRlZCxcclxufTtcclxuIiwiY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNhdmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcclxuICAgIGNvbnN0IHN0cmluZ2lmaWVkID0gSlNPTi5wYXJzZShzYXZlKTtcclxuICAgIGNvbnNvbGUubG9nKCdMT0FERUQnKTtcclxuICAgIGNvbnNvbGUubG9nKHN0cmluZ2lmaWVkKTtcclxuICAgIHJldHVybiBzdHJpbmdpZmllZDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlID0gKHByb2plY3RzKSA9PiB7XHJcbiAgICBjb25zdCBzdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcclxuICAgIGNvbnN0IHNhdmUgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBzdHJpbmdpZmllZCk7XHJcbiAgICBjb25zb2xlLmxvZygnU0FWRUQnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc0ZpcnN0VGltZUxvYWQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgPT09IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYXJTYXZlcyA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgbG9hZCwgc2F2ZSwgaXNGaXJzdFRpbWVMb2FkLCBjbGVhclNhdmVzIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBzdG9yYWdlIH07XHJcbiIsImltcG9ydCB7IHNhdmVBbmRSZWZyZXNoIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XHJcbmltcG9ydCB7IGVkaXRUYXNrIH0gZnJvbSAnLi9lZGl0VGFzay5qcyc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUYXNrQm94KFxyXG4gIHRpdGxlID0gJ1Rhc2sgVGl0bGUnLFxyXG4gIGRlc2MgPSAnVGFzayBEZXNjJyxcclxuICBkYXRlID0gJ1Rhc2sgZGF0ZScsXHJcbiAgcHJpb3JpdHkgPSAnJyxcclxuICBvYmplY3RSZWZlcmVuY2UsXHJcbiAgcHJvamVjdFJlZmVyZW5jZVxyXG4pIHtcclxuICBjb25zdCB0YXNrQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFza0JveERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJveCcpO1xyXG4gIHRhc2tCb3hEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b29nbGVFeHRlbmRlZCk7XHJcblxyXG4gIGNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcclxuXHJcbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG5cclxuICBjb25zdCBsZWZ0SW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBsZWZ0SW5uZXJEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICBsZWZ0SW5uZXJEaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xyXG5cclxuICBsZWZ0RGl2LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcclxuICBsZWZ0RGl2LmFwcGVuZENoaWxkKGxlZnRJbm5lckRpdik7XHJcblxyXG4gIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmlnaHREaXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LWFsaWduLWNlbnRlcicpO1xyXG5cclxuICBjb25zdCBwcmlvcml0eUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcHJpb3JpdHlFbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScsICdoaWRkZW4nKTtcclxuXHJcbiAgY29uc3QgY2xhZW5kYXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGNsYWVuZGFySWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1jYWxlbmRhci1kYXlzJyk7XHJcbiAgY2xhZW5kYXJJY29uLnN0eWxlLmNvbG9yID0gJyMyRTJFMkUnO1xyXG5cclxuICBjb25zdCBkYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBkYXRlVGV4dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcclxuXHJcbiAgY29uc3Qgc2VlTW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlZU1vcmUuY2xhc3NMaXN0LmFkZCgnc2VlLW1vcmUnKTtcclxuXHJcbiAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1jaGV2cm9uLWRvd24nKTtcclxuXHJcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInLCAnZmEtcGVuLXRvLXNxdWFyZScsICdoaWRkZW4nKTtcclxuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZWRpdFRhc2sob2JqZWN0UmVmZXJlbmNlLCBwcm9qZWN0UmVmZXJlbmNlKTtcclxuICB9KTtcclxuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJyBET1VCTEUgQ0xDSUNLRUQgJyk7XHJcblxyXG4gICAgcHJvamVjdFJlZmVyZW5jZS5vYmplY3RzLnNwbGljZShcclxuICAgICAgcHJvamVjdFJlZmVyZW5jZS5vYmplY3RzLmluZGV4T2Yob2JqZWN0UmVmZXJlbmNlKSxcclxuICAgICAgMVxyXG4gICAgKTtcclxuICAgIHNhdmVBbmRSZWZyZXNoKCk7XHJcbiAgfSk7XHJcblxyXG4gIHNlZU1vcmUuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcclxuICBzZWVNb3JlLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xyXG5cclxuICByaWdodERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUVsKTtcclxuICByaWdodERpdi5hcHBlbmRDaGlsZChjbGFlbmRhckljb24pO1xyXG4gIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGRhdGVUZXh0KTtcclxuICByaWdodERpdi5hcHBlbmRDaGlsZChzZWVNb3JlKTtcclxuXHJcbiAgdGFza0JveERpdi5hcHBlbmRDaGlsZChsZWZ0RGl2KTtcclxuICB0YXNrQm94RGl2LmFwcGVuZENoaWxkKHJpZ2h0RGl2KTtcclxuXHJcbiAgLy8gU2V0IHZhbHVlc1xyXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID0gZGVzYztcclxuICBwcmlvcml0eUVsLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XHJcbiAgZGF0ZVRleHQudGV4dENvbnRlbnQgPSBkYXRlO1xyXG5cclxuICBjb25zdCB0YXNrVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXZpZXcnKTtcclxuXHJcbiAgdGFza1ZpZXcuYXBwZW5kQ2hpbGQodGFza0JveERpdik7XHJcbiAgY29uc29sZS5sb2coJ0JBU1RJSycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlQm94KCkge1xyXG4gIHRoaXMubXNnRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zZy1kaXYnKTtcclxuICB0aGlzLm1zZ0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLWljb24nKTtcclxuICB0aGlzLm1zZ1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLW1zZycpO1xyXG4gIHRoaXMuZXJyb3IgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgaWYgKHRoaXMudGltZXJSZWYgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyUmVmKTtcclxuICAgICAgdGhpcy50aW1lclJlZiA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1zZ0Rpdi5jbGFzc0xpc3QgPSAnbXNnLWRpdiBlcnJvcic7XHJcbiAgICB0aGlzLm1zZ0ljb24uY2xhc3NMaXN0ID0gJ21zZy1pY29uIGZhLXNvbGlkIGZhLWNpcmNsZS1leGNsYW1hdGlvbiBmYS1sZyc7XHJcbiAgICB0aGlzLm1zZ1RleHQuY2xhc3NMaXN0ID0gJ21zZy1tc2cgZXJyb3InO1xyXG4gICAgdGhpcy5tc2dUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHRoaXMuY2xlYXJUaW1lcigpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc3VjY2VzcyA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICBpZiAodGhpcy50aW1lclJlZiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJSZWYpO1xyXG4gICAgICB0aGlzLnRpbWVyUmVmID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubXNnRGl2LmNsYXNzTGlzdCA9ICdtc2ctZGl2IHN1Y2Nlc3MnO1xyXG4gICAgdGhpcy5tc2dJY29uLmNsYXNzTGlzdCA9ICdtc2ctaWNvbiBmYS1zb2xpZCBmYS1jaXJjbGUtY2hlY2sgZmEtbGcnO1xyXG4gICAgdGhpcy5tc2dUZXh0LmNsYXNzTGlzdCA9ICdtc2ctbXNnIHN1Y2Nlc3MnO1xyXG4gICAgdGhpcy5tc2dUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHRoaXMuY2xlYXJUaW1lcigpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMudGltZXJSZWYgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHRoaXMuY2xlYXJUaW1lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudGltZXJSZWYgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gU2xpZGVvdXQgYW5pbWF0aW9uXHJcbiAgICAgIHRoaXMubXNnRGl2LmNsYXNzTGlzdC5hZGQoJ21zZy1kaXYtb3V0Jyk7XHJcbiAgICAgIC8vIEFkZCBoaWRkZW4gY2xhc3MgYW5kIGNsZWFyIG1zZyBhZnRlciBhbmltYXRpb24gZmluaXNoZXNcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tc2dEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy5tc2dUZXh0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICB9LCAyNTAwKTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJNZXNzYWdlID0gbmV3IE1lc3NhZ2VCb3goKTtcclxuXHJcbmZ1bmN0aW9uIHRvb2dsZUV4dGVuZGVkKGUpIHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGNvbnNvbGUubG9nKCdIRUxMTyBGUk9NIEknLCBlLnRhcmdldCwgdGhpcyk7XHJcbiAgaWYgKFxyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWJveCcpIHx8XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWNoZXZyb24tZG93bicpXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2stYm94LWV4dGVuZGVkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVNb2RhbCgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyVGFza0JveCwgcmVtb3ZlTW9kYWwsIHJlbmRlck1lc3NhZ2UgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=