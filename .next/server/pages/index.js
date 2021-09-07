(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Code\\WWW\\MISPIS-Bank\\pages\\index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Home extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      summa: 100000,
      time: 100,
      percent: 5,
      data: []
    });

    _defineProperty(this, "refreshPlot", () => {
      fetch('/api/savings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          summa: this.state.summa,
          time: this.state.time,
          percent: this.state.percent
        })
      }).then(response => response.json()).then(response => this.setState({
        data: response
      }));
    });

    _defineProperty(this, "componentDidMount", () => {
      this.refreshPlot();
    });

    _defineProperty(this, "componentDidUpdate", () => {
      this.refreshPlot();
    });

    _defineProperty(this, "handleChange", event => {
      this.setState({
        [event.target.getAttribute('name')]: Number(event.target.value)
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
          children: "Banking Savings"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
          name: "description",
          content: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("main", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputs),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              name: "summa",
              type: "text",
              defaultValue: this.state.summa,
              onChange: this.handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
              htmlFor: "summa",
              children: "Summa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              name: "time",
              type: "text",
              defaultValue: this.state.time,
              onChange: this.handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
              htmlFor: "time",
              children: "Time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              name: "percent",
              type: "text",
              defaultValue: this.state.percent,
              onChange: this.handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
              htmlFor: "percent",
              children: "Percent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.LineChart, {
          width: 1000,
          height: 400,
          data: this.state.data,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.YAxis, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.XAxis, {
            dataKey: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.CartesianGrid, {
            stroke: "#f5f5f5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.Line, {
            type: "monotone",
            dataKey: "dl",
            stroke: "#8884d8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"inputs": "Home_inputs__1mbAe",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("recharts");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNUyxJQUFOLFNBQW1CUix3REFBbkIsQ0FBbUM7QUFBQTtBQUFBOztBQUFBLG1DQUN6QjtBQUNOVSxNQUFBQSxLQUFLLEVBQUUsTUFERDtBQUVOQyxNQUFBQSxJQUFJLEVBQUUsR0FGQTtBQUdOQyxNQUFBQSxPQUFPLEVBQUUsQ0FISDtBQUlOQyxNQUFBQSxJQUFJLEVBQUU7QUFKQSxLQUR5Qjs7QUFBQSx5Q0FRbkIsTUFBTTtBQUNsQkMsTUFBQUEsS0FBSyxDQUFDLGNBQUQsRUFBaUI7QUFDbEJDLFFBQUFBLE1BQU0sRUFBRSxNQURVO0FBRWxCQyxRQUFBQSxPQUFPLEVBQUU7QUFBRSwwQkFBZ0I7QUFBbEIsU0FGUztBQUdsQkMsUUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFVCxVQUFBQSxLQUFLLEVBQUUsS0FBS1UsS0FBTCxDQUFXVixLQUFwQjtBQUEyQkMsVUFBQUEsSUFBSSxFQUFFLEtBQUtTLEtBQUwsQ0FBV1QsSUFBNUM7QUFBa0RDLFVBQUFBLE9BQU8sRUFBRSxLQUFLUSxLQUFMLENBQVdSO0FBQXRFLFNBQWY7QUFIWSxPQUFqQixDQUFMLENBS0dTLElBTEgsQ0FLUUMsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQVQsRUFMcEIsRUFNR0YsSUFOSCxDQU1RQyxRQUFRLElBQUksS0FBS0UsUUFBTCxDQUFjO0FBQUNYLFFBQUFBLElBQUksRUFBRVM7QUFBUCxPQUFkLENBTnBCO0FBT0QsS0FoQmdDOztBQUFBLCtDQWtCYixNQUFNO0FBQ3hCLFdBQUtHLFdBQUw7QUFDRCxLQXBCZ0M7O0FBQUEsZ0RBcUJaLE1BQU07QUFDekIsV0FBS0EsV0FBTDtBQUNELEtBdkJnQzs7QUFBQSwwQ0F5QmpCQyxLQUFELElBQVc7QUFDeEIsV0FBS0YsUUFBTCxDQUFjO0FBQUUsU0FBQ0UsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFlBQWIsQ0FBMEIsTUFBMUIsQ0FBRCxHQUFxQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUNDLE1BQU4sQ0FBYUcsS0FBZDtBQUE3QyxPQUFkO0FBRUQsS0E1QmdDO0FBQUE7O0FBOEJqQ0MsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0U7QUFBSyxlQUFTLEVBQUV4QiwwRUFBaEI7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxjQUFJLEVBQUMsYUFBWDtBQUF5QixpQkFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFNLGlCQUFTLEVBQUVBLHFFQUFqQjtBQUFBLGdDQUNBO0FBQUssbUJBQVMsRUFBRUEsdUVBQWhCO0FBQUEsa0NBQ0U7QUFBQSxvQ0FDRTtBQUFPLGtCQUFJLEVBQUMsT0FBWjtBQUFvQixrQkFBSSxFQUFDLE1BQXpCO0FBQWdDLDBCQUFZLEVBQUUsS0FBS2EsS0FBTCxDQUFXVixLQUF6RDtBQUFnRSxzQkFBUSxFQUFFLEtBQUt5QjtBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTyxxQkFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBS0U7QUFBQSxvQ0FDRTtBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBSSxFQUFDLE1BQXhCO0FBQStCLDBCQUFZLEVBQUUsS0FBS2YsS0FBTCxDQUFXVCxJQUF4RDtBQUE4RCxzQkFBUSxFQUFFLEtBQUt3QjtBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTyxxQkFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLGVBU0U7QUFBQSxvQ0FDRTtBQUFPLGtCQUFJLEVBQUMsU0FBWjtBQUFzQixrQkFBSSxFQUFDLE1BQTNCO0FBQWtDLDBCQUFZLEVBQUUsS0FBS2YsS0FBTCxDQUFXUixPQUEzRDtBQUFvRSxzQkFBUSxFQUFFLEtBQUt1QjtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTyxxQkFBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQWdCRSw4REFBQywrQ0FBRDtBQUNFLGVBQUssRUFBRSxJQURUO0FBRUUsZ0JBQU0sRUFBRSxHQUZWO0FBR0UsY0FBSSxFQUFFLEtBQUtmLEtBQUwsQ0FBV1AsSUFIbkI7QUFBQSxrQ0FLSSw4REFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKLGVBTUksOERBQUMsMkNBQUQ7QUFBTyxtQkFBTyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSixlQU9JLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEosZUFRSSw4REFBQyxtREFBRDtBQUFlLGtCQUFNLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSSixlQVNJLDhEQUFDLDBDQUFEO0FBQU0sZ0JBQUksRUFBQyxVQUFYO0FBQXNCLG1CQUFPLEVBQUMsSUFBOUI7QUFBbUMsa0JBQU0sRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFxQ0Q7O0FBcEVnQzs7QUF1RW5DLGlFQUFlTCxJQUFmOzs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhbmstc2F2aW5ncy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2Jhbmstc2F2aW5ncy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFuay1zYXZpbmdzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vYmFuay1zYXZpbmdzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9iYW5rLXNhdmluZ3MvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9iYW5rLXNhdmluZ3MvZXh0ZXJuYWwgXCJyZWNoYXJ0c1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5lQ2hhcnQsIFhBeGlzLCBZQXhpcywgVG9vbHRpcCwgQ2FydGVzaWFuR3JpZCwgTGluZSB9IGZyb20gJ3JlY2hhcnRzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHN1bW1hOiAxMDAwMDAsXHJcbiAgICB0aW1lOiAxMDAsXHJcbiAgICBwZXJjZW50OiA1LFxyXG4gICAgZGF0YTogW11cclxuICB9XHJcblxyXG4gIHJlZnJlc2hQbG90ID0gKCkgPT4ge1xyXG4gICAgZmV0Y2goJy9hcGkvc2F2aW5ncycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN1bW1hOiB0aGlzLnN0YXRlLnN1bW1hLCB0aW1lOiB0aGlzLnN0YXRlLnRpbWUsIHBlcmNlbnQ6IHRoaXMuc3RhdGUucGVyY2VudH0pXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZGF0YTogcmVzcG9uc2V9KSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5yZWZyZXNoUGxvdCgpXHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHRoaXMucmVmcmVzaFBsb3QoKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV06IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpIH0pXHJcbiAgICBcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5CYW5raW5nIFNhdmluZ3M8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gIFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRzfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic3VtbWFcIiB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5zdW1tYX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1bW1hXCI+U3VtbWE8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInRpbWVcIiB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS50aW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGltZVwiPlRpbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInBlcmNlbnRcIiB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5wZXJjZW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGVyY2VudFwiPlBlcmNlbnQ8L2xhYmVsPiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPExpbmVDaGFydFxyXG4gICAgICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8WUF4aXMvPlxyXG4gICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PVwibmFtZVwiLz5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCAvPlxyXG4gICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZT1cIiNmNWY1ZjVcIiAvPlxyXG4gICAgICAgICAgICAgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJkbFwiIHN0cm9rZT1cIiM4ODg0ZDhcIiAvPlxyXG4gICAgICAgICAgPC9MaW5lQ2hhcnQ+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwiaW5wdXRzXCI6IFwiSG9tZV9pbnB1dHNfXzFtYkFlXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX2F4eDJZXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkVpMkZcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY2hhcnRzXCIpOyJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJMaW5lQ2hhcnQiLCJYQXhpcyIsIllBeGlzIiwiVG9vbHRpcCIsIkNhcnRlc2lhbkdyaWQiLCJMaW5lIiwic3R5bGVzIiwiSG9tZSIsIkNvbXBvbmVudCIsInN1bW1hIiwidGltZSIsInBlcmNlbnQiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0ZSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJzZXRTdGF0ZSIsInJlZnJlc2hQbG90IiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJOdW1iZXIiLCJ2YWx1ZSIsInJlbmRlciIsImNvbnRhaW5lciIsIm1haW4iLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9