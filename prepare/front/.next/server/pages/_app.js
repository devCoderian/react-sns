module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\ian07\\Desktop\\reactSNS\\prepare\\front\\pages\\_app.js";





const App = ({
  Component
}) => {
  return (
    /*#__PURE__*/
    // <Provider></Provider> 6버전 이상부터 생략
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined)
  );
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_2__["default"].withRedux(App));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
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

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '정이안'
    },
    content: '첫 번째 게시글 #해시태그 #테스트 #안녕',
    Images: [{
      // src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
      src: 'https://user-images.githubusercontent.com/87194565/133585873-7ac6d6f5-a7d0-4272-8d67-c022c83c53cf.jpg'
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'ian'
      },
      content: 'ㄱㅇㅇ'
    }, {
      User: {
        nickname: 'jungian'
      },
      content: '귀여워...'
    }]
  }],
  imagePaths: [],
  postAdded: false
};
const ADD_POST = 'ADD_POST';
const addPost = {
  type: ADD_POST
};
const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '정이안'
  },
  Images: [],
  Comments: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: [dummyPost, ...state.mainPosts],
          postAdded: true
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP, SIGN_UP_SUCCESS, LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT, signUpAction, signUpSuccess, loginAction, logoutAction, signUp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const dummyUser = {
  id: 1,
  nickname: '정이안',
  Posts: [],
  Followings: [],
  Followers: []
};
const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {}
};
const SIGN_UP = 'SIGN_UP';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const LOG_IN = 'LOG_IN'; // 액션의 이름

const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름

const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

const LOG_OUT = 'LOG_OUT';
const signUpAction = data => {
  return {
    type: SIGN_UP,
    data
  };
};
const signUpSuccess = {
  type: SIGN_UP_SUCCESS
};
const loginAction = data => {
  return {
    type: LOG_IN,
    data
  };
};
const logoutAction = {
  type: LOG_OUT
};
const signUp = data => {
  return {
    type: SIGN_UP,
    data
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
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

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);



 // import thunkMiddleware from 'redux-thunk'

const configureStore = () => {
  //미들웨어 만들어보기, 액션 객체 만들기 
  // const loggerMiddleware = ({dispatch, getState}) => (next) => (action) =>{
  //     console.log(action);
  //     return next(action);
  // }
  //const middlewares = [thunkMiddleware, loggerMiddleware]; 사용해보기
  //    const middlewares = [thunkMiddleware];
  const middlewares = [];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares)); //데브툴 연결 보안에는 취약
  //개발용 미들웨어 설치 필요 npm i redux-devtools-extension

  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer); //미들웨어는 enhancer를 넣어서 사용가능
  // store.dispatch({
  //     type: 'CHANGE_NICKNAME',
  //     data: '정이안'
  // })
  //dispatch하는 순간 리듀서로 전달된다.

  return store;
}; //debugging이 true일시 리덕스에 대한 설명 참조 가능


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsImR1bW15UG9zdCIsImR1bW15VXNlciIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImlzTG9nZ2VkSW4iLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJTSUdOX1VQIiwiU0lHTl9VUF9TVUNDRVNTIiwiTE9HX0lOIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVQiLCJzaWduVXBBY3Rpb24iLCJkYXRhIiwic2lnblVwU3VjY2VzcyIsImxvZ2luQWN0aW9uIiwibG9nb3V0QWN0aW9uIiwic2lnblVwIiwiY29uZmlndXJlU3RvcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFQTs7O0FBR0EsTUFBTUEsR0FBRyxHQUFFLENBQUM7QUFBQ0M7QUFBRCxD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LENBQWpCLENBQTdCO0FBSWUxRCxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnOyBcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcblxyXG5jb25zdCBBcHAgPSh7Q29tcG9uZW50fSkgPT57XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICAvLyA8UHJvdmlkZXI+PC9Qcm92aWRlcj4gNuuyhOyghCDsnbTsg4HrtoDthLAg7IOd6561XHJcbiAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTsiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsXHJcbiAgcG9zdCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuXHJcbi8v7J207KCEIOyDge2DnOyZgCDslaHshZjsnYQg7Ya17ZW0IOuLpOuluCDsg4Htg5zrpbwg66as7YS07ZWY64qUIO2VqOyImFxyXG4vLyjsnbTsoIQg7IOB7YOcLCDslaHshZgpID0+IOuLpOydjCDsg4Htg5xcclxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcbi8vICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4vLyAgICAgICAgIGNhc2UgJ0xPR19JTic6XHJcbi8vICAgICAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICAgICAgICAgIHVzZXI6e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfTtcclxuLy8gICAgICAgICBjYXNlICdMT0dfT1VUJzpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgICAgICAgICAgdXNlcjp7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuLy8gICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcblxyXG5cclxuXHJcbi8vIC8v7J207KCEIOyDge2DnOyZgCDslaHshZjsnYQg7Ya17ZW0IOuLpOuluCDsg4Htg5zrpbwg66as7YS07ZWY64qUIO2VqOyImFxyXG4vLyAvLyjsnbTsoIQg7IOB7YOcLCDslaHshZgpID0+IOuLpOydjCDsg4Htg5xcclxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcbi8vICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4vLyAgICAgICAgIGNhc2UgJ0xPR19JTic6XHJcbi8vICAgICAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICAgICAgICAgIHVzZXI6e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfTtcclxuLy8gICAgICAgICBjYXNlICdMT0dfT1VUJzpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgICAgICAgICAgdXNlcjp7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuLy8gICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICBpZDogMSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7KCV7J207JWIJyxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+2FjOyKpO2KuCAj7JWI64WVJyxcclxuICAgICAgSW1hZ2VzOiBbe1xyXG4gICAgICAgIC8vIHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2JyxcclxuICAgICAgICBzcmM6J2h0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzg3MTk0NTY1LzEzMzU4NTg3My03YWM2ZDZmNS1hN2QwLTQyNzItOGQ2Ny1jMDIyYzgzYzUzY2YuanBnJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxyXG4gICAgICB9XSxcclxuICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgbmlja25hbWU6ICdpYW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogJ+OEseOFh+OFhycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICBuaWNrbmFtZTogJ2p1bmdpYW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogJ+q3gOyXrOybjC4uLicsXHJcbiAgICAgIH1dXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgcG9zdEFkZGVkOiBmYWxzZSxcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJztcclxuICBcclxuICBleHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuICAgIHR5cGU6IEFERF9QT1NULFxyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBjb250ZW50OiAn642U66+4642w7J207YSw7J6F64uI64ukLicsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuaWNrbmFtZTogJ+ygleydtOyViCcsXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbXSxcclxuICAgIENvbW1lbnRzOiBbXSxcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgQUREX1BPU1Q6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IiwiY29uc3QgZHVtbXlVc2VyID0ge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ+ygleydtOyViCcsXHJcbiAgICBQb3N0czogW10sXHJcbiAgICBGb2xsb3dpbmdzOiBbXSxcclxuICAgIEZvbGxvd2VyczogW10sXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBTSUdOX1VQID0gJ1NJR05fVVAnO1xyXG4gIGV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuICBleHBvcnQgY29uc3QgTE9HX0lOID0gJ0xPR19JTic7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuICBleHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnOyAvLyDslaHshZjsnZgg7J2066aEXHJcbiAgZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG4gIGV4cG9ydCBjb25zdCBMT0dfT1VUID0gJ0xPR19PVVQnO1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBzaWduVXBBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogU0lHTl9VUCxcclxuICAgICAgZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY29uc3Qgc2lnblVwU3VjY2VzcyA9IHtcclxuICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBMT0dfSU4sXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9XHJcbiAgfTtcclxuICBleHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0ge1xyXG4gICAgdHlwZTogTE9HX09VVCxcclxuICB9O1xyXG4gIGV4cG9ydCBjb25zdCBzaWduVXAgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogU0lHTl9VUCxcclxuICAgICAgZGF0YSxcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9HX0lOOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICAgIG1lOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTE9HX09VVDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNJR05fVVA6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBzaWduVXBEYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTsiLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfWZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuLy8gaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PntcclxuICAgIC8v66+465Ok7Juo7Ja0IOunjOuTpOyWtOuztOq4sCwg7JWh7IWYIOqwneyytCDrp4zrk6TquLAgXHJcbiAgICAvLyBjb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHtkaXNwYXRjaCwgZ2V0U3RhdGV9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT57XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIC8vICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG4gICAgLy8gfVxyXG4gICAgIC8vY29uc3QgbWlkZGxld2FyZXMgPSBbdGh1bmtNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTsg7IKs7Jqp7ZW067O06riwXHJcbiBcclxuIFxyXG4vLyAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFt0aHVua01pZGRsZXdhcmVdO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgP2NvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDpjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAvL+uNsOu4jO2ItCDsl7DqsrAg67O07JWI7JeQ64qUIOy3qOyVvVxyXG4gICAgLy/qsJzrsJzsmqkg66+465Ok7Juo7Ja0IOyEpOy5mCDtlYTsmpQgbnBtIGkgcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIC8v66+465Ok7Juo7Ja064qUIGVuaGFuY2Vy66W8IOuEo+yWtOyEnCDsgqzsmqnqsIDriqVcclxuXHJcbiAgICAvLyBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAvLyAgICAgdHlwZTogJ0NIQU5HRV9OSUNLTkFNRScsXHJcbiAgICAvLyAgICAgZGF0YTogJ+ygleydtOyViCdcclxuICAgIC8vIH0pXHJcbiAgICAvL2Rpc3BhdGNo7ZWY64qUIOyInOqwhCDrpqzrk4DshJzroZwg7KCE64us65Cc64ukLlxyXG4gICAgcmV0dXJuIHN0b3JlOyAgICBcclxufTtcclxuXHJcbi8vZGVidWdnaW5n7J20IHRydWXsnbzsi5wg66as642V7Iqk7JeQIOuMgO2VnCDshKTrqoUg7LC47KGwIOqwgOuKpVxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9