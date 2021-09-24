webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(login),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logout),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogout),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





function loginAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/login');
}

function login(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('saga login function');
          _context.prev = 1;
          _context.next = 4;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 4:
          _context.next = 6;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'LOG_IN_SUCCESS',
            data: action.data
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          _context.next = 12;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'LOG_IN_FAILUARE',
            data: _context.t0.response.data
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 8]]);
}

function logoutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/logout');
}

function logout() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logout$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(10000);

        case 3:
          _context2.next = 5;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'LOG_OUT_SUCCESS'
          });

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 11;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'LOG_OUT_FAILUARE',
            data: _context2.t0.response.data
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
} //이벤트 리스너 같은 역할을 한다. 단점 1회용 -> 해결하기 ->while


function watchLogin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], login);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchLogout() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogout$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])('LOG_OUT_REQUEST', logout);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), //call이랑은 다름 
          Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogout) //fork나 call로 제너레이터 함수를 실행시켜준다. all은 함수를 동시에 실행
          ]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImxvZ291dCIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ291dCIsInVzZXJTYWdhIiwibG9naW5BUEkiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwiZGF0YSIsInJlc3BvbnNlIiwibG9nb3V0QVBJIiwidGFrZUxhdGVzdCIsIkxPR19JTl9SRVFVRVNUIiwidGFrZUV2ZXJ5IiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBZVVBLEs7bUdBdUJBQyxNO21HQW1CQUMsVTttR0FNQUMsVzttR0FRZUMsUTs7QUF2RXpCO0FBQ0E7QUFDQTs7QUFTQSxTQUFTQyxRQUFULEdBQW1CO0FBQ2YsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsQ0FBUDtBQUNIOztBQUVELFNBQVVQLEtBQVYsQ0FBZ0JRLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBREo7QUFBQTtBQUlRLGlCQUFNQyxzRUFBSyxDQUFDLElBQUQsQ0FBWDs7QUFKUjtBQUFBO0FBT1EsaUJBQU1DLG9FQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRSxnQkFEQTtBQUVOQyxnQkFBSSxFQUFFTixNQUFNLENBQUNNO0FBRlAsV0FBRCxDQUFUOztBQVBSO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlRLGlCQUFNRixvRUFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUUsaUJBREE7QUFFTkMsZ0JBQUksRUFBRSxZQUFJQyxRQUFKLENBQWFEO0FBRmIsV0FBRCxDQUFUOztBQVpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW1CQSxTQUFTRSxTQUFULEdBQW9CO0FBQ2hCLFNBQU9WLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxhQUFYLENBQVA7QUFDSDs7QUFFRCxTQUFVTixNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSVEsaUJBQU1VLHNFQUFLLENBQUMsS0FBRCxDQUFYOztBQUpSO0FBQUE7QUFNUSxpQkFBTUMsb0VBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFFO0FBREEsV0FBRCxDQUFUOztBQU5SO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVRLGlCQUFNRCxvRUFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUUsa0JBREE7QUFFTkMsZ0JBQUksRUFBRSxhQUFJQyxRQUFKLENBQWFEO0FBRmIsV0FBRCxDQUFUOztBQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FrQkE7OztBQUNBLFNBQVVaLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVEsaUJBQU1lLDJFQUFVLENBQUNDLDZEQUFELEVBQWlCbEIsS0FBakIsQ0FBaEI7O0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTUEsU0FBVUcsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUSxpQkFBTWdCLDBFQUFTLENBQUMsaUJBQUQsRUFBb0JsQixNQUFwQixDQUFmOztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFlLFNBQVVHLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU1nQixvRUFBRyxDQUFDLENBQ05DLHFFQUFJLENBQUNuQixVQUFELENBREUsRUFDWTtBQUNsQm1CLCtFQUFJLENBQUNsQixXQUFELENBRkUsQ0FFYTtBQUZiLFdBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjM1YzIyYTM3MDdhYjQxNzMxYzU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGRlbGF5LCBwdXQsIHRha2UsIHRha2VMYXRlc3QsIHRha2VFdmVyeSwgZm9ya30gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19JTl9SRVFVRVNULFxyXG4gICAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiBcclxuICB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5mdW5jdGlvbiBsb2dpbkFQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKXtcclxuICAgIGNvbnNvbGUubG9nKCdzYWdhIGxvZ2luIGZ1bmN0aW9uJylcclxuICAgIHRyeXtcclxuICAgICAgICAvL+yEnOuyhOqwgCDsl4bquLAg65WM66y4XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ2luQVBJLCBhY3Rpb24uZGF0YSkgLy/si6TtlokgLy9jYWxsIOydgCDrj5nquLAg7ZWo7IiYKHBhae2YuOy2nO2VoOuVjOq5jOyngCDquLDri6TroKTspIwp7Zi47LacIGZvcmvripQg67mE64+Z6riwIO2VqOyImCjqsrDqs7wg6riw64uk66as7KeA7JWK6rOgIOuwlOuhnCDri6TsnYzspIQpIO2YuOy2nFxyXG4gICAgICAgIC8vZGlzcGF0Y2hcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnTE9HX0lOX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPR19JTl9GQUlMVUFSRScsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ291dEFQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ291dCgpe1xyXG4gICAgXHJcbiAgICB0cnl7XHJcbiAgICAgICAgIC8v7ISc67KE6rCAIOyXhuq4sCDrlYzrrLhcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwMClcclxuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nb3V0QVBJLCBhY3Rpb24uZGF0YSkgLy/si6TtlokgLy9jYWxsIOydgCDrj5nquLAg7ZWo7IiYKHBhae2YuOy2nO2VoOuVjOq5jOyngCDquLDri6TroKTspIwp7Zi47LacIGZvcmvripQg67mE64+Z6riwIO2VqOyImCjqsrDqs7wg6riw64uk66as7KeA7JWK6rOgIOuwlOuhnCDri6TsnYzspIQpIO2YuOy2nFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0dfT1VUX1NVQ0NFU1MnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPR19PVVRfRkFJTFVBUkUnLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy/snbTrsqTtirgg66as7Iqk64SIIOqwmeydgCDsl63tlaDsnYQg7ZWc64ukLiDri6jsoJAgMe2ajOyaqSAtPiDtlbTqsrDtlZjquLAgLT53aGlsZVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpe1xyXG4gICAgLy93aGlsZSh0cnVlKXtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dpbikgLy9sb2dpbuydtOudvOuKlCDslaHshZjsnbQg7Iuk7ZaJ65CgIOuVjOq5jOyngCDquLDri6TrpqzqsqDri6QuIExPR19JTl9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9naW4g7ZWo7IiYIOyLpO2WiVxyXG4gICAgLy99XHJcbiAgICAvLyB5aWVsZCB0YWtlRXZlcnkoJ0xPR19JTl9SRVFVRVNUJywgbG9naW4pIC0+IOuztO2GtSDsnbTqsbjsk7Tri6QuXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nb3V0KCl7XHJcbiAgICBcclxuICAgICAgICB5aWVsZCB0YWtlRXZlcnkoJ0xPR19PVVRfUkVRVUVTVCcsIGxvZ291dCkgLy90YWtlTGF0ZXN0IOyNqOyVvO2VqCBcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9naW4pLCAvL2NhbGzsnbTrnpHsnYAg64uk66aEIFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dvdXQpLCAvL2ZvcmvrgpggY2FsbOuhnCDsoJzrhIjroIjsnbTthLAg7ZWo7IiY66W8IOyLpO2WieyLnOy8nOykgOuLpC4gYWxs7J2AIO2VqOyImOulvCDrj5nsi5zsl5Ag7Iuk7ZaJXHJcbiAgICBdKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=