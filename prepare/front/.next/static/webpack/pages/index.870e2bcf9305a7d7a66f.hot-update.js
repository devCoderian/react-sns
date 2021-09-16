webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/link */ "./node_modules/next/dist/client/link.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\ian07\\Desktop\\reactSNS\\prepare\\front\\components\\PostCardContent.js",
    _this = undefined;






var PostCardContent = function PostCardContent(_ref) {
  var postData = _ref.postData;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: postData.split(/(#[^\s#]+)/g).map(function (v, i) {
      if (v.match(/(#[^\s#]+)/)) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_dist_client_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: {
            pathname: '/hashtag',
            query: {
              tag: v.slice(1)
            }
          },
          as: "/hashtag/".concat(v.slice(1)),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
            children: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, _this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 25
        }, _this);
      }

      return v;
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, _this);
};

_c = PostCardContent;
PostCardContent.prototypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

var _c;

$RefreshReg$(_c, "PostCardContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZENvbnRlbnQuanMiXSwibmFtZXMiOlsiUG9zdENhcmRDb250ZW50IiwicG9zdERhdGEiLCJzcGxpdCIsIm1hcCIsInYiLCJpIiwibWF0Y2giLCJwYXRobmFtZSIsInF1ZXJ5IiwidGFnIiwic2xpY2UiLCJwcm90b3R5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFnQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUVwQyxzQkFDSTtBQUFBLGNBRUtBLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLGFBQWYsRUFBOEJDLEdBQTlCLENBQWtDLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFRO0FBQ3ZDLFVBQUdELENBQUMsQ0FBQ0UsS0FBRixDQUFRLFlBQVIsQ0FBSCxFQUF5QjtBQUNyQiw0QkFDSSxxRUFBQyw0REFBRDtBQUNBLGNBQUksRUFBRTtBQUFFQyxvQkFBUSxFQUFFLFVBQVo7QUFBd0JDLGlCQUFLLEVBQUU7QUFBRUMsaUJBQUcsRUFBRUwsQ0FBQyxDQUFDTSxLQUFGLENBQVEsQ0FBUjtBQUFQO0FBQS9CLFdBRE47QUFFQSxZQUFFLHFCQUFjTixDQUFDLENBQUNNLEtBQUYsQ0FBUSxDQUFSLENBQWQsQ0FGRjtBQUFBLGlDQUtBO0FBQUEsc0JBQUlOO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBLFdBR0tDLENBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQVNIOztBQUNELGFBQU9ELENBQVA7QUFDSCxLQWJBO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUJILENBckJEOztLQUFNSixlO0FBc0JOQSxlQUFlLENBQUNXLFVBQWhCLEdBQTZCO0FBQ3pCVixVQUFRLEVBQUVXLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREYsQ0FBN0I7QUFHZWQsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODcwZTJiY2Y5MzA1YTdkN2E2NmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2Rpc3QvY2xpZW50L2xpbmsnXHJcblxyXG5jb25zdCBQb3N0Q2FyZENvbnRlbnQgPSAoe3Bvc3REYXRhfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIOyCrOyaqeyekCDsnZjrj4TqsIAg7JeG7Jy866m0IOumrOugjOuNlOungSDrkKDsnbzsnbQg7JeG6riw65WM66y47JeQIO2CpOuhnCDsnbjrjbHsiqQg7IKs7JqpIOqwgOuKpSBrZXnripQg65iR6rCZ7J2AIOuLqOyWtCDsg53shLHtlaAg7IiY64+EIOyeiOyWtOyEnCovfVxyXG4gICAgICAgICAgICB7cG9zdERhdGEuc3BsaXQoLygjW15cXHMjXSspL2cpLm1hcCgodiwgaSk9PntcclxuICAgICAgICAgICAgICAgIGlmKHYubWF0Y2goLygjW15cXHMjXSspLykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3sgcGF0aG5hbWU6ICcvaGFzaHRhZycsIHF1ZXJ5OiB7IHRhZzogdi5zbGljZSgxKSB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL2hhc2h0YWcvJHt2LnNsaWNlKDEpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Z9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblBvc3RDYXJkQ29udGVudC5wcm90b3R5cGVzID0ge1xyXG4gICAgcG9zdERhdGE6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZENvbnRlbnRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==