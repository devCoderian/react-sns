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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: [{ id: action.data }, ...state.me.Posts],
    //   },
    // };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJkYXRhIiwiaWQiLCJuaWNrbmFtZSIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImluaXRpYWxTdGF0ZSIsImxvZ2luTG9hZGluZyIsImxvZ2luRG9uZSIsImxvZ2luRXJyb3IiLCJsb2dvdXRMb2FkaW5nIiwibG9nb3V0RG9uZSIsImxvZ291dEVycm9yIiwic2lnbnVwTG9hZGluZyIsInNpZ251cERvbmUiLCJzaWdudXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwic2lnbnVwUmVxdWVzdEFjdGlvbiIsInR5cGUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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R0VDLG9CQUFVLEVBQUUsS0FIZDtBQUlFQyxxQkFBVyxFQUFFO0FBSmY7QUFNRDs7QUFDRCxTQUFLYyxlQUFMO0FBQXNCO0FBQ3BCLCtDQUNLaUIsS0FETDtBQUVFakMsdUJBQWEsRUFBRSxLQUZqQjtBQUdFQyxvQkFBVSxFQUFFO0FBSGQ7QUFLRDs7QUFDRCxTQUFLZ0IsZUFBTDtBQUFzQjtBQUNwQiwrQ0FDS2dCLEtBREw7QUFFRWpDLHVCQUFhLEVBQUUsS0FGakI7QUFHRUUscUJBQVcsRUFBRWdDLE1BQU0sQ0FBQ0c7QUFIdEI7QUFLRDs7QUFDRCxTQUFLYix1QkFBTDtBQUNFO0FBQ0E7QUFDQTtBQUNBOztBQUNGLFNBQUtDLHVCQUFMO0FBQ0U7QUFDQTtBQUNBOztBQUNGLFNBQUtDLHVCQUFMO0FBQ0U7QUFDQTtBQUNBOztBQUNGLFNBQUtDLGNBQUw7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0YsU0FBS0MsaUJBQUw7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Y7QUFBUztBQUNQLGlDQUNLSyxLQURMO0FBR0Q7QUEzR0g7QUE2R0QsQ0E5R0QsRSxDQWlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kZjE1NDI1Nzg5N2ZjYTM4NWVhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZHVtbXlVc2VyID0oZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAn7KCV7J207JWIJyxcclxuICAgIFBvc3RzOiBbe2lkOiAxfV0sXHJcbiAgICBGb2xsb3dpbmdzOiBbe25pY2tuYW1lOiAnZGtzZmgnfSwge25pY2tuYW1lOiAnZGRzZmgnfSwge25pY2tuYW1lOiAnZHNza3NmaCd9XSxcclxuICAgIEZvbGxvd2VyczogW3tuaWNrbmFtZTogJ2Rrc2ZoJ30sIHtuaWNrbmFtZTogJ2Rkc2ZoJ30sIHtuaWNrbmFtZTogJ2Rzc2tzZmgnfV0sXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvZ2luTG9hZGluZzogZmFsc2UsIC8v66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9naW5Eb25lOiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dpbkVycm9yOiBmYWxzZSxcclxuICAgXHJcbiAgICBsb2dvdXRMb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dvdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ291dEVycm9yOiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcblxyXG4gICAgc2lnbnVwTG9hZGluZzogZmFsc2UsIC8v66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgc2lnbnVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWdudXBFcnJvcjogZmFsc2UsIC8v66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG5cclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICAgIG1lOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuICBleHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnOyAvLyDslaHshZjsnZgg7J2066aEXHJcbiAgZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5cclxuICBleHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbiAgZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG4gIGV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbiAgZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG4gIGV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuICBleHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG4gIGV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbiAgZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuICBleHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuICBleHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuICBleHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuICBleHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuICBleHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG4gIGV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG4gIC8vIOqyjOyLnOq4gCDrjbDsnbTthLAg65Ox66GdIOyCreygnOuKlCBwb3N0IOumrOuTgOyEnOyXkOyEnOunjCDrs4Dqsr0g6rCA64ql7ZWY6riwIOuVjOusuOyXkFxyXG4gIC8v7LaU6rCAIOyVoeyFmCDtlYTsmpQgLT4g7Y+s7Iqk7Yq4IOyCrOqwgOyXkOyEnCDsnKDsoIAg7JWh7IWYIO2YuOy2nCDqsIDriqVcclxuICBleHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnOyAvL+uCtCDqsozsi5zquIAg7LaU6rCAIOyVoeyFmFxyXG4gIGV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7IC8vIOuCtCDqsozsi5zquIAg7IKt7KCcIOyVoeyFmFxyXG5cclxuICBleHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG4gIH0pXHJcblxyXG4gIGV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxuICB9KTtcclxuICBcclxuICBleHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgfSk7XHJcblxyXG4gXHJcbiAgZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDoge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ2luJylcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBsb2dpbkxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICBsb2dpbkVycm9yOiBudWxsLFxyXG4gICAgICAgICAgbG9naW5Eb25lOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGxvZ2luTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBsb2dpbkRvbmU6IHRydWUsXHJcbiAgICAgICAgICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRToge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGxvZ2luTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBsb2dpbkVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGxvZ291dExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICBsb2dvdXREb25lOiBmYWxzZSxcclxuICAgICAgICAgIGxvZ291dEVycm9yOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBsb2dvdXRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGxvZ291dERvbmU6IHRydWUsXHJcbiAgICAgICAgICBtZTogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBsb2dvdXRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGxvZ291dEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHNpZ251cExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICBzaWdudXBEb25lOiBmYWxzZSxcclxuICAgICAgICAgIHNpZ251cEVycm9yOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBzaWdudXBMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIHNpZ251cERvbmU6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRToge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHNpZ251cExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgc2lnbnVwRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgLy8gZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAvLyBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAvLyBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAvLyBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAvLyBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgIC8vIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgLy8gZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLy8gICBtZToge1xyXG4gICAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAvLyAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgLy8gZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLy8gICBtZToge1xyXG4gICAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAvLyAgICAgUG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyB9O1xyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07IFxyXG5cclxuXHJcbiAgLy8g7IKs6rCAIOyggeyaqSDsoIRcclxuICAvLyBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIC8vICAgcmV0dXJuIHtcclxuICAvLyAgICAgdHlwZTogTE9HX0lOLFxyXG4gIC8vICAgICBkYXRhLFxyXG4gIC8vICAgfVxyXG4gIC8vIH07XHJcbiAgLy8gZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IHtcclxuICAvLyAgIHR5cGU6IExPR19PVVQsXHJcbiAgLy8gfTtcclxuXHJcblxyXG4gIFxyXG4gIC8vIGV4cG9ydCBjb25zdCBzaWduVXAgPSAoZGF0YSkgPT4ge1xyXG4gIC8vICAgcmV0dXJuIHtcclxuICAvLyAgICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4gIC8vICAgICBkYXRhLFxyXG4gIC8vICAgfVxyXG4gIC8vIH07XHJcblxyXG4gIC8vIGV4cG9ydCBjb25zdCBzaWduVXBBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIC8vICAgcmV0dXJuIHtcclxuICAvLyAgICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4gIC8vICAgICBkYXRhLFxyXG4gIC8vICAgfTtcclxuICAvLyB9O1xyXG5cclxuICAvLyBleHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gIC8vICAgICBjYXNlIExPR19JTjoge1xyXG4gIC8vICAgICAgIHJldHVybiB7XHJcbiAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAvLyAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgLy8gICAgICAgICBtZTogYWN0aW9uLmRhdGEsXHJcbiAgLy8gICAgICAgfTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBjYXNlIExPR19PVVQ6IHtcclxuICAvLyAgICAgICByZXR1cm4ge1xyXG4gIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgLy8gICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAvLyAgICAgICAgIG1lOiBudWxsLFxyXG4gIC8vICAgICAgIH07XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgY2FzZSBTSUdOX1VQOiB7XHJcbiAgLy8gICAgICAgcmV0dXJuIHtcclxuICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gIC8vICAgICAgICAgc2lnblVwRGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgLy8gICAgICAgfTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBkZWZhdWx0OiB7XHJcbiAgLy8gICAgICAgcmV0dXJuIHtcclxuICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG4gIC8vIH07Il0sInNvdXJjZVJvb3QiOiIifQ==