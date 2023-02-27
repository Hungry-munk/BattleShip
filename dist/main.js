/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI_UICombider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI/UICombider.js */ \"./src/modules/UI/UICombider.js\");\n\r\nconst bodyElement = document.querySelector(\"body\");\r\n\r\n// making starter page appear\r\nbodyElement.appendChild(_modules_UI_UICombider_js__WEBPACK_IMPORTED_MODULE_0__.starterPageMaker());\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI/UICombider.js":
/*!**************************************!*\
  !*** ./src/modules/UI/UICombider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"starterPageMaker\": () => (/* binding */ starterPageMaker)\n/* harmony export */ });\n/* harmony import */ var _starterPageMakers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./starterPageMakers.js */ \"./src/modules/UI/starterPageMakers.js\");\n// sP for startPage\r\n\r\n\r\n// making starting page function\r\nfunction starterPageMaker() {\r\n    const pageBody = document.createElement(\"div\");\r\n    pageBody.id = \"root\";\r\n    pageBody.appendChild(_starterPageMakers_js__WEBPACK_IMPORTED_MODULE_0__.headerMaker());\r\n    pageBody.appendChild(_starterPageMakers_js__WEBPACK_IMPORTED_MODULE_0__.nameEnterMaker());\r\n    pageBody.appendChild(_starterPageMakers_js__WEBPACK_IMPORTED_MODULE_0__.footerMaker());\r\n    return pageBody;\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/UI/UICombider.js?");

/***/ }),

/***/ "./src/modules/UI/starterPageMakers.js":
/*!*********************************************!*\
  !*** ./src/modules/UI/starterPageMakers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footerMaker\": () => (/* binding */ footerMaker),\n/* harmony export */   \"headerMaker\": () => (/* binding */ headerMaker),\n/* harmony export */   \"nameEnterMaker\": () => (/* binding */ nameEnterMaker)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ \"./src/modules/functions.js\");\n\r\n\r\nfunction nameEnterMaker() {\r\n    const nameSelectionContainer = document.createElement(\"div\");\r\n    nameSelectionContainer.classList.add(\"nameSelectionContainer\");\r\n\r\n    nameSelectionContainer.innerHTML = `\r\n        <div class=\"nameSelection\">\r\n            <input\r\n                type=\"text\"\r\n                placeholder=\"Combatant Name\"\r\n                maxlength=\"15\"\r\n                minlength=\"1\"\r\n            />\r\n            <label>Combatant Name</label>\r\n            <span class=\"nameErrorMsg\"></span>\r\n        </div>\r\n\r\n        <button type=\"button\" class=\"startButton\">Start Game</button>\r\n    `;\r\n\r\n    const button = nameSelectionContainer.querySelector(\"button\");\r\n\r\n    button.addEventListener(\"click\", () => {\r\n        const text = document.querySelector(\"input\");\r\n        const textValidationObject = _functions_js__WEBPACK_IMPORTED_MODULE_0__.checkNameValidity(text.value);\r\n        const nameErrorMsg = document.querySelector(\"span.nameErrorMsg\");\r\n        if (textValidationObject.validity) {\r\n            // start game\r\n        } else {\r\n            nameErrorMsg.textContent = textValidationObject.message;\r\n            setTimeout(() => {\r\n                nameErrorMsg.textContent = \"\";\r\n            }, 2000);\r\n        }\r\n    });\r\n\r\n    return nameSelectionContainer;\r\n}\r\n\r\nfunction headerMaker() {\r\n    const headerElement = document.createElement(\"header\");\r\n    headerElement.innerHTML = `\r\n        <img src=\"assests/img/BS_logo.png\" alt=\"Battle Ship Logo\" />\r\n    `;\r\n    return headerElement;\r\n}\r\n\r\nfunction footerMaker() {\r\n    const footerElement = document.createElement(\"footer\");\r\n    footerElement.innerHTML = `\r\n        <div>made with ❤️ by Hungry_munk</div>\r\n            <a href=\"https://github.com/Hungry-munk\">\r\n                <i class=\"fa-brands fa-github\"></i>\r\n            </a>\r\n    `;\r\n    return footerElement;\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/UI/starterPageMakers.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkNameValidity\": () => (/* binding */ checkNameValidity)\n/* harmony export */ });\nfunction checkNameValidity(name) {\r\n    const InvalidPattern = /^[1-9!@#$%^&*(),.?\":{}|<>].*/g;\r\n    if (!name)\r\n        return {\r\n            validity: false,\r\n            message: \"cant enter empty name\",\r\n        };\r\n    if (name.length === 1) {\r\n        return {\r\n            validity: false,\r\n            message: \"name must be longer than 1 character\",\r\n        };\r\n    }\r\n    if (InvalidPattern.test(name)) {\r\n        return {\r\n            validity: false,\r\n            message: \"cant start with numbers or special character\",\r\n        };\r\n    }\r\n    return {\r\n        validity: true,\r\n        message: \"\",\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/functions.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;