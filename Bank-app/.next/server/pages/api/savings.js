"use strict";
(() => {
var exports = {};
exports.id = "pages/api/savings";
exports.ids = ["pages/api/savings"];
exports.modules = {

/***/ "./pages/api/savings.js":
/*!******************************!*\
  !*** ./pages/api/savings.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ saving)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function saving(req, res) {
  if (req.method === 'POST') {
    const body = req.body;

    if (body !== null) {
      let resBody = [];
      let summa = body.summa;

      for (let i = 0; i <= body.time; i++) {
        resBody.push({
          name: i + " year",
          dl: summa
        });
        summa += summa * (body.percent / 100);
      }

      res.status(200).json(resBody);
    }
  } else {
    res.status(400).json({
      message: 'Only POST requests allowed'
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/savings.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3NhdmluZ3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQjtBQUN2QyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0csSUFBakI7O0FBQ0EsUUFBSUEsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsVUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxVQUFJQyxLQUFLLEdBQUdGLElBQUksQ0FBQ0UsS0FBakI7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJSCxJQUFJLENBQUNJLElBQTFCLEVBQWdDRCxDQUFDLEVBQWpDLEVBQXFDO0FBQ25DRixRQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FBYTtBQUNUQyxVQUFBQSxJQUFJLEVBQUVILENBQUMsR0FBQyxPQURDO0FBRVRJLFVBQUFBLEVBQUUsRUFBRUw7QUFGSyxTQUFiO0FBS0FBLFFBQUFBLEtBQUssSUFBSUEsS0FBSyxJQUFFRixJQUFJLENBQUNRLE9BQUwsR0FBYSxHQUFmLENBQWQ7QUFDRDs7QUFDRFYsTUFBQUEsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJULE9BQXJCO0FBQ0Q7QUFDRixHQWZELE1BZU87QUFDTEgsSUFBQUEsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQVYsS0FBckI7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFuay1zYXZpbmdzLy4vcGFnZXMvYXBpL3NhdmluZ3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhdmluZyhyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keVxyXG4gICAgaWYgKGJvZHkgIT09IG51bGwpIHtcclxuICAgICAgbGV0IHJlc0JvZHkgPSBbXVxyXG4gICAgICBsZXQgc3VtbWEgPSBib2R5LnN1bW1hXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGJvZHkudGltZTsgaSsrKSB7XHJcbiAgICAgICAgcmVzQm9keS5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogaStcIiB5ZWFyXCIsXHJcbiAgICAgICAgICAgIGRsOiBzdW1tYVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICBzdW1tYSArPSBzdW1tYSooYm9keS5wZXJjZW50LzEwMClcclxuICAgICAgfVxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNCb2R5KVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTogJ09ubHkgUE9TVCByZXF1ZXN0cyBhbGxvd2VkJ30pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsic2F2aW5nIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9keSIsInJlc0JvZHkiLCJzdW1tYSIsImkiLCJ0aW1lIiwicHVzaCIsIm5hbWUiLCJkbCIsInBlcmNlbnQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=