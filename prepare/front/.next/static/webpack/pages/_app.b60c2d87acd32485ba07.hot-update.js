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
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
        nickname: 'ian'
      },
      content: 'ㄱㅇㅇ'
    }, {
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInNob3J0SWQiLCJnZW5lcmF0ZSIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImR1bW15UG9zdCIsImRhdGEiLCJkdW1teUNvbW1lbnQiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FBQztBQUNWQyxNQUFFLEVBQUUsQ0FETTtBQUVWQyxRQUFJLEVBQUU7QUFDSkQsUUFBRSxFQUFFLENBREE7QUFFSkUsY0FBUSxFQUFFO0FBRk4sS0FGSTtBQU1WQyxXQUFPLEVBQUUseUJBTkM7QUFPVkMsVUFBTSxFQUFFLENBQUM7QUFDUDtBQUNBQyxTQUFHLEVBQUM7QUFGRyxLQUFELEVBR0w7QUFDREEsU0FBRyxFQUFFO0FBREosS0FISyxFQUtMO0FBQ0RBLFNBQUcsRUFBRTtBQURKLEtBTEssQ0FQRTtBQWVWQyxZQUFRLEVBQUUsQ0FBQztBQUNUTixRQUFFLEVBQUVPLDhDQUFPLENBQUNDLFFBQVIsRUFESztB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LGlCQUFPQSxDQUFDLENBQUMvQixFQUFGLEtBQVMwQixNQUFNLENBQUNULElBQVAsQ0FBWWUsTUFBNUI7QUFBQSxTQUExQixDQUFsQjs7QUFDQSxZQUFNQyxJQUFJLHFCQUFPUixLQUFLLENBQUMxQixTQUFOLENBQWdCOEIsU0FBaEIsQ0FBUCxDQUFWOztBQUNBSSxZQUFJLENBQUMzQixRQUFMLElBQWlCWSxZQUFZLENBQUNRLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZZCxPQUFiLENBQTdCLHNHQUF1RDhCLElBQUksQ0FBQzNCLFFBQTVEOztBQUNBLFlBQU1QLFNBQVMsR0FBRyw2RkFBSTBCLEtBQUssQ0FBQzFCLFNBQWIsQ0FBZjs7QUFDQUEsaUJBQVMsQ0FBQzhCLFNBQUQsQ0FBVCxHQUF1QkksSUFBdkIsQ0FQd0IsQ0FReEI7O0FBQ0EsK0NBQ0tSLEtBREw7QUFFRTFCLG1CQUFTLEVBQVRBLFNBRkY7QUFHRWMsMkJBQWlCLEVBQUMsS0FIcEI7QUFJRUMsd0JBQWMsRUFBQztBQUpqQjtBQU1IOztBQUNDLFNBQUtVLG1CQUFMO0FBQTBCO0FBQ3hCLCtDQUNLQyxLQURMO0FBRUVYLHdCQUFjLEVBQUMsS0FGakI7QUFHRUMseUJBQWUsRUFBQ1csTUFBTSxDQUFDRTtBQUh6QjtBQUtEOztBQUNEO0FBQVM7QUFDUCxpQ0FDS0gsS0FETDtBQUdEO0FBM0RIO0FBNkRELENBOUREIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjYwYzJkODdhY2QzMjQ4NWJhMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICBpZDogMSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7KCV7J207JWIJyxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+2FjOyKpO2KuCAj7JWI64WVJyxcclxuICAgICAgSW1hZ2VzOiBbe1xyXG4gICAgICAgIC8vIHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2JyxcclxuICAgICAgICBzcmM6J2h0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzg3MTk0NTY1LzEzMzU4NTg3My03YWM2ZDZmNS1hN2QwLTQyNzItOGQ2Ny1jMDIyYzgzYzUzY2YuanBnJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxyXG4gICAgICB9XSxcclxuICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSwgXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgIG5pY2tuYW1lOiAnaWFuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfjhLHjhYfjhYcnLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgIG5pY2tuYW1lOiAnanVuZ2lhbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAn6reA7Jes7JuMLi4uJyxcclxuICAgICAgfV1cclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBmYWxzZSxcclxuICB9O1xyXG4gICAgXHJcbiAgY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgY29udGVudDogZGF0YSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5pY2tuYW1lOiAn7KCV7J207JWIJyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkdW1teUNvbW1lbnQgPSAoIGRhdGEgKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICBVc2VyOntcclxuICAgICAgaWQ6MSxcclxuICAgICAgbmlja25hbWU6ICfsnbTslYgnXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG4gICAgXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcbiAgXHJcbiAgLy8gZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAvLyAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgLy8gICBkYXRhXHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAvLyAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgLy8gICBkYXRhXHJcbiAgLy8gfTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgYWRkUG9zdExvYWRpbmc6dHJ1ZSxcclxuICAgICAgICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgICAgICAgYWRkUG9zdEVycm9yOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgYWRkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICBhZGRQb3N0RG9uZTp0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRToge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgICAgICAgYWRkUG9zdEVycm9yOmFjdGlvbi5lcnJvclxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6dHJ1ZSxcclxuICAgICAgICAgIGFkZENvbW1lbnREb25lOmZhbHNlLFxyXG4gICAgICAgICAgYWRkQ29tbWVudEVycm9yOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICAvL3Bvc3Rmb3JtIOyXkOyEnCBhY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZCDqsIAg7ZWE7JqU7ZWoXHJcbiAgICAgICAgLy/rtojrs4DshLHsnZgg7ZW17IusIOuwlOuAjOuKlCDqsoPrp4wg67CU64CM6rOgIOywuOyhsOulvCDqt7jrjIDroZwg7Jyg7KeA7ZW07KSY7JW8IO2VnOuLpC5cclxuICAgICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpXHJcbiAgICAgICAgY29uc3QgcG9zdCA9IHsuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XX07XHJcbiAgICAgICAgcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAvL2ltbWVyIOudvOydtOu4jOufrOumrOuhnCDqsITri6jtlZjqsowg66eM65Ok6riwXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICBhZGRDb21tZW50RG9uZTp0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRToge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGFkZENvbW1lbnREb25lOmZhbHNlLFxyXG4gICAgICAgICAgYWRkQ29tbWVudEVycm9yOmFjdGlvbi5lcnJvclxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=