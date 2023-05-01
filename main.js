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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n\n\nconst content = document.getElementById(\"content\");\n\n(0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createHome)(content);\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_0__.createFooter),\n/* harmony export */   \"createHome\": () => (/* binding */ createHome),\n/* harmony export */   \"createLogo\": () => (/* binding */ createLogo),\n/* harmony export */   \"createPage\": () => (/* binding */ createPage)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/modules/ui.js\");\n\nconst createMain = () => {\n  // Main page container\n  let main = document.createElement(\"div\");\n  main.classList.add(\n    \"text-white\",\n    \"flex\",\n    \"flex-col\",\n    \"items-center\",\n    \"gap-10\",\n    \"flex-grow\",\n    \"justify-around\"\n  );\n  return content.appendChild(main);\n};\n// Logo section\nconst createLogo = () => {\n  let logoContainer = document.createElement(\"div\");\n  logoContainer.classList.add(\"flex\", \"flex-col\", \"items-center\");\n  const logoUpper = document.createElement(\"div\");\n  logoUpper.textContent = \"Sip &\";\n  logoUpper.classList.add(\n    \"font-noto\",\n    \"text-8xl\",\n    \"bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))]\",\n    \"from-amber-50\",\n    \"from-10%\",\n    \"to-yellow-700\",\n    \"to-90%\",\n    \"text-transparent\",\n    \"bg-clip-text\"\n  );\n  const logoLow = document.createElement(\"div\");\n  logoLow.textContent = \"SAVOR\";\n  logoLow.classList.add(\n    \"font-raleway\",\n    \"text-8xl\",\n    \"-mt-6\",\n    \"bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))]\",\n    \"from-slate-100\",\n    \"from-10%\",\n    \"to-slate-600\",\n    \"to-70%\",\n    \"text-transparent\",\n    \"bg-clip-text\"\n  );\n  logoContainer.append(logoUpper, logoLow);\n\n  return logoContainer;\n};\n// The page itself\nconst createPage = () => {\n  const container = document.createElement(\"div\");\n  container.classList.add(\"flex\", \"gap-8\");\n  const img = document.createElement(\"img\");\n  img.src = \"../assets/coffee_beans.jpg\";\n  img.classList.add(\"rounded-lg\", \"shadow-xl\", \"aspect-square\", \"w-1/3\");\n  const textContainer = document.createElement(\"div\");\n  textContainer.classList.add(\n    \"text-xl\",\n    \"font-raleway\",\n    \"flex\",\n    \"flex-col\",\n    \"gap-4\"\n  );\n  container.append(img);\n  const paragraphOne = document.createElement(\"p\");\n  paragraphOne.innerHTML =\n    'Experience the aroma and taste of freshly roasted coffee beans at <span class=\"font-noto text-yellow-500\">Sip & Savor</span>. Our expertly crafted coffee blends are made from the finest beans, sourced from the best coffee-growing regions around the world.';\n  const paragraphTwo = document.createElement(\"p\");\n  paragraphTwo.textContent =\n    \"From our bold and rich espresso to our smooth and creamy latte, we have a coffee that will satisfy every palate. Come and enjoy our warm and welcoming atmosphere, and let us help you start your day right with a delicious cup of coffee. and start your day right with a delicious cup of coffee.\";\n  textContainer.append(paragraphOne, paragraphTwo);\n  container.append(textContainer);\n  return container;\n};\n\nconst createHome = (content) => {\n  const main = createMain();\n  main.appendChild((0,_ui__WEBPACK_IMPORTED_MODULE_0__.createNav)());\n  main.appendChild(createLogo());\n  main.appendChild(createPage());\n  main.appendChild((0,_ui__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n  return content.appendChild(main);\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter),\n/* harmony export */   \"createNav\": () => (/* binding */ createNav)\n/* harmony export */ });\nconst createNav = () => {\n  const nav = document.createElement(\"nav\");\n  nav.classList.add(\n    \"grid\",\n    \"place-items-center\",\n    \"border-b-2\",\n    \"border-amber-100\"\n  );\n  const ul = document.createElement(\"ul\");\n  ul.classList.add(\"flex\", \"gap-10\", \"p-6\");\n  const home = document.createElement(\"li\");\n  home.classList.add(\n    \"text-xl\",\n    \"text-slate-100\",\n    \"font-thin\",\n    \"cursor-pointer\",\n    \"hover:relative\",\n    \"hover:bottom-1\"\n  );\n  home.textContent = \"HOME\";\n  const menu = document.createElement(\"li\");\n  menu.classList.add(\n    \"text-xl\",\n    \"text-slate-100\",\n    \"font-thin\",\n    \"cursor-pointer\",\n    \"hover:relative\",\n    \"hover:bottom-1\"\n  );\n  menu.textContent = \"MENU\";\n  const contact = document.createElement(\"li\");\n  contact.classList.add(\n    \"text-xl\",\n    \"text-slate-100\",\n    \"font-thin\",\n    \"cursor-pointer\",\n    \"hover:relative\",\n    \"hover:bottom-1\"\n  );\n  contact.textContent = \"CONTACT\";\n\n  ul.append(home, menu, contact);\n  nav.append(ul);\n\n  return nav;\n};\n\nconst createFooter = () => {\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"text-white\", \"self-center\");\n  footer.innerHTML =\n    'Developed with ❤️ by         <a href=\"http://github.com/mlorenzm\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"text-yellow-500 font-bold \">Mauro Lorenzo</a>';\n  return footer;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/modules/ui.js?");

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