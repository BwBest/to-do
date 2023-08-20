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
    justify-content: normal;
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

.task-view::-webkit-scrollbar, .categories::-webkit-scrollbar{
    width: 6px;
}
  
.task-view::-webkit-scrollbar-track, .categories::-webkit-scrollbar-track{
    background-color: #e6e6e6;
    border-radius: 10px;
}
  
.task-view::-webkit-scrollbar-thumb, .categories::-webkit-scrollbar-thumb{
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
    overflow: hidden !important;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.task-box-extended{
    padding: 2rem 1rem;

    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.05);
}

.task-box-extended h2{
    max-width: 40vw;
    max-height: auto;
    display: block;
    overflow:visible;
    white-space:normal;
    text-overflow: clip;
}

.task-box-extended p{
    max-width: 40vw;
    max-height: auto;
    display: block;
    overflow:visible;
    white-space:normal;
    text-overflow: clip;
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

/* Profile section end*/

.profile, .view-type{
    margin-bottom: 2rem;
}

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
    /* margin-bottom: 20vh; */
    overflow-y: auto;
    padding-right: 1rem;
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

.categories h3{
    max-width: 10vw;
    word-wrap: break-word;
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
    background: #f5b5b5;
    color: #eb2d2d;
    border-color: #c44c4c;
}

.success{
    background: #ccebc9;
    color: #018a01;
    border-color: #52bb49;
}
/* Message box end */

/* Empty taskview message*/

.empty-text-div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #5e5e5e;
}

.empty-text{
    margin-top: 2rem;
    text-align: center;
    color:#5e5e5e;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\r\n\r\n:root{\r\n    --body-bg: #DEDEDE;\r\n    --white-bg: #F9F9F9;\r\n    --primary: #FF9838;\r\n    --secondary: #2E2E2E;\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody{\r\n    font-family: 'Poppins', sans-serif;\r\n    background: var(--body-bg);\r\n    width: 100%;\r\n    height: 100vh;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nh1{\r\n    color: var(--secondary);\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n}\r\n\r\nh2{\r\n    font-size: 1.25rem;\r\n    font-weight: 500;\r\n}\r\n\r\nh3{\r\n    font-size: 1.25rem;\r\n    font-weight: 400;\r\n}\r\n\r\np{\r\n    color: var(--secondary);\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n}\r\n\r\n.white-text{\r\n    color: var(--white-bg);\r\n}\r\n\r\n.active-text{\r\n    color: var(--primary);\r\n}\r\n\r\n.flex{\r\n    display: flex;\r\n}\r\n\r\n.flex-align-center{\r\n    align-items: center;\r\n}\r\n \r\n.hidden{\r\n    display: none !important;\r\n}\r\n\r\n.btn{\r\n    background: var(--primary);\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 0.625rem;\r\n    padding: 0.55rem 1.1rem;\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.btn-secondary{\r\n    background: none;\r\n    color: var(--secondary);\r\n    border: var(--secondary) 2px solid;\r\n    border-radius: 0.625rem;\r\n    padding: 0.55rem 1.1rem;\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.btn:hover, .btn-secondary:hover{\r\n    transform: translateY(-1px);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:active, .btn-secondary:active{\r\n    transform: translateY(0px);\r\n    filter: brightness(0.9);\r\n}\r\n\r\n/*************** LAYOUT ***************/\r\n\r\n.container{\r\n    width: 85%;\r\n    height: 85%;\r\n    display: flex;\r\n\r\n    border-radius: 0.625rem;\r\n    background: var(--white-bg, #F9F9F9);\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.10);\r\n}\r\n\r\n#left{\r\n    border-radius: 0.625rem 0rem 0rem 0.625rem;\r\n    background: var(--secondary, #2E2E2E);\r\n    flex: 1;\r\n    padding: 2rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: normal;\r\n}\r\n\r\n#right{\r\n    flex: 6;\r\n    margin: 3rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 2.5rem;\r\n\r\n    flex: 1;\r\n}\r\n\r\n.task-view{\r\n    flex: 10;\r\n    overflow-y: scroll;\r\n    scrollbar-color: var(--secondary);\r\n    scrollbar-width: thin;\r\n    scroll-behavior: smooth;\r\n    padding: 0 0.5rem;\r\n}\r\n\r\n.task-view::-webkit-scrollbar, .categories::-webkit-scrollbar{\r\n    width: 6px;\r\n}\r\n  \r\n.task-view::-webkit-scrollbar-track, .categories::-webkit-scrollbar-track{\r\n    background-color: #e6e6e6;\r\n    border-radius: 10px;\r\n}\r\n  \r\n.task-view::-webkit-scrollbar-thumb, .categories::-webkit-scrollbar-thumb{\r\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #dfdfdf;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom{\r\n    margin-top: 1.5rem;\r\n    text-align: right;\r\n}\r\n/*************** LAYOUT END ***************/\r\n\r\n/*************** ADD-EDIT TASK MODAL ***************/\r\n.modal{\r\n    background: #fff;\r\n\r\n    position: fixed;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    padding: 2rem 4rem;\r\n    border-radius: 0.625rem;\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.05);\r\n\r\n    z-index: 2;\r\n}\r\n\r\n.modal h2{\r\n    margin-bottom: 1rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.modal label{\r\n    color: var(--secondary);\r\n    font-size: 1.15rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.input-div select{\r\n    background: none;\r\n}\r\n\r\n.input-div input, .input-div select{\r\n    width: 100%;\r\n\r\n    padding: 0.25rem;\r\n    padding-left: 0.5rem;\r\n    margin-top: 0.25rem;\r\n    margin-bottom: 1rem;\r\n\r\n    border: none;\r\n    border-bottom: #727272 1px solid;\r\n\r\n    transition: border 0.2s linear;\r\n}\r\n\r\n.input-div input:focus, .input-div select:focus{\r\n    border-bottom: var(--primary) 1px solid;\r\n    outline: none;\r\n}\r\n\r\n.input-div{\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.buttons-div{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n\r\n/*************** ADD-EDIT TASK MODAL END ***************/\r\n\r\n/*************** TASK BOX ***************/\r\n.task-box{\r\n    border-radius: 0.625rem;\r\n    background: #FFF;\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.02);\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.task-box:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.task-box h2:hover, .task-box p:hover{\r\n    cursor: default;\r\n}\r\n\r\n.task-done .flex{\r\n    opacity: 0.6;\r\n}\r\n\r\n/* Show more and edit icons */\r\n.fa-chevron-down, .fa-pen-to-square{\r\n    transition: all 0.1s ease;\r\n}\r\n\r\n.fa-chevron-down:hover, .fa-pen-to-square:hover{\r\n    color: var(--primary);\r\n    transform: scale(1.15);\r\n}\r\n/****************************/\r\n\r\n.task-done h2, .task-done p{\r\n    text-decoration: line-through;\r\n}\r\n\r\ninput[type=\"checkbox\"]{\r\n    margin-left: 0.25rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.priority{\r\n    color: #FFF;\r\n    background: #FF6565;\r\n    font-size: 0.8rem;\r\n    font-style: normal;\r\n    border-radius: 0.625rem;\r\n    padding: 0.25rem 0.5rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.task-date{\r\n    margin-left: 0.5rem;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.see-more{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n\r\n    margin-left: 0.7rem;\r\n    margin-right: 0.7rem;\r\n}\r\n\r\n.see-more i:nth-child(2){\r\n    margin-top: 0.6rem;\r\n}\r\n\r\n.task-desc{\r\n    max-width: 25vw;\r\n    display: block;\r\n    overflow: hidden !important;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.task-box-extended{\r\n    padding: 2rem 1rem;\r\n\r\n    box-shadow: 10px 12px 13px 1px rgba(142, 142, 142, 0.05);\r\n}\r\n\r\n.task-box-extended h2{\r\n    max-width: 40vw;\r\n    max-height: auto;\r\n    display: block;\r\n    overflow:visible;\r\n    white-space:normal;\r\n    text-overflow: clip;\r\n}\r\n\r\n.task-box-extended p{\r\n    max-width: 40vw;\r\n    max-height: auto;\r\n    display: block;\r\n    overflow:visible;\r\n    white-space:normal;\r\n    text-overflow: clip;\r\n}\r\n\r\n.task-box-extended .hidden{\r\n    display: block;\r\n}\r\n\r\n/*************** TASK BOX END ***************/\r\n\r\n/*************** SIDEBAR ***************/\r\n\r\n/* Profile section */\r\n#profile-img{\r\n    width: 3.75rem;\r\n    height: 3.75rem;\r\n    border-radius: 50%;\r\n}\r\n\r\n#profile-img:hover{\r\n    filter: brightness(1.2);\r\n    transform: scale(1.02);\r\n}\r\n\r\n#profile-name{\r\n    color: white;\r\n}\r\n\r\n/* Profile section end*/\r\n\r\n.profile, .view-type{\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n/* View type section */\r\n.view-type h3, #projects h3{\r\n    transition: all 0.15s ease;\r\n}\r\n\r\n.view-type h3:hover, #projects h3:hover{\r\n    transform: scale(1.02);\r\n    color: var(--primary);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n.view-type h3:active, #projects h3:active{\r\n    transform: scale(1);\r\n    filter: brightness(0.9);\r\n}\r\n/* View type section end */\r\n\r\n/* Categories section*/\r\n\r\n.categories{\r\n    /* margin-bottom: 20vh; */\r\n    overflow-y: auto;\r\n    padding-right: 1rem;\r\n}\r\n\r\n.categories-title{\r\n    color: white;\r\n}\r\n\r\n.categories-title div{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.categories-divider{\r\n    width: 100%;\r\n    height: 1px;\r\n    border-radius: 10px;\r\n    background: rgba(217, 217, 217, 0.6);\r\n\r\n    margin-top: 0.1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.categories h3{\r\n    max-width: 10vw;\r\n    word-wrap: break-word;\r\n}\r\n\r\n#add-category-button{\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n#add-category-button:hover{\r\n    cursor: pointer;\r\n    color: var(--primary) !important;\r\n    filter: brightness(1.1);\r\n}\r\n\r\n.category-edit-btn{\r\n    color: var(--white-bg);\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.category-edit-btn:hover{\r\n    filter: brightness(1.2);\r\n    transform: scale(1.02);\r\n    cursor: pointer;\r\n}\r\n\r\n.category-edit-btn:active{\r\n    transform: translateY(1px);\r\n}\r\n\r\n/* Category section end */\r\n\r\n/* Message box */\r\n.msg-div{\r\n    position: fixed;\r\n    top: 0vh;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0.8rem 3rem;\r\n\r\n    background: var(--body-bg);\r\n    border: #FF6565 solid 2px;\r\n    border-radius: 8px;\r\n    animation: slideIn 0.4s linear 1 normal forwards;\r\n}\r\n\r\n.msg-div-out{\r\n    animation: slideOut 0.3s linear normal forwards;\r\n}\r\n\r\n@keyframes slideIn {\r\n    from{\r\n        opacity: 0;\r\n    }\r\n    to{\r\n        transform: translateY(10vh);\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes slideOut {\r\n    to{\r\n        opacity: 0;\r\n        transform: translateY(0);\r\n    }\r\n    from{\r\n        transform: translateY(10vh);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.msg-icon{\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n/* .msg-msg{\r\n\r\n} */\r\n\r\n.error{\r\n    background: #f5b5b5;\r\n    color: #eb2d2d;\r\n    border-color: #c44c4c;\r\n}\r\n\r\n.success{\r\n    background: #ccebc9;\r\n    color: #018a01;\r\n    border-color: #52bb49;\r\n}\r\n/* Message box end */\r\n\r\n/* Empty taskview message*/\r\n\r\n.empty-text-div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    color: #5e5e5e;\r\n}\r\n\r\n.empty-text{\r\n    margin-top: 2rem;\r\n    text-align: center;\r\n    color:#5e5e5e;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");




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
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.removeModal)();
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
      _ui_js__WEBPACK_IMPORTED_MODULE_2__.renderMessage.error('Plase enter a valid category name');
      return;
    }

    (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(titleInput.value);
    _ui_js__WEBPACK_IMPORTED_MODULE_2__.renderMessage.success('Category created!');
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.changeActiveCategory)(titleInput.value);
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
  lowP.value = 'none';
  lowP.textContent = 'None';

  const higP = document.createElement('option');
  higP.value = 'important';
  higP.textContent = 'Important';

  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);
  priorityInput.appendChild(lowP);
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
      false
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
        objectReference.completed
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
    h3.style.marginBottom = '0.25rem';

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

function Task(title, description, dueDate, priority, completed) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.completed = completed;
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
    'Awesome Task',
    'This is an example task for you to edit',
    '2023-08-20',
    'important',
    'false'
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
/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editTask.js */ "./src/editTask.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");



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
  if (objectReference.completed == true) {
    checkBox.checked = true;
    taskBoxDiv.classList.add('task-done');
  }
  checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
      taskBoxDiv.classList.add('task-done');
      objectReference.completed = true;
      (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.saveAndRefresh)();
    } else {
      taskBoxDiv.classList.remove('task-done');
      objectReference.completed = false;
      (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.saveAndRefresh)();
    }
  });

  const leftInnerDiv = document.createElement('div');
  const taskTitle = document.createElement('h2');
  const taskDesc = document.createElement('p');

  leftInnerDiv.classList.add('task-desc');

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
    (0,_editTask_js__WEBPACK_IMPORTED_MODULE_0__.editTask)(objectReference, projectReference);
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

  if (priority == 'important') {
    priorityEl.classList.remove('hidden');
    priorityEl.style.textTransform = 'capitalize';
  }

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
    this.querySelector('.fa-chevron-down').classList.toggle('fa-rotate-180');
    this.querySelector('.fa-pen-to-square').classList.toggle('hidden');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsZ0hBQWdILElBQUksa0JBQWtCO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLGFBQWEsYUFBYSxNQUFNLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxjQUFjLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCc0I7QUFDTTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBYztBQUNwQixNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU0sNERBQWM7QUFDcEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVE7QUFDWixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxRDs7Ozs7OztVQ3JLckQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXRUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NhdmVTeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcclxuICAgIC0tYm9keS1iZzogI0RFREVERTtcclxuICAgIC0td2hpdGUtYmc6ICNGOUY5Rjk7XHJcbiAgICAtLXByaW1hcnk6ICNGRjk4Mzg7XHJcbiAgICAtLXNlY29uZGFyeTogIzJFMkUyRTtcclxufVxyXG5cclxuKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1iZyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDF7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuaDJ7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi53aGl0ZS10ZXh0e1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWJnKTtcclxufVxyXG5cclxuLmFjdGl2ZS10ZXh0e1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG4uZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5mbGV4LWFsaWduLWNlbnRlcntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIFxyXG4uaGlkZGVue1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgcGFkZGluZzogMC41NXJlbSAxLjFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgbGluZWFyO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeXtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgIGJvcmRlcjogdmFyKC0tc2Vjb25kYXJ5KSAycHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNTVyZW0gMS4xcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcclxufVxyXG5cclxuLmJ0bjpob3ZlciwgLmJ0bi1zZWNvbmRhcnk6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bjphY3RpdmUsIC5idG4tc2Vjb25kYXJ5OmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKiogTEFZT1VUICoqKioqKioqKioqKioqKi9cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtYmcsICNGOUY5RjkpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMnB4IDEzcHggMXB4IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4xMCk7XHJcbn1cclxuXHJcbiNsZWZ0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW0gMHJlbSAwcmVtIDAuNjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LCAjMkUyRTJFKTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XHJcbn1cclxuXHJcbiNyaWdodHtcclxuICAgIGZsZXg6IDY7XHJcbiAgICBtYXJnaW46IDNyZW07XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuXHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4udGFzay12aWV3e1xyXG4gICAgZmxleDogMTA7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG59XHJcblxyXG4udGFzay12aWV3Ojotd2Via2l0LXNjcm9sbGJhciwgLmNhdGVnb3JpZXM6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgd2lkdGg6IDZweDtcclxufVxyXG4gIFxyXG4udGFzay12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10cmFjaywgLmNhdGVnb3JpZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuICBcclxuLnRhc2stdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsIC5jYXRlZ29yaWVzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3R0b217XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4vKioqKioqKioqKioqKioqIExBWU9VVCBFTkQgKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKiBBREQtRURJVCBUQVNLIE1PREFMICoqKioqKioqKioqKioqKi9cclxuLm1vZGFse1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMnB4IDEzcHggMXB4IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4wNSk7XHJcblxyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLm1vZGFsIGgye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5tb2RhbCBsYWJlbHtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmlucHV0LWRpdiBzZWxlY3R7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uaW5wdXQtZGl2IGlucHV0LCAuaW5wdXQtZGl2IHNlbGVjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206ICM3MjcyNzIgMXB4IHNvbGlkO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzIGxpbmVhcjtcclxufVxyXG5cclxuLmlucHV0LWRpdiBpbnB1dDpmb2N1cywgLmlucHV0LWRpdiBzZWxlY3Q6Zm9jdXN7XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1wcmltYXJ5KSAxcHggc29saWQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaW5wdXQtZGl2e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmJ1dHRvbnMtZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqIEFERC1FRElUIFRBU0sgTU9EQUwgRU5EICoqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKiogVEFTSyBCT1ggKioqKioqKioqKioqKioqL1xyXG4udGFzay1ib3h7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEycHggMTNweCAxcHggcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjAyKTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4udGFzay1ib3g6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWJveCBoMjpob3ZlciwgLnRhc2stYm94IHA6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi50YXNrLWRvbmUgLmZsZXh7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi8qIFNob3cgbW9yZSBhbmQgZWRpdCBpY29ucyAqL1xyXG4uZmEtY2hldnJvbi1kb3duLCAuZmEtcGVuLXRvLXNxdWFyZXtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XHJcbn1cclxuXHJcbi5mYS1jaGV2cm9uLWRvd246aG92ZXIsIC5mYS1wZW4tdG8tc3F1YXJlOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi50YXNrLWRvbmUgaDIsIC50YXNrLWRvbmUgcHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl17XHJcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLnByaW9yaXR5e1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY2NTY1O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4udGFzay1kYXRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4uc2VlLW1vcmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogMC43cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XHJcbn1cclxuXHJcbi5zZWUtbW9yZSBpOm50aC1jaGlsZCgyKXtcclxuICAgIG1hcmdpbi10b3A6IDAuNnJlbTtcclxufVxyXG5cclxuLnRhc2stZGVzY3tcclxuICAgIG1heC13aWR0aDogMjV2dztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4udGFzay1ib3gtZXh0ZW5kZWR7XHJcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcblxyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMnB4IDEzcHggMXB4IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4wNSk7XHJcbn1cclxuXHJcbi50YXNrLWJveC1leHRlbmRlZCBoMntcclxuICAgIG1heC13aWR0aDogNDB2dztcclxuICAgIG1heC1oZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OnZpc2libGU7XHJcbiAgICB3aGl0ZS1zcGFjZTpub3JtYWw7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xyXG59XHJcblxyXG4udGFzay1ib3gtZXh0ZW5kZWQgcHtcclxuICAgIG1heC13aWR0aDogNDB2dztcclxuICAgIG1heC1oZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OnZpc2libGU7XHJcbiAgICB3aGl0ZS1zcGFjZTpub3JtYWw7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xyXG59XHJcblxyXG4udGFzay1ib3gtZXh0ZW5kZWQgLmhpZGRlbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqIFRBU0sgQk9YIEVORCAqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqIFNJREVCQVIgKioqKioqKioqKioqKioqL1xyXG5cclxuLyogUHJvZmlsZSBzZWN0aW9uICovXHJcbiNwcm9maWxlLWltZ3tcclxuICAgIHdpZHRoOiAzLjc1cmVtO1xyXG4gICAgaGVpZ2h0OiAzLjc1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4jcHJvZmlsZS1pbWc6aG92ZXJ7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbn1cclxuXHJcbiNwcm9maWxlLW5hbWV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIFByb2ZpbGUgc2VjdGlvbiBlbmQqL1xyXG5cclxuLnByb2ZpbGUsIC52aWV3LXR5cGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4vKiBWaWV3IHR5cGUgc2VjdGlvbiAqL1xyXG4udmlldy10eXBlIGgzLCAjcHJvamVjdHMgaDN7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcclxufVxyXG5cclxuLnZpZXctdHlwZSBoMzpob3ZlciwgI3Byb2plY3RzIGgzOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udmlldy10eXBlIGgzOmFjdGl2ZSwgI3Byb2plY3RzIGgzOmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxufVxyXG4vKiBWaWV3IHR5cGUgc2VjdGlvbiBlbmQgKi9cclxuXHJcbi8qIENhdGVnb3JpZXMgc2VjdGlvbiovXHJcblxyXG4uY2F0ZWdvcmllc3tcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDIwdmg7ICovXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMtdGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXRpdGxlIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcy1kaXZpZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxNywgMjE3LCAyMTcsIDAuNik7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMC4xcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgaDN7XHJcbiAgICBtYXgtd2lkdGg6IDEwdnc7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbiNhZGQtY2F0ZWdvcnktYnV0dG9ue1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcclxufVxyXG5cclxuI2FkZC1jYXRlZ29yeS1idXR0b246aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktZWRpdC1idG57XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYmcpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcclxufVxyXG5cclxuLmNhdGVnb3J5LWVkaXQtYnRuOmhvdmVye1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktZWRpdC1idG46YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbn1cclxuXHJcbi8qIENhdGVnb3J5IHNlY3Rpb24gZW5kICovXHJcblxyXG4vKiBNZXNzYWdlIGJveCAqL1xyXG4ubXNnLWRpdntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHZoO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gM3JlbTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWJnKTtcclxuICAgIGJvcmRlcjogI0ZGNjU2NSBzb2xpZCAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBhbmltYXRpb246IHNsaWRlSW4gMC40cyBsaW5lYXIgMSBub3JtYWwgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5tc2ctZGl2LW91dHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVPdXQgMC4zcyBsaW5lYXIgbm9ybWFsIGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xyXG4gICAgZnJvbXtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG97XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwdmgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBzbGlkZU91dCB7XHJcbiAgICB0b3tcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICAgIGZyb217XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwdmgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tc2ctaWNvbntcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4vKiAubXNnLW1zZ3tcclxuXHJcbn0gKi9cclxuXHJcbi5lcnJvcntcclxuICAgIGJhY2tncm91bmQ6ICNmNWI1YjU7XHJcbiAgICBjb2xvcjogI2ViMmQyZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2M0NGM0YztcclxufVxyXG5cclxuLnN1Y2Nlc3N7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NlYmM5O1xyXG4gICAgY29sb3I6ICMwMThhMDE7XHJcbiAgICBib3JkZXItY29sb3I6ICM1MmJiNDk7XHJcbn1cclxuLyogTWVzc2FnZSBib3ggZW5kICovXHJcblxyXG4vKiBFbXB0eSB0YXNrdmlldyBtZXNzYWdlKi9cclxuXHJcbi5lbXB0eS10ZXh0LWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6ICM1ZTVlNWU7XHJcbn1cclxuXHJcbi5lbXB0eS10ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiM1ZTVlNWU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsYUFBYTs7SUFFYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0NBQWtD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QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBLHlCQUF5Qjs7QUFFekIsZ0JBQWdCO0FBQ2hCO0lBQ0ksZUFBZTtJQUNmLFFBQVE7O0lBRVIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0JBQW9COztJQUVwQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksMkJBQTJCO1FBQzNCLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7QUFDQSxvQkFBb0I7O0FBRXBCLDBCQUEwQjs7QUFFMUI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWJvZHktYmc6ICNERURFREU7XFxyXFxuICAgIC0td2hpdGUtYmc6ICNGOUY5Rjk7XFxyXFxuICAgIC0tcHJpbWFyeTogI0ZGOTgzODtcXHJcXG4gICAgLS1zZWNvbmRhcnk6ICMyRTJFMkU7XFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1iZyk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDN7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxucHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLXRleHR7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1iZyk7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtdGV4dHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtYWxpZ24tY2VudGVye1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4gXFxyXFxuLmhpZGRlbntcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNTVyZW0gMS4xcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXNlY29uZGFyeXtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICAgIGJvcmRlcjogdmFyKC0tc2Vjb25kYXJ5KSAycHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjU1cmVtIDEuMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciwgLmJ0bi1zZWNvbmRhcnk6aG92ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjphY3RpdmUsIC5idG4tc2Vjb25kYXJ5OmFjdGl2ZXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqIExBWU9VVCAqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lcntcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgaGVpZ2h0OiA4NSU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1iZywgI0Y5RjlGOSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTJweCAxM3B4IDFweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMTApO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW0gMHJlbSAwcmVtIDAuNjI1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnksICMyRTJFMkUpO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuI3JpZ2h0e1xcclxcbiAgICBmbGV4OiA2O1xcclxcbiAgICBtYXJnaW46IDNyZW07XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcclxcblxcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay12aWV3e1xcclxcbiAgICBmbGV4OiAxMDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay12aWV3Ojotd2Via2l0LXNjcm9sbGJhciwgLmNhdGVnb3JpZXM6Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICB3aWR0aDogNnB4O1xcclxcbn1cXHJcXG4gIFxcclxcbi50YXNrLXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLCAuY2F0ZWdvcmllczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLnRhc2stdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsIC5jYXRlZ29yaWVzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b217XFxyXFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcbi8qKioqKioqKioqKioqKiogTEFZT1VUIEVORCAqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiBBREQtRURJVCBUQVNLIE1PREFMICoqKioqKioqKioqKioqKi9cXHJcXG4ubW9kYWx7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAxMHB4IDEycHggMTNweCAxcHggcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjA1KTtcXHJcXG5cXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGgye1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgbGFiZWx7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1kaXYgc2VsZWN0e1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZGl2IGlucHV0LCAuaW5wdXQtZGl2IHNlbGVjdHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcblxcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206ICM3MjcyNzIgMXB4IHNvbGlkO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1kaXYgaW5wdXQ6Zm9jdXMsIC5pbnB1dC1kaXYgc2VsZWN0OmZvY3Vze1xcclxcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1wcmltYXJ5KSAxcHggc29saWQ7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1kaXZ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWRpdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqIEFERC1FRElUIFRBU0sgTU9EQUwgRU5EICoqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqIFRBU0sgQk9YICoqKioqKioqKioqKioqKi9cXHJcXG4udGFzay1ib3h7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xcclxcbiAgICBib3gtc2hhZG93OiAxMHB4IDEycHggMTNweCAxcHggcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjAyKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1ib3g6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYm94IGgyOmhvdmVyLCAudGFzay1ib3ggcDpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kb25lIC5mbGV4e1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcblxcclxcbi8qIFNob3cgbW9yZSBhbmQgZWRpdCBpY29ucyAqL1xcclxcbi5mYS1jaGV2cm9uLWRvd24sIC5mYS1wZW4tdG8tc3F1YXJle1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtY2hldnJvbi1kb3duOmhvdmVyLCAuZmEtcGVuLXRvLXNxdWFyZTpob3ZlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcclxcbn1cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4udGFzay1kb25lIGgyLCAudGFzay1kb25lIHB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJde1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHl7XFxyXFxuICAgIGNvbG9yOiAjRkZGO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkY2NTY1O1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGF0ZXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWUtbW9yZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjdyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VlLW1vcmUgaTpudGgtY2hpbGQoMil7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3tcXHJcXG4gICAgbWF4LXdpZHRoOiAyNXZ3O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYm94LWV4dGVuZGVke1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTJweCAxM3B4IDFweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1ib3gtZXh0ZW5kZWQgaDJ7XFxyXFxuICAgIG1heC13aWR0aDogNDB2dztcXHJcXG4gICAgbWF4LWhlaWdodDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG92ZXJmbG93OnZpc2libGU7XFxyXFxuICAgIHdoaXRlLXNwYWNlOm5vcm1hbDtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogY2xpcDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYm94LWV4dGVuZGVkIHB7XFxyXFxuICAgIG1heC13aWR0aDogNDB2dztcXHJcXG4gICAgbWF4LWhlaWdodDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG92ZXJmbG93OnZpc2libGU7XFxyXFxuICAgIHdoaXRlLXNwYWNlOm5vcm1hbDtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogY2xpcDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYm94LWV4dGVuZGVkIC5oaWRkZW57XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqIFRBU0sgQk9YIEVORCAqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKiBTSURFQkFSICoqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4vKiBQcm9maWxlIHNlY3Rpb24gKi9cXHJcXG4jcHJvZmlsZS1pbWd7XFxyXFxuICAgIHdpZHRoOiAzLjc1cmVtO1xcclxcbiAgICBoZWlnaHQ6IDMuNzVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGUtaW1nOmhvdmVye1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGUtbmFtZXtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQcm9maWxlIHNlY3Rpb24gZW5kKi9cXHJcXG5cXHJcXG4ucHJvZmlsZSwgLnZpZXctdHlwZXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVmlldyB0eXBlIHNlY3Rpb24gKi9cXHJcXG4udmlldy10eXBlIGgzLCAjcHJvamVjdHMgaDN7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4udmlldy10eXBlIGgzOmhvdmVyLCAjcHJvamVjdHMgaDM6aG92ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXctdHlwZSBoMzphY3RpdmUsICNwcm9qZWN0cyBoMzphY3RpdmV7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcclxcbn1cXHJcXG4vKiBWaWV3IHR5cGUgc2VjdGlvbiBlbmQgKi9cXHJcXG5cXHJcXG4vKiBDYXRlZ29yaWVzIHNlY3Rpb24qL1xcclxcblxcclxcbi5jYXRlZ29yaWVze1xcclxcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAyMHZoOyAqL1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcmllcy10aXRsZXtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcmllcy10aXRsZSBkaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3JpZXMtZGl2aWRlcntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxNywgMjE3LCAyMTcsIDAuNik7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDAuMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3JpZXMgaDN7XFxyXFxuICAgIG1heC13aWR0aDogMTB2dztcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWNhdGVnb3J5LWJ1dHRvbntcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1jYXRlZ29yeS1idXR0b246aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnktZWRpdC1idG57XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1iZyk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeS1lZGl0LWJ0bjpob3ZlcntcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5LWVkaXQtYnRuOmFjdGl2ZXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxyXFxufVxcclxcblxcclxcbi8qIENhdGVnb3J5IHNlY3Rpb24gZW5kICovXFxyXFxuXFxyXFxuLyogTWVzc2FnZSBib3ggKi9cXHJcXG4ubXNnLWRpdntcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDB2aDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbSAzcmVtO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWJnKTtcXHJcXG4gICAgYm9yZGVyOiAjRkY2NTY1IHNvbGlkIDJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlSW4gMC40cyBsaW5lYXIgMSBub3JtYWwgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbi5tc2ctZGl2LW91dHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZU91dCAwLjNzIGxpbmVhciBub3JtYWwgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRve1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwdmgpO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0IHtcXHJcXG4gICAgdG97XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICB9XFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTB2aCk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5tc2ctaWNvbntcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIC5tc2ctbXNne1xcclxcblxcclxcbn0gKi9cXHJcXG5cXHJcXG4uZXJyb3J7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmNWI1YjU7XFxyXFxuICAgIGNvbG9yOiAjZWIyZDJkO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNjNDRjNGM7XFxyXFxufVxcclxcblxcclxcbi5zdWNjZXNze1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjY2NlYmM5O1xcclxcbiAgICBjb2xvcjogIzAxOGEwMTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjNTJiYjQ5O1xcclxcbn1cXHJcXG4vKiBNZXNzYWdlIGJveCBlbmQgKi9cXHJcXG5cXHJcXG4vKiBFbXB0eSB0YXNrdmlldyBtZXNzYWdlKi9cXHJcXG5cXHJcXG4uZW1wdHktdGV4dC1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiAjNWU1ZTVlO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHktdGV4dHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjojNWU1ZTVlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCwgcHJvamVjdHMsIHNhdmVBbmRSZWZyZXNoIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XHJcbmltcG9ydCB7IGNoYW5nZUFjdGl2ZUNhdGVnb3J5IH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcbmltcG9ydCB7IHJlbW92ZU1vZGFsLCByZW5kZXJNZXNzYWdlIH0gZnJvbSAnLi91aS5qcyc7XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xyXG4gIC8vIE1vZGFsXHJcbiAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuXHJcbiAgLy8gTW9kYWwgaGVhZGVyXHJcbiAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgTmV3IENhdGVnb3J5JztcclxuXHJcbiAgLy8gSW5wdXQgZGl2XHJcbiAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1kaXYnKTtcclxuXHJcbiAgLy8gQ2F0ZWdvcnkgbmFtZSBpbnB1dFxyXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdDYXRlZ29yeSBOYW1lJztcclxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgdGl0bGVJbnB1dC5pZCA9ICdjYXRlZ29yeS1pbnB1dCc7XHJcbiAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBhIGNhdGVnb3J5IG5hbWUnO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcblxyXG4gIC8vIEJ1dHRvbnNcclxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWRpdicpO1xyXG5cclxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLXNlY29uZGFyeScpO1xyXG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBhZGRUYXNrQnRuLmlkID0gJ2NvbmZpcm0tYWRkLXRhc2snO1xyXG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUgQ2F0ZWdvcnknO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBBREQgVEFTSyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gSW5wdXQgY29udHJvbFxyXG4gICAgbGV0IGVycm9yID0gZmFsc2U7XHJcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICB0aXRsZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlcnJvciA9PT0gdHJ1ZSkge1xyXG4gICAgICByZW5kZXJNZXNzYWdlLmVycm9yKCdQbGFzZSBlbnRlciBhIHZhbGlkIGNhdGVnb3J5IG5hbWUnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5ld1Byb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XHJcbiAgICByZW5kZXJNZXNzYWdlLnN1Y2Nlc3MoJ0NhdGVnb3J5IGNyZWF0ZWQhJyk7XHJcbiAgICBjaGFuZ2VBY3RpdmVDYXRlZ29yeSh0aXRsZUlucHV0LnZhbHVlKTtcclxuICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93LXJldmVyc2UnO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XHJcblxyXG4gIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYWRkSWNvbi5jbGFzc0xpc3QgPSAnZmEtc29saWQgZmEtcGx1cyc7XHJcbiAgYWRkSWNvbi5zdHlsZS5jb2xvciA9ICcjZmZmJztcclxuICBhZGRJY29uLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzAuMjVyZW0nO1xyXG5cclxuICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZEljb24pO1xyXG5cclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcclxuXHJcbiAgLy8gQXBwZW5kIGNoaWxkcyB0byBtb2RhbFxyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSk7XHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChpbnB1dERpdik7XHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRUYXNrRGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgYWRkUHJvamVjdCB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVOZXdUYXNrIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XHJcbmltcG9ydCB7IHJlbW92ZU1vZGFsLCByZW5kZXJNZXNzYWdlIH0gZnJvbSAnLi91aS5qcyc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJBZGRUYXNrTW9kYWwocHJvamVjdExpc3QpIHtcclxuICAvLyBNb2RhbFxyXG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcblxyXG4gIC8vIE1vZGFsIGhlYWRlclxyXG4gIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG5cclxuICAvLyBJbnB1dCBkaXZcclxuICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWRpdicpO1xyXG5cclxuICAvLyBUaXRsZSBpbnB1dFxyXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUtaW5wdXQnO1xyXG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnQWRkIGEgdGl0bGUnO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAvLyBEZXNjcmlwdGlvbiBpbnB1dFxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb24taW5wdXQnO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnQWRkIGEgZGVzY3JpcHRpb24nO1xyXG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG5cclxuICAvLyBEYXRlIGlucHV0XHJcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcclxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gIGRhdGVJbnB1dC5pZCA9ICdkYXRlLWlucHV0JztcclxuICBkYXRlSW5wdXQucGxhY2Vob2xkZXIgPSAnZGQvbW0veXl5eSc7XHJcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xyXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuXHJcbiAgLy8gUHJpb3JpdHkgaW5wdXRcclxuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xyXG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICBwcmlvcml0eUlucHV0LmlkID0gJ3ByaW9yaXR5LWlucHV0JztcclxuICBjb25zdCBsb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgbG93UC52YWx1ZSA9ICdub25lJztcclxuICBsb3dQLnRleHRDb250ZW50ID0gJ05vbmUnO1xyXG5cclxuICBjb25zdCBoaWdQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgaGlnUC52YWx1ZSA9ICdpbXBvcnRhbnQnO1xyXG4gIGhpZ1AudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcclxuXHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3dQKTtcclxuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGhpZ1ApO1xyXG5cclxuICAvLyBQcm9qZWN0IGlucHV0XHJcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xyXG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHByb2plY3RJbnB1dC5pZCA9ICdwcmlvcml0eS1pbnB1dCc7XHJcblxyXG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcclxuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XHJcblxyXG4gIC8vIExvb3AgdGhyb3VnaCBwcm9qZWN0cyBhbmQgZ2V0IHByb2plY3QgbmFtZXMsIG1ha2UgdGhlbSBhbiBvcHRpb25cclxuICBpZiAocHJvamVjdExpc3QgIT0gJycpIHtcclxuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgY29uc3QgcE5hbWUgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIGVsZW1lbnQudmFsdWUgPSBwTmFtZTtcclxuICAgICAgZWxlbWVudC50ZXh0ID0gcE5hbWU7XHJcbiAgICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gQXBwZW5kIGFsbCB0aGUgaW5wdXRzIHRvIGlucHV0RGl2XHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZChkYXRlRGl2KTtcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcblxyXG4gIC8vIEJ1dHRvbnNcclxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWRpdicpO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIENBTkNFTCBCVVRUT04gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1zZWNvbmRhcnknKTtcclxuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZW1vdmVNb2RhbCgpO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQUREIFRBU0sgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGFkZFRhc2tCdG4uaWQgPSAnY29uZmlybS1hZGQtdGFzayc7XHJcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xyXG5cclxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gSW5wdXQgY29udHJvbFxyXG4gICAgbGV0IGVycm9yID0gZmFsc2U7XHJcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICB0aXRsZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChkZXNjcmlwdGlvbklucHV0LnZhbHVlID09ICcnKSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSAncmVkJztcclxuICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICBkYXRlSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSAncmVkJztcclxuICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGVycm9yID09PSB0cnVlKSB7XHJcbiAgICAgIHJlbmRlck1lc3NhZ2UuZXJyb3IoJ1BsZWFzZSBjaGVjayB5b3VyIGlucHV0IHZhbHVlcycpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTmV3VGFzayhcclxuICAgICAgcHJvamVjdElucHV0LnZhbHVlLFxyXG4gICAgICB0aXRsZUlucHV0LnZhbHVlLFxyXG4gICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxyXG4gICAgICBkYXRlSW5wdXQudmFsdWUsXHJcbiAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgcmVuZGVyTWVzc2FnZS5zdWNjZXNzKCdUYXNrIGNyZWF0ZWQhJyk7XHJcbiAgICByZW1vdmVNb2RhbCgpO1xyXG4gIH0pO1xyXG5cclxuICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgYWRkVGFza0J0bi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ3Jvdy1yZXZlcnNlJztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xyXG5cclxuICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGFkZEljb24uY2xhc3NMaXN0ID0gJ2ZhLXNvbGlkIGZhLXBsdXMnO1xyXG4gIGFkZEljb24uc3R5bGUuY29sb3IgPSAnI2ZmZic7XHJcblxyXG4gIGFkZFRhc2tCdG4uYXBwZW5kQ2hpbGQoYWRkSWNvbik7XHJcblxyXG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG5cclxuICAvLyBBcHBlbmQgY2hpbGRzIHRvIG1vZGFsXHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGlucHV0RGl2KTtcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJBZGRUYXNrTW9kYWwgfTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMsIHNhdmVBbmRSZWZyZXNoIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XHJcbmltcG9ydCB7IGNoYW5nZUFjdGl2ZUNhdGVnb3J5LCBpbml0YWxpemVDYXRlZ29yaWVzIH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcbmltcG9ydCB7IHJlbW92ZU1vZGFsLCByZW5kZXJNZXNzYWdlIH0gZnJvbSAnLi91aS5qcyc7XHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0UmVmZXJlbmNlKSB7XHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0UmVmZXJlbmNlLnByb2plY3ROYW1lO1xyXG5cclxuICAvLyBNb2RhbFxyXG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcblxyXG4gIC8vIE1vZGFsIGhlYWRlclxyXG4gIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnRWRpdCBDYXRlZ29yeSc7XHJcblxyXG4gIC8vIElucHV0IGRpdlxyXG4gIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZGl2Jyk7XHJcblxyXG4gIC8vIFRpdGxlIGlucHV0XHJcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ0NhdGVnb3J5IE5hbWUnO1xyXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlLWlucHV0JztcclxuICB0aXRsZUlucHV0LnZhbHVlID0gcHJvamVjdE5hbWU7XHJcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcblxyXG4gIC8vIEFwcGVuZCBhbGwgdGhlIGlucHV0cyB0byBpbnB1dERpdlxyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuXHJcbiAgLy8gQnV0dG9uc1xyXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5Jyk7XHJcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVtb3ZlTW9kYWwoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGFkZFRhc2tCdG4uaWQgPSAnY29uZmlybS1hZGQtdGFzayc7XHJcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBBREQgVEFTSyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gSW5wdXQgY29udHJvbFxyXG4gICAgbGV0IGVycm9yID0gZmFsc2U7XHJcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICB0aXRsZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlcnJvciA9PT0gdHJ1ZSkge1xyXG4gICAgICByZW5kZXJNZXNzYWdlLmVycm9yKCdQbGFzZSBlbnRlciBhIHZhbGlkIGNhdGVnb3J5IG5hbWUnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2plY3RSZWZlcmVuY2UucHJvamVjdE5hbWUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgc2F2ZUFuZFJlZnJlc2goKTtcclxuICAgIGluaXRhbGl6ZUNhdGVnb3JpZXMoKTtcclxuICAgIGNoYW5nZUFjdGl2ZUNhdGVnb3J5KHRpdGxlSW5wdXQudmFsdWUpO1xyXG4gICAgcmVtb3ZlTW9kYWwoKTtcclxuICAgIHJlbmRlck1lc3NhZ2Uuc3VjY2VzcygnQ2F0ZWdvcnkgc2F2ZWQhJyk7XHJcbiAgfSk7XHJcblxyXG4gIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93LXJldmVyc2UnO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gIGFkZFRhc2tCdG4uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XHJcblxyXG4gIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgYWRkSWNvbi5jbGFzc0xpc3QgPSAnZmEtc29saWQgZmEtcGx1cyc7XHJcbiAgYWRkSWNvbi5zdHlsZS5jb2xvciA9ICcjZmZmJztcclxuICBhZGRJY29uLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzAuMjVyZW0nO1xyXG5cclxuICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZEljb24pO1xyXG5cclxuICBjb25zdCByZW1vdmVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVtb3ZlVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5Jyk7XHJcbiAgcmVtb3ZlVGFza0J0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUgQ2F0ZWdvcnknO1xyXG4gIHJlbW92ZVRhc2tCdG4uc3R5bGUubWFyZ2luID0gJzAgMC41cmVtJztcclxuICByZW1vdmVUYXNrQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gJyNGRjY1NjUnO1xyXG4gIHJlbW92ZVRhc2tCdG4uc3R5bGUuY29sb3IgPSAnI0ZGNjU2NSc7XHJcblxyXG4gIHJlbW92ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNhdGVnb3J5PycpKSB7XHJcbiAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHByb2plY3RSZWZlcmVuY2UpLCAxKTtcclxuICAgICAgY2hhbmdlQWN0aXZlQ2F0ZWdvcnkoJ0FsbCcpO1xyXG4gICAgICBzYXZlQW5kUmVmcmVzaCgpO1xyXG4gICAgICBpbml0YWxpemVDYXRlZ29yaWVzKCk7XHJcbiAgICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgICAgIHJlbmRlck1lc3NhZ2Uuc3VjY2VzcygnQ2F0ZWdvcnkgcmVtb3ZlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChyZW1vdmVUYXNrQnRuKTtcclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG5cclxuICAvLyBBcHBlbmQgY2hpbGRzIHRvIG1vZGFsXHJcbiAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGlucHV0RGl2KTtcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyBlZGl0UHJvamVjdCB9O1xyXG4iLCIvKlxyXG5wcm9qZWN0UmVmZXJlbmNlLm9iamVjdHMuaW5kZXhPZihvYmplY3RSZWZlcmVuY2UpXHJcbiAgICAvLyBGaW5kIHRoZSBvYmplY3QgaW4gb2JqZWN0cyBhcnJheVxyXG4gICAgcHJvamVjdFJlZmVyZW5jZS5vYmplY3RzLnNwbGljZShcclxuICAgICAgcHJvamVjdFJlZmVyZW5jZS5vYmplY3RzLmluZGV4T2Yob2JqZWN0UmVmZXJlbmNlKSxcclxuICAgICAgMVxyXG4gICAgKTtcclxuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBwcm9qZWN0cywgY3JlYXRlTmV3VGFzaywgc2F2ZUFuZFJlZnJlc2ggfSBmcm9tICcuL3Byb2plY3RzLmpzJztcclxuaW1wb3J0IHsgcmVtb3ZlTW9kYWwsIHJlbmRlck1lc3NhZ2UgfSBmcm9tICcuL3VpLmpzJztcclxuXHJcbmZ1bmN0aW9uIGVkaXRUYXNrKG9iamVjdFJlZmVyZW5jZSwgcHJvamVjdFJlZmVyZW5jZSkge1xyXG4gIGNvbnN0IHRpdGxlID0gb2JqZWN0UmVmZXJlbmNlLnRpdGxlO1xyXG4gIGNvbnN0IGRlc2MgPSBvYmplY3RSZWZlcmVuY2UuZGVzY3JpcHRpb247XHJcbiAgY29uc3QgZGF0ZSA9IG9iamVjdFJlZmVyZW5jZS5kdWVEYXRlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gb2JqZWN0UmVmZXJlbmNlLnByaW9yaXR5O1xyXG4gIC8vIE1vZGFsXHJcbiAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuXHJcbiAgLy8gTW9kYWwgaGVhZGVyXHJcbiAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xyXG5cclxuICAvLyBJbnB1dCBkaXZcclxuICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWRpdicpO1xyXG5cclxuICAvLyBUaXRsZSBpbnB1dFxyXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUtaW5wdXQnO1xyXG4gIHRpdGxlSW5wdXQudmFsdWUgPSB0aXRsZTtcclxuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuXHJcbiAgLy8gRGVzY3JpcHRpb24gaW5wdXRcclxuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uLWlucHV0JztcclxuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZGVzYztcclxuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuXHJcbiAgLy8gRGF0ZSBpbnB1dFxyXG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XHJcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICBkYXRlSW5wdXQuaWQgPSAnZGF0ZS1pbnB1dCc7XHJcbiAgZGF0ZUlucHV0LnZhbHVlID0gZGF0ZTtcclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XHJcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG5cclxuICAvLyBQcmlvcml0eSBpbnB1dFxyXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XHJcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHByaW9yaXR5SW5wdXQuaWQgPSAncHJpb3JpdHktaW5wdXQnO1xyXG4gIHByaW9yaXR5SW5wdXQudmFsdWUgPSBwcmlvcml0eTtcclxuICBjb25zdCBsb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgbG93UC52YWx1ZSA9ICdsb3cnO1xyXG4gIGxvd1AudGV4dENvbnRlbnQgPSAnTG93JztcclxuXHJcbiAgY29uc3QgbWVkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gIG1lZFAudmFsdWUgPSAnbWVkaXVtJztcclxuICBtZWRQLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XHJcblxyXG4gIGNvbnN0IGhpZ1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICBoaWdQLnZhbHVlID0gJ2hpZ2gnO1xyXG4gIGhpZ1AudGV4dENvbnRlbnQgPSAnSGlnaCc7XHJcblxyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xyXG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93UCk7XHJcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWRQKTtcclxuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGhpZ1ApO1xyXG5cclxuICAvLyBQcm9qZWN0IGlucHV0XHJcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xyXG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHByb2plY3RJbnB1dC5pZCA9ICdwcmlvcml0eS1pbnB1dCc7XHJcblxyXG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcclxuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XHJcblxyXG4gIC8vIExvb3AgdGhyb3VnaCBwcm9qZWN0cyBhbmQgZ2V0IHByb2plY3QgbmFtZXMsIG1ha2UgdGhlbSBhbiBvcHRpb25cclxuICBpZiAocHJvamVjdHMgIT0gJycpIHtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgY29uc3QgcE5hbWUgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIGVsZW1lbnQudmFsdWUgPSBwTmFtZTtcclxuICAgICAgZWxlbWVudC50ZXh0ID0gcE5hbWU7XHJcbiAgICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvamVjdElucHV0LnZhbHVlID0gcHJvamVjdFJlZmVyZW5jZS5wcm9qZWN0TmFtZTtcclxuXHJcbiAgLy8gQXBwZW5kIGFsbCB0aGUgaW5wdXRzIHRvIGlucHV0RGl2XHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZChkYXRlRGl2KTtcclxuICBpbnB1dERpdi5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XHJcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcblxyXG4gIC8vIEJ1dHRvbnNcclxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWRpdicpO1xyXG5cclxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLXNlY29uZGFyeScpO1xyXG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBhZGRUYXNrQnRuLmlkID0gJ2NvbmZpcm0tYWRkLXRhc2snO1xyXG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQUREIFRBU0sgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIElucHV0IGNvbnRyb2xcclxuICAgIGxldCBlcnJvciA9IGZhbHNlO1xyXG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT0gJycpIHtcclxuICAgICAgdGl0bGVJbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9ICdyZWQnO1xyXG4gICAgICBlcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PSAnJykge1xyXG4gICAgICBkZXNjcmlwdGlvbklucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChkYXRlSW5wdXQudmFsdWUgPT0gJycpIHtcclxuICAgICAgZGF0ZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlcnJvciA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0UmVmZXJlbmNlLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgIG9iamVjdFJlZmVyZW5jZS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICBvYmplY3RSZWZlcmVuY2UuZHVlRGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcclxuICAgIG9iamVjdFJlZmVyZW5jZS5wcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XHJcblxyXG4gICAgLy8gVHJhbnNmZXIgdGFzayB0byBuZXcgcHJvamVjdCBpZiBuZWVkZWRcclxuICAgIGlmIChwcm9qZWN0SW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSAhPSBwcm9qZWN0UmVmZXJlbmNlLnByb2plY3ROYW1lKSB7XHJcbiAgICAgIC8vIERlbGV0ZSBmcm9tIG9sZCBwcm9qZWN0XHJcbiAgICAgIHByb2plY3RSZWZlcmVuY2Uub2JqZWN0cy5zcGxpY2UoXHJcbiAgICAgICAgcHJvamVjdFJlZmVyZW5jZS5vYmplY3RzLmluZGV4T2Yob2JqZWN0UmVmZXJlbmNlKSxcclxuICAgICAgICAxXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIENyZWF0ZSBuZXcgdGFzayB3aXRoIGVkaXRlZCB2YWx1ZXNcclxuICAgICAgY3JlYXRlTmV3VGFzayhcclxuICAgICAgICBwcm9qZWN0SW5wdXQudmFsdWUsXHJcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxyXG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSxcclxuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlLFxyXG4gICAgICAgIG9iamVjdFJlZmVyZW5jZS5jb21wbGV0ZWRcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJlbmRlck1lc3NhZ2Uuc3VjY2VzcygnVGFzayBzYXZlZCEnKTtcclxuICAgIHNhdmVBbmRSZWZyZXNoKCk7XHJcbiAgICByZW1vdmVNb2RhbCgpO1xyXG4gIH0pO1xyXG5cclxuICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgYWRkVGFza0J0bi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ3Jvdy1yZXZlcnNlJztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcclxuICBhZGRUYXNrQnRuLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xyXG5cclxuICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGFkZEljb24uY2xhc3NMaXN0ID0gJ2ZhLXNvbGlkIGZhLXBsdXMnO1xyXG4gIGFkZEljb24uc3R5bGUuY29sb3IgPSAnI2ZmZic7XHJcbiAgYWRkSWNvbi5zdHlsZS5tYXJnaW5SaWdodCA9ICcwLjI1cmVtJztcclxuXHJcbiAgYWRkVGFza0J0bi5hcHBlbmRDaGlsZChhZGRJY29uKTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlbW92ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLXNlY29uZGFyeScpO1xyXG4gIHJlbW92ZVRhc2tCdG4udGV4dENvbnRlbnQgPSAnUmVtb3ZlIFRhc2snO1xyXG4gIHJlbW92ZVRhc2tCdG4uc3R5bGUubWFyZ2luID0gJzAgMC41cmVtJztcclxuICByZW1vdmVUYXNrQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gJyNGRjY1NjUnO1xyXG4gIHJlbW92ZVRhc2tCdG4uc3R5bGUuY29sb3IgPSAnI0ZGNjU2NSc7XHJcblxyXG4gIHJlbW92ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/JykpIHtcclxuICAgICAgcHJvamVjdFJlZmVyZW5jZS5vYmplY3RzLnNwbGljZShcclxuICAgICAgICBwcm9qZWN0UmVmZXJlbmNlLm9iamVjdHMuaW5kZXhPZihvYmplY3RSZWZlcmVuY2UpLFxyXG4gICAgICAgIDFcclxuICAgICAgKTtcclxuICAgICAgc2F2ZUFuZFJlZnJlc2goKTtcclxuICAgICAgcmVtb3ZlTW9kYWwoKTtcclxuICAgICAgcmVuZGVyTWVzc2FnZS5zdWNjZXNzKCdUYXNrIGRlbGV0ZWQhJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKHJlbW92ZVRhc2tCdG4pO1xyXG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XHJcblxyXG4gIC8vIEFwcGVuZCBjaGlsZHMgdG8gbW9kYWxcclxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xyXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0Rpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGVkaXRUYXNrIH07XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgKiBhcyB0b2RvIGZyb20gJy4vcHJvamVjdHMuanMnO1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnLi9hZGRQcm9qZWN0LmpzJztcclxuaW1wb3J0IHsgcmVuZGVyQWRkVGFza01vZGFsIH0gZnJvbSAnLi9hZGRUYXNrLmpzJztcclxuaW1wb3J0IHsgZWRpdFByb2plY3QgfSBmcm9tICcuL2VkaXRQcm9qZWN0LmpzJztcclxuXHJcbi8vKysrKysrKysrKysrKysrKysrKysrKysrKysrIEFERCBUQVNLIEJVVFRPTiArKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2tNb2RlKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2tNb2RlKCkge1xyXG4gIGlmICh0b2RvLmxvYWRlZCA9PSBmYWxzZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICByZW5kZXJBZGRUYXNrTW9kYWwodG9kby5wcm9qZWN0cyk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQUREIFRBU0sgQlVUVE9OIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLysrKysrKysrKysrKysrKysrKysrKysrKysrKyBGSUxURVIgQlkgREFURSArKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxubGV0IHNlbGVjdGVkRGF0ZSA9ICdUb2RheSc7XHJcbmNvbnN0IGRhdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xyXG5cclxuZnVuY3Rpb24gaW5pdGFsaXplRGF0ZXMoKSB7XHJcbiAgY29uc3QgZGF0ZUZpbHRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctdHlwZScpO1xyXG4gIGNvbnN0IGRhdGVCdXR0b25zID0gWy4uLmRhdGVGaWx0ZXJFbC5jaGlsZHJlbl07XHJcblxyXG4gIGRhdGVCdXR0b25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNoYW5nZUFjdGl2ZURhdGUoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAvLyBDaGFuZ2UgY29sb3JzIG9mIGFjdGl2ZSBhbmQgaW5hY3RpdmUgY2F0ZWdvcnkgbmFtZXNcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXctdHlwZSBoMycpLmZvckVhY2goKHJlZikgPT4ge1xyXG4gICAgICAgIHJlZi5jbGFzc0xpc3QgPSAnd2hpdGUtdGV4dCc7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdCA9ICdhY3RpdmUtdGV4dCc7XHJcblxyXG4gICAgICBkYXRlVGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZURhdGUobmV3RGF0ZSkge1xyXG4gIHNlbGVjdGVkRGF0ZSA9IG5ld0RhdGU7XHJcbiAgdG9kby5yZWZyZXNoVUkoKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGSUxURVIgQlkgREFURSBFTkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLysrKysrKysrKysrKysrKysrKysrKysrKysrKyBDQVRFR09SWSBTRUxFQ1RJT04sIElOSVRBTElaRS1VUERBVEUgQ0FURUdPUlksIEFERCBDQVRFR09SWSArKysrKysrKysrKysrKysrKysrKysrKysrKytcclxubGV0IHNlbGVjdGVkQ2F0ZWdvcnkgPSAnQWxsJztcclxuXHJcbi8vIFVwZGF0ZSBjYXRlZ29yaWVzXHJcbmZ1bmN0aW9uIGluaXRhbGl6ZUNhdGVnb3JpZXMoKSB7XHJcbiAgY29uc3QgY2F0ZWdvcmllc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XHJcblxyXG4gIGNhdGVnb3JpZXNFbC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGgzLnRleHRDb250ZW50ID0gJ0FsbCc7XHJcbiAgaDMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRleHQnKTtcclxuICBjYXRlZ29yaWVzRWwuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuICBoMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNoYW5nZUFjdGl2ZUNhdGVnb3J5KGgzLnRleHRDb250ZW50KTtcclxuICAgIHJlc2V0T3RoZXJDYXRlZ29yaWVzKCk7XHJcbiAgICBoMy5jbGFzc0xpc3QgPSAnYWN0aXZlLXRleHQnO1xyXG4gIH0pO1xyXG5cclxuICAvLyBDcmVhdGUgY2F0ZWdvcnkgZWxlbWVudHMgZnJvbSBzdG9yYWdlXHJcbiAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB3cmFwcGVyLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcclxuICAgIHdyYXBwZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XHJcblxyXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaDMudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xyXG4gICAgaDMuY2xhc3NMaXN0LmFkZCgnd2hpdGUtdGV4dCcpO1xyXG4gICAgaDMuc3R5bGUubWFyZ2luQm90dG9tID0gJzAuMjVyZW0nO1xyXG5cclxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBlZGl0QnRuLmNsYXNzTGlzdCA9ICdjYXRlZ29yeS1lZGl0LWJ0biBmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmUgaGlkZGVuJztcclxuXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGgzKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcblxyXG4gICAgY2F0ZWdvcmllc0VsLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG5cclxuICAgIGgzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjaGFuZ2VBY3RpdmVDYXRlZ29yeShoMy50ZXh0Q29udGVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBlZGl0UHJvamVjdChwcm9qZWN0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldE90aGVyQ2F0ZWdvcmllcygpIHtcclxuICAvLyBDaGFuZ2UgY29sb3JzIG9mIGFjdGl2ZSBhbmQgaW5hY3RpdmUgY2F0ZWdvcnkgbmFtZXMgYW5kIGhpZGUgZWRpdCBidXR0b25zXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3RzIGgzJykuZm9yRWFjaCgocmVmKSA9PiB7XHJcbiAgICByZWYuY2xhc3NMaXN0ID0gJ3doaXRlLXRleHQnO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0cyBpJykuZm9yRWFjaCgocmVmKSA9PiB7XHJcbiAgICByZWYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUNhdGVnb3J5KG5ld0NhdCkge1xyXG4gIHNlbGVjdGVkQ2F0ZWdvcnkgPSBuZXdDYXQ7XHJcbiAgcmVzZXRPdGhlckNhdGVnb3JpZXMoKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdHMgZGl2JykuZm9yRWFjaCgocmVmKSA9PiB7XHJcbiAgICBjb25zdCBoMyA9IHJlZi5xdWVyeVNlbGVjdG9yKCdoMycpO1xyXG4gICAgY29uc3QgaWNvbiA9IHJlZi5xdWVyeVNlbGVjdG9yKCdpJyk7XHJcbiAgICBpZiAoaDMudGV4dENvbnRlbnQgPT0gbmV3Q2F0KSB7XHJcbiAgICAgIGgzLmNsYXNzTGlzdCA9ICdhY3RpdmUtdGV4dCc7XHJcbiAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdG9kby5zYXZlQW5kUmVmcmVzaCgpO1xyXG59XHJcblxyXG5jb25zdCBhZGRDYXRlZ29yeUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jYXRlZ29yeS1idXR0b24nKTtcclxuYWRkQ2F0ZWdvcnlFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENBVEVHT1JZIFNFTEVDVElPTiwgSU5JVEFMSVpFLVVQREFURSBDQVRFR09SWSwgQUREIENBVEVHT1JZIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy9cclxuXHJcbnRvZG8uaW5pdGFsaXplKCk7XHJcbmluaXRhbGl6ZUNhdGVnb3JpZXMoKTtcclxuaW5pdGFsaXplRGF0ZXMoKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgaW5pdGFsaXplQ2F0ZWdvcmllcyxcclxuICBzZWxlY3RlZENhdGVnb3J5LFxyXG4gIHNlbGVjdGVkRGF0ZSxcclxuICBjaGFuZ2VBY3RpdmVDYXRlZ29yeSxcclxufTtcclxuIiwiaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc2F2ZVN5c3RlbS5qcyc7XHJcbmltcG9ydCB7IHJlbmRlclRhc2tCb3ggfSBmcm9tICcuL3VpLmpzJztcclxuaW1wb3J0IHtcclxuICBpbml0YWxpemVDYXRlZ29yaWVzLFxyXG4gIHNlbGVjdGVkQ2F0ZWdvcnksXHJcbiAgc2VsZWN0ZWREYXRlLFxyXG59IGZyb20gJy4vaW5kZXguanMnO1xyXG5cclxubGV0IHByb2plY3RzID0gW107XHJcbmxldCBsb2FkZWQgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgdGhpcy5vYmplY3RzID0gW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSB7XHJcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlyc3RUaW1lVGVzdCgpIHtcclxuICBpZiAoc3RvcmFnZS5pc0ZpcnN0VGltZUxvYWQoKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gU2tpcCBpZiBpdCdzIG5vdCBmaXJzdCB0aW1lIGxvYWRpbmdcclxuICAvLyBDcmVhdGUgZGVmYXVsdCBwcm9qZWN0IGlmIGl0J3MgdGhlIGZpcnN0IHRpbWVcclxuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnKTtcclxuICBwcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcclxuXHJcbiAgbG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgZXhhbXBsZSB0YXNrXHJcbiAgY3JlYXRlTmV3VGFzayhcclxuICAgICdEZWZhdWx0IFByb2plY3QnLFxyXG4gICAgJ0F3ZXNvbWUgVGFzaycsXHJcbiAgICAnVGhpcyBpcyBhbiBleGFtcGxlIHRhc2sgZm9yIHlvdSB0byBlZGl0JyxcclxuICAgICcyMDIzLTA4LTIwJyxcclxuICAgICdpbXBvcnRhbnQnLFxyXG4gICAgJ2ZhbHNlJ1xyXG4gICk7XHJcblxyXG4gIC8vIFNhdmUgdGhlIHRhc2sgYW5kIHByb2plY3RcclxuICBzdG9yYWdlLnNhdmUocHJvamVjdHMpO1xyXG5cclxuICBjb25zb2xlLmxvZygnTE9BREVEIEZJUlNUIFRJTUUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZSA9ICdQcm9qZWN0IE5hbWUnKSB7XHJcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gIHNhdmVBbmRSZWZyZXNoKCk7XHJcbiAgaW5pdGFsaXplQ2F0ZWdvcmllcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKFxyXG4gIHByb2plY3QsXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgZHVlRGF0ZSxcclxuICBwcmlvcml0eSxcclxuICBjb21wbGV0ZWRcclxuKSB7XHJcbiAgaWYgKGxvYWRlZCA9PT0gZmFsc2UpIHtcclxuICAgIC8vIENhbGwgdGhlIG5ld3Rhc2sgZnVuY3Rpb24gMXMgbGF0ZXIgaWYgdGhlIHNhdmVzIG5vdCBsb2FkZWQgeWV0XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY3JlYXRlTmV3VGFzayhwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xyXG4gIC8vIEZpbmQgdGhlIHByb2plY3Qgb2JqZWN0XHJcbiAgbGV0IGFzc2lnbmVkUHJvamVjdDtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdCkge1xyXG4gICAgICBhc3NpZ25lZFByb2plY3QgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vIEFkZCB0YXNrIHRvIHByb2plY3Qgb2JqZWN0IGlmIHRoZSAncHJvamVjdCcgaW5wdXQgaXMgYXZhaWxhYmxlXHJcbiAgaWYgKGFzc2lnbmVkUHJvamVjdCAhPT0gbnVsbCkge1xyXG4gICAgbGV0IHRlc3QgPSBhc3NpZ25lZFByb2plY3Qub2JqZWN0cy5wdXNoKHRhc2spO1xyXG4gICAgY29uc29sZS5sb2codGVzdCk7XHJcbiAgfVxyXG4gIC8vIFNhdmUgdGhlIHRhc2sgYW5kIHByb2plY3RzXHJcbiAgc3RvcmFnZS5zYXZlKHByb2plY3RzKTtcclxuICAvLyBSZWZyZXNoIHVpXHJcbiAgcmVmcmVzaFVJKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRhbGl6ZSgpIHtcclxuICBsb2FkVGFza3MoKTtcclxuICBmaXJzdFRpbWVUZXN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRUYXNrcygpIHtcclxuICBpZiAoc3RvcmFnZS5pc0ZpcnN0VGltZUxvYWQoKSA9PT0gdHJ1ZSkgcmV0dXJuOyAvLyBza2lwIGlmIGl0J3MgdGhlIGZpcnN0IHRpbWUgbG9hZGluZ1xyXG4gIHByb2plY3RzID0gc3RvcmFnZS5sb2FkKCk7XHJcbiAgbG9hZGVkID0gdHJ1ZTtcclxuICByZWZyZXNoVUkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZUFuZFJlZnJlc2goKSB7XHJcbiAgc3RvcmFnZS5zYXZlKHByb2plY3RzKTtcclxuICByZWZyZXNoVUkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVmcmVzaFVJKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXZpZXcnKS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgLy8gUmVuZGVyIGxvYWRlZCB0YXNrcyB0byBwYWdlXHJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgLy8gRmlsdGVyIGJ5IHByb2plY3RcclxuICAgIGlmIChmaWx0ZXJCeVByb2plY3Qoc2VsZWN0ZWRDYXRlZ29yeSwgcHJvamVjdC5wcm9qZWN0TmFtZSkpIHtcclxuICAgICAgcHJvamVjdC5vYmplY3RzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAvL0ZpbHRlciBieSBkYXRlXHJcbiAgICAgICAgaWYgKGZpbHRlckJ5RGF0ZShzZWxlY3RlZERhdGUsIHRhc2suZHVlRGF0ZSkpIHtcclxuICAgICAgICAgIHJlbmRlclRhc2tCb3goXHJcbiAgICAgICAgICAgIHRhc2sudGl0bGUsXHJcbiAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHRhc2suZHVlRGF0ZSxcclxuICAgICAgICAgICAgdGFzay5wcmlvcml0eSxcclxuICAgICAgICAgICAgdGFzayxcclxuICAgICAgICAgICAgcHJvamVjdFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdmlldycpLmlubmVySFRNTCA9PSAnJykge1xyXG4gICAgZW1wdHlUZXh0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJCeVByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0LCBwcm9qZWN0TmFtZSkge1xyXG4gIGlmIChcclxuICAgIHNlbGVjdGVkUHJvamVjdC50b0xvd2VyQ2FzZSgpID09ICdhbGwnIHx8XHJcbiAgICBzZWxlY3RlZFByb2plY3QudG9Mb3dlckNhc2UoKSA9PSBwcm9qZWN0TmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlckJ5RGF0ZShzZWxlY3RlZFR5cGUsIHRhc2tEdWVEYXRlKSB7XHJcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGxldCBzZWxlY3RlZFR5cGVMb3dlciA9IHNlbGVjdGVkVHlwZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICBsZXQgdGFza0RheSA9IHRhc2tEdWVEYXRlLnN1YnN0cmluZyg4LCAxMCk7XHJcbiAgbGV0IHRhc2tNb250aCA9IHRhc2tEdWVEYXRlLnN1YnN0cmluZyg1LCA3KTtcclxuICBsZXQgdGFza1llYXIgPSB0YXNrRHVlRGF0ZS5zdWJzdHJpbmcoMCwgNCk7XHJcblxyXG4gIGlmIChzZWxlY3RlZFR5cGVMb3dlciA9PSAnYWxsJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGlmIChcclxuICAgIHNlbGVjdGVkVHlwZUxvd2VyID09ICd0b2RheScgJiZcclxuICAgIGRhdGUuZ2V0RGF0ZSgpID09IHRhc2tEYXkgJiZcclxuICAgIGRhdGUuZ2V0TW9udGgoKSArIDEgPT0gdGFza01vbnRoICYmXHJcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCkgPT0gdGFza1llYXJcclxuICApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBpZiAoXHJcbiAgICBzZWxlY3RlZFR5cGVMb3dlciA9PSAndGhpcyB3ZWVrJyAmJlxyXG4gICAgZGF0ZS5nZXREYXRlKCkgLSB0YXNrRGF5IDw9IDcgJiZcclxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSA9PSB0YXNrWWVhclxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGlmIChcclxuICAgIHNlbGVjdGVkVHlwZUxvd2VyID09ICd0aGlzIG1vbnRoJyAmJlxyXG4gICAgZGF0ZS5nZXRNb250aCgpICsgMSA9PSB0YXNrTW9udGggJiZcclxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSA9PSB0YXNrWWVhclxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbXB0eVRleHQoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2VtcHR5LXRleHQtZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgaWNvbi5jbGFzc0xpc3QgPSAnZmEtcmVndWxhciBmYS1mYWNlLWZyb3duIGZhLTJ4bCc7XHJcblxyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcC5jbGFzc0xpc3QuYWRkKCdlbXB0eS10ZXh0Jyk7XHJcbiAgcC50ZXh0Q29udGVudCA9ICdTZWVtcyBsaWtlIHRoZXJlIGlzIG5vIHRhc2sgaGVyZSwgc3RhcnQgYnkgYWRkaW5nIG9uZSEnO1xyXG5cclxuICBkaXYuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgZGl2LmFwcGVuZENoaWxkKHApO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXZpZXcnKS5hcHBlbmRDaGlsZChkaXYpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGluaXRhbGl6ZSxcclxuICBjcmVhdGVOZXdUYXNrLFxyXG4gIGNyZWF0ZU5ld1Byb2plY3QsXHJcbiAgcmVmcmVzaFVJLFxyXG4gIHNhdmVBbmRSZWZyZXNoLFxyXG4gIHByb2plY3RzLFxyXG4gIGxvYWRlZCxcclxufTtcclxuIiwiY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNhdmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcclxuICAgIGNvbnN0IHN0cmluZ2lmaWVkID0gSlNPTi5wYXJzZShzYXZlKTtcclxuICAgIGNvbnNvbGUubG9nKCdMT0FERUQnKTtcclxuICAgIGNvbnNvbGUubG9nKHN0cmluZ2lmaWVkKTtcclxuICAgIHJldHVybiBzdHJpbmdpZmllZDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlID0gKHByb2plY3RzKSA9PiB7XHJcbiAgICBjb25zdCBzdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcclxuICAgIGNvbnN0IHNhdmUgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBzdHJpbmdpZmllZCk7XHJcbiAgICBjb25zb2xlLmxvZygnU0FWRUQnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc0ZpcnN0VGltZUxvYWQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgPT09IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYXJTYXZlcyA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgbG9hZCwgc2F2ZSwgaXNGaXJzdFRpbWVMb2FkLCBjbGVhclNhdmVzIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBzdG9yYWdlIH07XHJcbiIsImltcG9ydCB7IGVkaXRUYXNrIH0gZnJvbSAnLi9lZGl0VGFzay5qcyc7XHJcbmltcG9ydCB7IHNhdmVBbmRSZWZyZXNoIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUYXNrQm94KFxyXG4gIHRpdGxlID0gJ1Rhc2sgVGl0bGUnLFxyXG4gIGRlc2MgPSAnVGFzayBEZXNjJyxcclxuICBkYXRlID0gJ1Rhc2sgZGF0ZScsXHJcbiAgcHJpb3JpdHkgPSAnJyxcclxuICBvYmplY3RSZWZlcmVuY2UsXHJcbiAgcHJvamVjdFJlZmVyZW5jZVxyXG4pIHtcclxuICBjb25zdCB0YXNrQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFza0JveERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJveCcpO1xyXG4gIHRhc2tCb3hEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b29nbGVFeHRlbmRlZCk7XHJcblxyXG4gIGNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcclxuXHJcbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gIGlmIChvYmplY3RSZWZlcmVuY2UuY29tcGxldGVkID09IHRydWUpIHtcclxuICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgdGFza0JveERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRvbmUnKTtcclxuICB9XHJcbiAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgaWYgKGNoZWNrQm94LmNoZWNrZWQpIHtcclxuICAgICAgdGFza0JveERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRvbmUnKTtcclxuICAgICAgb2JqZWN0UmVmZXJlbmNlLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgIHNhdmVBbmRSZWZyZXNoKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXNrQm94RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZG9uZScpO1xyXG4gICAgICBvYmplY3RSZWZlcmVuY2UuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIHNhdmVBbmRSZWZyZXNoKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxlZnRJbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGxlZnRJbm5lckRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2MnKTtcclxuXHJcbiAgbGVmdElubmVyRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgbGVmdElubmVyRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjKTtcclxuXHJcbiAgbGVmdERpdi5hcHBlbmRDaGlsZChjaGVja0JveCk7XHJcbiAgbGVmdERpdi5hcHBlbmRDaGlsZChsZWZ0SW5uZXJEaXYpO1xyXG5cclxuICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZmxleC1hbGlnbi1jZW50ZXInKTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHByaW9yaXR5RWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknLCAnaGlkZGVuJyk7XHJcblxyXG4gIGNvbnN0IGNsYWVuZGFySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBjbGFlbmRhckljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2FsZW5kYXItZGF5cycpO1xyXG4gIGNsYWVuZGFySWNvbi5zdHlsZS5jb2xvciA9ICcjMkUyRTJFJztcclxuXHJcbiAgY29uc3QgZGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZGF0ZVRleHQuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlJyk7XHJcblxyXG4gIGNvbnN0IHNlZU1vcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzZWVNb3JlLmNsYXNzTGlzdC5hZGQoJ3NlZS1tb3JlJyk7XHJcblxyXG4gIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2hldnJvbi1kb3duJyk7XHJcblxyXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJywgJ2ZhLXBlbi10by1zcXVhcmUnLCAnaGlkZGVuJyk7XHJcbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGVkaXRUYXNrKG9iamVjdFJlZmVyZW5jZSwgcHJvamVjdFJlZmVyZW5jZSk7XHJcbiAgfSk7XHJcblxyXG4gIHNlZU1vcmUuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcclxuICBzZWVNb3JlLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xyXG5cclxuICByaWdodERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUVsKTtcclxuICByaWdodERpdi5hcHBlbmRDaGlsZChjbGFlbmRhckljb24pO1xyXG4gIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGRhdGVUZXh0KTtcclxuICByaWdodERpdi5hcHBlbmRDaGlsZChzZWVNb3JlKTtcclxuXHJcbiAgdGFza0JveERpdi5hcHBlbmRDaGlsZChsZWZ0RGl2KTtcclxuICB0YXNrQm94RGl2LmFwcGVuZENoaWxkKHJpZ2h0RGl2KTtcclxuXHJcbiAgLy8gU2V0IHZhbHVlc1xyXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID0gZGVzYztcclxuICBwcmlvcml0eUVsLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XHJcbiAgZGF0ZVRleHQudGV4dENvbnRlbnQgPSBkYXRlO1xyXG5cclxuICBpZiAocHJpb3JpdHkgPT0gJ2ltcG9ydGFudCcpIHtcclxuICAgIHByaW9yaXR5RWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBwcmlvcml0eUVsLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSAnY2FwaXRhbGl6ZSc7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0YXNrVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXZpZXcnKTtcclxuXHJcbiAgdGFza1ZpZXcuYXBwZW5kQ2hpbGQodGFza0JveERpdik7XHJcbiAgY29uc29sZS5sb2coJ0JBU1RJSycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlQm94KCkge1xyXG4gIHRoaXMubXNnRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zZy1kaXYnKTtcclxuICB0aGlzLm1zZ0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLWljb24nKTtcclxuICB0aGlzLm1zZ1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLW1zZycpO1xyXG4gIHRoaXMuZXJyb3IgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgaWYgKHRoaXMudGltZXJSZWYgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyUmVmKTtcclxuICAgICAgdGhpcy50aW1lclJlZiA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1zZ0Rpdi5jbGFzc0xpc3QgPSAnbXNnLWRpdiBlcnJvcic7XHJcbiAgICB0aGlzLm1zZ0ljb24uY2xhc3NMaXN0ID0gJ21zZy1pY29uIGZhLXNvbGlkIGZhLWNpcmNsZS1leGNsYW1hdGlvbiBmYS1sZyc7XHJcbiAgICB0aGlzLm1zZ1RleHQuY2xhc3NMaXN0ID0gJ21zZy1tc2cgZXJyb3InO1xyXG4gICAgdGhpcy5tc2dUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHRoaXMuY2xlYXJUaW1lcigpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc3VjY2VzcyA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICBpZiAodGhpcy50aW1lclJlZiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJSZWYpO1xyXG4gICAgICB0aGlzLnRpbWVyUmVmID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubXNnRGl2LmNsYXNzTGlzdCA9ICdtc2ctZGl2IHN1Y2Nlc3MnO1xyXG4gICAgdGhpcy5tc2dJY29uLmNsYXNzTGlzdCA9ICdtc2ctaWNvbiBmYS1zb2xpZCBmYS1jaXJjbGUtY2hlY2sgZmEtbGcnO1xyXG4gICAgdGhpcy5tc2dUZXh0LmNsYXNzTGlzdCA9ICdtc2ctbXNnIHN1Y2Nlc3MnO1xyXG4gICAgdGhpcy5tc2dUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHRoaXMuY2xlYXJUaW1lcigpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMudGltZXJSZWYgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHRoaXMuY2xlYXJUaW1lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudGltZXJSZWYgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gU2xpZGVvdXQgYW5pbWF0aW9uXHJcbiAgICAgIHRoaXMubXNnRGl2LmNsYXNzTGlzdC5hZGQoJ21zZy1kaXYtb3V0Jyk7XHJcbiAgICAgIC8vIEFkZCBoaWRkZW4gY2xhc3MgYW5kIGNsZWFyIG1zZyBhZnRlciBhbmltYXRpb24gZmluaXNoZXNcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tc2dEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy5tc2dUZXh0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICB9LCAyNTAwKTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJNZXNzYWdlID0gbmV3IE1lc3NhZ2VCb3goKTtcclxuXHJcbmZ1bmN0aW9uIHRvb2dsZUV4dGVuZGVkKGUpIHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGNvbnNvbGUubG9nKCdIRUxMTyBGUk9NIEknLCBlLnRhcmdldCwgdGhpcyk7XHJcbiAgaWYgKFxyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWJveCcpIHx8XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWNoZXZyb24tZG93bicpXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2stYm94LWV4dGVuZGVkJyk7XHJcbiAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5mYS1jaGV2cm9uLWRvd24nKS5jbGFzc0xpc3QudG9nZ2xlKCdmYS1yb3RhdGUtMTgwJyk7XHJcbiAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5mYS1wZW4tdG8tc3F1YXJlJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVNb2RhbCgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyVGFza0JveCwgcmVtb3ZlTW9kYWwsIHJlbmRlck1lc3NhZ2UgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=