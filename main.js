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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\n\n\n\nconst content = document.getElementById(\"content\");\nconst nav = (0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createNav)();\ncontent.append(nav);\nnav.addEventListener(\"click\", (e) => {\n  if (e.target.textContent == \"HOME\") {\n    (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createHome)(content);\n  } else if (e.target.textContent == \"MENU\") {\n    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)();\n  } else if (e.target.textContent == \"CONTACT\") {\n    console.log(\"contact\");\n  }\n});\n(0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createFooter)(content);\n(0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createHome)(content);\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome),\n/* harmony export */   \"createLogo\": () => (/* binding */ createLogo),\n/* harmony export */   \"createMain\": () => (/* binding */ createMain)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/modules/ui.js\");\n\nconst createMain = () => {\n  // Main page container\n  let main = document.createElement(\"div\");\n  main.classList.add(\n    \"text-white\",\n    \"flex\",\n    \"flex-col\",\n    \"items-center\",\n    \"gap-10\",\n    \"flex-grow\",\n    \"justify-around\"\n  );\n  return main;\n};\n// Logo section\nconst createLogo = () => {\n  let logoContainer = document.createElement(\"div\");\n  logoContainer.classList.add(\"flex\", \"flex-col\", \"items-center\");\n  const logoUpper = document.createElement(\"div\");\n  logoUpper.textContent = \"Sip &\";\n  logoUpper.classList.add(\n    \"font-noto\",\n    \"text-8xl\",\n    \"bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))]\",\n    \"from-amber-50\",\n    \"from-10%\",\n    \"to-yellow-700\",\n    \"to-90%\",\n    \"text-transparent\",\n    \"bg-clip-text\"\n  );\n  const logoLow = document.createElement(\"div\");\n  logoLow.textContent = \"SAVOR\";\n  logoLow.classList.add(\n    \"font-raleway\",\n    \"text-8xl\",\n    \"-mt-6\",\n    \"bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))]\",\n    \"from-slate-100\",\n    \"from-10%\",\n    \"to-slate-600\",\n    \"to-70%\",\n    \"text-transparent\",\n    \"bg-clip-text\"\n  );\n  logoContainer.append(logoUpper, logoLow);\n\n  return logoContainer;\n};\n// The page itself\nconst createPage = () => {\n  const container = document.createElement(\"div\");\n  container.classList.add(\n    \"flex\",\n    \"flex-col\",\n    \"gap-4\",\n    \"md:flex-row\",\n    \"md:gap-6\"\n  );\n  const img = document.createElement(\"img\");\n  img.src = \"../assets/coffee_beans.jpg\";\n  img.classList.add(\n    \"rounded-lg\",\n    \"shadow-xl\",\n    \"h-96\",\n    \"aspect-square\",\n    \"flex-none\",\n    \"grow-0\"\n  );\n  const textContainer = document.createElement(\"div\");\n  textContainer.classList.add(\n    \"text-xl\",\n    \"font-raleway\",\n    \"flex\",\n    \"flex-col\",\n    \"gap-4\"\n  );\n  container.append(img);\n  const paragraphOne = document.createElement(\"p\");\n  paragraphOne.innerHTML =\n    'Experience the aroma and taste of freshly roasted coffee beans at <span class=\"font-noto text-yellow-500\">Sip & Savor</span>. Our expertly crafted coffee blends are made from the finest beans, sourced from the best coffee-growing regions around the world.';\n  const paragraphTwo = document.createElement(\"p\");\n  paragraphTwo.textContent =\n    \"Whether you're in the mood for a piping hot cup of our signature coffee, or a deliciously fresh bagel topped with your favorite spread, we've got you covered. Our expert baristas and bakers work tirelessly to craft the perfect cup and bagel for every customer, every time. From our classic drip coffee to our decadent espresso drinks, every sip is a moment of pure bliss. And with our wide selection of bagel flavors and toppings, you'll never run out of delicious options to try.\";\n  textContainer.append(paragraphOne, paragraphTwo);\n  container.append(textContainer);\n  return container;\n};\n\nconst createHome = (content) => {\n  const main = createMain();\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.deleteChild)(content);\n  main.appendChild(createLogo());\n  main.appendChild(createPage());\n\n  return content.insertBefore(main, content.lastChild);\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/modules/ui.js\");\n\n\nconst menuItems = [\n  {\n    name: \"Bold Brew\",\n    description:\n      \"Start your day off strong with our bold and flavorful black coffee, made from the finest beans and brewed to perfection.\",\n    allergens: [\"High Caffeine\"],\n    imgpath: \"../../assets/black_coffee.jpg\",\n  },\n  {\n    name: \"Frothy Fix\",\n    description:\n      \"Indulge in our creamy and frothy cappuccino, crafted with the perfect balance of rich espresso and velvety milk.\",\n    allergens: [\"Lactose\"],\n    imgpath: \"../../assets/latte.jpg\",\n  },\n  {\n    name: \"Plain Perfection\",\n    description:\n      \"Our classic bagel is the perfect canvas for your favorite toppings, with a soft and chewy texture that will keep you coming back for more.\",\n    imgpath: \"../../assets/bagels.jpg\",\n    allergens: [\"Gluten\"],\n  },\n  {\n    name: \"Savory Sensation\",\n    description:\n      \"Our savory salmon and cream cheese bagel is a delicious twist on a classic favorite, featuring smoked salmon, creamy cheese, and fresh bagel baked in-house daily.\",\n    imgpath: \"../../assets/salmon_bagel.jpeg\",\n    allergens: [\"Lactose\", \"Fish\", \"Gluten\"],\n  },\n];\n\nconst createMenuCard = (object) => {\n  const card = document.createElement(\"div\");\n  card.classList.add(\n    \"max-w-sm\",\n    \"overflow-hidden\",\n    \"rounded\",\n    \"shadow-lg\",\n    \"bg-gray-50\"\n  );\n  const img = document.createElement(\"img\");\n  console.log(object.imgpath);\n  img.src = object.imgpath;\n  img.classList.add(\"w-full\", \"h-64\", \"object-cover\");\n  card.append(img);\n  const description = document.createElement(\"div\");\n  description.classList.add(\"px-6\", \"py-4\");\n  const title = document.createElement(\"div\");\n  title.classList.add(\"mb-2\", \"text-xl\", \"font-bold\", \"text-gray-800\");\n  title.textContent = object.name;\n  const p = document.createElement(\"p\");\n  p.classList.add(\"text-base\", \"text-gray-700\");\n  p.textContent = object.description;\n  description.append(title, p);\n  card.append(description);\n  const allergenContainer = document.createElement(\"div\");\n  allergenContainer.classList.add(\"px-6\", \"pb-2\", \"pt-4\");\n  for (let i of object.allergens) {\n    const token = document.createElement(\"span\");\n    token.classList.add(\n      \"mb-2\",\n      \"mr-2\",\n      \"inline-block\",\n      \"rounded-full\",\n      \"px-3\",\n      \"py-1\",\n      \"text-sm\",\n      \"font-semibold\"\n    );\n    token.textContent = i;\n    if (i == \"Fish\") {\n      token.classList.add(\"text-blue-800\", \"bg-blue-200\");\n    } else if (i == \"Lactose\") {\n      token.classList.add(\"text-amber-800\", \"bg-amber-100\");\n    } else if (i == \"Gluten\") {\n      token.classList.add(\"text-gray-600\", \"bg-gray-200\");\n    } else if (i == \"High Caffeine\") {\n      token.classList.add(\"text-white\", \"bg-gray-900\");\n    }\n    allergenContainer.append(token);\n  }\n  card.append(allergenContainer);\n  return card;\n};\nconst createMenu = () => {\n  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.deleteChild)(content);\n  const main = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createMain)();\n  main.classList.add();\n  main.insertBefore((0,_home__WEBPACK_IMPORTED_MODULE_0__.createLogo)(), main.lastChild);\n  const cardContainer = document.createElement(\"div\");\n  cardContainer.classList.add(\"grid\", \"gap-2\", \"md:grid-cols-2\");\n  for (let i of menuItems) {\n    cardContainer.append(createMenuCard(i));\n  }\n  main.append(cardContainer);\n  content.insertBefore(main, content.lastChild);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter),\n/* harmony export */   \"createNav\": () => (/* binding */ createNav),\n/* harmony export */   \"deleteChild\": () => (/* binding */ deleteChild)\n/* harmony export */ });\nconst createNav = (content) => {\n  const nav = document.createElement(\"nav\");\n  nav.classList.add(\n    \"grid\",\n    \"place-items-center\",\n    \"border-b-2\",\n    \"border-amber-100\"\n  );\n  const ul = document.createElement(\"ul\");\n  ul.classList.add(\"flex\", \"gap-10\", \"p-6\");\n  const home = document.createElement(\"li\");\n  home.classList.add(\n    \"text-xl\",\n    \"text-slate-100\",\n    \"font-thin\",\n    \"cursor-pointer\",\n    \"hover:relative\",\n    \"hover:bottom-1\"\n  );\n  home.textContent = \"HOME\";\n\n  const menu = document.createElement(\"li\");\n  menu.classList.add(\n    \"text-xl\",\n    \"text-slate-100\",\n    \"font-thin\",\n    \"cursor-pointer\",\n    \"hover:relative\",\n    \"hover:bottom-1\"\n  );\n  menu.textContent = \"MENU\";\n  const contact = document.createElement(\"li\");\n  contact.classList.add(\n    \"text-xl\",\n    \"text-slate-100\",\n    \"font-thin\",\n    \"cursor-pointer\",\n    \"hover:relative\",\n    \"hover:bottom-1\"\n  );\n  contact.textContent = \"CONTACT\";\n\n  ul.append(home, menu, contact);\n  nav.append(ul);\n\n  return nav;\n};\n\nconst createFooter = (content) => {\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"text-white\", \"self-center\", \"mt-2\");\n  footer.innerHTML =\n    'Developed with ❤️ by <a href=\"http://github.com/mlorenzm\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"text-yellow-500 font-bold \">Mauro Lorenzo</a>';\n  return content.append(footer);\n};\nconst deleteChild = (content) => {\n  if (content.childNodes.length > 2) {\n    content.removeChild(content.childNodes[1]);\n  }\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/modules/ui.js?");

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