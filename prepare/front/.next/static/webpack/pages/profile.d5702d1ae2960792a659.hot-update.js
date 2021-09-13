webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useinput */ "./hooks/useinput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\ian07\\Desktop\\reactSNS\\prepare\\front\\components\\LoginForm.js",
    _templateObject,
    _templateObject2,
    _this = undefined,
    _s = $RefreshSig$();










var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    margin-top: 10px\n"])));
_c = ButtonWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\npadding: 10px\n"]))); // const style = useMemo(()=>({marginTop: 10}), []); -> 스타일 컴포넌트 대신 사용 

_c2 = FormWrapper;

var LoginForm = function LoginForm(_ref) {
  _s();

  var setIsLoggedIn = _ref.setIsLoggedIn;

  // const [id, setId] = useState('');
  // const onChangeId = useCallback((e) => {
  //     setId(e.target.value);
  // },[]);
  var _useInput = useInput(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      password = _useState[0],
      setPassword = _useState[1]; //컴포넌트의 함수로 넘겨주는 props는 useCallBack(함수캐싱) 꼭쓰기-> 최적화를 위해


  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, []); //submit이 완료되면 onFinish 가 호출됨 antd의 onFinish는 자동으로 e.preventDefault가 설정되어 있음

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    // e.preventDefault antd에서 생략
    // component에 넣는 거니까 useCallback으로 감싸기
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormWrapper, {
      onFinish: onSubmitForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
          htmlFor: "user-id",
          children: "\uC544\uC774\uB514"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "userId",
          value: id,
          onChange: onChangeId,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
          htmlFor: "user-password",
          children: "\uBE44\uBC00\uBC88\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "user-password",
          type: "password",
          value: password,
          onChange: onChangePassword,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(ButtonWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          type: "primary",
          htmlType: "submit",
          loading: false,
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "\uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 45
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 42
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }, _this)
  }, void 0, false);
};

_s(LoginForm, "KHkEJiyzii0ZK84gnEAQnBvq9L0=", true);

_c3 = LoginForm;
LoginForm.propTypes = {
  setIsLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);
/*
리렌더링 ->컴포넌트 안 함수가 
처음부터 끝까지 다시 실행되는 것은 맞으나 전체가 다시 그려지는게 아니라(useCallback, memo 등등 제외- 배열값이 바꾸지 않는한)
리턴 부분에서 바뀐 부분만 다시 그리는 것
리턴 부분이 버츄얼 돔 -> 이전과 비교해서 달라진 부분만 다시 그려주는 것
*/

var _c, _c2, _c3;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "LoginForm");

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

/***/ }),

/***/ "./hooks/useinput.js":
/*!***************************!*\
  !*** ./hooks/useinput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();

  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setValue(e.target.value);
  }, []);
  return [value, handler];
}, "zwfZiF3C83B9WQnByKaImAoFfFg="));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZWlucHV0LmpzIl0sIm5hbWVzIjpbIkJ1dHRvbldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtV3JhcHBlciIsIkZvcm0iLCJMb2dpbkZvcm0iLCJzZXRJc0xvZ2dlZEluIiwidXNlSW5wdXQiLCJpZCIsIm9uQ2hhbmdlSWQiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdEZvcm0iLCJjb25zb2xlIiwibG9nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJpbml0aWFsVmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsdUtBQW5CO0tBQU1GLGE7QUFHTixJQUFNRyxXQUFXLEdBQUdGLGlFQUFNLENBQUNHLHlDQUFELENBQVQsa0tBQWpCLEMsQ0FHQTs7TUFITUQsVzs7QUFLTixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFxQjtBQUFBOztBQUFBLE1BQW5CQyxhQUFtQixRQUFuQkEsYUFBbUI7O0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQXlCQyxRQUFRLENBQUMsRUFBRCxDQUFqQztBQUFBO0FBQUEsTUFBT0MsRUFBUDtBQUFBLE1BQVdDLFVBQVg7O0FBQ0Esa0JBQWdDQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCLGdCQU5tQyxDQVN0Qzs7O0FBR0csTUFBTUMsZ0JBQWdC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QVJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZDU3MDJkMWFlMjk2MDc5MmE2NTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VpbnB1dCBmcm9tICcuLi9ob29rcy91c2VpbnB1dCc7XHJcblxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi10b3A6IDEwcHhcclxuYDtcclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXHJcbnBhZGRpbmc6IDEwcHhcclxuYDtcclxuLy8gY29uc3Qgc3R5bGUgPSB1c2VNZW1vKCgpPT4oe21hcmdpblRvcDogMTB9KSwgW10pOyAtPiDsiqTtg4Dsnbwg7Lu07Y+s64SM7Yq4IOuMgOyLoCDsgqzsmqkgXHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoe3NldElzTG9nZ2VkSW59KSA9PiB7XHJcbiAgICAvLyBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIC8vIGNvbnN0IG9uQ2hhbmdlSWQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgLy8gICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vIH0sW10pO1xyXG4gICAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuIFxyXG4gLy/su7Ttj6zrhIztirjsnZgg7ZWo7IiY66GcIOuEmOqyqOyjvOuKlCBwcm9wc+uKlCB1c2VDYWxsQmFjayjtlajsiJjsupDsi7EpIOq8reyTsOq4sC0+IOy1nOygge2ZlOulvCDsnITtlbRcclxuXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSxbXSk7XHJcbiAgICAvL3N1Ym1pdOydtCDsmYTro4zrkJjrqbQgb25GaW5pc2gg6rCAIO2YuOy2nOuQqCBhbnRk7J2YIG9uRmluaXNo64qUIOyekOuPmeycvOuhnCBlLnByZXZlbnREZWZhdWx06rCAIOyEpOygleuQmOyWtCDsnojsnYxcclxuICAgIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQgYW50ZOyXkOyEnCDsg53rnrVcclxuICAgICAgICAvLyBjb21wb25lbnTsl5Ag64Sj64qUIOqxsOuLiOq5jCB1c2VDYWxsYmFja+ycvOuhnCDqsJDsi7jquLBcclxuICAgICAgICBjb25zb2xlLmxvZyhpZCwgcGFzc3dvcmQpO1xyXG4gICAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICB9LCBbaWQsIHBhc3N3b3JkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoID0ge29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcInVzZXItaWRcIj7slYTsnbTrlJQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWUgPSBcInVzZXJJZFwiIHZhbHVlID0ge2lkfSBvbkNoYW5nZSA9IHtvbkNoYW5nZUlkfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJ1c2VyLXBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3Bhc3N3b3JkfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtvbkNoYW5nZVBhc3N3b3JkfSBcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGUgPSB7c3R5bGV9PiDsnbTroIfqsoztlZjrqbQgdXNlTWVtbyDsgqzsmqkqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlID0ge3ttYXJnaW5Ub3AgOiAxMH19PiDsnbTroIfqsoztlZjrqbQge30gPT09IHt9IGZhbHNl66GcIOuLrOudvOynhOqyjCDsl4bripTrjbAg66as66CM642U66eBIOuQqCovfVxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGUgPSBcInByaW1hcnlcIiBodG1sVHlwZSA9IFwic3VibWl0XCIgbG9hZGluZyA9IHtmYWxzZX0+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi9zaWdudXBcIj48YT48QnV0dG9uPu2ajOybkOqwgOyehTwvQnV0dG9uPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgPC9Gb3JtV3JhcHBlcj4gIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5Mb2dpbkZvcm0ucHJvcFR5cGVzID0ge1xyXG4gICAgc2V0SXNMb2dnZWRJbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtXHJcblxyXG4vKlxyXG7rpqzroIzrjZTrp4EgLT7su7Ttj6zrhIztirgg7JWIIO2VqOyImOqwgCBcclxu7LKY7J2M67aA7YSwIOuBneq5jOyngCDri6Tsi5wg7Iuk7ZaJ65CY64qUIOqyg+ydgCDrp57snLzrgpgg7KCE7LK06rCAIOuLpOyLnCDqt7jroKTsp4DripTqsowg7JWE64uI6528KHVzZUNhbGxiYWNrLCBtZW1vIOuTseuTsSDsoJzsmbgtIOuwsOyXtOqwkuydtCDrsJTqvrjsp4Ag7JWK64qU7ZWcKVxyXG7rpqzthLQg67aA67aE7JeQ7IScIOuwlOuAkCDrtoDrtoTrp4wg64uk7IucIOq3uOumrOuKlCDqsoNcclxu66as7YS0IOu2gOu2hOydtCDrsoTsuITslrwg64+UIC0+IOydtOyghOqzvCDruYTqtZDtlbTshJwg64us65287KeEIOu2gOu2hOunjCDri6Tsi5wg6re466Ck7KO864qUIOqyg1xyXG4qLyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsVmFsdWUgPSBudWxsKSA9PntcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSxbXSk7XHJcbiAgICBcclxuICAgIHJldHVybiBbdmFsdWUsIGhhbmRsZXJdO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=