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
var _jsxFileName = "C:\\Users\\goman\\Desktop\\react-sns\\prepare\\front\\pages\\_app.js";





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
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
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
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      // src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
      src: 'https://user-images.githubusercontent.com/87194565/133585873-7ac6d6f5-a7d0-4272-8d67-c022c83c53cf.jpg'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'ian'
      },
      content: 'ㄱㅇㅇ'
    }, {
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'jungian'
      },
      content: '귀여워...'
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false
};

const dummyPost = data => ({
  // id: shortId.generate(),
  id: data.id,
  //사가에서 만들어 보내줌
  content: data.content,
  User: {
    id: 1,
    nickname: '정이안'
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '이안'
  }
});

const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; // export const addPostRequestAction = (data) => {
//   type: ADD_POST_REQUEST,
//   data
// };
// export const addCommentRequestAction = (data) => {
//   type: ADD_COMMENT_REQUEST,
//   data
// };

/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          addPostLoading: true,
          addPostDone: false,
          addPostError: null
        });
      }

    case ADD_POST_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: [dummyPost(action.data), ...state.mainPosts],
          addPostLoading: false,
          addPostDone: true
        });
      }

    case ADD_POST_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          addPostDone: false,
          addPostError: action.error
        });
      }

    case ADD_COMMENT_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          addCommentLoading: true,
          addCommentDone: false,
          addCommentError: null
        });
      }

    case ADD_COMMENT_SUCCESS:
      {
        //postform 에서 action.data.content, postId, userId 가 필요함
        //불변성의 핵심 바뀌는 것만 바뀌고 참조를 그대로 유지해줘야 한다.
        const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);

        const post = _objectSpread({}, state.mainPosts[postIndex]);

        post.Comments = [dummyComment(action.data.content), ...post.Comments];
        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = post; //immer 라이브러리로 간단하게 만들기

        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts,
          addCommentLoading: false,
          addCommentDone: true
        });
      }

    case ADD_COMMENT_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          addCommentDone: false,
          addCommentError: action.error
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
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, signupRequestAction, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
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

const initialState = {
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
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름

const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE'; // 게시글 데이터 등록 삭제는 post 리듀서에서만 변경 가능하기 때문에
//추가 액션 필요 -> 포스트 사가에서 유저 액션 호출 가능

const ADD_POST_TO_ME = 'ADD_POST_TO_ME'; //내 게시글 추가 액션

const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME'; // 내 게시글 삭제 액션

const signupRequestAction = data => ({
  type: SIGN_UP_REQUEST,
  data
});
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
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

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");



function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([// saga 쪼개기 전
  // fork(watchLogin), //call이랑은 다름 
  // fork(watchLogout), //fork나 call로 제너레이터 함수를 실행시켜준다. all은 함수를 동시에 실행
  // fork(watchAddPost) 
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"])]);
} // const gen = function*(){
//      console.log(1);
//      yield; //yeild에서 멈춘다.
//      console.log(1);
//      yield;
//      console.log(1);
//      yield;
// }
// gen.next();
//해야 실행된다. 호출하고 done이 true가 될때까지 실행가능
//while(true){yield '무힌'}; //기점에서 중단됨 gen.next()로 무한반복 가능
// let i = 0;
// const gen = function*(){
//     while(true){
//         yield i++;
//     }
// }
//이벤트 리스너처럼 특정 지점에서 호출 클릭했을 때 호출 //무한의 이벤트 리스너

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);






function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/post', data);
} //사가는 동시에 여러 액션을 디스패치 가능 //어떤 동작이 여러 리듀서에 데이터를 동시에 변경해야 한다면 액션을 여러번 호출


function* addPost(action) {
  try {
    //서버가 없기 때문
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result = yield call(addPostAPI,action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출

    const id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate();
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    }); //포스트추가할때 유저 리듀서 사용을 위해 필요

    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/post/${data.postid}/comment`, data);
}

function* addComment(action) {
  try {
    //서버가 없기 때문
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result = yield call(addPostAPI,action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출

    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost); //주번 , 백번 잘못 눌러도 마지막것만 //동시에 로딩되는 것 중에서만 프론트에서 그렇게 생각한다. 서버에는 두번 저장된다 응답을 취소하는 것
  //yield throttle('ADD_POST_REQUEST' , addPost, 10000); //1분동안 한번만 요청! 중복요청 불가
}

function* watchCommentPost() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchCommentPost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function loginAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login');
}

function* login(action) {
  console.log('saga login function');

  try {
    //서버가 없기 때문
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result = yield call(loginAPI, action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출
    //dispatch

    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logoutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');
}

function* logout() {
  try {
    //서버가 없기 때문
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result = yield call(logoutAPI, action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출

    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signupAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');
}

function* signup() {
  try {
    //서버가 없기 때문
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result = yield call(logoutAPI, action.data) //실행 //call 은 동기 함수(pai호출할때까지 기다려줌)호출 fork는 비동기 함수(결과 기다리지않고 바로 다음줄) 호출

    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
} //이벤트 리스너 같은 역할을 한다. 단점 1회용 -> 해결하기 ->while


function* watchLogin() {
  //while(true){
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], login); //login이라는 액션이 실행될 때까지 기다리겠다. LOG_IN_REQUEST 액션이 실행되면 login 함수 실행
  //}
  // yield takeEvery('LOG_IN_REQUEST', login) -> 보통 이걸쓴다.
}

function* watchLogout() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logout); //takeLatest 써야함 
}

function* watchSignup() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signup);
}

function* userSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), //call이랑은 다름 
  Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout), //fork나 call로 제너레이터 함수를 실행시켜준다. all은 함수를 동시에 실행
  Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignup)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const configureStore = context => {
  console.log(context);
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(configureStore, {
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

/***/ "@redux-saga/core/effects":
/*!*******************************************!*\
  !*** external "@redux-saga/core/effects" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core/effects");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic2hvcnRJZCIsImdlbmVyYXRlIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJkdW1teVBvc3QiLCJkYXRhIiwiZHVtbXlDb21tZW50IiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiZXJyb3IiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ2IiwicG9zdElkIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5Mb2FkaW5nIiwibG9naW5Eb25lIiwibG9naW5FcnJvciIsImxvZ291dExvYWRpbmciLCJsb2dvdXREb25lIiwibG9nb3V0RXJyb3IiLCJzaWdudXBMb2FkaW5nIiwic2lnbnVwRG9uZSIsInNpZ251cEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJzaWdudXBSZXF1ZXN0QWN0aW9uIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJhZGRQb3N0QVBJIiwiYXhpb3MiLCJhZGRQb3N0IiwiZGVsYXkiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsImFkZENvbW1lbnRBUEkiLCJwb3N0aWQiLCJhZGRDb21tZW50Iiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoQ29tbWVudFBvc3QiLCJsb2dpbkFQSSIsImxvZ2luIiwibG9nb3V0QVBJIiwibG9nb3V0Iiwic2lnbnVwQVBJIiwic2lnbnVwIiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nb3V0IiwidGFrZUV2ZXJ5Iiwid2F0Y2hTaWdudXAiLCJjb25maWd1cmVTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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cUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJzsgXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5cclxuY29uc3QgQXBwID0oe0NvbXBvbmVudH0pID0+e1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgLy8gPFByb3ZpZGVyPjwvUHJvdmlkZXI+IDbrsoTsoIQg7J207IOB67aA7YSwIOyDneuetVxyXG4gICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgIClcclxufVxyXG5cclxuQXBwLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1c2VyLFxyXG4gIHBvc3QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcblxyXG4vL+ydtOyghCDsg4Htg5zsmYAg7JWh7IWY7J2EIO2Gte2VtCDri6Trpbgg7IOB7YOc66W8IOumrO2EtO2VmOuKlCDtlajsiJhcclxuLy8o7J207KCEIOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYwg7IOB7YOcXHJcbi8vIGNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG4vLyAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuLy8gICAgICAgICBjYXNlICdMT0dfSU4nOlxyXG4vLyAgICAgICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgICAgICAgICAgICB1c2VyOntcclxuLy8gICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLmRhdGEsXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH07XHJcbi8vICAgICAgICAgY2FzZSAnTE9HX09VVCc6XHJcbi8vICAgICAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICAgICAgICAgIHVzZXI6e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfTtcclxuLy8gICAgICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG5cclxuXHJcblxyXG4vLyAvL+ydtOyghCDsg4Htg5zsmYAg7JWh7IWY7J2EIO2Gte2VtCDri6Trpbgg7IOB7YOc66W8IOumrO2EtO2VmOuKlCDtlajsiJhcclxuLy8gLy8o7J207KCEIOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYwg7IOB7YOcXHJcbi8vIGNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG4vLyAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuLy8gICAgICAgICBjYXNlICdMT0dfSU4nOlxyXG4vLyAgICAgICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgICAgICAgICAgICB1c2VyOntcclxuLy8gICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLmRhdGEsXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH07XHJcbi8vICAgICAgICAgY2FzZSAnTE9HX09VVCc6XHJcbi8vICAgICAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICAgICAgICAgIHVzZXI6e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfTtcclxuLy8gICAgICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuIiwiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfsoJXsnbTslYgnLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7YWM7Iqk7Yq4ICPslYjrhZUnLFxyXG4gICAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSwgXHJcbiAgICAgICAgLy8gc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgICAgIHNyYzonaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vODcxOTQ1NjUvMTMzNTg1ODczLTdhYzZkNmY1LWE3ZDAtNDI3Mi04ZDY3LWMwMjJjODNjNTNjZi5qcGcnLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSwgXHJcbiAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksIFxyXG4gICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZycsXHJcbiAgICAgIH1dLFxyXG4gICAgICBDb21tZW50czogW3tcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLCBcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgbmlja25hbWU6ICdpYW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogJ+OEseOFh+OFhycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgbmlja25hbWU6ICdqdW5naWFuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfqt4Dsl6zsm4wuLi4nLFxyXG4gICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IGZhbHNlLFxyXG4gIH07XHJcbiAgICBcclxuICBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIC8vIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBpZDpkYXRhLmlkLCAvL+yCrOqwgOyXkOyEnCDrp4zrk6TslrQg67O064K07KSMXHJcbiAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuaWNrbmFtZTogJ+ygleydtOyViCcsXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbXSxcclxuICAgIENvbW1lbnRzOiBbXSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZHVtbXlDb21tZW50ID0gKCBkYXRhICkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OiBkYXRhLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgIGlkOjEsXHJcbiAgICAgIG5pY2tuYW1lOiAn7J207JWIJ1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuICAgIFxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG4gIFxyXG4gIC8vIGV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgLy8gICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIC8vICAgZGF0YVxyXG4gIC8vIH07XHJcblxyXG4gIC8vIGV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgLy8gICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIC8vICAgZGF0YVxyXG4gIC8vIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgICBhZGRQb3N0RG9uZTpmYWxzZSxcclxuICAgICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgYWRkUG9zdERvbmU6dHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhZGRQb3N0RG9uZTpmYWxzZSxcclxuICAgICAgICAgIGFkZFBvc3RFcnJvcjphY3Rpb24uZXJyb3JcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgICBhZGRDb21tZW50RG9uZTpmYWxzZSxcclxuICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgLy9wb3N0Zm9ybSDsl5DshJwgYWN0aW9uLmRhdGEuY29udGVudCwgcG9zdElkLCB1c2VySWQg6rCAIO2VhOyalO2VqFxyXG4gICAgICAgIC8v67aI67OA7ISx7J2YIO2VteyLrCDrsJTrgIzripQg6rKD66eMIOuwlOuAjOqzoCDssLjsobDrpbwg6re464yA66GcIOycoOyngO2VtOykmOyVvCDtlZzri6QuXHJcbiAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKVxyXG4gICAgICAgIGNvbnN0IHBvc3QgPSB7Li4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF19O1xyXG4gICAgICAgIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgLy9pbW1lciDrnbzsnbTruIzrn6zrpqzroZwg6rCE64uo7ZWY6rKMIOunjOuTpOq4sFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgYWRkQ29tbWVudERvbmU6dHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhZGRDb21tZW50RG9uZTpmYWxzZSxcclxuICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjphY3Rpb24uZXJyb3JcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iLCJjb25zdCBkdW1teVVzZXIgPShkYXRhKSA9PiAoe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICfsoJXsnbTslYgnLFxyXG4gICAgUG9zdHM6IFt7aWQ6IDF9XSxcclxuICAgIEZvbGxvd2luZ3M6IFt7bmlja25hbWU6ICdka3NmaCd9LCB7bmlja25hbWU6ICdkZHNmaCd9LCB7bmlja25hbWU6ICdkc3Nrc2ZoJ31dLFxyXG4gICAgRm9sbG93ZXJzOiBbe25pY2tuYW1lOiAnZGtzZmgnfSwge25pY2tuYW1lOiAnZGRzZmgnfSwge25pY2tuYW1lOiAnZHNza3NmaCd9XSxcclxuICB9KTtcclxuICBcclxuICBleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9naW5Mb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dpbkRvbmU6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ2luRXJyb3I6IGZhbHNlLFxyXG4gICBcclxuICAgIGxvZ291dExvYWRpbmc6IGZhbHNlLCAvL+uhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ291dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nb3V0RXJyb3I6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuXHJcbiAgICBzaWdudXBMb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBzaWdudXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ251cEVycm9yOiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcblxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgbWU6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG4gIGV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuICBleHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnOyAvLyDslaHshZjsnZgg7J2066aEXHJcblxyXG4gIGV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuICBleHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbiAgZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuICBleHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbiAgZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG4gIGV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbiAgZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuICBleHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG4gIGV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG4gIGV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG4gIGV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG4gIGV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuICBcclxuICBleHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG4gIGV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbiAgZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbiAgLy8g6rKM7Iuc6riAIOuNsOydtO2EsCDrk7HroZ0g7IKt7KCc64qUIHBvc3Qg66as65OA7ISc7JeQ7ISc66eMIOuzgOqyvSDqsIDriqXtlZjquLAg65WM66y47JeQXHJcbiAgLy/stpTqsIAg7JWh7IWYIO2VhOyalCAtPiDtj6zsiqTtirgg7IKs6rCA7JeQ7IScIOycoOyggCDslaHshZgg7Zi47LacIOqwgOuKpVxyXG4gIGV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7IC8v64K0IOqyjOyLnOq4gCDstpTqsIAg7JWh7IWYXHJcbiAgZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJzsgLy8g64K0IOqyjOyLnOq4gCDsgq3soJwg7JWh7IWYXHJcblxyXG4gIGV4cG9ydCBjb25zdCBzaWdudXBSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+KHtcclxuICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbiAgfSlcclxuXHJcbiAgZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG4gIH0pO1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICB9KTtcclxuXHJcbiBcclxuICBleHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgbG9naW4nKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGxvZ2luTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGxvZ2luRXJyb3I6IG51bGwsXHJcbiAgICAgICAgICBsb2dpbkRvbmU6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbG9naW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGxvZ2luRG9uZTogdHJ1ZSxcclxuICAgICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbG9naW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGxvZ2luRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbG9nb3V0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGxvZ291dERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgbG9nb3V0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGxvZ291dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgbG9nb3V0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgIG1lOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRToge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGxvZ291dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgbG9nb3V0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgc2lnbnVwTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIHNpZ251cERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgc2lnbnVwRXJyb3I6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHNpZ251cExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgc2lnbnVwRG9uZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgc2lnbnVwTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBzaWdudXBFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAvLyBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIC8vIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgIC8vIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgLy8gZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgLy8gZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAvLyBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgIG1lOiB7XHJcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgIC8vICAgICBQb3N0czogW3sgaWQ6IGFjdGlvbi5kYXRhIH0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAvLyBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgIG1lOiB7XHJcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTsgXHJcblxyXG5cclxuICAvLyDsgqzqsIAg7KCB7JqpIOyghFxyXG4gIC8vIGV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgLy8gICByZXR1cm4ge1xyXG4gIC8vICAgICB0eXBlOiBMT0dfSU4sXHJcbiAgLy8gICAgIGRhdGEsXHJcbiAgLy8gICB9XHJcbiAgLy8gfTtcclxuICAvLyBleHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0ge1xyXG4gIC8vICAgdHlwZTogTE9HX09VVCxcclxuICAvLyB9O1xyXG5cclxuXHJcbiAgXHJcbiAgLy8gZXhwb3J0IGNvbnN0IHNpZ25VcCA9IChkYXRhKSA9PiB7XHJcbiAgLy8gICByZXR1cm4ge1xyXG4gIC8vICAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgLy8gICAgIGRhdGEsXHJcbiAgLy8gICB9XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gZXhwb3J0IGNvbnN0IHNpZ25VcEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgLy8gICByZXR1cm4ge1xyXG4gIC8vICAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgLy8gICAgIGRhdGEsXHJcbiAgLy8gICB9O1xyXG4gIC8vIH07XHJcblxyXG4gIC8vIGV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgLy8gICAgIGNhc2UgTE9HX0lOOiB7XHJcbiAgLy8gICAgICAgcmV0dXJuIHtcclxuICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gIC8vICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAvLyAgICAgICAgIG1lOiBhY3Rpb24uZGF0YSxcclxuICAvLyAgICAgICB9O1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIGNhc2UgTE9HX09VVDoge1xyXG4gIC8vICAgICAgIHJldHVybiB7XHJcbiAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAvLyAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gIC8vICAgICAgICAgbWU6IG51bGwsXHJcbiAgLy8gICAgICAgfTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBjYXNlIFNJR05fVVA6IHtcclxuICAvLyAgICAgICByZXR1cm4ge1xyXG4gIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgLy8gICAgICAgICBzaWduVXBEYXRhOiBhY3Rpb24uZGF0YSxcclxuICAvLyAgICAgICB9O1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIGRlZmF1bHQ6IHtcclxuICAvLyAgICAgICByZXR1cm4ge1xyXG4gIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcbiAgLy8gfTsiLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICAvLyBzYWdhIOyqvOqwnOq4sCDsoIRcclxuICAgICAgICAvLyBmb3JrKHdhdGNoTG9naW4pLCAvL2NhbGzsnbTrnpHsnYAg64uk66aEIFxyXG4gICAgICAgIC8vIGZvcmsod2F0Y2hMb2dvdXQpLCAvL2ZvcmvrgpggY2FsbOuhnCDsoJzrhIjroIjsnbTthLAg7ZWo7IiY66W8IOyLpO2WieyLnOy8nOykgOuLpC4gYWxs7J2AIO2VqOyImOulvCDrj5nsi5zsl5Ag7Iuk7ZaJXHJcbiAgICAgICAgLy8gZm9yayh3YXRjaEFkZFBvc3QpIFxyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpXHJcbiAgICAgICAgXSk7XHJcbn1cclxuXHJcbi8vIGNvbnN0IGdlbiA9IGZ1bmN0aW9uKigpe1xyXG4vLyAgICAgIGNvbnNvbGUubG9nKDEpO1xyXG4vLyAgICAgIHlpZWxkOyAvL3llaWxk7JeQ7IScIOupiOy2mOuLpC5cclxuLy8gICAgICBjb25zb2xlLmxvZygxKTtcclxuLy8gICAgICB5aWVsZDtcclxuLy8gICAgICBjb25zb2xlLmxvZygxKTtcclxuLy8gICAgICB5aWVsZDtcclxuLy8gfVxyXG4vLyBnZW4ubmV4dCgpO1xyXG4vL+2VtOyVvCDsi6TtlonrkJzri6QuIO2YuOy2nO2VmOqzoCBkb25l7J20IHRydWXqsIAg65Cg65WM6rmM7KeAIOyLpO2WieqwgOuKpVxyXG4vL3doaWxlKHRydWUpe3lpZWxkICfrrLTtnownfTsgLy/quLDsoJDsl5DshJwg7KSR64uo65CoIGdlbi5uZXh0KCnroZwg66y07ZWc67CY67O1IOqwgOuKpVxyXG4vLyBsZXQgaSA9IDA7XHJcbi8vIGNvbnN0IGdlbiA9IGZ1bmN0aW9uKigpe1xyXG4vLyAgICAgd2hpbGUodHJ1ZSl7XHJcbi8vICAgICAgICAgeWllbGQgaSsrO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8v7J2067Kk7Yq4IOumrOyKpOuEiOyymOufvCDtirnsoJUg7KeA7KCQ7JeQ7IScIO2YuOy2nCDtgbTrpq3tlojsnYQg65WMIO2YuOy2nCAvL+ustO2VnOydmCDsnbTrsqTtirgg66as7Iqk64SIIiwiaW1wb3J0IHsgZGVsYXksIHB1dCwgdGFrZUxhdGVzdCwgZm9yaywgYWxsfSBmcm9tIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgXHJcbiAgICBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfU1VDQ0VTUyxBRERfQ09NTUVOVF9SRVFVRVNUXHJcbn1mcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpXHJcbn1cclxuXHJcbi8v7IKs6rCA64qUIOuPmeyLnOyXkCDsl6zrn6wg7JWh7IWY7J2EIOuUlOyKpO2MqOy5mCDqsIDriqUgLy/slrTrlqQg64+Z7J6R7J20IOyXrOufrCDrpqzrk4DshJzsl5Ag642w7J207YSw66W8IOuPmeyLnOyXkCDrs4Dqsr3tlbTslbwg7ZWc64uk66m0IOyVoeyFmOydhCDsl6zrn6zrsogg7Zi47LacXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgIC8v7ISc67KE6rCAIOyXhuq4sCDrlYzrrLhcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKVxyXG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLGFjdGlvbi5kYXRhKSAvL+yLpO2WiSAvL2NhbGwg7J2AIOuPmeq4sCDtlajsiJgocGFp7Zi47Lac7ZWg65WM6rmM7KeAIOq4sOuLpOugpOykjCntmLjstpwgZm9ya+uKlCDruYTrj5nquLAg7ZWo7IiYKOqysOqzvCDquLDri6Trpqzsp4DslYrqs6Ag67CU66GcIOuLpOydjOykhCkg7Zi47LacXHJcbiAgICAgICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OmFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+2PrOyKpO2KuOy2lOqwgO2VoOuVjCDsnKDsoIAg66as65OA7IScIOyCrOyaqeydhCDsnITtlbQg7ZWE7JqUXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IGlkXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcG9zdC8ke2RhdGEucG9zdGlkfS9jb21tZW50YCwgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICAgLy/shJzrsoTqsIAg7JeG6riwIOuVjOusuFxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApXHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksYWN0aW9uLmRhdGEpIC8v7Iuk7ZaJIC8vY2FsbCDsnYAg64+Z6riwIO2VqOyImChwYWntmLjstpztlaDrlYzquYzsp4Ag6riw64uk66Ck7KSMKe2YuOy2nCBmb3Jr64qUIOu5hOuPmeq4sCDtlajsiJgo6rKw6rO8IOq4sOuLpOumrOyngOyViuqzoCDrsJTroZwg64uk7J2M7KSEKSDtmLjstpxcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpe1xyXG4gICAgXHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpIC8v7KO867KIICwg67Cx67KIIOyemOuquyDriIzrn6zrj4Qg66eI7KeA66eJ6rKD66eMIC8v64+Z7Iuc7JeQIOuhnOuUqeuQmOuKlCDqsoMg7KSR7JeQ7ISc66eMIO2UhOuhoO2KuOyXkOyEnCDqt7jroIfqsowg7IOd6rCB7ZWc64ukLiDshJzrsoTsl5DripQg65GQ67KIIOyggOyepeuQnOuLpCDsnZHri7XsnYQg7Leo7IaM7ZWY64qUIOqyg1xyXG4gICAgLy95aWVsZCB0aHJvdHRsZSgnQUREX1BPU1RfUkVRVUVTVCcgLCBhZGRQb3N0LCAxMDAwMCk7IC8vMeu2hOuPmeyViCDtlZzrsojrp4wg7JqU7LKtISDspJHrs7XsmpTssq0g67aI6rCAXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENvbW1lbnRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQ29tbWVudFBvc3QpXHJcbiAgICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGRlbGF5LCBwdXQsIHRha2UsIHRha2VMYXRlc3QsIHRha2VFdmVyeSwgZm9ya30gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fUkVRVUVTVCxMT0dfSU5fU1VDQ0VTUyxMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19PVVRfUkVRVUVTVCxMT0dfT1VUX1NVQ0NFU1MsTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFNJR05fVVBfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFXHJcbiBcclxuICB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5mdW5jdGlvbiBsb2dpbkFQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nKVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pe1xyXG4gICAgY29uc29sZS5sb2coJ3NhZ2EgbG9naW4gZnVuY3Rpb24nKVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIC8v7ISc67KE6rCAIOyXhuq4sCDrlYzrrLhcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKSAvL+yLpO2WiSAvL2NhbGwg7J2AIOuPmeq4sCDtlajsiJgocGFp7Zi47Lac7ZWg65WM6rmM7KeAIOq4sOuLpOugpOykjCntmLjstpwgZm9ya+uKlCDruYTrj5nquLAg7ZWo7IiYKOqysOqzvCDquLDri6Trpqzsp4DslYrqs6Ag67CU66GcIOuLpOydjOykhCkg7Zi47LacXHJcbiAgICAgICAgLy9kaXNwYXRjaFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dvdXRBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dvdXQoKXtcclxuICAgIFxyXG4gICAgdHJ5e1xyXG4gICAgICAgICAvL+yEnOuyhOqwgCDsl4bquLAg65WM66y4XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ291dEFQSSwgYWN0aW9uLmRhdGEpIC8v7Iuk7ZaJIC8vY2FsbCDsnYAg64+Z6riwIO2VqOyImChwYWntmLjstpztlaDrlYzquYzsp4Ag6riw64uk66Ck7KSMKe2YuOy2nCBmb3Jr64qUIOu5hOuPmeq4sCDtlajsiJgo6rKw6rO8IOq4sOuLpOumrOyngOyViuqzoCDrsJTroZwg64uk7J2M7KSEKSDtmLjstpxcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWdudXBBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWdudXAoKXtcclxuICAgIFxyXG4gICAgdHJ5e1xyXG4gICAgICAgICAvL+yEnOuyhOqwgCDsl4bquLAg65WM66y4XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ291dEFQSSwgYWN0aW9uLmRhdGEpIC8v7Iuk7ZaJIC8vY2FsbCDsnYAg64+Z6riwIO2VqOyImChwYWntmLjstpztlaDrlYzquYzsp4Ag6riw64uk66Ck7KSMKe2YuOy2nCBmb3Jr64qUIOu5hOuPmeq4sCDtlajsiJgo6rKw6rO8IOq4sOuLpOumrOyngOyViuqzoCDrsJTroZwg64uk7J2M7KSEKSDtmLjstpxcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4vL+ydtOuypO2KuCDrpqzsiqTrhIgg6rCZ7J2AIOyXre2VoOydhCDtlZzri6QuIOuLqOygkCAx7ZqM7JqpIC0+IO2VtOqysO2VmOq4sCAtPndoaWxlXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCl7XHJcbiAgICAvL3doaWxlKHRydWUpe1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ2luKSAvL2xvZ2lu7J20652864qUIOyVoeyFmOydtCDsi6TtlonrkKAg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpC4gTE9HX0lOX1JFUVVFU1Qg7JWh7IWY7J20IOyLpO2WieuQmOuptCBsb2dpbiDtlajsiJgg7Iuk7ZaJXHJcbiAgICAvL31cclxuICAgIC8vIHlpZWxkIHRha2VFdmVyeSgnTE9HX0lOX1JFUVVFU1QnLCBsb2dpbikgLT4g67O07Ya1IOydtOqxuOyTtOuLpC5cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dvdXQoKXtcclxuICAgIFxyXG4gICAgICAgIHlpZWxkIHRha2VFdmVyeShMT0dfT1VUX1JFUVVFU1QsIGxvZ291dCkgLy90YWtlTGF0ZXN0IOyNqOyVvO2VqCBcclxuICAgIFxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ251cCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ251cCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ2luKSwgLy9jYWxs7J20656R7J2AIOuLpOumhCBcclxuICAgICAgICBmb3JrKHdhdGNoTG9nb3V0KSwgLy9mb3Jr64KYIGNhbGzroZwg7KCc64SI66CI7J207YSwIO2VqOyImOulvCDsi6Ttlonsi5zsvJzspIDri6QuIGFsbOydgCDtlajsiJjrpbwg64+Z7Iuc7JeQIOyLpO2WiVxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWdudXApXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhcclxuICAgICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSxcclxuICAgICk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9