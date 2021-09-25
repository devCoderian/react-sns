webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\goman\\Desktop\\react-sns\\prepare\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();














var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  // const {me} = useSelector((state) => state.user);
  // const id = me?.id;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState2[0],
      setCommentFormOpened = _useState2[1];

  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  console.log('id', id);
  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    }); // setLiked((prev) => !prev); -> false는 true로 true는 false
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    style: {
      marginBottom: 18
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 44
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
        onClick: onToggleLike
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 23
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              type: "danger",
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 25
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 27
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 31
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 36
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
        header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
              author: item.User.nickname,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                children: item.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 47
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 29
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 13
  }, _this);
};

_s(PostCard, "xz6lBCW2ntz94FirCAmjif4eOfI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImxpa2VkIiwic2V0TGlrZWQiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiY29uc29sZSIsImxvZyIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uVG9nZ2xlQ29tbWVudCIsIm1hcmdpbkJvdHRvbSIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZWRBdCIsImFycmF5T2YiLCJhbnkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBRXpCO0FBQ0E7QUFDQSxrQkFBMEJDLHNEQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFtREYsc0RBQVEsQ0FBQyxLQUFELENBQTNEO0FBQUEsTUFBT0csaUJBQVA7QUFBQSxNQUEwQkMsb0JBQTFCOztBQUNBLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsNkJBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxFQUF0QixtREFBVyxlQUFlSixFQUExQjtBQUFBLEdBQUQsQ0FBdEI7QUFD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ZjJlZDQzMGIzZWRmMTE2ZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIEF2YXRhciwgUG9wb3ZlciwgTGlzdCwgQ29tbWVudCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBSZXR3ZWV0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgSGVhcnRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tICcuL1Bvc3RDYXJkQ29udGVudCc7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7cG9zdH0pID0+IHtcclxuXHJcbiAgICAvLyBjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIC8vIGNvbnN0IGlkID0gbWU/LmlkO1xyXG4gICAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gICAgY29uc29sZS5sb2coJ2lkJyxpZCk7XHJcbiAgICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldExpa2VkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICAgICAgICAgIC8vIHNldExpa2VkKChwcmV2KSA9PiAhcHJldik7IC0+IGZhbHNl64qUIHRydWXroZwgdHJ1ZeuKlCBmYWxzZVxyXG4gICAgfSxbXSlcclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7bWFyZ2luQm90dG9tOiAxOCB9fT5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGNvdmVyID0ge3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcyA9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnMgPSB7W1xyXG4gICAgICAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXkgPSBcInJldHdlZXRcIiAvPixcclxuICAgICAgICAgICAgICAgIGxpa2VkID9cclxuICAgICAgICAgICAgICAgICAgICA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiBrZXkgPSBcImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogPEhlYXJ0T3V0bGluZWQga2V5ID0gXCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfSAvPixcclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5ID1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9IC8+LFxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIga2V5ID0gXCJtb3JlXCIgY29udGVudCA9IHsoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiPuyCreygnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTo8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXIgPSB7PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IHtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSB7PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YSA9IHtwb3N0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdCA9e3Bvc3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIgPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dCA9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yID0ge2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyID0gezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7LyogPENvbW1lbnRGb3JtIC8+XHJcbiAgICAgICAgICAgIDxDb21tZW50cyAvPiAqL31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcclxuICAgICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbiAgfTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==