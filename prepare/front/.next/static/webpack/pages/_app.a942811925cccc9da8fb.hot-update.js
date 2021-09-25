webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
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
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false
};

var dummyPost = function dummyPost(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: '정이안'
    },
    Images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: '이안'
    }
  };
};

var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; // export const addPostRequestAction = (data) => {
//   type: ADD_POST_REQUEST,
//   data
// };
// export const addCommentRequestAction = (data) => {
//   type: ADD_COMMENT_REQUEST,
//   data
// };

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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
          mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
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
        var postIndex = state.mainPosts.findIndex(function (v) {
          return v.id === action.data.postId;
        });

        var post = _objectSpread({}, state.mainPosts[postIndex]);

        post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments));

        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts);

        mainPosts[postIndex] = post; //immer 라이브러리로 간단하게 만들기

        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: mainPosts,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImR1bW15UG9zdCIsImRhdGEiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJkdW1teUNvbW1lbnQiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FBQztBQUNWQyxNQUFFLEVBQUUsQ0FETTtBQUVWQyxRQUFJLEVBQUU7QUFDSkQsUUFBRSxFQUFFLENBREE7QUFFSkUsY0FBUSxFQUFFO0FBRk4sS0FGSTtBQU1WQyxXQUFPLEVBQUUseUJBTkM7QUFPVkMsVUFBTSxFQUFFLENBQUM7QUFDUDtBQUNBQyxTQUFHLEVBQUM7QUFGRyxLQUFELEVBR0w7QUFDREEsU0FBRyxFQUFFO0FBREosS0FISyxFQUtMO0FBQ0RBLFNBQUcsRUFBRTtBQURKLEtBTEssQ0FQRTtBQWVWQyxZQUFRLEVBQUUsQ0FBQztBQUNUTCxVQUFJLEVBQUU7QUFDSkMsZ0JBQVEsRUFBRTtBQUROLE9B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TixDQUFnQjhCLFNBQWhCLENBQVAsQ0FBVjs7QUFDQUksWUFBSSxDQUFDM0IsUUFBTCxJQUFpQlksWUFBWSxDQUFDUSxNQUFNLENBQUNYLElBQVAsQ0FBWVosT0FBYixDQUE3QixzR0FBdUQ4QixJQUFJLENBQUMzQixRQUE1RDs7QUFDQSxZQUFNUCxTQUFTLEdBQUcsNkZBQUkwQixLQUFLLENBQUMxQixTQUFiLENBQWY7O0FBQ0FBLGlCQUFTLENBQUM4QixTQUFELENBQVQsR0FBdUJJLElBQXZCLENBUHdCLENBUXhCOztBQUNBLCtDQUNLUixLQURMO0FBRUUxQixtQkFBUyxFQUFUQSxTQUZGO0FBR0VZLDJCQUFpQixFQUFDLEtBSHBCO0FBSUVDLHdCQUFjLEVBQUM7QUFKakI7QUFNSDs7QUFDQyxTQUFLWSxtQkFBTDtBQUEwQjtBQUN4QiwrQ0FDS0MsS0FETDtBQUVFYix3QkFBYyxFQUFDLEtBRmpCO0FBR0VDLHlCQUFlLEVBQUNhLE1BQU0sQ0FBQ0U7QUFIekI7QUFLRDs7QUFDRDtBQUFTO0FBQ1AsaUNBQ0tILEtBREw7QUFHRDtBQTNESDtBQTZERCxDQTlERCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE5NDI4MTE5MjVjY2NjOWRhOGZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW3tcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogJ+ygleydtOyViCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPthYzsiqTtirggI+yViOuFlScsXHJcbiAgICAgIEltYWdlczogW3tcclxuICAgICAgICAvLyBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAgICAgc3JjOidodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS84NzE5NDU2NS8xMzM1ODU4NzMtN2FjNmQ2ZjUtYTdkMC00MjcyLThkNjctYzAyMmM4M2M1M2NmLmpwZycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgICAgfV0sXHJcbiAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgIG5pY2tuYW1lOiAnaWFuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfjhLHjhYfjhYcnLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgbmlja25hbWU6ICdqdW5naWFuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfqt4Dsl6zsm4wuLi4nLFxyXG4gICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IGZhbHNlLFxyXG4gIH07XHJcbiAgICBcclxuICBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OiBkYXRhLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmlja25hbWU6ICfsoJXsnbTslYgnLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGR1bW15Q29tbWVudCA9ICggZGF0YSApID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgY29udGVudDogZGF0YSxcclxuICAgIFVzZXI6e1xyXG4gICAgICBpZDoxLFxyXG4gICAgICBuaWNrbmFtZTogJ+ydtOyViCdcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbiAgICBcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuICBcclxuICAvLyBleHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIC8vICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAvLyAgIGRhdGFcclxuICAvLyB9O1xyXG5cclxuICAvLyBleHBvcnQgY29uc3QgYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIC8vICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAvLyAgIGRhdGFcclxuICAvLyB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhZGRQb3N0TG9hZGluZzp0cnVlLFxyXG4gICAgICAgICAgYWRkUG9zdERvbmU6ZmFsc2UsXHJcbiAgICAgICAgICBhZGRQb3N0RXJyb3I6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICBhZGRQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgIGFkZFBvc3REb25lOnRydWUsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgYWRkUG9zdERvbmU6ZmFsc2UsXHJcbiAgICAgICAgICBhZGRQb3N0RXJyb3I6YWN0aW9uLmVycm9yXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzp0cnVlLFxyXG4gICAgICAgICAgYWRkQ29tbWVudERvbmU6ZmFsc2UsXHJcbiAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIC8vcG9zdGZvcm0g7JeQ7IScIGFjdGlvbi5kYXRhLmNvbnRlbnQsIHBvc3RJZCwgdXNlcklkIOqwgCDtlYTsmpTtlahcclxuICAgICAgICAvL+u2iOuzgOyEseydmCDtlbXsi6wg67CU64CM64qUIOqyg+unjCDrsJTrgIzqs6Ag7LC47KGw66W8IOq3uOuMgOuhnCDsnKDsp4DtlbTspJjslbwg7ZWc64ukLlxyXG4gICAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZClcclxuICAgICAgICBjb25zdCBwb3N0ID0gey4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdfTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICAgIC8vaW1tZXIg65287J2067iM65+s66as66GcIOqwhOuLqO2VmOqyjCDrp4zrk6TquLBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBtYWluUG9zdHMsXHJcbiAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgIGFkZENvbW1lbnREb25lOnRydWUsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgYWRkQ29tbWVudERvbmU6ZmFsc2UsXHJcbiAgICAgICAgICBhZGRDb21tZW50RXJyb3I6YWN0aW9uLmVycm9yXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==