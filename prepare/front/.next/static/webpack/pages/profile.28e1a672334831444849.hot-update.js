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
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
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
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
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

_s(LoginForm, "KHkEJiyzii0ZK84gnEAQnBvq9L0=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

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

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
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

/***/ }),

/***/ "./hooks/useinput.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZUlucHV0LmpzIl0sIm5hbWVzIjpbIkJ1dHRvbldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtV3JhcHBlciIsIkZvcm0iLCJMb2dpbkZvcm0iLCJzZXRJc0xvZ2dlZEluIiwidXNlSW5wdXQiLCJpZCIsIm9uQ2hhbmdlSWQiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdEZvcm0iLCJjb25zb2xlIiwibG9nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJpbml0aWFsVmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsdUtBQW5CO0tBQU1GLGE7QUFHTixJQUFNRyxXQUFXLEdBQUdGLGlFQUFNLENBQUNHLHlDQUFELENBQVQsa0tBQWpCLEMsQ0FHQTs7TUFITUQsVzs7QUFLTixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFxQjtBQUFBOztBQUFBLE1BQW5CQyxhQUFtQixRQUFuQkEsYUFBbUI7O0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQXlCQywrREFBUSxDQUFDLEVBQUQsQ0FBakM7QUFBQTtBQUFBLE1BQU9DLEVBQVA7QUFBQSxNQUFXQyxVQUFYOztBQUNBLGtCQUFnQ0Msc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQixnQkFObUMsQ0FTdEM7OztBQUdHLE1BQU1DLGdCQUFn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UixDQUFQO0FBQ0gsQ0FSRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjI4ZTFhNjcyMzM0ODMxNDQ0ODQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbmA7XHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxyXG5wYWRkaW5nOiAxMHB4XHJcbmA7XHJcbi8vIGNvbnN0IHN0eWxlID0gdXNlTWVtbygoKT0+KHttYXJnaW5Ub3A6IDEwfSksIFtdKTsgLT4g7Iqk7YOA7J28IOy7tO2PrOuEjO2KuCDrjIDsi6Ag7IKs7JqpIFxyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKHtzZXRJc0xvZ2dlZElufSkgPT4ge1xyXG4gICAgLy8gY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAvLyBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIC8vICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyB9LFtdKTtcclxuICAgIGNvbnN0IFtpZCwgb25DaGFuZ2VJZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiBcclxuIC8v7Lu07Y+s64SM7Yq47J2YIO2VqOyImOuhnCDrhJjqsqjso7zripQgcHJvcHPripQgdXNlQ2FsbEJhY2so7ZWo7IiY7LqQ7IuxKSDqvK3sk7DquLAtPiDstZzsoIHtmZTrpbwg7JyE7ZW0XHJcblxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sW10pO1xyXG4gICAgLy9zdWJtaXTsnbQg7JmE66OM65CY66m0IG9uRmluaXNoIOqwgCDtmLjstpzrkKggYW50ZOydmCBvbkZpbmlzaOuKlCDsnpDrj5nsnLzroZwgZS5wcmV2ZW50RGVmYXVsdOqwgCDshKTsoJXrkJjslrQg7J6I7J2MXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0IGFudGTsl5DshJwg7IOd6561XHJcbiAgICAgICAgLy8gY29tcG9uZW507JeQIOuEo+uKlCDqsbDri4jquYwgdXNlQ2FsbGJhY2vsnLzroZwg6rCQ7Iu46riwXHJcbiAgICAgICAgY29uc29sZS5sb2coaWQsIHBhc3N3b3JkKTtcclxuICAgICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gICAgfSwgW2lkLCBwYXNzd29yZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxGb3JtV3JhcHBlciBvbkZpbmlzaCA9IHtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lID0gXCJ1c2VySWRcIiB2YWx1ZSA9IHtpZH0gb25DaGFuZ2UgPSB7b25DaGFuZ2VJZH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwidXNlci1wYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7b25DaGFuZ2VQYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlID0ge3N0eWxlfT4g7J2066CH6rKM7ZWY66m0IHVzZU1lbW8g7IKs7JqpKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZSA9IHt7bWFyZ2luVG9wIDogMTB9fT4g7J2066CH6rKM7ZWY66m0IHt9ID09PSB7fSBmYWxzZeuhnCDri6zrnbzsp4Tqsowg7JeG64qU642wIOumrOugjOuNlOungSDrkKgqL31cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlID0gXCJwcmltYXJ5XCIgaHRtbFR5cGUgPSBcInN1Ym1pdFwiIGxvYWRpbmcgPSB7ZmFsc2V9PuuhnOq3uOyduDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmID0gXCIvc2lnbnVwXCI+PGE+PEJ1dHRvbj7tmozsm5DqsIDsnoU8L0J1dHRvbj48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgIDwvRm9ybVdyYXBwZXI+ICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuTG9naW5Gb3JtLnByb3BUeXBlcyA9IHtcclxuICAgIHNldElzTG9nZ2VkSW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxyXG5cclxuLypcclxu66as66CM642U66eBIC0+7Lu07Y+s64SM7Yq4IOyViCDtlajsiJjqsIAgXHJcbuyymOydjOu2gO2EsCDrgZ3quYzsp4Ag64uk7IucIOyLpO2WieuQmOuKlCDqsoPsnYAg66ee7Jy864KYIOyghOyytOqwgCDri6Tsi5wg6re466Ck7KeA64qU6rKMIOyVhOuLiOudvCh1c2VDYWxsYmFjaywgbWVtbyDrk7Hrk7Eg7KCc7Jm4LSDrsLDsl7TqsJLsnbQg67CU6r647KeAIOyViuuKlO2VnClcclxu66as7YS0IOu2gOu2hOyXkOyEnCDrsJTrgJAg67aA67aE66eMIOuLpOyLnCDqt7jrpqzripQg6rKDXHJcbuumrO2EtCDrtoDrtoTsnbQg67KE7LiE7Ja8IOuPlCAtPiDsnbTsoITqs7wg67mE6rWQ7ZW07IScIOuLrOudvOynhCDrtoDrtoTrp4wg64uk7IucIOq3uOugpOyjvOuKlCDqsoNcclxuKi8iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaW5pdGlhbFZhbHVlID0gbnVsbCkgPT57XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH0sW10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyXTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9