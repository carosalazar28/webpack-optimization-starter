"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebpack_optimization_starter"]("main",{

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"getAllTodos\": () => (/* binding */ getAllTodos),\n/* harmony export */   \"removeTodo\": () => (/* binding */ removeTodo),\n/* harmony export */   \"updateTodo\": () => (/* binding */ updateTodo)\n/* harmony export */ });\n/* harmony import */ var _todos_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todos.json */ \"./src/todos.json\");\n\n\nlet data = _todos_json__WEBPACK_IMPORTED_MODULE_0__\n\nfunction getAllTodos() {\n  return data\n}\n\nfunction addTodo(todo) {\n  data.push(todo)\n}\n\nfunction removeTodo(id) {\n  data = data.filter(function (item) {\n      return item.id !== id\n  })\n}\n\nfunction updateTodo(id, completed) {\n  const itemIndex = data.findIndex(function (value) {\n      return value.id === id\n  })\n  data[itemIndex].completed = completed\n}\n\n//# sourceURL=webpack://webpack-optimization-starter/./src/js/data.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7088f4a81def47e92e56")
/******/ })();
/******/ 
/******/ }
);