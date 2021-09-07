"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "D:\\Code\\WWW\\MISPIS-Bank\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var Home = /*#__PURE__*/function (_React$Component) {
  (0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home() {
    var _this;

    (0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "state", {
      summa: 100000,
      time: 5,
      percent: 5,
      data: []
    });

    (0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "componentDidUpdate", function () {
      var req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          summa: _this.state.summa,
          time: _this.state.time,
          percent: _this.state.percent
        })
      };
      fetch('/api/savings', req).then(function (response) {
        return response.json();
      }).then(function (d) {
        return _this.setState({
          data: d
        });
      }).then(function () {
        return console.log(_this.state.data);
      });
    });

    (0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "handleChange", function (event) {
      _this.setState({
        summa: +event.target.value
      });

      _this.forceUpdate();
    });

    return _this;
  }

  (0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Home, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("title", {
            children: "Banking Savings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("meta", {
            name: "description",
            content: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("main", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
            name: "summa",
            type: "text",
            defaultValue: this.state.summa,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
            htmlFor: "summa",
            children: "Summa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
            name: "time",
            type: "text",
            defaultValue: this.state.time,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
            htmlFor: "time",
            children: "Time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
            name: "percent",
            type: "text",
            defaultValue: this.state.percent,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
            htmlFor: "percent",
            children: "Percent"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.LineChart, {
            width: 400,
            height: 400,
            data: this.state.data,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.YAxis, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.XAxis, {
              dataKey: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.Tooltip, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.CartesianGrid, {
              stroke: "#f5f5f5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.Line, {
              type: "monotone",
              dataKey: "dl",
              stroke: "#8884d8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, this);
    }
  }]);

  return Home;
}((react__WEBPACK_IMPORTED_MODULE_8___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (Home);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjYwYWU1ODA5Y2E4MTM5ZDRlMTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztJQUVNUzs7Ozs7Ozs7Ozs7Ozs7Ozt3UUFDSTtBQUNOQyxNQUFBQSxLQUFLLEVBQUUsTUFERDtBQUVOQyxNQUFBQSxJQUFJLEVBQUUsQ0FGQTtBQUdOQyxNQUFBQSxPQUFPLEVBQUUsQ0FISDtBQUlOQyxNQUFBQSxJQUFJLEVBQUU7QUFKQTs7cVJBT2EsWUFBTTtBQUN6QixVQUFNQyxHQUFHLEdBQUc7QUFDVkMsUUFBQUEsTUFBTSxFQUFFLE1BREU7QUFFVkMsUUFBQUEsT0FBTyxFQUFFO0FBQUUsMEJBQWdCO0FBQWxCLFNBRkM7QUFHVkMsUUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFVCxVQUFBQSxLQUFLLEVBQUUsTUFBS1UsS0FBTCxDQUFXVixLQUFwQjtBQUEyQkMsVUFBQUEsSUFBSSxFQUFFLE1BQUtTLEtBQUwsQ0FBV1QsSUFBNUM7QUFBa0RDLFVBQUFBLE9BQU8sRUFBRSxNQUFLUSxLQUFMLENBQVdSO0FBQXRFLFNBQWY7QUFISSxPQUFaO0FBS0FTLE1BQUFBLEtBQUssQ0FBQyxjQUFELEVBQWlCUCxHQUFqQixDQUFMLENBQ0tRLElBREwsQ0FDVSxVQUFBQyxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxPQURsQixFQUVLRixJQUZMLENBRVUsVUFBQUcsQ0FBQztBQUFBLGVBQUksTUFBS0MsUUFBTCxDQUFjO0FBQUNiLFVBQUFBLElBQUksRUFBRVk7QUFBUCxTQUFkLENBQUo7QUFBQSxPQUZYLEVBR0tILElBSEwsQ0FHVTtBQUFBLGVBQU1LLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUtSLEtBQUwsQ0FBV1AsSUFBdkIsQ0FBTjtBQUFBLE9BSFY7QUFJRDs7K1FBRWMsVUFBQ2dCLEtBQUQsRUFBVztBQUN4QixZQUFLSCxRQUFMLENBQWM7QUFDWmhCLFFBQUFBLEtBQUssRUFBRSxDQUFDbUIsS0FBSyxDQUFDQyxNQUFOLENBQWFDO0FBRFQsT0FBZDs7QUFHQSxZQUFLQyxXQUFMO0FBQ0Q7Ozs7Ozs7V0FFRCxrQkFBUztBQUNQLDBCQUNFO0FBQUssaUJBQVMsRUFBRXhCLDJFQUFoQjtBQUFBLGdDQUNFLDhEQUFDLGtEQUFEO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFNLGdCQUFJLEVBQUMsYUFBWDtBQUF5QixtQkFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUU7QUFBTSxtQkFBUyxFQUFFQSxzRUFBakI7QUFBQSxrQ0FFQTtBQUFPLGdCQUFJLEVBQUMsT0FBWjtBQUFvQixnQkFBSSxFQUFDLE1BQXpCO0FBQWdDLHdCQUFZLEVBQUUsS0FBS1ksS0FBTCxDQUFXVixLQUF6RDtBQUFnRSxvQkFBUSxFQUFFLEtBQUt5QjtBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZBLGVBR0E7QUFBTyxtQkFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEEsZUFJQTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBSSxFQUFDLE1BQXhCO0FBQStCLHdCQUFZLEVBQUUsS0FBS2YsS0FBTCxDQUFXVCxJQUF4RDtBQUE4RCxvQkFBUSxFQUFFLEtBQUt3QjtBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpBLGVBS0E7QUFBTyxtQkFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEEsZUFNQTtBQUFPLGdCQUFJLEVBQUMsU0FBWjtBQUFzQixnQkFBSSxFQUFDLE1BQTNCO0FBQWtDLHdCQUFZLEVBQUUsS0FBS2YsS0FBTCxDQUFXUixPQUEzRDtBQUFvRSxvQkFBUSxFQUFFLEtBQUt1QjtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5BLGVBT0E7QUFBTyxtQkFBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEEsZUFRRSw4REFBQyxnREFBRDtBQUNFLGlCQUFLLEVBQUUsR0FEVDtBQUVFLGtCQUFNLEVBQUUsR0FGVjtBQUdFLGdCQUFJLEVBQUUsS0FBS2YsS0FBTCxDQUFXUCxJQUhuQjtBQUFBLG9DQUtJLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEosZUFNSSw4REFBQyw0Q0FBRDtBQUFPLHFCQUFPLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5KLGVBT0ksOERBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQSixlQVFJLDhEQUFDLG9EQUFEO0FBQWUsb0JBQU0sRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJKLGVBU0ksOERBQUMsMkNBQUQ7QUFBTSxrQkFBSSxFQUFDLFVBQVg7QUFBc0IscUJBQU8sRUFBQyxJQUE5QjtBQUFtQyxvQkFBTSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQTZCRDs7OztFQXpEZ0JaOztBQTREbkIsK0RBQWVRLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmVDaGFydCwgWEF4aXMsIFlBeGlzLCBUb29sdGlwLCBDYXJ0ZXNpYW5HcmlkLCBMaW5lIH0gZnJvbSAncmVjaGFydHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgc3VtbWE6IDEwMDAwMCxcclxuICAgIHRpbWU6IDUsXHJcbiAgICBwZXJjZW50OiA1LFxyXG4gICAgZGF0YTogW11cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlcSA9IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN1bW1hOiB0aGlzLnN0YXRlLnN1bW1hLCB0aW1lOiB0aGlzLnN0YXRlLnRpbWUsIHBlcmNlbnQ6IHRoaXMuc3RhdGUucGVyY2VudH0pXHJcbiAgICB9O1xyXG4gICAgZmV0Y2goJy9hcGkvc2F2aW5ncycsIHJlcSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZCA9PiB0aGlzLnNldFN0YXRlKHtkYXRhOiBkfSkpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRhKSlcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHN1bW1hOiArZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICB9KVxyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+QmFua2luZyBTYXZpbmdzPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICBcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICBcclxuICAgICAgICA8aW5wdXQgbmFtZT1cInN1bW1hXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuc3VtbWF9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1bW1hXCI+U3VtbWE8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwidGltZVwiIHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnRpbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpbWVcIj5UaW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInBlcmNlbnRcIiB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5wZXJjZW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwZXJjZW50XCI+UGVyY2VudDwvbGFiZWw+IFxyXG4gICAgICAgICAgPExpbmVDaGFydFxyXG4gICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxZQXhpcy8+XHJcbiAgICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJuYW1lXCIvPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIC8+XHJcbiAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2Y1ZjVmNVwiIC8+XHJcbiAgICAgICAgICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cImRsXCIgc3Ryb2tlPVwiIzg4ODRkOFwiIC8+XHJcbiAgICAgICAgICA8L0xpbmVDaGFydD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsIlJlYWN0IiwiTGluZUNoYXJ0IiwiWEF4aXMiLCJZQXhpcyIsIlRvb2x0aXAiLCJDYXJ0ZXNpYW5HcmlkIiwiTGluZSIsInN0eWxlcyIsIkhvbWUiLCJzdW1tYSIsInRpbWUiLCJwZXJjZW50IiwiZGF0YSIsInJlcSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJmb3JjZVVwZGF0ZSIsImNvbnRhaW5lciIsIm1haW4iLCJoYW5kbGVDaGFuZ2UiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9