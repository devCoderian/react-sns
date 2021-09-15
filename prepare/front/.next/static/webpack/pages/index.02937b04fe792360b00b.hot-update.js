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
          width: '50%',
          display: "inline-block"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsImxlbmd0aCIsIndpZHRoIiwic3JjIiwiZGlzcGxheSIsInRleHRBbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBYztBQUFBOztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFFN0Isa0JBQTRDQyxzREFBUSxDQUFDLEtBQUQsQ0FBcEQ7QUFBQSxNQUFPQyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN6QkYscUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNILEdBRnFCLEVBRXBCLEVBRm9CLENBQTFCOztBQUlBLE1BQUdILE1BQU0sQ0FBQ00sTUFBUCxLQUFrQixDQUFyQixFQUF3QjtBQUNwQix3QkFDSTtBQUFBLDZCQUNJO0FBQUssWUFBSSxFQUFHLGNBQVo7QUFBMkIsYUFBSyxFQUFJO0FBQUNDLGVBQUssRUFBQztBQUFQLFNBQXBDO0FBQWtELFdBQUcsRUFBSVAsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUFuRTtBQUF3RSxXQUFHLEVBQUlSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBekY7QUFBOEYsZUFBTyxFQUFJSjtBQUF6RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUJBREo7QUFLSDs7QUFDRCxNQUFHSixNQUFNLENBQUNNLE1BQVAsS0FBa0IsQ0FBckIsRUFBdUI7QUFDbkIsd0JBQ0k7QUFBQSw4QkFDSTtBQUFLLFlBQUksRUFBRyxjQUFaO0FBQTJCLGFBQUssRUFBSTtBQUFDQyxlQUFLLEVBQUMsS0FBUDtBQUFjRSxpQkFBTyxFQUFDO0FBQXRCLFNBQXBDO0FBQTRFLFdBQUcsRUFBSVQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUE3RjtBQUFrRyxXQUFHLEVBQUlSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBbkg7QUFBd0gsZUFBTyxFQUFJSjtBQUFuSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFLLFlBQUksRUFBRyxjQUFaO0FBQTJCLGFBQUssRUFBSTtBQUFDRyxlQUFLLEVBQUMsS0FBUDtBQUFlRSxpQkFBTyxFQUFDO0FBQXZCLFNBQXBDO0FBQTRFLFdBQUcsRUFBSVQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUE3RjtBQUFrRyxXQUFHLEVBQUlSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBbkg7QUFBd0gsZUFBTyxFQUFJSjtBQUFuSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQSxvQkFESjtBQU1IOztBQUNELHNCQUNJO0FBQUEsMkJBQ0E7QUFBQSw4QkFDRTtBQUFLLFlBQUksRUFBQyxjQUFWO0FBQXlCLFdBQUcsRUFBRUosTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUF4QztBQUE2QyxXQUFHLEVBQUVSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBNUQ7QUFBaUUsYUFBSyxFQUFDLEtBQXZFO0FBQTZFLGVBQU8sRUFBRUo7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUE7QUFDRSxZQUFJLEVBQUMsY0FEUDtBQUVFLGFBQUssRUFBRTtBQUFFSyxpQkFBTyxFQUFFLGNBQVg7QUFBMkJGLGVBQUssRUFBRSxLQUFsQztBQUF5Q0csbUJBQVMsRUFBRSxRQUFwRDtBQUE4REMsdUJBQWEsRUFBRTtBQUE3RSxTQUZUO0FBR0UsZUFBTyxFQUFFUCxNQUhYO0FBQUEsZ0NBS0EscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMQSxlQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkEsRUFPQ0osTUFBTSxDQUFDTSxNQUFQLEdBQWdCLENBUGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBa0JILENBeENEOztHQUFNUCxVOztLQUFBQSxVO0FBMENOQSxVQUFVLENBQUNhLFNBQVgsR0FBdUI7QUFDbkJaLFFBQU0sRUFBRWEsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUI7QUFEVyxDQUF2QjtBQUllaEIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDI5MzdiMDRmZTc5MjM2MGIwMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuY29uc3QgUG9zdEltYWdlcyA9ICh7aW1hZ2VzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcclxuICAgICAgICB9LFtdKTtcclxuXHJcbiAgICBpZihpbWFnZXMubGVuZ3RoID09PSAxICl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbWcgcm9sZSA9IFwicHJlc2VudGF0aW9uXCIgc3R5bGUgPSB7e3dpZHRoOic1MCUnfX1zcmMgPSB7aW1hZ2VzWzBdLnNyY30gYWx0ID0ge2ltYWdlc1swXS5zcmN9IG9uQ2xpY2sgPSB7b25ab29tfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBpZihpbWFnZXMubGVuZ3RoID09PSAyKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGltZyByb2xlID0gXCJwcmVzZW50YXRpb25cIiBzdHlsZSA9IHt7d2lkdGg6JzUwJScsIGRpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIiB9fSBzcmMgPSB7aW1hZ2VzWzBdLnNyY30gYWx0ID0ge2ltYWdlc1swXS5zcmN9IG9uQ2xpY2sgPSB7b25ab29tfSAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyByb2xlID0gXCJwcmVzZW50YXRpb25cIiBzdHlsZSA9IHt7d2lkdGg6JzUwJScsICBkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9fSBzcmMgPSB7aW1hZ2VzWzFdLnNyY30gYWx0ID0ge2ltYWdlc1sxXS5zcmN9IG9uQ2xpY2sgPSB7b25ab29tfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3JjPXtpbWFnZXNbMF0uc3JjfSBhbHQ9e2ltYWdlc1swXS5zcmN9IHdpZHRoPVwiNTAlXCIgb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHdpZHRoOiAnNTAlJywgdGV4dEFsaWduOiAnY2VudGVyJywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICA+XHJcbiAgICAgICAgPFBsdXNPdXRsaW5lZCAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtpbWFnZXMubGVuZ3RoIC0gMX1cclxuICAgICAgICDqsJzsnZgg7IKs7KeEIOuNlOuztOq4sFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuXHJcblBvc3RJbWFnZXMucHJvcFR5cGVzID0ge1xyXG4gICAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9