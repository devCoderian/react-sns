webpackHotUpdate_N_E("pages/index",{

/***/ "./components/imageZoom/index.js":
/*!***************************************!*\
  !*** ./components/imageZoom/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\ian07\\Desktop\\reactSNS\\prepare\\front\\components\\imageZoom\\index.js",
    _templateObject,
    _templateObject2,
    _templateObject3,
    _templateObject4,
    _this = undefined,
    _s = $RefreshSig$();




 //``호출 styled.div -> 함수임


var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    z-index: 5000;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n"])));
_c = Overlay;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    header: 44px;\n    background: white;\n    position: relative;\n    padding: 0\n    text-align: center;\n\n    & h1 {\n        margin: 0;\n        font-size: 17px;\n        color: #333;\n        line-height: 44px;\n      }\n    & button {\n        position: absolute;\n        right: 0;\n        top: 0;\n        padding: 15px;\n        line-height: 14px;\n        cursor: pointer;\n    }\n"])));
_c2 = Header;
var SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: calc(100% - 44px);\n    background: #090909;\n"])));
_c3 = SlickWrapper;
var ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4 || (_templateObject4 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 32px;\n  text-align: center;\n  \n  & img {\n    margin: 0 auto;\n    max-height: 750px;\n  }\n"])));

var ImagesZoom = function ImagesZoom(_ref) {
  _s();

  var images = _ref.images,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentSlide = _useState[0],
      setCurrentSlide = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Overlay, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(SlickWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Header, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
          children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
          onClick: onClose,
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, {
            initialSlide: 0,
            afterChange: function afterChange(slide) {
              return setCurrentSlide(slide);
            },
            infinite: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 21
          }, _this), images.map(function (v) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(SlickWrapper, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: v.src,
                alt: v.src
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 23
              }, _this)
            }, v.src, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 21
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, _this);
};

_s(ImagesZoom, "VQw0KpRgltXDNPWBgmV3GhZXdQE=");

_c4 = ImagesZoom;
ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "SlickWrapper");
$RefreshReg$(_c4, "ImagesZoom");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZVpvb20vaW5kZXguanMiXSwibmFtZXMiOlsiT3ZlcmxheSIsInN0eWxlZCIsImRpdiIsIkhlYWRlciIsImhlYWRlciIsIlNsaWNrV3JhcHBlciIsIkltZ1dyYXBwZXIiLCJJbWFnZXNab29tIiwiaW1hZ2VzIiwib25DbG9zZSIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGUiLCJtYXAiLCJ2Iiwic3JjIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7OztBQUNBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixxUEFBYjtLQUFNRixPO0FBU04sSUFBTUcsTUFBTSxHQUFHRix5REFBTSxDQUFDRyxNQUFWLDZoQkFBWjtNQUFNRCxNO0FBc0JOLElBQU1FLFlBQVksR0FBR0oseURBQU0sQ0FBQ0MsR0FBViw2TUFBbEI7TUFBTUcsWTtBQUtOLElBQU1DLFVBQVUsR0FBR0wseURBQU0sQ0FBQ0MsR0FBViw2UEFBaEI7O0FBVUEsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBc0I7QUFBQTs7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsTUFBWkMsT0FBWSxRQUFaQSxPQUFZOztBQUNyQyxrQkFBd0NDLHNEQUFRLENBQUMsQ0FBRCxDQUFoRDtBQUFBLE1BQU9DLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0Esc0JBQ0kscUVBQUMsT0FBRDtBQUFBLDJCQUNJLHFFQUFDLFlBQUQ7QUFBQSw4QkFDQSxxRUFBQyxNQUFEO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFRLGlCQUFPLEVBQUlILE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBS0E7QUFBQSwrQkFDSTtBQUFBLGtDQUNJLHFFQUFDLGtEQUFEO0FBQ0Esd0JBQVksRUFBSSxDQURoQjtBQUVBLHVCQUFXLEVBQUkscUJBQUNJLEtBQUQ7QUFBQSxxQkFBV0QsZUFBZSxDQUFDQyxLQUFELENBQTFCO0FBQUEsYUFGZjtBQUdBLG9CQUFRLE1BSFI7QUFJQSxrQkFBTSxFQUFJLEtBSlY7QUFLQSx3QkFBWSxFQUFJLENBTGhCO0FBTUEsMEJBQWMsRUFBSTtBQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBU0NMLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLFVBQUNDLENBQUQ7QUFBQSxnQ0FDUixxRUFBQyxZQUFEO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFJQSxDQUFDLENBQUNDLEdBQWQ7QUFBbUIsbUJBQUcsRUFBSUQsQ0FBQyxDQUFDQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBbUJELENBQUMsQ0FBQ0MsR0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUTtBQUFBLFdBQVgsQ0FURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMkJILENBN0JEOztHQUFNVCxVOztNQUFBQSxVO0FBK0JOQSxVQUFVLENBQUNVLFNBQVgsR0FBdUI7QUFDbkJULFFBQU0sRUFBRVUsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUIsRUFBb0NDLFVBRHpCO0FBRW5CWixTQUFPLEVBQUVTLGlEQUFTLENBQUNJLElBQVYsQ0FBZUQ7QUFGTCxDQUF2QjtBQUtlZCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNTRkNDNiMGJmYjg4NWY4YmViNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IFNsaWNrIGZyb20gJ3JlYWN0LXNsaWNrJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuLy9gYO2YuOy2nCBzdHlsZWQuZGl2IC0+IO2VqOyImOyehFxyXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDUwMDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gICAgaGVhZGVyOiA0NHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJiBoMSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgICAgfVxyXG4gICAgJiBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbmA7XHJcbmNvbnN0IFNsaWNrV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpO1xyXG4gICAgYmFja2dyb3VuZDogIzA5MDkwOTtcclxuYDtcclxuXHJcbmNvbnN0IEltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICYgaW1nIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNzUwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7aW1hZ2VzLCBvbkNsb3NlfSkgPT57XHJcbiAgICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE92ZXJsYXk+XHJcbiAgICAgICAgICAgIDxTbGlja1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+7IOB7IS4IOydtOuvuOyngDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7b25DbG9zZX0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlID0gezB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJDaGFuZ2UgPSB7KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdyA9IHsxfVxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsID0gezF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWNrV3JhcHBlciBrZXk9e3Yuc3JjfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjID0ge3Yuc3JjfSBhbHQgPSB7di5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGlja1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TbGlja1dyYXBwZXI+XHJcbiAgICAgICAgPC9PdmVybGF5PlxyXG4gICAgKVxyXG59XHJcblxyXG5JbWFnZXNab29tLnByb3BUeXBlcyA9IHtcclxuICAgIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlc1pvb20iXSwic291cmNlUm9vdCI6IiJ9