webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInNob3J0SWQiLCJnZW5lcmF0ZSIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImR1bW15UG9zdCIsImRhdGEiLCJkdW1teUNvbW1lbnQiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FBQztBQUNWQyxNQUFFLEVBQUUsQ0FETTtBQUVWQyxRQUFJLEVBQUU7QUFDSkQsUUFBRSxFQUFFLENBREE7QUFFSkUsY0FBUSxFQUFFO0FBRk4sS0FGSTtBQU1WQyxXQUFPLEVBQUUseUJBTkM7QUFPVkMsVUFBTSxFQUFFLENBQUM7QUFDUDtBQUNBQyxTQUFHLEVBQUM7QUFGRyxLQUFELEVBR0w7QUFDREEsU0FBRyxFQUFFO0FBREosS0FISyxFQUtMO0FBQ0RBLFNBQUcsRUFBRTtBQURKLEtBTEssQ0FQRTtBQWVWQyxZQUFRLEVBQUUsQ0FBQztBQUNUTixRQUFFLEVBQUVPLDhDQUFPLENBQUNDLFFBQVIsRUFESztBQUVUUCxVQUFJLEVBQUU7QUFDSkQsVUFBRSxFQUFFTyw4Q0FBTyxDQUFDQyxRQUFSLEVBREE7QUFFSk4sZ0JBQVEsRUFBRTtBQUZOLE9BRkc7QUFNVEMsYUFBTyxFQUFFO0FBTkEsS0FBRCxFQU9QO0FBQ0RGLFVBQUksRUFBRTtBQUNKRCxVQUFFLEVBQUVPLDhDQUFPLENBQUNDLFFBQVIsRUFEQTtBQUVKTixnQkFBUSxFQUFFO0FBRk4sT0FETDtBQUtEQyxhQUFPLEVBQUU7QUFMUixLQVBPO0FBZkEsR0FBRCxDQURhO0FBK0J4Qk0sWUFBVSxFQUFFLEVBL0JZO0FBZ0N4QkMsZ0JBQWMsRUFBRSxLQWhDUTtBQWlDeEJDLGFBQVcsRUFBRSxLQWpDVztBQWtDeEJDLGNBQVksRUFBRSxLQWxDVTtBQW1DeEJDLG1CQUFpQixFQUFFLEtBbkNLO0FBb0N4QkMsZ0JBQWMsRUFBRSxLQXBDUTtBQXFDeEJDLGlCQUFlLEVBQUU7QUFyQ08sQ0FBckI7O0FBd0NMLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQ7QUFBQSxTQUFXO0FBQzNCakIsTUFBRSxFQUFFTyw4Q0FBTyxDQUFDQyxRQUFSLEVBRHVCO0FBRTNCTCxXQUFPLEVBQUVjLElBRmtCO0FBRzNCaEIsUUFBSSxFQUFFO0FBQ0pELFFBQUUsRUFBRSxDQURBO0FBRUpFLGNBQVEsRUFBRTtBQUZOLEtBSHFCO0FBTzNCRSxVQUFNLEVBQUUsRUFQbUI7QUFRM0JFLFlBQVEsRUFBRTtBQVJpQixHQUFYO0FBQUEsQ0FBbEI7O0FBV0EsSUFBTVksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBRUQsSUFBRjtBQUFBLFNBQWE7QUFDaENqQixNQUFFLEVBQUVPLDhDQUFPLENBQUNDLFFBQVIsRUFENEI7QUFFaENMLFdBQU8sRUFBRWMsSUFGdUI7QUFHaENoQixRQUFJLEVBQUM7QUFDSEQsUUFBRSxFQUFDLENBREE7QUFFSEUsY0FBUSxFQUFFO0FBRlA7QUFIMkIsR0FBYjtBQUFBLENBQXJCOztBQVNLLElBQU1pQixnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFHQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUIsQyxDQUVMO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsMkVBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QjNCLFlBQXlCO0FBQUEsTUFBWDRCLE1BQVc7O0FBQy9DLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtSLGdCQUFMO0FBQXVCO0FBQ3JCLCtDQUNLTSxLQURMO0FBRUVmLHdCQUFjLEVBQUMsSUFGakI7QUFHRUMscUJBQVcsRUFBQyxLQUhkO0FBSUVDLHNCQUFZLEVBQUU7QUFKaEI7QUFNRDs7QUFDRCxTQUFLUSxnQkFBTDtBQUF1QjtBQUNyQiwrQ0FDS0ssS0FETDtBQUVFMUIsbUJBQVMsR0FBR2lCLFNBQVMsQ0FBQ1UsTUFBTSxDQUFDVCxJQUFSLENBQVosc0dBQThCUSxLQUFLLENBQUMxQixTQUFwQyxFQUZYO0FBR0VXLHdCQUFjLEVBQUMsS0FIakI7QUFJRUMscUJBQVcsRUFBQztBQUpkO0FBTUg7O0FBQ0MsU0FBS1UsZ0JBQUw7QUFBdUI7QUFDckIsK0NBQ0tJLEtBREw7QUFFRWQscUJBQVcsRUFBQyxLQUZkO0FBR0VDLHNCQUFZLEVBQUNjLE1BQU0sQ0FBQ0U7QUFIdEI7QUFLRDs7QUFDRCxTQUFLTixtQkFBTDtBQUEwQjtBQUN4QiwrQ0FDS0csS0FETDtBQUVFWiwyQkFBaUIsRUFBQyxJQUZwQjtBQUdFQyx3QkFBYyxFQUFDLEtBSGpCO0FBSUVDLHlCQUFlLEVBQUU7QUFKbkI7QUFNRDs7QUFDRCxTQUFLUSxtQkFBTDtBQUEwQjtBQUN4QjtBQUNBO0FBQ0EsWUFBTU0sU0FBUyxHQUFHSixLQUFLLENBQUMxQixTQUFOLENBQWdCK0IsU0FBaEIsQ0FBMEIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUMvQixFQUFGLEtBQVMwQixNQUFNLENBQUNULElBQVAsQ0FBWWUsTUFBNUI7QUFBQSxTQUExQixDQUFsQjs7QUFDQSxZQUFNQyxJQUFJLHFCQUFPUixLQUFLLENBQUMxQixTQUFOLENBQWdCOEIsU0FBaEIsQ0FBUCxDQUFWOztBQUNBSSxZQUFJLENBQUMzQixRQUFMLElBQWlCWSxZQUFZLENBQUNRLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZZCxPQUFiLENBQTdCLHNHQUF1RDhCLElBQUksQ0FBQzNCLFFBQTVEOztBQUNBLFlBQU1QLFNBQVMsR0FBRyw2RkFBSTBCLEtBQUssQ0FBQzFCLFNBQWIsQ0FBZjs7QUFDQUEsaUJBQVMsQ0FBQzhCLFNBQUQsQ0FBVCxHQUF1QkksSUFBdkIsQ0FQd0IsQ0FReEI7O0FBQ0EsK0NBQ0tSLEtBREw7QUFFRTFCLG1CQUFTLEVBQVRBLFNBRkY7QUFHRWMsMkJBQWlCLEVBQUMsS0FIcEI7QUFJRUMsd0JBQWMsRUFBQztBQUpqQjtBQU1IOztBQUNDLFNBQUtVLG1CQUFMO0FBQTBCO0FBQ3hCLCtDQUNLQyxLQURMO0FBRUVYLHdCQUFjLEVBQUMsS0FGakI7QUFHRUMseUJBQWUsRUFBQ1csTUFBTSxDQUFDRTtBQUh6QjtBQUtEOztBQUNEO0FBQVM7QUFDUCxpQ0FDS0gsS0FETDtBQUdEO0FBM0RIO0FBNkRELENBOUREIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI2MGMyZDg3YWNkMzI0ODViYTA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW3tcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogJ+ygleydtOyViCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPthYzsiqTtirggI+yViOuFlScsXHJcbiAgICAgIEltYWdlczogW3tcclxuICAgICAgICAvLyBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAgICAgc3JjOidodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS84NzE5NDU2NS8xMzM1ODU4NzMtN2FjNmQ2ZjUtYTdkMC00MjcyLThkNjctYzAyMmM4M2M1M2NmLmpwZycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgICAgfV0sXHJcbiAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksIFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICBuaWNrbmFtZTogJ2lhbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAn44Sx44WH44WHJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICBuaWNrbmFtZTogJ2p1bmdpYW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogJ+q3gOyXrOybjC4uLicsXHJcbiAgICAgIH1dXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogZmFsc2UsXHJcbiAgfTtcclxuICAgIFxyXG4gIGNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuaWNrbmFtZTogJ+ygleydtOyViCcsXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbXSxcclxuICAgIENvbW1lbnRzOiBbXSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZHVtbXlDb21tZW50ID0gKCBkYXRhICkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OiBkYXRhLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgIGlkOjEsXHJcbiAgICAgIG5pY2tuYW1lOiAn7J207JWIJ1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuICAgIFxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG4gIFxyXG4gIC8vIGV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgLy8gICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIC8vICAgZGF0YVxyXG4gIC8vIH07XHJcblxyXG4gIC8vIGV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgLy8gICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIC8vICAgZGF0YVxyXG4gIC8vIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgICBhZGRQb3N0RG9uZTpmYWxzZSxcclxuICAgICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgYWRkUG9zdERvbmU6dHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhZGRQb3N0RG9uZTpmYWxzZSxcclxuICAgICAgICAgIGFkZFBvc3RFcnJvcjphY3Rpb24uZXJyb3JcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgICBhZGRDb21tZW50RG9uZTpmYWxzZSxcclxuICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgLy9wb3N0Zm9ybSDsl5DshJwgYWN0aW9uLmRhdGEuY29udGVudCwgcG9zdElkLCB1c2VySWQg6rCAIO2VhOyalO2VqFxyXG4gICAgICAgIC8v67aI67OA7ISx7J2YIO2VteyLrCDrsJTrgIzripQg6rKD66eMIOuwlOuAjOqzoCDssLjsobDrpbwg6re464yA66GcIOycoOyngO2VtOykmOyVvCDtlZzri6QuXHJcbiAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKVxyXG4gICAgICAgIGNvbnN0IHBvc3QgPSB7Li4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF19O1xyXG4gICAgICAgIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgLy9pbW1lciDrnbzsnbTruIzrn6zrpqzroZwg6rCE64uo7ZWY6rKMIOunjOuTpOq4sFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgYWRkQ29tbWVudERvbmU6dHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhZGRDb21tZW50RG9uZTpmYWxzZSxcclxuICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjphY3Rpb24uZXJyb3JcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9