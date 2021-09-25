webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\goman\\Desktop\\react-sns\\prepare\\front\\components\\CommentForm.js",
    _this = undefined,
    _s = $RefreshSig$();









var CommentForm = function CommentForm(_ref) {
  _s();

  var post = _ref.post;
  // const [commentText, setCommentText] = useState('');
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      commentText = _useInput2[0],
      onChangeCommentText = _useInput2[1],
      setCommentText = _useInput2[2];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      addCommentDone = _useSelector.addCommentDone,
      addCommentLoading = _useSelector.addCommentLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (addCommentDone) {
      setCommentText(''); //따로 안만들면 서브밋하고 서버 오류날때 쓰던 글 지워짐
    }
  }, [addCommentDone]); // const onChangeCommentText = useCallback((e)=>{
  //     setCommentText(e.target.value);
  // });

  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(post.id, commentText);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        userId: id,
        postId: post.id
      }
    });
  }, //게시글은 props 내 아이디는 reducer 댓글은 컴포넌트 스테이트, 
  [commentText, id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      style: {
        position: 'relative',
        margin: 0
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
        rows: 4,
        value: commentText,
        onChange: onChangeCommentText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        style: {
          position: 'absolute',
          right: 0,
          bottom: -40,
          zIndex: 1
        },
        type: "primary",
        htmlType: "submit",
        loading: addCommentLoading,
        children: "\uC090\uC57D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 14
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, _this);
};

_s(CommentForm, "1DEaf5DMD0UHKSbJWkXcQV6dE44=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = CommentForm;
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c;

$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VJbnB1dCIsImNvbW1lbnRUZXh0Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudExvYWRpbmciLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdENvbW1lbnQiLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImRhdGEiLCJjb250ZW50IiwidXNlcklkIiwicG9zdElkIiwicG9zaXRpb24iLCJtYXJnaW4iLCJyaWdodCIsImJvdHRvbSIsInpJbmRleCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDNUI7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLDZCQUFVQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBckIsbURBQVUsZUFBZUosRUFBekI7QUFBQSxHQUFELENBQXRCOztBQUNBLGtCQUEyREssK0RBQVEsQ0FBQyxFQUFELENBQW5FO0FBQUE7QUFBQSxNQUFPQyxXQUFQO0FBQUEsTUFBb0JDLG1CQUFwQjtBQUFBLE1BQXlDQyxjQUF6Qzs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLHFCQUE2Q1QsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDSCxJQUFqQjtBQUFBLEdBQUQsQ0FBeEQ7QUFBQSxNQUFRWSxjQUFSLGdCQUFRQSxjQUFSO0FBQUEsTUFBd0JDLGlCQUF4QixnQkFBd0JBLGlCQUF4Qjs7QUFDQUMseURBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBR0YsY0FBSCxFQUFrQjtBQUNkSCxvQkFBYyxDQUFDLEVBQUQsQ0FBZCxDQURjLENBQ007QUFDdkI7QUFDRixHQUpNLEVBSUwsQ0FBQ0csY0FBRCxDQUpLLENBQVQsQ0FONEIsQ0FZNUI7QUFDQTtBQUNBOztBQUNBLE1BQU1HLGVBQWUsR0FBR0MseURBQVcsQ0FDL0IsWUFBTTtBQUNGQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWxCLElBQUksQ0FBQ0MsRUFBakIsRUFBcUJNLFdBQXJCO0FBQ0FHLFlBQVEsQ0FBQztBQUNMUyxVQUFJLEVBQUVDLGtFQUREO0FBRUxDLFVBQUksRUFBRTtBQUFFQyxlQUFPLEVBQUVmLFdBQVg7QUFBd0JnQixjQUFNLEVBQUV0QixFQUFoQztBQUFvQ3VCLGNBQU0sRUFBRXhCLElBQUksQ0FBQ0M7QUFBakQ7QUFGRCxLQUFELENBQVI7QUFJSCxHQVA4QixFQVEvQjtBQUNBLEdBQUNNLFdBQUQsRUFBY04sRUFBZCxDQVQrQixDQUFuQztBQVVBLHNCQUNJLHFFQUFDLHlDQUFEO0FBQU0sWUFBUSxFQUFFYyxlQUFoQjtBQUFBLDJCQUNLLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQUssRUFBRTtBQUFFVSxnQkFBUSxFQUFFLFVBQVo7QUFBd0JDLGNBQU0sRUFBRTtBQUFoQyxPQUFsQjtBQUFBLDhCQUNHLHFFQUFDLDBDQUFELENBQU8sUUFBUDtBQUFnQixZQUFJLEVBQUUsQ0FBdEI7QUFBeUIsYUFBSyxFQUFFbkIsV0FBaEM7QUFBNkMsZ0JBQVEsRUFBRUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURILGVBRUcscUVBQUMsMkNBQUQ7QUFBUSxhQUFLLEVBQUU7QUFBRWlCLGtCQUFRLEVBQUUsVUFBWjtBQUF3QkUsZUFBSyxFQUFFLENBQS9CO0FBQWtDQyxnQkFBTSxFQUFFLENBQUMsRUFBM0M7QUFBK0NDLGdCQUFNLEVBQUU7QUFBdkQsU0FBZjtBQUNBLFlBQUksRUFBQyxTQURMO0FBQ2UsZ0JBQVEsRUFBQyxRQUR4QjtBQUNpQyxlQUFPLEVBQUdoQixpQkFEM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQWxDRDs7R0FBTWQsVztVQUVTRyx1RCxFQUNnREksdUQsRUFDMUNLLHVELEVBQzRCVCx1RDs7O0tBTDNDSCxXO0FBbUNOQSxXQUFXLENBQUMrQixTQUFaLEdBQXdCO0FBQ3BCOUIsTUFBSSxFQUFFK0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFESCxDQUF4QjtBQUllbEMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGU2MjAwNjJhN2NiZDk2YmVkODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgQ29tbWVudEZvcm0gPSAoe3Bvc3R9KSA9PiB7XHJcbiAgICAvLyBjb25zdCBbY29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICAgIGNvbnN0IFtjb21tZW50VGV4dCwgb25DaGFuZ2VDb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBhZGRDb21tZW50RG9uZSwgYWRkQ29tbWVudExvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGFkZENvbW1lbnREb25lKXtcclxuICAgICAgICAgICAgc2V0Q29tbWVudFRleHQoJycpOyAvL+uUsOuhnCDslYjrp4zrk6TrqbQg7ISc67iM67CL7ZWY6rOgIOyEnOuyhCDsmKTrpZjrgqDrlYwg7JOw642YIOq4gCDsp4Dsm4zsp5BcclxuICAgICAgICB9XHJcbiAgICAgIH0sW2FkZENvbW1lbnREb25lXSlcclxuXHJcbiAgICAvLyBjb25zdCBvbkNoYW5nZUNvbW1lbnRUZXh0ID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAvLyAgICAgc2V0Q29tbWVudFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gfSk7XHJcbiAgICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc3QuaWQsIGNvbW1lbnRUZXh0KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgY29udGVudDogY29tbWVudFRleHQsIHVzZXJJZDogaWQsIHBvc3RJZDogcG9zdC5pZCB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v6rKM7Iuc6riA7J2AIHByb3BzIOuCtCDslYTsnbTrlJTripQgcmVkdWNlciDrjJPquIDsnYAg7Lu07Y+s64SM7Yq4IOyKpO2FjOydtO2KuCwgXHJcbiAgICAgICAgW2NvbW1lbnRUZXh0LCBpZF0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdENvbW1lbnR9PlxyXG4gICAgICAgICAgICAgPEZvcm0uSXRlbSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIHJvd3M9ezR9IHZhbHVlPXtjb21tZW50VGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMCwgYm90dG9tOiAtNDAsIHpJbmRleDogMX19IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9IHthZGRDb21tZW50TG9hZGluZ30+7IKQ7JW9PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIClcclxufVxyXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==