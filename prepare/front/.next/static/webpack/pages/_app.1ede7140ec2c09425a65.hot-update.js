webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, signupRequestAction, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupRequestAction", function() { return signupRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    id: 1,
    nickname: '정이안',
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: 'dksfh'
    }, {
      nickname: 'ddsfh'
    }, {
      nickname: 'dssksfh'
    }],
    Followers: [{
      nickname: 'dksfh'
    }, {
      nickname: 'ddsfh'
    }, {
      nickname: 'dssksfh'
    }]
  });
};

var initialState = {
  loginLoading: false,
  //로그인 시도중
  loginDone: false,
  //로그아웃 시도중
  loginError: false,
  logoutLoading: false,
  //로그인 시도중
  logoutDone: false,
  logoutError: false,
  //로그아웃 시도중
  signupLoading: false,
  //로그인 시도중
  signupDone: false,
  signupError: false,
  //로그아웃 시도중
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름

var LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE'; // 게시글 데이터 등록 삭제는 post 리듀서에서만 변경 가능하기 때문에
//추가 액션 필요 -> 포스트 사가에서 유저 액션 호출 가능

var ADD_POST_TO_ME = 'ADD_POST_TO_ME'; //내 게시글 추가 액션

var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME'; // 내 게시글 삭제 액션

var signupRequestAction = function signupRequestAction(data) {
  return {
    type: SIGN_UP_REQUEST,
    data: data
  };
};
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN_REQUEST:
      {
        console.log('reducer login');
        return _objectSpread(_objectSpread({}, state), {}, {
          loginLoading: true,
          loginError: null,
          loginDone: false
        });
      }

    case LOG_IN_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loginLoading: false,
          loginDone: true,
          me: dummyUser(action.data)
        });
      }

    case LOG_IN_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loginLoading: false,
          loginError: action.error
        });
      }

    case LOG_OUT_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          logoutLoading: true,
          logoutDone: false,
          logoutError: null
        });
      }

    case LOG_OUT_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          logoutLoading: false,
          logoutDone: true,
          me: null
        });
      }

    case LOG_OUT_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          logoutLoading: false,
          logoutError: action.error
        });
      }

    case SIGN_UP_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          signupLoading: true,
          signupDone: false,
          signupError: null
        });
      }

    case SIGN_UP_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          signupLoading: false,
          signupDone: true
        });
      }

    case SIGN_UP_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          signupLoading: false,
          signupError: action.error
        });
      }

    case CHANGE_NICKNAME_REQUEST:
      // draft.changeNicknameLoading = true;
      // draft.changeNicknameError = null;
      // draft.changeNicknameDone = false;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      // draft.changeNicknameLoading = false;
      // draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      // draft.changeNicknameLoading = false;
      // draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      // draft.me.Posts.unshift({ id: action.data });
      // break;
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: [{
            id: action.data
          }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.me.Posts))
        })
      });

    case REMOVE_POST_OF_ME:
      // draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
    //   },
    // };

    default:
      {
        return _objectSpread({}, state);
      }
  }
}); // 사가 적용 전
// export const loginAction = (data) => {
//   return {
//     type: LOG_IN,
//     data,
//   }
// };
// export const logoutAction = {
//   type: LOG_OUT,
// };
// export const signUp = (data) => {
//   return {
//     type: SIGN_UP_REQUEST,
//     data,
//   }
// };
// export const signUpAction = (data) => {
//   return {
//     type: SIGN_UP_REQUEST,
//     data,
//   };
// };
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case LOG_IN: {
//       return {
//         ...state,
//         isLoggedIn: true,
//         me: action.data,
//       };
//     }
//     case LOG_OUT: {
//       return {
//         ...state,
//         isLoggedIn: false,
//         me: null,
//       };
//     }
//     case SIGN_UP: {
//       return {
//         ...state,
//         signUpData: action.data,
//       };
//     }
//     default: {
//       return {
//         ...state,
//       }
//     }
//   }
// };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJkYXRhIiwiaWQiLCJuaWNrbmFtZSIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImluaXRpYWxTdGF0ZSIsImxvZ2luTG9hZGluZyIsImxvZ2luRG9uZSIsImxvZ2luRXJyb3IiLCJsb2dvdXRMb2FkaW5nIiwibG9nb3V0RG9uZSIsImxvZ291dEVycm9yIiwic2lnbnVwTG9hZGluZyIsInNpZ251cERvbmUiLCJzaWdudXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwic2lnbnVwUmVxdWVzdEFjdGlvbiIsInR5cGUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFlZGU3MTQwZWMyYzA5NDI1YTY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkdW1teVVzZXIgPShkYXRhKSA9PiAoe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICfsoJXsnbTslYgnLFxyXG4gICAgUG9zdHM6IFt7aWQ6IDF9XSxcclxuICAgIEZvbGxvd2luZ3M6IFt7bmlja25hbWU6ICdka3NmaCd9LCB7bmlja25hbWU6ICdkZHNmaCd9LCB7bmlja25hbWU6ICdkc3Nrc2ZoJ31dLFxyXG4gICAgRm9sbG93ZXJzOiBbe25pY2tuYW1lOiAnZGtzZmgnfSwge25pY2tuYW1lOiAnZGRzZmgnfSwge25pY2tuYW1lOiAnZHNza3NmaCd9XSxcclxuICB9KTtcclxuICBcclxuICBleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9naW5Mb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dpbkRvbmU6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ2luRXJyb3I6IGZhbHNlLFxyXG4gICBcclxuICAgIGxvZ291dExvYWRpbmc6IGZhbHNlLCAvL+uhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ291dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nb3V0RXJyb3I6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuXHJcbiAgICBzaWdudXBMb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBzaWdudXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ251cEVycm9yOiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcblxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgbWU6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG4gIGV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuICBleHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnOyAvLyDslaHshZjsnZgg7J2066aEXHJcblxyXG4gIGV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuICBleHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbiAgZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuICBleHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbiAgZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG4gIGV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbiAgZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuICBleHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG4gIGV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG4gIGV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG4gIGV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG4gIGV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuICBcclxuICBleHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG4gIGV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbiAgZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbiAgLy8g6rKM7Iuc6riAIOuNsOydtO2EsCDrk7HroZ0g7IKt7KCc64qUIHBvc3Qg66as65OA7ISc7JeQ7ISc66eMIOuzgOqyvSDqsIDriqXtlZjquLAg65WM66y47JeQXHJcbiAgLy/stpTqsIAg7JWh7IWYIO2VhOyalCAtPiDtj6zsiqTtirgg7IKs6rCA7JeQ7IScIOycoOyggCDslaHshZgg7Zi47LacIOqwgOuKpVxyXG4gIGV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7IC8v64K0IOqyjOyLnOq4gCDstpTqsIAg7JWh7IWYXHJcbiAgZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJzsgLy8g64K0IOqyjOyLnOq4gCDsgq3soJwg7JWh7IWYXHJcblxyXG4gIGV4cG9ydCBjb25zdCBzaWdudXBSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+KHtcclxuICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbiAgfSlcclxuXHJcbiAgZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG4gIH0pO1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICB9KTtcclxuXHJcbiBcclxuICBleHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgbG9naW4nKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGxvZ2luTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGxvZ2luRXJyb3I6IG51bGwsXHJcbiAgICAgICAgICBsb2dpbkRvbmU6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbG9naW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGxvZ2luRG9uZTogdHJ1ZSxcclxuICAgICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbG9naW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGxvZ2luRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbG9nb3V0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGxvZ291dERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgbG9nb3V0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGxvZ291dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgbG9nb3V0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgIG1lOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRToge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGxvZ291dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgbG9nb3V0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgc2lnbnVwTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIHNpZ251cERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgc2lnbnVwRXJyb3I6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHNpZ251cExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgc2lnbnVwRG9uZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgc2lnbnVwTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBzaWdudXBFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAvLyBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIC8vIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgIC8vIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgLy8gZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgLy8gZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAvLyBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgLy8gYnJlYWs7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbWU6IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgIC8vIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgbWU6IHtcclxuICAgICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgLy8gICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9OyBcclxuXHJcblxyXG4gIC8vIOyCrOqwgCDsoIHsmqkg7KCEXHJcbiAgLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAvLyAgIHJldHVybiB7XHJcbiAgLy8gICAgIHR5cGU6IExPR19JTixcclxuICAvLyAgICAgZGF0YSxcclxuICAvLyAgIH1cclxuICAvLyB9O1xyXG4gIC8vIGV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSB7XHJcbiAgLy8gICB0eXBlOiBMT0dfT1VULFxyXG4gIC8vIH07XHJcblxyXG5cclxuICBcclxuICAvLyBleHBvcnQgY29uc3Qgc2lnblVwID0gKGRhdGEpID0+IHtcclxuICAvLyAgIHJldHVybiB7XHJcbiAgLy8gICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICAvLyAgICAgZGF0YSxcclxuICAvLyAgIH1cclxuICAvLyB9O1xyXG5cclxuICAvLyBleHBvcnQgY29uc3Qgc2lnblVwQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAvLyAgIHJldHVybiB7XHJcbiAgLy8gICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICAvLyAgICAgZGF0YSxcclxuICAvLyAgIH07XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAvLyAgICAgY2FzZSBMT0dfSU46IHtcclxuICAvLyAgICAgICByZXR1cm4ge1xyXG4gIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgLy8gICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gIC8vICAgICAgICAgbWU6IGFjdGlvbi5kYXRhLFxyXG4gIC8vICAgICAgIH07XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgY2FzZSBMT0dfT1VUOiB7XHJcbiAgLy8gICAgICAgcmV0dXJuIHtcclxuICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gIC8vICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgLy8gICAgICAgICBtZTogbnVsbCxcclxuICAvLyAgICAgICB9O1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIGNhc2UgU0lHTl9VUDoge1xyXG4gIC8vICAgICAgIHJldHVybiB7XHJcbiAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAvLyAgICAgICAgIHNpZ25VcERhdGE6IGFjdGlvbi5kYXRhLFxyXG4gIC8vICAgICAgIH07XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgZGVmYXVsdDoge1xyXG4gIC8vICAgICAgIHJldHVybiB7XHJcbiAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyB9OyJdLCJzb3VyY2VSb290IjoiIn0=