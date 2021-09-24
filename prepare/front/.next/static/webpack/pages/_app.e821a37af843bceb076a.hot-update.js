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
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

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
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logout);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImxvZ291dCIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ291dCIsInVzZXJTYWdhIiwibG9naW5BUEkiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwiZGF0YSIsInJlc3BvbnNlIiwibG9nb3V0QVBJIiwidGFrZUxhdGVzdCIsIkxPR19JTl9SRVFVRVNUIiwidGFrZUV2ZXJ5IiwiTE9HX09VVF9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBZVVBLEs7bUdBdUJBQyxNO21HQW1CQUMsVTttR0FNQUMsVzttR0FRZUMsUTs7QUF2RXpCO0FBQ0E7QUFDQTs7QUFTQSxTQUFTQyxRQUFULEdBQW1CO0FBQ2YsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsQ0FBUDtBQUNIOztBQUVELFNBQVVQLEtBQVYsQ0FBZ0JRLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBREo7QUFBQTtBQUlRLGlCQUFNQyxzRUFBSyxDQUFDLElBQUQsQ0FBWDs7QUFKUjtBQUFBO0FBT1EsaUJBQU1DLG9FQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRSxnQkFEQTtBQUVOQyxnQkFBSSxFQUFFTixNQUFNLENBQUNNO0FBRlAsV0FBRCxDQUFUOztBQVBSO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlRLGlCQUFNRixvRUFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUUsaUJBREE7QUFFTkMsZ0JBQUksRUFBRSxZQUFJQyxRQUFKLENBQWFEO0FBRmIsV0FBRCxDQUFUOztBQVpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW1CQSxTQUFTRSxTQUFULEdBQW9CO0FBQ2hCLFNBQU9WLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxhQUFYLENBQVA7QUFDSDs7QUFFRCxTQUFVTixNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSVEsaUJBQU1VLHNFQUFLLENBQUMsSUFBRCxDQUFYOztBQUpSO0FBQUE7QUFNUSxpQkFBTUMsb0VBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFFO0FBREEsV0FBRCxDQUFUOztBQU5SO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVRLGlCQUFNRCxvRUFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUUsa0JBREE7QUFFTkMsZ0JBQUksRUFBRSxhQUFJQyxRQUFKLENBQWFEO0FBRmIsV0FBRCxDQUFUOztBQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FrQkE7OztBQUNBLFNBQVVaLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVEsaUJBQU1lLDJFQUFVLENBQUNDLDZEQUFELEVBQWlCbEIsS0FBakIsQ0FBaEI7O0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTUEsU0FBVUcsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUSxpQkFBTWdCLDBFQUFTLENBQUNDLDhEQUFELEVBQWtCbkIsTUFBbEIsQ0FBZjs7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRZSxTQUFVRyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNaUIsb0VBQUcsQ0FBQyxDQUNOQyxxRUFBSSxDQUFDcEIsVUFBRCxDQURFLEVBQ1k7QUFDbEJvQiwrRUFBSSxDQUFDbkIsV0FBRCxDQUZFLENBRWE7QUFGYixXQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lODIxYTM3YWY4NDNiY2ViMDc2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBkZWxheSwgcHV0LCB0YWtlLCB0YWtlTGF0ZXN0LCB0YWtlRXZlcnksIGZvcmt9IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICBMT0dfSU5fUkVRVUVTVCxcclxuICAgIExPR19JTl9TVUNDRVNTLFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gXHJcbiAgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuZnVuY3Rpb24gbG9naW5BUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJylcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbil7XHJcbiAgICBjb25zb2xlLmxvZygnc2FnYSBsb2dpbiBmdW5jdGlvbicpXHJcbiAgICB0cnl7XHJcbiAgICAgICAgLy/shJzrsoTqsIAg7JeG6riwIOuVjOusuFxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpIC8v7Iuk7ZaJIC8vY2FsbCDsnYAg64+Z6riwIO2VqOyImChwYWntmLjstpztlaDrlYzquYzsp4Ag6riw64uk66Ck7KSMKe2YuOy2nCBmb3Jr64qUIOu5hOuPmeq4sCDtlajsiJgo6rKw6rO8IOq4sOuLpOumrOyngOyViuqzoCDrsJTroZwg64uk7J2M7KSEKSDtmLjstpxcclxuICAgICAgICAvL2Rpc3BhdGNoXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPR19JTl9TVUNDRVNTJyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0dfSU5fRkFJTFVBUkUnLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dvdXRBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dvdXQoKXtcclxuICAgIFxyXG4gICAgdHJ5e1xyXG4gICAgICAgICAvL+yEnOuyhOqwgCDsl4bquLAg65WM66y4XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ291dEFQSSwgYWN0aW9uLmRhdGEpIC8v7Iuk7ZaJIC8vY2FsbCDsnYAg64+Z6riwIO2VqOyImChwYWntmLjstpztlaDrlYzquYzsp4Ag6riw64uk66Ck7KSMKe2YuOy2nCBmb3Jr64qUIOu5hOuPmeq4sCDtlajsiJgo6rKw6rO8IOq4sOuLpOumrOyngOyViuqzoCDrsJTroZwg64uk7J2M7KSEKSDtmLjstpxcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnTE9HX09VVF9TVUNDRVNTJyxcclxuICAgICAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0dfT1VUX0ZBSUxVQVJFJyxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8v7J2067Kk7Yq4IOumrOyKpOuEiCDqsJnsnYAg7Jet7ZWg7J2EIO2VnOuLpC4g64uo7KCQIDHtmozsmqkgLT4g7ZW06rKw7ZWY6riwIC0+d2hpbGVcclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKXtcclxuICAgIC8vd2hpbGUodHJ1ZSl7XHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9naW4pIC8vbG9naW7snbTrnbzripQg7JWh7IWY7J20IOyLpO2WieuQoCDrlYzquYzsp4Ag6riw64uk66as6rKg64ukLiBMT0dfSU5fUkVRVUVTVCDslaHshZjsnbQg7Iuk7ZaJ65CY66m0IGxvZ2luIO2VqOyImCDsi6TtlolcclxuICAgIC8vfVxyXG4gICAgLy8geWllbGQgdGFrZUV2ZXJ5KCdMT0dfSU5fUkVRVUVTVCcsIGxvZ2luKSAtPiDrs7TthrUg7J206rG47JO064ukLlxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ291dCgpe1xyXG4gICAgXHJcbiAgICAgICAgeWllbGQgdGFrZUV2ZXJ5KExPR19PVVRfUkVRVUVTVCwgbG9nb3V0KSAvL3Rha2VMYXRlc3Qg7I2o7JW87ZWoIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dpbiksIC8vY2FsbOydtOuekeydgCDri6TrpoQgXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ291dCksIC8vZm9ya+uCmCBjYWxs66GcIOygnOuEiOugiOydtO2EsCDtlajsiJjrpbwg7Iuk7ZaJ7Iuc7Lyc7KSA64ukLiBhbGzsnYAg7ZWo7IiY66W8IOuPmeyLnOyXkCDsi6TtlolcclxuICAgIF0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==