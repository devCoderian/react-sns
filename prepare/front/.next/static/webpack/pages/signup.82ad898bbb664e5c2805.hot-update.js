webpackHotUpdate_N_E("pages/signup",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJpZCIsIm5pY2tuYW1lIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIlNJR05fVVAiLCJTSUdOX1VQX1NVQ0NFU1MiLCJMT0dfSU4iLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVCIsInNpZ25VcEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwic2lnblVwU3VjY2VzcyIsImxvZ2luQWN0aW9uIiwibG9nb3V0QWN0aW9uIiwic2lnblVwIiwic3RhdGUiLCJhY3Rpb24iLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUc7QUFDZEMsSUFBRSxFQUFFLENBRFU7QUFFZEMsVUFBUSxFQUFFLEtBRkk7QUFHZEMsT0FBSyxFQUFFLEVBSE87QUFJZEMsWUFBVSxFQUFFLEVBSkU7QUFLZEMsV0FBUyxFQUFFO0FBTEcsQ0FBbEI7QUFRUyxJQUFNQyxZQUFZLEdBQUc7QUFDMUJDLFlBQVUsRUFBRSxLQURjO0FBRTFCQyxJQUFFLEVBQUUsSUFGc0I7QUFHMUJDLFlBQVUsRUFBRSxFQUhjO0FBSTFCQyxXQUFTLEVBQUU7QUFKZSxDQUFyQjtBQU9BLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxNQUFNLEdBQUcsUUFBZixDLENBQXlCOztBQUN6QixJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCLEMsQ0FBeUM7O0FBQ3pDLElBQU1DLGNBQWMsR0FBRyxnQkFBdkIsQyxDQUF5Qzs7QUFDekMsSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3BDLFNBQU87QUFDTEMsUUFBSSxFQUFFUixPQUREO0FBRUxPLFFBQUksRUFBSkE7QUFGSyxHQUFQO0FBSUQsQ0FMTTtBQU9BLElBQU1FLGFBQWEsR0FBRztBQUMzQkQsTUFBSSxFQUFFUDtBQURxQixDQUF0QjtBQUlBLElBQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNILElBQUQsRUFBVTtBQUNuQyxTQUFPO0FBQ0xDLFFBQUksRUFBRU4sTUFERDtBQUVMSyxRQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlELENBTE07QUFNQSxJQUFNSSxZQUFZLEdBQUc7QUFDMUJILE1BQUksRUFBRUg7QUFEb0IsQ0FBckI7QUFHQSxJQUFNTyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDTCxJQUFELEVBQVU7QUFDOUIsU0FBTztBQUNMQyxRQUFJLEVBQUVSLE9BREQ7QUFFTE8sUUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT1EsMkVBQWtDO0FBQUEsTUFBakNNLEtBQWlDLHVFQUF6QmxCLFlBQXlCO0FBQUEsTUFBWG1CLE1BQVc7O0FBQy9DLFVBQVFBLE1BQU0sQ0FBQ04sSUFBZjtBQUNFLFNBQUtOLE1BQUw7QUFBYTtBQUNYLCtDQUNLVyxLQURMO0FBRUVqQixvQkFBVSxFQUFFLElBRmQ7QUFHRW1CLGNBQUksRUFBRTFCLFNBSFI7QUFJRVUsbUJBQVMsRUFBRWUsTUFBTSxDQUFDUDtBQUpwQjtBQU1EOztBQUNELFNBQUtGLE9BQUw7QUFBYztBQUNaLCtDQUNLUSxLQURMO0FBRUVqQixvQkFBVSxFQUFFLEtBRmQ7QUFHRW1CLGNBQUksRUFBRTtBQUhSO0FBS0Q7O0FBQ0QsU0FBS2YsT0FBTDtBQUFjO0FBQ1osK0NBQ0thLEtBREw7QUFFRWYsb0JBQVUsRUFBRWdCLE1BQU0sQ0FBQ1A7QUFGckI7QUFJRDs7QUFDRDtBQUFTO0FBQ1AsaUNBQ0tNLEtBREw7QUFHRDtBQTFCSDtBQTRCRCxDQTdCRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuODJhZDg5OGJiYjY2NGU1YzI4MDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGR1bW15VXNlciA9IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgUG9zdHM6IFtdLFxyXG4gICAgRm9sbG93aW5nczogW10sXHJcbiAgICBGb2xsb3dlcnM6IFtdLFxyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgbWU6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY29uc3QgU0lHTl9VUCA9ICdTSUdOX1VQJztcclxuICBleHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbiAgZXhwb3J0IGNvbnN0IExPR19JTiA9ICdMT0dfSU4nOyAvLyDslaHshZjsnZgg7J2066aEXHJcbiAgZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG4gIGV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuICBleHBvcnQgY29uc3QgTE9HX09VVCA9ICdMT0dfT1VUJztcclxuICBcclxuICBleHBvcnQgY29uc3Qgc2lnblVwQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFNJR05fVVAsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IHNpZ25VcFN1Y2Nlc3MgPSB7XHJcbiAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogTE9HX0lOLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfVxyXG4gIH07XHJcbiAgZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IHtcclxuICAgIHR5cGU6IExPR19PVVQsXHJcbiAgfTtcclxuICBleHBvcnQgY29uc3Qgc2lnblVwID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFNJR05fVVAsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPR19JTjoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICB1c2VyOiBkdW1teVVzZXIsXHJcbiAgICAgICAgICBsb2dpbkRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfT1VUOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTSUdOX1VQOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgc2lnblVwRGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07Il0sInNvdXJjZVJvb3QiOiIifQ==