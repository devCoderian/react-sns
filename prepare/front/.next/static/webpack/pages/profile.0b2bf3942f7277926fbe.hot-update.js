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

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1]; //컴포넌트의 함수로 넘겨주는 props는 useCallBack(함수캐싱) 꼭쓰기-> 최적화를 위해
  //submit이 완료되면 onFinish 가 호출됨 antd의 onFinish는 자동으로 e.preventDefault가 설정되어 있음


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
          lineNumber: 39,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "userId",
          value: id,
          onChange: onChangeId,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
          htmlFor: "user-password",
          children: "\uBE44\uBC00\uBC88\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "user-password",
          type: "password",
          value: password,
          onChange: onChangePassword,
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(ButtonWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          type: "primary",
          htmlType: "submit",
          loading: false,
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "\uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 45
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 42
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }, _this)
  }, void 0, false);
};

_s(LoginForm, "XDBWGSalF7xldTftSzZVSBOwwyA=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsIkxvZ2luRm9ybSIsInNldElzTG9nZ2VkSW4iLCJ1c2VJbnB1dCIsImlkIiwib25DaGFuZ2VJZCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLHVLQUFuQjtLQUFNRixhO0FBR04sSUFBTUcsV0FBVyxHQUFHRixpRUFBTSxDQUFDRyx5Q0FBRCxDQUFULGtLQUFqQixDLENBR0E7O01BSE1ELFc7O0FBS04sSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBcUI7QUFBQTs7QUFBQSxNQUFuQkMsYUFBbUIsUUFBbkJBLGFBQW1COztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUF5QkMsK0RBQVEsQ0FBQyxFQUFELENBQWpDO0FBQUE7QUFBQSxNQUFPQyxFQUFQO0FBQUEsTUFBV0MsVUFBWDs7QUFDQSxtQkFBcUNGLCtEQUFRLENBQUMsRUFBRCxDQUE3QztBQUFBO0FBQUEsTUFBT0csUUFBUDtBQUFBLE1BQWlCQyxnQkFBakIsaUJBTm1DLENBUXRDO0FBRUc7OztBQUNBLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxZQUFLO0FBQ2xDO0FBQ0E7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlQLEVBQVosRUFBZ0JFLFFBQWhCO0FBQ0FKLGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0gsR0FMK0IsRUFLN0IsQ0FBQ0UsRUFBRCxFQUFLRSxRQUFMLENBTDZCLENBQWhDO0FBT0Esc0JBQ0k7QUFBQSwyQkFDRSxxRUFBQyxXQUFEO0FBQWEsY0FBUSxFQUFJRSxZQUF6QjtBQUFBLDhCQUNJO0FBQUEsZ0NBQ0k7QUFBTyxpQkFBTyxFQUFHLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJLHFFQUFDLDBDQUFEO0FBQU8sY0FBSSxFQUFHLFFBQWQ7QUFBdUIsZUFBSyxFQUFJSixFQUFoQztBQUFvQyxrQkFBUSxFQUFJQyxVQUFoRDtBQUE0RCxrQkFBUTtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBTUk7QUFBQSxnQ0FDSTtBQUFPLGlCQUFPLEVBQUcsZUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0kscUVBQUMsMENBQUQ7QUFDRSxjQUFJLEVBQUcsZUFEVDtBQUVFLGNBQUksRUFBRyxVQUZUO0FBR0UsZUFBSyxFQUFJQyxRQUhYO0FBSUUsa0JBQVEsRUFBSUMsZ0JBSmQ7QUFLRSxrQkFBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosZUFpQkkscUVBQUMsYUFBRDtBQUFBLGdDQUdJLHFFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFHLFNBQWY7QUFBeUIsa0JBQVEsRUFBRyxRQUFwQztBQUE2QyxpQkFBTyxFQUFJLEtBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUkscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUcsU0FBYjtBQUFBLGlDQUF1QjtBQUFBLG1DQUFHLHFFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFESjtBQTRCSCxDQTlDRDs7R0FBTU4sUztVQUt1QkUsdUQsRUFDWUEsdUQ7OztNQU5uQ0YsUztBQWdETkEsU0FBUyxDQUFDVyxTQUFWLEdBQXNCO0FBQ2xCVixlQUFhLEVBQUVXLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEWixDQUF0QjtBQUllZCx3RUFBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjBiMmJmMzk0MmY3Mjc3OTI2ZmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbmA7XHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxyXG5wYWRkaW5nOiAxMHB4XHJcbmA7XHJcbi8vIGNvbnN0IHN0eWxlID0gdXNlTWVtbygoKT0+KHttYXJnaW5Ub3A6IDEwfSksIFtdKTsgLT4g7Iqk7YOA7J28IOy7tO2PrOuEjO2KuCDrjIDsi6Ag7IKs7JqpIFxyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKHtzZXRJc0xvZ2dlZElufSkgPT4ge1xyXG4gICAgLy8gY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAvLyBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIC8vICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyB9LFtdKTtcclxuICAgIGNvbnN0IFtpZCwgb25DaGFuZ2VJZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG4gXHJcbiAvL+y7tO2PrOuEjO2KuOydmCDtlajsiJjroZwg64SY6rKo7KO864qUIHByb3Bz64qUIHVzZUNhbGxCYWNrKO2VqOyImOy6kOyLsSkg6ryt7JOw6riwLT4g7LWc7KCB7ZmU66W8IOychO2VtFxyXG5cclxuICAgIC8vc3VibWl07J20IOyZhOujjOuQmOuptCBvbkZpbmlzaCDqsIAg7Zi47Lac65CoIGFudGTsnZggb25GaW5pc2jripQg7J6Q64+Z7Jy866GcIGUucHJldmVudERlZmF1bHTqsIAg7ISk7KCV65CY7Ja0IOyeiOydjFxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCBhbnRk7JeQ7IScIOyDneuetVxyXG4gICAgICAgIC8vIGNvbXBvbmVudOyXkCDrhKPripQg6rGw64uI6rmMIHVzZUNhbGxiYWNr7Jy866GcIOqwkOyLuOq4sFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkLCBwYXNzd29yZCk7XHJcbiAgICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcclxuICAgIH0sIFtpZCwgcGFzc3dvcmRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2ggPSB7b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZSA9IFwidXNlcklkXCIgdmFsdWUgPSB7aWR9IG9uQ2hhbmdlID0ge29uQ2hhbmdlSWR9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInVzZXItcGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge29uQ2hhbmdlUGFzc3dvcmR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZSA9IHtzdHlsZX0+IOydtOugh+qyjO2VmOuptCB1c2VNZW1vIOyCrOyaqSovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGUgPSB7e21hcmdpblRvcCA6IDEwfX0+IOydtOugh+qyjO2VmOuptCB7fSA9PT0ge30gZmFsc2XroZwg64us65287KeE6rKMIOyXhuuKlOuNsCDrpqzroIzrjZTrp4Eg65CoKi99XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZSA9IFwicHJpbWFyeVwiIGh0bWxUeXBlID0gXCJzdWJtaXRcIiBsb2FkaW5nID0ge2ZhbHNlfT7roZzqt7jsnbg8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL3NpZ251cFwiPjxhPjxCdXR0b24+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICA8L0Zvcm1XcmFwcGVyPiAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbkxvZ2luRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgICBzZXRJc0xvZ2dlZEluOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1cclxuXHJcbi8qXHJcbuumrOugjOuNlOungSAtPuy7tO2PrOuEjO2KuCDslYgg7ZWo7IiY6rCAIFxyXG7sspjsnYzrtoDthLAg64Gd6rmM7KeAIOuLpOyLnCDsi6TtlonrkJjripQg6rKD7J2AIOunnuycvOuCmCDsoITssrTqsIAg64uk7IucIOq3uOugpOyngOuKlOqyjCDslYTri4jrnbwodXNlQ2FsbGJhY2ssIG1lbW8g65Ox65OxIOygnOyZuC0g67Cw7Je06rCS7J20IOuwlOq+uOyngCDslYrripTtlZwpXHJcbuumrO2EtCDrtoDrtoTsl5DshJwg67CU64CQIOu2gOu2hOunjCDri6Tsi5wg6re466as64qUIOqyg1xyXG7rpqzthLQg67aA67aE7J20IOuyhOy4hOyWvCDrj5QgLT4g7J207KCE6rO8IOu5hOq1kO2VtOyEnCDri6zrnbzsp4Qg67aA67aE66eMIOuLpOyLnCDqt7jroKTso7zripQg6rKDXHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==