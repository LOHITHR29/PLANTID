"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/PlantInfo.tsx":
/*!**************************************!*\
  !*** ./app/components/PlantInfo.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlantInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction PlantInfo(param) {\n    let { plantInfo, uploadedImage } = param;\n    if (!plantInfo) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-8 rounded-lg shadow-lg mt-8 max-w-xl mx-auto\",\n        children: [\n            uploadedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: uploadedImage,\n                alt: \"Uploaded Plant\",\n                className: \"w-40 h-40 object-cover mx-auto mb-4 rounded-lg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lohit\\\\OneDrive\\\\Desktop\\\\PI\\\\app\\\\components\\\\PlantInfo.tsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold text-gray-800 mb-4\",\n                children: plantInfo.name || \"Unknown Plant\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lohit\\\\OneDrive\\\\Desktop\\\\PI\\\\app\\\\components\\\\PlantInfo.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            plantInfo.scientificName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-xl text-gray-600 italic mb-4\",\n                children: plantInfo.scientificName\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lohit\\\\OneDrive\\\\Desktop\\\\PI\\\\app\\\\components\\\\PlantInfo.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-700 mb-6\",\n                children: plantInfo.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lohit\\\\OneDrive\\\\Desktop\\\\PI\\\\app\\\\components\\\\PlantInfo.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            plantInfo.details && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-gray-700\",\n                children: Object.entries(plantInfo.details).map((param)=>{\n                    let [key, value] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    key,\n                                    \": \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\lohit\\\\OneDrive\\\\Desktop\\\\PI\\\\app\\\\components\\\\PlantInfo.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, this),\n                            \" \",\n                            value\n                        ]\n                    }, key, true, {\n                        fileName: \"C:\\\\Users\\\\lohit\\\\OneDrive\\\\Desktop\\\\PI\\\\app\\\\components\\\\PlantInfo.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lohit\\\\OneDrive\\\\Desktop\\\\PI\\\\app\\\\components\\\\PlantInfo.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lohit\\\\OneDrive\\\\Desktop\\\\PI\\\\app\\\\components\\\\PlantInfo.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = PlantInfo;\nvar _c;\n$RefreshReg$(_c, \"PlantInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1BsYW50SW5mby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWUsU0FBU0EsVUFBVSxLQUE0QztRQUE1QyxFQUFFQyxTQUFTLEVBQUVDLGFBQWEsRUFBa0IsR0FBNUM7SUFDaEMsSUFBSSxDQUFDRCxXQUFXLE9BQU87SUFFdkIscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7O1lBQ1pGLCtCQUNDLDhEQUFDRztnQkFDQ0MsS0FBS0o7Z0JBQ0xLLEtBQUk7Z0JBQ0pILFdBQVU7Ozs7OzswQkFHZCw4REFBQ0k7Z0JBQUdKLFdBQVU7MEJBQ1hILFVBQVVRLElBQUksSUFBSTs7Ozs7O1lBRXBCUixVQUFVUyxjQUFjLGtCQUN2Qiw4REFBQ0M7Z0JBQUdQLFdBQVU7MEJBQ1hILFVBQVVTLGNBQWM7Ozs7OzswQkFHN0IsOERBQUNFO2dCQUFFUixXQUFVOzBCQUFzQkgsVUFBVVksV0FBVzs7Ozs7O1lBQ3ZEWixVQUFVYSxPQUFPLGtCQUNoQiw4REFBQ1g7Z0JBQUlDLFdBQVU7MEJBQ1pXLE9BQU9DLE9BQU8sQ0FBQ2YsVUFBVWEsT0FBTyxFQUFFRyxHQUFHLENBQUM7d0JBQUMsQ0FBQ0MsS0FBS0MsTUFBTTt5Q0FDbEQsOERBQUNQO3dCQUFZUixXQUFVOzswQ0FDckIsOERBQUNnQjs7b0NBQVFGO29DQUFJOzs7Ozs7OzRCQUFXOzRCQUFFQzs7dUJBRHBCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcEI7S0FoQ3dCbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGxhbnRJbmZvLnRzeD85YmM4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYW50SW5mbyh7IHBsYW50SW5mbywgdXBsb2FkZWRJbWFnZSB9OiBQbGFudEluZm9Qcm9wcykge1xuICBpZiAoIXBsYW50SW5mbykgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1sZyBtdC04IG1heC13LXhsIG14LWF1dG9cIj5cbiAgICAgIHt1cGxvYWRlZEltYWdlICYmIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17dXBsb2FkZWRJbWFnZX1cbiAgICAgICAgICBhbHQ9XCJVcGxvYWRlZCBQbGFudFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy00MCBoLTQwIG9iamVjdC1jb3ZlciBteC1hdXRvIG1iLTQgcm91bmRlZC1sZ1wiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTRcIj5cbiAgICAgICAge3BsYW50SW5mby5uYW1lIHx8IFwiVW5rbm93biBQbGFudFwifVxuICAgICAgPC9oMj5cbiAgICAgIHtwbGFudEluZm8uc2NpZW50aWZpY05hbWUgJiYgKFxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyYXktNjAwIGl0YWxpYyBtYi00XCI+XG4gICAgICAgICAge3BsYW50SW5mby5zY2llbnRpZmljTmFtZX1cbiAgICAgICAgPC9oMz5cbiAgICAgICl9XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIG1iLTZcIj57cGxhbnRJbmZvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIHtwbGFudEluZm8uZGV0YWlscyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgIHtPYmplY3QuZW50cmllcyhwbGFudEluZm8uZGV0YWlscykubWFwKChba2V5LCB2YWx1ZV0pID0+IChcbiAgICAgICAgICAgIDxwIGtleT17a2V5fSBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e2tleX06IDwvc3Ryb25nPiB7dmFsdWV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQbGFudEluZm8iLCJwbGFudEluZm8iLCJ1cGxvYWRlZEltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJuYW1lIiwic2NpZW50aWZpY05hbWUiLCJoMyIsInAiLCJkZXNjcmlwdGlvbiIsImRldGFpbHMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwidmFsdWUiLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PlantInfo.tsx\n"));

/***/ })

});