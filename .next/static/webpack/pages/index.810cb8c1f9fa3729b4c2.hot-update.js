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

    (0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "refreshPlot", function () {
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

    (0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "componentDidMount", function () {
      _this.refreshPlot();
    });

    (0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "handleChange", function (event) {
      _this.setState((0,D_Code_WWW_MISPIS_Bank_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)({}, event.target.getAttribute('name'), +event.target.value));

      _this.refreshPlot();
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
            lineNumber: 41,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("meta", {
            name: "description",
            content: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
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
            lineNumber: 47,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
            htmlFor: "summa",
            children: "Summa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
            name: "time",
            type: "text",
            defaultValue: this.state.time,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
            htmlFor: "time",
            children: "Time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
            name: "percent",
            type: "text",
            defaultValue: this.state.percent,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
            htmlFor: "percent",
            children: "Percent"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.LineChart, {
            width: 400,
            height: 400,
            data: this.state.data,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.YAxis, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.XAxis, {
              dataKey: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.Tooltip, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.CartesianGrid, {
              stroke: "#f5f5f5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.Line, {
              type: "monotone",
              dataKey: "dl",
              stroke: "#8884d8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODEwY2I4YzFmOWZhMzcyOWI0YzIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztJQUVNUzs7Ozs7Ozs7Ozs7Ozs7Ozt3UUFDSTtBQUNOQyxNQUFBQSxLQUFLLEVBQUUsTUFERDtBQUVOQyxNQUFBQSxJQUFJLEVBQUUsQ0FGQTtBQUdOQyxNQUFBQSxPQUFPLEVBQUUsQ0FISDtBQUlOQyxNQUFBQSxJQUFJLEVBQUU7QUFKQTs7OFFBT00sWUFBTTtBQUNsQixVQUFNQyxHQUFHLEdBQUc7QUFDVkMsUUFBQUEsTUFBTSxFQUFFLE1BREU7QUFFVkMsUUFBQUEsT0FBTyxFQUFFO0FBQUUsMEJBQWdCO0FBQWxCLFNBRkM7QUFHVkMsUUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFVCxVQUFBQSxLQUFLLEVBQUUsTUFBS1UsS0FBTCxDQUFXVixLQUFwQjtBQUEyQkMsVUFBQUEsSUFBSSxFQUFFLE1BQUtTLEtBQUwsQ0FBV1QsSUFBNUM7QUFBa0RDLFVBQUFBLE9BQU8sRUFBRSxNQUFLUSxLQUFMLENBQVdSO0FBQXRFLFNBQWY7QUFISSxPQUFaO0FBS0FTLE1BQUFBLEtBQUssQ0FBQyxjQUFELEVBQWlCUCxHQUFqQixDQUFMLENBQ0tRLElBREwsQ0FDVSxVQUFBQyxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxPQURsQixFQUVLRixJQUZMLENBRVUsVUFBQUcsQ0FBQztBQUFBLGVBQUksTUFBS0MsUUFBTCxDQUFjO0FBQUNiLFVBQUFBLElBQUksRUFBRVk7QUFBUCxTQUFkLENBQUo7QUFBQSxPQUZYLEVBR0tILElBSEwsQ0FHVTtBQUFBLGVBQU1LLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUtSLEtBQUwsQ0FBV1AsSUFBdkIsQ0FBTjtBQUFBLE9BSFY7QUFJRDs7b1JBRW1CLFlBQU07QUFDeEIsWUFBS2dCLFdBQUw7QUFDRDs7K1FBRWMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLFlBQUtKLFFBQUwsMkhBQ0dJLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxZQUFiLENBQTBCLE1BQTFCLENBREgsRUFDdUMsQ0FBQ0YsS0FBSyxDQUFDQyxNQUFOLENBQWFFLEtBRHJEOztBQUdBLFlBQUtKLFdBQUw7QUFDRDs7Ozs7OztXQUVELGtCQUFTO0FBQ1AsMEJBQ0U7QUFBSyxpQkFBUyxFQUFFckIsMkVBQWhCO0FBQUEsZ0NBQ0UsOERBQUMsa0RBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQU0sZ0JBQUksRUFBQyxhQUFYO0FBQXlCLG1CQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFNRTtBQUFNLG1CQUFTLEVBQUVBLHNFQUFqQjtBQUFBLGtDQUVBO0FBQU8sZ0JBQUksRUFBQyxPQUFaO0FBQW9CLGdCQUFJLEVBQUMsTUFBekI7QUFBZ0Msd0JBQVksRUFBRSxLQUFLWSxLQUFMLENBQVdWLEtBQXpEO0FBQWdFLG9CQUFRLEVBQUUsS0FBSzBCO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkEsZUFHQTtBQUFPLG1CQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIQSxlQUlBO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFJLEVBQUMsTUFBeEI7QUFBK0Isd0JBQVksRUFBRSxLQUFLaEIsS0FBTCxDQUFXVCxJQUF4RDtBQUE4RCxvQkFBUSxFQUFFLEtBQUt5QjtBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpBLGVBS0E7QUFBTyxtQkFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEEsZUFNQTtBQUFPLGdCQUFJLEVBQUMsU0FBWjtBQUFzQixnQkFBSSxFQUFDLE1BQTNCO0FBQWtDLHdCQUFZLEVBQUUsS0FBS2hCLEtBQUwsQ0FBV1IsT0FBM0Q7QUFBb0Usb0JBQVEsRUFBRSxLQUFLd0I7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOQSxlQU9BO0FBQU8sbUJBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBBLGVBUUUsOERBQUMsZ0RBQUQ7QUFDRSxpQkFBSyxFQUFFLEdBRFQ7QUFFRSxrQkFBTSxFQUFFLEdBRlY7QUFHRSxnQkFBSSxFQUFFLEtBQUtoQixLQUFMLENBQVdQLElBSG5CO0FBQUEsb0NBS0ksOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSixlQU1JLDhEQUFDLDRDQUFEO0FBQU8scUJBQU8sRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkosZUFPSSw4REFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBKLGVBUUksOERBQUMsb0RBQUQ7QUFBZSxvQkFBTSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkosZUFTSSw4REFBQywyQ0FBRDtBQUFNLGtCQUFJLEVBQUMsVUFBWDtBQUFzQixxQkFBTyxFQUFDLElBQTlCO0FBQW1DLG9CQUFNLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBNkJEOzs7O0VBN0RnQlo7O0FBZ0VuQiwrREFBZVEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluZUNoYXJ0LCBYQXhpcywgWUF4aXMsIFRvb2x0aXAsIENhcnRlc2lhbkdyaWQsIExpbmUgfSBmcm9tICdyZWNoYXJ0cydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzdW1tYTogMTAwMDAwLFxyXG4gICAgdGltZTogNSxcclxuICAgIHBlcmNlbnQ6IDUsXHJcbiAgICBkYXRhOiBbXVxyXG4gIH1cclxuXHJcbiAgcmVmcmVzaFBsb3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZXEgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBzdW1tYTogdGhpcy5zdGF0ZS5zdW1tYSwgdGltZTogdGhpcy5zdGF0ZS50aW1lLCBwZXJjZW50OiB0aGlzLnN0YXRlLnBlcmNlbnR9KVxyXG4gICAgfTtcclxuICAgIGZldGNoKCcvYXBpL3NhdmluZ3MnLCByZXEpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGQgPT4gdGhpcy5zZXRTdGF0ZSh7ZGF0YTogZH0pKVxyXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGF0YSkpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgIHRoaXMucmVmcmVzaFBsb3QoKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV06ICtldmVudC50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgICB0aGlzLnJlZnJlc2hQbG90KClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5CYW5raW5nIFNhdmluZ3M8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gIFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gIFxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwic3VtbWFcIiB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5zdW1tYX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VtbWFcIj5TdW1tYTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJ0aW1lXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudGltZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGltZVwiPlRpbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwicGVyY2VudFwiIHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnBlcmNlbnR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBlcmNlbnRcIj5QZXJjZW50PC9sYWJlbD4gXHJcbiAgICAgICAgICA8TGluZUNoYXJ0XHJcbiAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFlBeGlzLz5cclxuICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cIm5hbWVcIi8+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgLz5cclxuICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjZjVmNWY1XCIgLz5cclxuICAgICAgICAgICAgICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwiZGxcIiBzdHJva2U9XCIjODg4NGQ4XCIgLz5cclxuICAgICAgICAgIDwvTGluZUNoYXJ0PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJMaW5lQ2hhcnQiLCJYQXhpcyIsIllBeGlzIiwiVG9vbHRpcCIsIkNhcnRlc2lhbkdyaWQiLCJMaW5lIiwic3R5bGVzIiwiSG9tZSIsInN1bW1hIiwidGltZSIsInBlcmNlbnQiLCJkYXRhIiwicmVxIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaFBsb3QiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwiY29udGFpbmVyIiwibWFpbiIsImhhbmRsZUNoYW5nZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=