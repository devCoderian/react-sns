webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ian07\\Desktop\\reactSNS\\prepare\\front\\components\\PostImages.js",
    _this = undefined,
    _s = $RefreshSig$();






var PostImages = function PostImages(_ref) {
  _s();

  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showImagesZoom = _useState[0],
      setShowImagesZoom = _useState[1];

  var onZoom = useCallback(function () {
    setShowImagesZoom(true);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        role: "presentation",
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this)
    }, void 0, false);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        role: "presentation",
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        role: "presentation",
        src: images[1].src,
        alt: images[1].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        role: "presentation",
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(PostImages, "UE9uMxceBgwv4jfRR4p3tn5mPaU=");

_c = PostImages;
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c;

$RefreshReg$(_c, "PostImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsImxlbmd0aCIsInNyYyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUU3QixrQkFBNENDLHNEQUFRLENBQUMsS0FBRCxDQUFwRDtBQUFBLE1BQU9DLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDekJGLHFCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDSCxHQUZxQixFQUVwQixFQUZvQixDQUExQjs7QUFJQSxNQUFHSCxNQUFNLENBQUNNLE1BQVAsS0FBa0IsQ0FBckIsRUFBd0I7QUFDcEIsd0JBQ0k7QUFBQSw2QkFDSTtBQUFLLFlBQUksRUFBRyxjQUFaO0FBQTJCLFdBQUcsRUFBSU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTyxHQUE1QztBQUFpRCxXQUFHLEVBQUlQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sR0FBbEU7QUFBdUUsZUFBTyxFQUFJSDtBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUJBREo7QUFLSDs7QUFDRCxNQUFHSixNQUFNLENBQUNNLE1BQVAsS0FBa0IsQ0FBckIsRUFBdUI7QUFDbkIsd0JBQ0k7QUFBQSw4QkFDSTtBQUFLLFlBQUksRUFBRyxjQUFaO0FBQTJCLFdBQUcsRUFBSU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTyxHQUE1QztBQUFpRCxXQUFHLEVBQUlQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sR0FBbEU7QUFBdUUsZUFBTyxFQUFJSDtBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFLLFlBQUksRUFBRyxjQUFaO0FBQTJCLFdBQUcsRUFBSUosTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTyxHQUE1QztBQUFpRCxXQUFHLEVBQUlQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sR0FBbEU7QUFBdUUsZUFBTyxFQUFJSDtBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQSxvQkFESjtBQU1IOztBQUNELHNCQUNJO0FBQUEsMkJBQ0k7QUFBQSw2QkFDQTtBQUFLLFlBQUksRUFBRyxjQUFaO0FBQTJCLFdBQUcsRUFBSUosTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTyxHQUE1QztBQUFpRCxXQUFHLEVBQUlQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sR0FBbEU7QUFBdUUsZUFBTyxFQUFJSDtBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBUUgsQ0E5QkQ7O0dBQU1MLFU7O0tBQUFBLFU7QUFnQ05BLFVBQVUsQ0FBQ1MsU0FBWCxHQUF1QjtBQUNuQlIsUUFBTSxFQUFFUyxpREFBUyxDQUFDQyxPQUFWLENBQWtCRCxpREFBUyxDQUFDRSxNQUE1QjtBQURXLENBQXZCO0FBSWVaLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhkZDcxMDJiZGYzNDEzNGRmNmJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmNvbnN0IFBvc3RJbWFnZXMgPSAoe2ltYWdlc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2hvd0ltYWdlc1pvb20sIHNldFNob3dJbWFnZXNab29tXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0U2hvd0ltYWdlc1pvb20odHJ1ZSk7XHJcbiAgICAgICAgfSxbXSk7XHJcblxyXG4gICAgaWYoaW1hZ2VzLmxlbmd0aCA9PT0gMSApe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGUgPSBcInByZXNlbnRhdGlvblwiIHNyYyA9IHtpbWFnZXNbMF0uc3JjfSBhbHQgPSB7aW1hZ2VzWzBdLnNyY30gb25DbGljayA9IHtvblpvb219IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGlmKGltYWdlcy5sZW5ndGggPT09IDIpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGUgPSBcInByZXNlbnRhdGlvblwiIHNyYyA9IHtpbWFnZXNbMF0uc3JjfSBhbHQgPSB7aW1hZ2VzWzBdLnNyY30gb25DbGljayA9IHtvblpvb219IC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGUgPSBcInByZXNlbnRhdGlvblwiIHNyYyA9IHtpbWFnZXNbMV0uc3JjfSBhbHQgPSB7aW1hZ2VzWzFdLnNyY30gb25DbGljayA9IHtvblpvb219IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHJvbGUgPSBcInByZXNlbnRhdGlvblwiIHNyYyA9IHtpbWFnZXNbMF0uc3JjfSBhbHQgPSB7aW1hZ2VzWzBdLnNyY30gb25DbGljayA9IHtvblpvb219IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuXHJcblBvc3RJbWFnZXMucHJvcFR5cGVzID0ge1xyXG4gICAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9