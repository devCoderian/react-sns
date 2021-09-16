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
/* harmony import */ var _imageZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageZoom */ "./components/imageZoom/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
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
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          width: '50%'
        },
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_imageZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 36
      }, _this)]
    }, void 0, true);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
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
        lineNumber: 26,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
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
        lineNumber: 27,
        columnNumber: 17
      }, _this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_imageZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 36
      }, _this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        src: images[0].src,
        alt: images[0].src,
        width: "50%",
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        role: "presentation",
        style: {
          display: 'inline-block',
          width: '50%',
          textAlign: 'center',
          verticalAlign: 'middle'
        },
        onClick: onZoom,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, _this), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, _this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_imageZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 28
    }, _this)]
  }, void 0, true);
};

_s(PostImages, "xZ+WVc/D16Fmvriq1CwZMW/wLmE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsIm9uQ2xvc2UiLCJsZW5ndGgiLCJ3aWR0aCIsInNyYyIsImRpc3BsYXkiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWM7QUFBQTs7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBRTdCLGtCQUE0Q0Msc0RBQVEsQ0FBQyxLQUFELENBQXBEO0FBQUEsTUFBT0MsY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDekJGLHFCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDSCxHQUZxQixFQUVwQixFQUZvQixDQUExQjtBQUdBLE1BQU1HLE9BQU8sR0FBR0QseURBQVcsQ0FBQyxZQUFNO0FBQzFCRixxQkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0gsR0FGc0IsRUFFckIsRUFGcUIsQ0FBM0I7O0FBSUEsTUFBR0gsTUFBTSxDQUFDTyxNQUFQLEtBQWtCLENBQXJCLEVBQXdCO0FBQ3BCLHdCQUNJO0FBQUEsOEJBQ0k7QUFBSyxZQUFJLEVBQUcsY0FBWjtBQUEyQixhQUFLLEVBQUk7QUFBQ0MsZUFBSyxFQUFDO0FBQVAsU0FBcEM7QUFBa0QsV0FBRyxFQUFJUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVTLEdBQW5FO0FBQXdFLFdBQUcsRUFBSVQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUyxHQUF6RjtBQUE4RixlQUFPLEVBQUlMO0FBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVLRixjQUFjLGlCQUFJLHFFQUFDLGtEQUFEO0FBQVksY0FBTSxFQUFJRixNQUF0QjtBQUE4QixlQUFPLEVBQUlNO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGdkI7QUFBQSxvQkFESjtBQU1IOztBQUNELE1BQUdOLE1BQU0sQ0FBQ08sTUFBUCxLQUFrQixDQUFyQixFQUF1QjtBQUNuQix3QkFDSTtBQUFBLDhCQUNJO0FBQUssWUFBSSxFQUFHLGNBQVo7QUFBMkIsYUFBSyxFQUFJO0FBQUNDLGVBQUssRUFBQyxLQUFQO0FBQWNFLGlCQUFPLEVBQUM7QUFBdEIsU0FBcEM7QUFBNEUsV0FBRyxFQUFJVixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVTLEdBQTdGO0FBQWtHLFdBQUcsRUFBSVQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUyxHQUFuSDtBQUF3SCxlQUFPLEVBQUlMO0FBQW5JO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssWUFBSSxFQUFHLGNBQVo7QUFBMkIsYUFBSyxFQUFJO0FBQUNJLGVBQUssRUFBQyxLQUFQO0FBQWVFLGlCQUFPLEVBQUM7QUFBdkIsU0FBcEM7QUFBNEUsV0FBRyxFQUFJVixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVTLEdBQTdGO0FBQWtHLFdBQUcsRUFBSVQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUyxHQUFuSDtBQUF3SCxlQUFPLEVBQUlMO0FBQW5JO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQUdLRixjQUFjLGlCQUFJLHFFQUFDLGtEQUFEO0FBQVksY0FBTSxFQUFJRixNQUF0QjtBQUE4QixlQUFPLEVBQUlNO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIdkI7QUFBQSxvQkFESjtBQU9IOztBQUNELHNCQUNJO0FBQUEsNEJBQ0E7QUFBQSw4QkFDRTtBQUFLLFlBQUksRUFBQyxjQUFWO0FBQXlCLFdBQUcsRUFBRU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUyxHQUF4QztBQUE2QyxXQUFHLEVBQUVULE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVMsR0FBNUQ7QUFBaUUsYUFBSyxFQUFDLEtBQXZFO0FBQTZFLGVBQU8sRUFBRUw7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUE7QUFDRSxZQUFJLEVBQUMsY0FEUDtBQUVFLGFBQUssRUFBRTtBQUFFTSxpQkFBTyxFQUFFLGNBQVg7QUFBMkJGLGVBQUssRUFBRSxLQUFsQztBQUF5Q0csbUJBQVMsRUFBRSxRQUFwRDtBQUE4REMsdUJBQWEsRUFBRTtBQUE3RSxTQUZUO0FBR0UsZUFBTyxFQUFFUixNQUhYO0FBQUEsZ0NBS0EscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMQSxlQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkEsRUFPQ0osTUFBTSxDQUFDTyxNQUFQLEdBQWdCLENBUGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLEVBY0NMLGNBQWMsaUJBQUkscUVBQUMsa0RBQUQ7QUFBWSxZQUFNLEVBQUlGLE1BQXRCO0FBQThCLGFBQU8sRUFBSU07QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRuQjtBQUFBLGtCQURKO0FBbUJILENBOUNEOztHQUFNUCxVOztLQUFBQSxVO0FBZ0ROQSxVQUFVLENBQUNjLFNBQVgsR0FBdUI7QUFDbkJiLFFBQU0sRUFBRWMsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUI7QUFEVyxDQUF2QjtBQUllakIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWIwNDhiYTUzNTFiYzJmY2E2YzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IEltYWdlc1pvb20gZnJvbSAnLi9pbWFnZVpvb20nO1xyXG5jb25zdCBQb3N0SW1hZ2VzID0gKHtpbWFnZXN9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3dJbWFnZXNab29tLCBzZXRTaG93SW1hZ2VzWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvblpvb20gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNob3dJbWFnZXNab29tKHRydWUpO1xyXG4gICAgICAgIH0sW10pO1xyXG4gICAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0U2hvd0ltYWdlc1pvb20oZmFsc2UpO1xyXG4gICAgICAgIH0sW10pXHJcblxyXG4gICAgaWYoaW1hZ2VzLmxlbmd0aCA9PT0gMSApe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGUgPSBcInByZXNlbnRhdGlvblwiIHN0eWxlID0ge3t3aWR0aDonNTAlJ319c3JjID0ge2ltYWdlc1swXS5zcmN9IGFsdCA9IHtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrID0ge29uWm9vbX0gLz5cclxuICAgICAgICAgICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXMgPSB7aW1hZ2VzfSBvbkNsb3NlID0ge29uQ2xvc2V9IC8+fVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBpZihpbWFnZXMubGVuZ3RoID09PSAyKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGltZyByb2xlID0gXCJwcmVzZW50YXRpb25cIiBzdHlsZSA9IHt7d2lkdGg6JzUwJScsIGRpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIiB9fSBzcmMgPSB7aW1hZ2VzWzBdLnNyY30gYWx0ID0ge2ltYWdlc1swXS5zcmN9IG9uQ2xpY2sgPSB7b25ab29tfSAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyByb2xlID0gXCJwcmVzZW50YXRpb25cIiBzdHlsZSA9IHt7d2lkdGg6JzUwJScsICBkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9fSBzcmMgPSB7aW1hZ2VzWzFdLnNyY30gYWx0ID0ge2ltYWdlc1sxXS5zcmN9IG9uQ2xpY2sgPSB7b25ab29tfSAvPlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcyA9IHtpbWFnZXN9IG9uQ2xvc2UgPSB7b25DbG9zZX0gLz59XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzcmM9e2ltYWdlc1swXS5zcmN9IGFsdD17aW1hZ2VzWzBdLnNyY30gd2lkdGg9XCI1MCVcIiBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6ICc1MCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgID5cclxuICAgICAgICA8UGx1c091dGxpbmVkIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge2ltYWdlcy5sZW5ndGggLSAxfVxyXG4gICAgICAgIOqwnOydmCDsgqzsp4Qg642U67O06riwXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcyA9IHtpbWFnZXN9IG9uQ2xvc2UgPSB7b25DbG9zZX0gLz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgICBcclxufVxyXG5cclxuUG9zdEltYWdlcy5wcm9wVHlwZXMgPSB7XHJcbiAgICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SW1hZ2VzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=