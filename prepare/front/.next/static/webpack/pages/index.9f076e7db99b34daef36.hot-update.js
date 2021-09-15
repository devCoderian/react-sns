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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\ian07\\Desktop\\reactSNS\\prepare\\front\\components\\PostImages.js",
    _this = undefined,
    _s = $RefreshSig$();







var PostImages = function PostImages(_ref) {
  _s();

  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showImagesZoom = _useState[0],
      setShowImagesZoom = _useState[1];

  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImagesZoom(true);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          width: '50%'
        },
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this)
    }, void 0, false);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          width: '50%',
          display: "inline-block"
        },
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          width: '50%'
        },
        src: images[1].src,
        alt: images[1].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        role: "presentation",
        src: images[0].src,
        alt: images[0].src,
        width: "50%",
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        role: "presentation",
        style: {
          display: 'inline-block',
          width: '50%',
          textAlign: 'center',
          verticalAlign: 'middle'
        },
        onClick: onZoom,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, _this), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsImxlbmd0aCIsIndpZHRoIiwic3JjIiwiZGlzcGxheSIsInRleHRBbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBYztBQUFBOztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFFN0Isa0JBQTRDQyxzREFBUSxDQUFDLEtBQUQsQ0FBcEQ7QUFBQSxNQUFPQyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN6QkYscUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNILEdBRnFCLEVBRXBCLEVBRm9CLENBQTFCOztBQUlBLE1BQUdILE1BQU0sQ0FBQ00sTUFBUCxLQUFrQixDQUFyQixFQUF3QjtBQUNwQix3QkFDSTtBQUFBLDZCQUNJO0FBQUssWUFBSSxFQUFHLGNBQVo7QUFBMkIsYUFBSyxFQUFJO0FBQUNDLGVBQUssRUFBQztBQUFQLFNBQXBDO0FBQWtELFdBQUcsRUFBSVAsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUFuRTtBQUF3RSxXQUFHLEVBQUlSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBekY7QUFBOEYsZUFBTyxFQUFJSjtBQUF6RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUJBREo7QUFLSDs7QUFDRCxNQUFHSixNQUFNLENBQUNNLE1BQVAsS0FBa0IsQ0FBckIsRUFBdUI7QUFDbkIsd0JBQ0k7QUFBQSw4QkFDSTtBQUFLLFlBQUksRUFBRyxjQUFaO0FBQTJCLGFBQUssRUFBSTtBQUFDQyxlQUFLLEVBQUMsS0FBUDtBQUFjRSxpQkFBTyxFQUFDO0FBQXRCLFNBQXBDO0FBQTRFLFdBQUcsRUFBSVQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUE3RjtBQUFrRyxXQUFHLEVBQUlSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBbkg7QUFBd0gsZUFBTyxFQUFJSjtBQUFuSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFLLFlBQUksRUFBRyxjQUFaO0FBQTJCLGFBQUssRUFBSTtBQUFDRyxlQUFLLEVBQUM7QUFBUCxTQUFwQztBQUFtRCxXQUFHLEVBQUlQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBcEU7QUFBeUUsV0FBRyxFQUFJUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVRLEdBQTFGO0FBQStGLGVBQU8sRUFBSUo7QUFBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUEsb0JBREo7QUFNSDs7QUFDRCxzQkFDSTtBQUFBLDJCQUNBO0FBQUEsOEJBQ0U7QUFBSyxZQUFJLEVBQUMsY0FBVjtBQUF5QixXQUFHLEVBQUVKLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBeEM7QUFBNkMsV0FBRyxFQUFFUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVRLEdBQTVEO0FBQWlFLGFBQUssRUFBQyxLQUF2RTtBQUE2RSxlQUFPLEVBQUVKO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVBO0FBQ0UsWUFBSSxFQUFDLGNBRFA7QUFFRSxhQUFLLEVBQUU7QUFBRUssaUJBQU8sRUFBRSxjQUFYO0FBQTJCRixlQUFLLEVBQUUsS0FBbEM7QUFBeUNHLG1CQUFTLEVBQUUsUUFBcEQ7QUFBOERDLHVCQUFhLEVBQUU7QUFBN0UsU0FGVDtBQUdFLGVBQU8sRUFBRVAsTUFIWDtBQUFBLGdDQUtBLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEEsZUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5BLEVBT0NKLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixDQVBqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQWtCSCxDQXhDRDs7R0FBTVAsVTs7S0FBQUEsVTtBQTBDTkEsVUFBVSxDQUFDYSxTQUFYLEdBQXVCO0FBQ25CWixRQUFNLEVBQUVhLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLE1BQTVCO0FBRFcsQ0FBdkI7QUFJZWhCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlmMDc2ZTdkYjk5YjM0ZGFlZjM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmNvbnN0IFBvc3RJbWFnZXMgPSAoe2ltYWdlc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2hvd0ltYWdlc1pvb20sIHNldFNob3dJbWFnZXNab29tXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0U2hvd0ltYWdlc1pvb20odHJ1ZSk7XHJcbiAgICAgICAgfSxbXSk7XHJcblxyXG4gICAgaWYoaW1hZ2VzLmxlbmd0aCA9PT0gMSApe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGUgPSBcInByZXNlbnRhdGlvblwiIHN0eWxlID0ge3t3aWR0aDonNTAlJ319c3JjID0ge2ltYWdlc1swXS5zcmN9IGFsdCA9IHtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrID0ge29uWm9vbX0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYoaW1hZ2VzLmxlbmd0aCA9PT0gMil7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbWcgcm9sZSA9IFwicHJlc2VudGF0aW9uXCIgc3R5bGUgPSB7e3dpZHRoOic1MCUnLCBkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCIgfX0gc3JjID0ge2ltYWdlc1swXS5zcmN9IGFsdCA9IHtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrID0ge29uWm9vbX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgcm9sZSA9IFwicHJlc2VudGF0aW9uXCIgc3R5bGUgPSB7e3dpZHRoOic1MCUnfX0gc3JjID0ge2ltYWdlc1sxXS5zcmN9IGFsdCA9IHtpbWFnZXNbMV0uc3JjfSBvbkNsaWNrID0ge29uWm9vbX0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHNyYz17aW1hZ2VzWzBdLnNyY30gYWx0PXtpbWFnZXNbMF0uc3JjfSB3aWR0aD1cIjUwJVwiIG9uQ2xpY2s9e29uWm9vbX0gLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzUwJScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxQbHVzT3V0bGluZWQgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7aW1hZ2VzLmxlbmd0aCAtIDF9XHJcbiAgICAgICAg6rCc7J2YIOyCrOynhCDrjZTrs7TquLBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuICAgIFxyXG59XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICAgIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==