webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_post__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  index: function index() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_3__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_4___default.a
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer); //이전 상태와 액션을 통해 다른 상태를 리턴하는 함수
//(이전 상태, 액션) => 다음 상태
// const rootReducer = (state = initialState, action) =>{
//     switch(action.type){
//         case 'LOG_IN':
//             return {
//                 ...state,
//                 user:{
//                     ...state.user,
//                     isLoggedIn: true,
//                     user: action.data,
//                 }
//             };
//         case 'LOG_OUT':
//             return {
//                 ...state,
//                 user:{
//                     ...state.user,
//                     isLoggedIn: false,
//                     user: null,
//                 }
//             };
//         default:
//             return state;
//     }
// }
// export default rootReducer;
// //이전 상태와 액션을 통해 다른 상태를 리턴하는 함수
// //(이전 상태, 액션) => 다음 상태
// const rootReducer = (state = initialState, action) =>{
//     switch(action.type){
//         case 'LOG_IN':
//             return {
//                 ...state,
//                 user:{
//                     ...state.user,
//                     isLoggedIn: true,
//                     user: action.data,
//                 }
//             };
//         case 'LOG_OUT':
//             return {
//                 ...state,
//                 user:{
//                     ...state.user,
//                     isLoggedIn: false,
//                     user: null,
//                 }
//             };
//         default:
//             return state;
//     }
// }

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

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP, SIGN_UP_SUCCESS, LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT, signUpAction, signUpSuccess, loginAction, logoutAction, signUp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP", function() { return SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN", function() { return LOG_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpAction", function() { return signUpAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpSuccess", function() { return signUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var dummyUser = {
  id: 1,
  nickname: '제로초',
  Posts: [],
  Followings: [],
  Followers: []
};
var initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {}
};
var SIGN_UP = 'SIGN_UP';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var LOG_IN = 'LOG_IN'; // 액션의 이름

var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름

var LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

var LOG_OUT = 'LOG_OUT';
var signUpAction = function signUpAction(data) {
  return {
    type: SIGN_UP,
    data: data
  };
};
var signUpSuccess = {
  type: SIGN_UP_SUCCESS
};
var loginAction = function loginAction(data) {
  return {
    type: LOG_IN,
    data: data
  };
};
var logoutAction = {
  type: LOG_OUT
};
var signUp = function signUp(data) {
  return {
    type: SIGN_UP,
    data: data
  };
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggedIn: true,
          user: dummyUser,
          loginData: action.data
        });
      }

    case LOG_OUT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggedIn: false,
          user: null
        });
      }

    case SIGN_UP:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          signUpData: action.data
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiZHVtbXlVc2VyIiwiaWQiLCJuaWNrbmFtZSIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiU0lHTl9VUCIsIlNJR05fVVBfU1VDQ0VTUyIsIkxPR19JTiIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUIiwic2lnblVwQWN0aW9uIiwiZGF0YSIsInNpZ25VcFN1Y2Nlc3MiLCJsb2dpbkFjdGlvbiIsImxvZ291dEFjdGlvbiIsInNpZ25VcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNsQ0MsT0FBSyxFQUFFLGlCQUF3QjtBQUFBLFFBQXZCQyxLQUF1Qix1RUFBZixFQUFlO0FBQUEsUUFBWEMsTUFBVzs7QUFDN0IsWUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsV0FBS0MsMERBQUw7QUFDRUMsZUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkosTUFBdkI7QUFDQSwrQ0FBWUQsS0FBWixHQUFzQkMsTUFBTSxDQUFDSyxPQUE3Qjs7QUFDRjtBQUNFLGVBQU9OLEtBQVA7QUFMSjtBQU9ELEdBVGlDO0FBVWxDTyxNQUFJLEVBQUpBLDZDQVZrQztBQVdsQ0MsTUFBSSxFQUFKQSw0Q0FBSUE7QUFYOEIsQ0FBRCxDQUFuQztBQWNlWCwwRUFBZixF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cy9fYXBwLmFmMWNkNjI3ZTVhNTRiOTU3ZmE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsXHJcbiAgcG9zdCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuXHJcbi8v7J207KCEIOyDge2DnOyZgCDslaHshZjsnYQg7Ya17ZW0IOuLpOuluCDsg4Htg5zrpbwg66as7YS07ZWY64qUIO2VqOyImFxyXG4vLyjsnbTsoIQg7IOB7YOcLCDslaHshZgpID0+IOuLpOydjCDsg4Htg5xcclxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcbi8vICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4vLyAgICAgICAgIGNhc2UgJ0xPR19JTic6XHJcbi8vICAgICAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICAgICAgICAgIHVzZXI6e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfTtcclxuLy8gICAgICAgICBjYXNlICdMT0dfT1VUJzpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgICAgICAgICAgdXNlcjp7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuLy8gICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcblxyXG5cclxuXHJcbi8vIC8v7J207KCEIOyDge2DnOyZgCDslaHshZjsnYQg7Ya17ZW0IOuLpOuluCDsg4Htg5zrpbwg66as7YS07ZWY64qUIO2VqOyImFxyXG4vLyAvLyjsnbTsoIQg7IOB7YOcLCDslaHshZgpID0+IOuLpOydjCDsg4Htg5xcclxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcbi8vICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4vLyAgICAgICAgIGNhc2UgJ0xPR19JTic6XHJcbi8vICAgICAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICAgICAgICAgIHVzZXI6e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfTtcclxuLy8gICAgICAgICBjYXNlICdMT0dfT1VUJzpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgICAgICAgICAgdXNlcjp7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuLy8gICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iLCJjb25zdCBkdW1teVVzZXIgPSB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgIFBvc3RzOiBbXSxcclxuICAgIEZvbGxvd2luZ3M6IFtdLFxyXG4gICAgRm9sbG93ZXJzOiBbXSxcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY29uc3QgU0lHTl9VUCA9ICdTSUdOX1VQJztcclxuICBleHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbiAgZXhwb3J0IGNvbnN0IExPR19JTiA9ICdMT0dfSU4nOyAvLyDslaHshZjsnZgg7J2066aEXHJcbiAgZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG4gIGV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuICBleHBvcnQgY29uc3QgTE9HX09VVCA9ICdMT0dfT1VUJztcclxuICBcclxuICBleHBvcnQgY29uc3Qgc2lnblVwQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFNJR05fVVAsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IHNpZ25VcFN1Y2Nlc3MgPSB7XHJcbiAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogTE9HX0lOLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfVxyXG4gIH07XHJcbiAgZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IHtcclxuICAgIHR5cGU6IExPR19PVVQsXHJcbiAgfTtcclxuICBleHBvcnQgY29uc3Qgc2lnblVwID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFNJR05fVVAsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPR19JTjoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICB1c2VyOiBkdW1teVVzZXIsXHJcbiAgICAgICAgICBsb2dpbkRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfT1VUOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTSUdOX1VQOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgc2lnblVwRGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07Il0sInNvdXJjZVJvb3QiOiIifQ==