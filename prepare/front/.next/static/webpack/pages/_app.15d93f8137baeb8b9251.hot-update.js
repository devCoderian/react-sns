webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/redux-thunk/es/index.js":
false,

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);



 // import thunkMiddleware from 'redux-thunk'

var configureStore = function configureStore() {
  //미들웨어 만들어보기, 액션 객체 만들기 
  // const loggerMiddleware = ({dispatch, getState}) => (next) => (action) =>{
  //     console.log(action);
  //     return next(action);
  // }
  //const middlewares = [thunkMiddleware, loggerMiddleware]; 사용해보기
  //    const middlewares = [thunkMiddleware];
  var middlewares = [];
  var enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, middlewares)); //데브툴 연결 보안에는 취약
  //개발용 미들웨어 설치 필요 npm i redux-devtools-extension

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer); //미들웨어는 enhancer를 넣어서 사용가능
  // store.dispatch({
  //     type: 'CHANGE_NICKNAME',
  //     data: '정이안'
  // })
  //dispatch하는 순간 리듀서로 전달된다.

  return store;
}; //debugging이 true일시 리덕스에 대한 설명 참조 가능


var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBR0w7QUFDSSxNQUFNQyxXQUFXLEdBQUcsRUFBcEI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsUUFDaEJDLFNBRGdCLEdBRWhCQyxvRkFBbUIsQ0FBQ0MscURBQWUsTUFBZixTQUFtQkosV0FBbkIsQ0FBRCxDQUZwQixDQVh3QixDQWN4QjtBQUNBOztBQUNBLE1BQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsdURBQUQsRUFBVU4sUUFBVixDQUF6QixDQWhCd0IsQ0FpQnhCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFPSSxLQUFQO0FBQ0gsQ0F6QkQsQyxDQTJCQTs7O0FBQ0EsSUFBTUcsT0FBTyxHQUFHQyx3RUFBYSxDQUFDVixjQUFELEVBQWlCO0FBQzFDVyxPQUFLO0FBRHFDLENBQWpCLENBQTdCO0FBSWVGLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTVkOTNmODEzN2JhZWI4YjkyNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG4vLyBpbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+e1xyXG4gICAgLy/rr7jrk6Tsm6jslrQg66eM65Ok7Ja067O06riwLCDslaHshZgg6rCd7LK0IOunjOuTpOq4sCBcclxuICAgIC8vIGNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoe2Rpc3BhdGNoLCBnZXRTdGF0ZX0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PntcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgLy8gICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbiAgICAvLyB9XHJcbiAgICAgLy9jb25zdCBtaWRkbGV3YXJlcyA9IFt0aHVua01pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdOyDsgqzsmqntlbTrs7TquLBcclxuIFxyXG4gXHJcbi8vICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3RodW5rTWlkZGxld2FyZV07XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtdO1xyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/Y29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOmNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIC8v642w67iM7Yi0IOyXsOqysCDrs7TslYjsl5DripQg7Leo7JW9XHJcbiAgICAvL+qwnOuwnOyaqSDrr7jrk6Tsm6jslrQg7ISk7LmYIO2VhOyalCBucG0gaSByZWR1eC1kZXZ0b29scy1leHRlbnNpb25cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgLy/rr7jrk6Tsm6jslrTripQgZW5oYW5jZXLrpbwg64Sj7Ja07IScIOyCrOyaqeqwgOuKpVxyXG5cclxuICAgIC8vIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgIC8vICAgICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuICAgIC8vICAgICBkYXRhOiAn7KCV7J207JWIJ1xyXG4gICAgLy8gfSlcclxuICAgIC8vZGlzcGF0Y2jtlZjripQg7Iic6rCEIOumrOuTgOyEnOuhnCDsoITri6zrkJzri6QuXHJcbiAgICByZXR1cm4gc3RvcmU7ICAgIFxyXG59O1xyXG5cclxuLy9kZWJ1Z2dpbmfsnbQgdHJ1ZeydvOyLnCDrpqzrjZXsiqTsl5Ag64yA7ZWcIOyEpOuqhSDssLjsobAg6rCA64qlXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiXSwic291cmNlUm9vdCI6IiJ9