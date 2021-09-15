webpackHotUpdate_N_E("pages/_app",{

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
  me: null,
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
          me: action.data
        });
      }

    case LOG_OUT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggedIn: false,
          me: null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJpZCIsIm5pY2tuYW1lIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIlNJR05fVVAiLCJTSUdOX1VQX1NVQ0NFU1MiLCJMT0dfSU4iLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVCIsInNpZ25VcEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwic2lnblVwU3VjY2VzcyIsImxvZ2luQWN0aW9uIiwibG9nb3V0QWN0aW9uIiwic2lnblVwIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBRztBQUNkQyxJQUFFLEVBQUUsQ0FEVTtBQUVkQyxVQUFRLEVBQUUsS0FGSTtBQUdkQyxPQUFLLEVBQUUsRUFITztBQUlkQyxZQUFVLEVBQUUsRUFKRTtBQUtkQyxXQUFTLEVBQUU7QUFMRyxDQUFsQjtBQVFTLElBQU1DLFlBQVksR0FBRztBQUMxQkMsWUFBVSxFQUFFLEtBRGM7QUFFMUJDLElBQUUsRUFBRSxJQUZzQjtBQUcxQkMsWUFBVSxFQUFFLEVBSGM7QUFJMUJDLFdBQVMsRUFBRTtBQUplLENBQXJCO0FBT0EsSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLE1BQU0sR0FBRyxRQUFmLEMsQ0FBeUI7O0FBQ3pCLElBQU1DLGNBQWMsR0FBRyxnQkFBdkIsQyxDQUF5Qzs7QUFDekMsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QixDLENBQXlDOztBQUN6QyxJQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDcEMsU0FBTztBQUNMQyxRQUFJLEVBQUVSLE9BREQ7QUFFTE8sUUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT0EsSUFBTUUsYUFBYSxHQUFHO0FBQzNCRCxNQUFJLEVBQUVQO0FBRHFCLENBQXRCO0FBSUEsSUFBTVMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0gsSUFBRCxFQUFVO0FBQ25DLFNBQU87QUFDTEMsUUFBSSxFQUFFTixNQUREO0FBRUxLLFFBQUksRUFBSkE7QUFGSyxHQUFQO0FBSUQsQ0FMTTtBQU1BLElBQU1JLFlBQVksR0FBRztBQUMxQkgsTUFBSSxFQUFFSDtBQURvQixDQUFyQjtBQUdBLElBQU1PLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNMLElBQUQsRUFBVTtBQUM5QixTQUFPO0FBQ0xDLFFBQUksRUFBRVIsT0FERDtBQUVMTyxRQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlELENBTE07QUFPUSwyRUFBa0M7QUFBQSxNQUFqQ00sS0FBaUMsdUVBQXpCbEIsWUFBeUI7QUFBQSxNQUFYbUIsTUFBVzs7QUFDL0MsVUFBUUEsTUFBTSxDQUFDTixJQUFmO0FBQ0UsU0FBS04sTUFBTDtBQUFhO0FBQ1gsK0NBQ0tXLEtBREw7QUFFRWpCLG9CQUFVLEVBQUUsSUFGZDtBQUdFQyxZQUFFLEVBQUVpQixNQUFNLENBQUNQO0FBSGI7QUFLRDs7QUFDRCxTQUFLRixPQUFMO0FBQWM7QUFDWiwrQ0FDS1EsS0FETDtBQUVFakIsb0JBQVUsRUFBRSxLQUZkO0FBR0VDLFlBQUUsRUFBRTtBQUhOO0FBS0Q7O0FBQ0QsU0FBS0csT0FBTDtBQUFjO0FBQ1osK0NBQ0thLEtBREw7QUFFRWYsb0JBQVUsRUFBRWdCLE1BQU0sQ0FBQ1A7QUFGckI7QUFJRDs7QUFDRDtBQUFTO0FBQ1AsaUNBQ0tNLEtBREw7QUFHRDtBQXpCSDtBQTJCRCxDQTVCRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjEwYTllOTkzNWFmNmRmOWI0ODNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkdW1teVVzZXIgPSB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgIFBvc3RzOiBbXSxcclxuICAgIEZvbGxvd2luZ3M6IFtdLFxyXG4gICAgRm9sbG93ZXJzOiBbXSxcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIG1lOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IFNJR05fVVAgPSAnU0lHTl9VUCc7XHJcbiAgZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG4gIGV4cG9ydCBjb25zdCBMT0dfSU4gPSAnTE9HX0lOJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG4gIGV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuICBleHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnOyAvLyDslaHshZjsnZgg7J2066aEXHJcbiAgZXhwb3J0IGNvbnN0IExPR19PVVQgPSAnTE9HX09VVCc7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IHNpZ25VcEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBTSUdOX1VQLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfTtcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBzaWduVXBTdWNjZXNzID0ge1xyXG4gICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IExPR19JTixcclxuICAgICAgZGF0YSxcclxuICAgIH1cclxuICB9O1xyXG4gIGV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSB7XHJcbiAgICB0eXBlOiBMT0dfT1VULFxyXG4gIH07XHJcbiAgZXhwb3J0IGNvbnN0IHNpZ25VcCA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBTSUdOX1VQLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0dfSU46IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgICAgbWU6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfT1VUOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICBtZTogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU0lHTl9VUDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHNpZ25VcERhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9OyJdLCJzb3VyY2VSb290IjoiIn0=