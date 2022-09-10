/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/header */ \"./src/js/module/header.js\");\n/* harmony import */ var _module_scroltop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/scroltop */ \"./src/js/module/scroltop.js\");\n/* harmony import */ var _module_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/popup */ \"./src/js/module/popup.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n_module_header__WEBPACK_IMPORTED_MODULE_0__.mobileMenu();\r\n_module_scroltop__WEBPACK_IMPORTED_MODULE_1__.scrolToTop();\r\n_module_popup__WEBPACK_IMPORTED_MODULE_2__.modalOpen();\r\n\n\n//# sourceURL=webpack://codequest/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/header.js":
/*!*********************************!*\
  !*** ./src/js/module/header.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mobileMenu\": function() { return /* binding */ mobileMenu; }\n/* harmony export */ });\n\r\n// Меню бургер\r\nfunction mobileMenu() {\r\n    const iconMenu = document.querySelector('.menu__icon');\r\n    const menuBody = document.querySelector('.menu__body');\r\n    if (iconMenu) {\r\n        iconMenu.addEventListener(\"click\", function (e) {\r\n            document.body.classList.toggle('_lock');\r\n            iconMenu.classList.toggle('_active');\r\n            menuBody.classList.toggle('_active');\r\n        });\r\n    }\r\n\r\n    document.querySelectorAll('a[href^=\"#\"').forEach(link => {\r\n\r\n        link.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n\r\n            let href = this.getAttribute('href').substring(1);\r\n\r\n            const scrollTarget = document.getElementById(href);\r\n\r\n            const topOffset = document.querySelector('.header').offsetHeight;\r\n            // const topOffset = 0; // если не нужен отступ сверху \r\n            const elementPosition = scrollTarget.getBoundingClientRect().top;\r\n            const offsetPosition = elementPosition - topOffset;\r\n    \r\n            if (iconMenu.classList.contains('_active')) {\r\n                document.body.classList.remove('_lock');\r\n                iconMenu.classList.remove('_active');\r\n                menuBody.classList.remove('_active');\r\n            }\r\n\r\n            window.scrollBy({\r\n                top: offsetPosition,\r\n                behavior: 'smooth'\r\n            });\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://codequest/./src/js/module/header.js?");

/***/ }),

/***/ "./src/js/module/popup.js":
/*!********************************!*\
  !*** ./src/js/module/popup.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalOpen\": function() { return /* binding */ modalOpen; }\n/* harmony export */ });\nfunction modalOpen() {\r\n    const popupLinks = document.querySelectorAll('.popup-link');\r\n    const body = document.querySelector('body');\r\n    const lockPadding = document.querySelectorAll(\".lock-padding\");\r\n\r\n    let unlock = true;\r\n    const timeout = 800;\r\n\r\n    if (popupLinks.length > 0) {\r\n        for (let index = 0; index < popupLinks.length; index++) {\r\n            const popupLink = popupLinks[index];\r\n            popupLink.addEventListener(\"click\", function (e) {\r\n                const popupName = popupLink.getAttribute('href').replace('#', '');\r\n                const curentPopup = document.getElementById(popupName);\r\n                popupOpen(curentPopup);\r\n                e.preventDefault();\r\n            });\r\n        }\r\n    }\r\n    const popupCloseIcon = document.querySelectorAll('.close-popup');\r\n    if (popupCloseIcon.length > 0) {\r\n        for (let index = 0; index < popupCloseIcon.length; index++) {\r\n            const el = popupCloseIcon[index];\r\n            el.addEventListener('click', function (e) {\r\n                popupClose(el.closest('.popup'));\r\n                e.preventDefault();\r\n            });\r\n        }\r\n    }\r\n\r\n    function popupOpen(curentPopup) {\r\n        if (curentPopup && unlock) {\r\n            const popupActive = document.querySelector('.popup.open');\r\n            if (popupActive) {\r\n                popupClose(popupActive, false);\r\n            } else {\r\n                bodyLock();\r\n            }\r\n            curentPopup.classList.add('open');\r\n            curentPopup.addEventListener(\"click\", function (e) {\r\n                if (!e.target.closest('.popup__content')) {\r\n                popupClose(e.target.closest('.popup'));\r\n                }\r\n            });\r\n        }\r\n    }\r\n\r\n    function popupClose(popupActive, doUnlock = true) {\r\n        if (unlock) {\r\n            popupActive.classList.remove('open');\r\n            if (doUnlock) {\r\n                bodyUnLock();\r\n            }\r\n        }\r\n    }\r\n\r\n    function bodyLock() {\r\n        const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';\r\n\r\n        if (lockPadding.length > 0) {\r\n            for (let index = 0; index < lockPadding.length; index++) {\r\n                const el = lockPadding[index];\r\n                el.style.paddingRight = lockPaddingValue;\r\n            }\r\n        }\r\n        body.style.paddingRight = lockPaddingValue;\r\n        body.classList.add('lock');\r\n\r\n        unlock = false;\r\n        setTimeout(function () {\r\n            unlock = true;\r\n        }, timeout);\r\n    }\r\n\r\n    function bodyUnLock() {\r\n        setTimeout(function () {\r\n            if (lockPadding.length > 0) {\r\n                for (let index = 0; index < lockPadding.length; index++) {\r\n                    const el = lockPadding[index];\r\n                    el.style.paddingRight = '0px';\r\n                }\r\n            }\r\n            body.style.paddingRight = '0px';\r\n            body.classList.remove('lock');\r\n        }, timeout);\r\n\r\n        unlock = false;\r\n        setTimeout(function () {\r\n            unlock = true;\r\n        }, timeout);\r\n    }\r\n}\n\n//# sourceURL=webpack://codequest/./src/js/module/popup.js?");

/***/ }),

/***/ "./src/js/module/scroltop.js":
/*!***********************************!*\
  !*** ./src/js/module/scroltop.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrolToTop\": function() { return /* binding */ scrolToTop; }\n/* harmony export */ });\n// Scroll To top\r\nfunction scrolToTop() {\r\n    let body = document.querySelector(\"body\");\r\n    let bHeight = body.getBoundingClientRect().height;\r\n    let screenY = window.innerHeight / 2;\r\n    let btn = document.querySelector('#btn');\r\n\r\n    window.onscroll = function () {\r\n        if (pageYOffset > screenY) {\r\n            btn.classList.add(\"fixed\");\r\n        } else {\r\n            btn.classList.remove(\"fixed\");\r\n        }\r\n    }\r\n\r\n    btn.addEventListener(\"click\", scrollToTop);\r\n\r\n    function scrollToTop() {\r\n        window.scrollTo({\r\n            top: 0,\r\n            behavior: \"smooth\"\r\n        });\r\n    }\r\n}\r\n\r\n//Scroll To Top\r\n//let basicScrollTop = function () {  \r\n    // The button\r\n   // let btnTop = document.querySelector('#go-top');\r\n    // Reveal the button\r\n       // let btnReveal = function () { \r\n           // if (window.scrollY >= 300) {\r\n           // btnTop.classList.add('is-visible');\r\n           // } else {\r\n           // btnTop.classList.remove('is-visible');\r\n       // }    \r\n   // }  \r\n    // Smooth scroll top\r\n       // let TopscrollTo = function () {\r\n           // if(window.scrollY!=0) {\r\n           // setTimeout(function() {\r\n           // window.scrollTo(0,window.scrollY-140);\r\n           // TopscrollTo();\r\n            //}, 5);\r\n        //}\r\n   // }\r\n    // Listeners\r\n        //window.addEventListener('scroll', btnReveal);\r\n       // btnTop.addEventListener('click', TopscrollTo);  \r\n   // };\r\n    //basicScrollTop();\r\n\r\n\n\n//# sourceURL=webpack://codequest/./src/js/module/scroltop.js?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;