webpackHotUpdate_N_E("pages/suapc",{

/***/ "./components/PreviewWrap/PreviewWrap.js":
/*!***********************************************!*\
  !*** ./components/PreviewWrap/PreviewWrap.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var _jsxFileName = "C:\\Users\\nant0\\Document\\GitHub\\icpc-sinchon.github.io\\components\\PreviewWrap\\PreviewWrap.js",
    _this = undefined,
    _s = $RefreshSig$();




var PreviewWrap = function PreviewWrap() {
  _s();

  var currentSeasonIdx = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.currentSeasonIdx;
  });
  var seasonList = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.seasonList;
  });
  var showLeftPreview = currentSeasonIdx !== 0;
  var showRightPreview = currentSeasonIdx !== seasonList.length - 1;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledLeftPreview, {
      className: "preview-container left-preview fade-in",
      _css: !showLeftPreview ? VisibilityHide : ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledRightPreview, {
      className: "preview-container right-preview fade-in",
      _css2: !showRightPreview ? VisibilityHide : ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(PreviewWrap, "qH6EM1kUXpLex2TjdVPdXVpWBLE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = PreviewWrap;
/* harmony default export */ __webpack_exports__["default"] = (PreviewWrap);
var Common = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["height:100%;margin:0 auto 3rem auto;padding:3rem 0;border:3px solid #009D3E;@media(max-width:2300px){width:calc((100% - 1043px - 260px - 57px - 57px) / 2);}@media(max-width:1522px){", "}"], ''
/* display: none; */
); // 1522px 마지노선

var LeftPreview = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PreviewWrap__LeftPreview",
  componentId: "sc-1ovsu9r-0"
})(["position:absolute;left:calc(50% - 520px - 130px - 57px);transform:translateX(-100%);width:calc(1150px - 520px - 130px - 57px);", " border-left:none;"], Common);
_c2 = LeftPreview;

var _StyledLeftPreview = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(LeftPreview).withConfig({
  displayName: "PreviewWrap___StyledLeftPreview",
  componentId: "sc-1ovsu9r-1"
})(["", ""], function (p) {
  return p._css;
});

var RightPreview = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PreviewWrap__RightPreview",
  componentId: "sc-1ovsu9r-2"
})(["position:absolute;right:calc(50% - 520px - 130px - 57px);transform:translateX(+100%);width:calc(1150px - 520px - 130px - 57px);", " border-right:none;"], Common);
_c3 = RightPreview;

var _StyledRightPreview = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(RightPreview).withConfig({
  displayName: "PreviewWrap___StyledRightPreview",
  componentId: "sc-1ovsu9r-3"
})(["", ""], function (p) {
  return p._css2;
});

var VisibilityHide = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["visibility:hidden;"]);

var _c, _c2, _c3;

$RefreshReg$(_c, "PreviewWrap");
$RefreshReg$(_c2, "LeftPreview");
$RefreshReg$(_c3, "RightPreview");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmV2aWV3V3JhcC9QcmV2aWV3V3JhcC5qcyJdLCJuYW1lcyI6WyJQcmV2aWV3V3JhcCIsImN1cnJlbnRTZWFzb25JZHgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2Vhc29uTGlzdCIsInNob3dMZWZ0UHJldmlldyIsInNob3dSaWdodFByZXZpZXciLCJsZW5ndGgiLCJWaXNpYmlsaXR5SGlkZSIsIkNvbW1vbiIsImNzcyIsIkxlZnRQcmV2aWV3Iiwic3R5bGVkIiwiZGl2IiwiUmlnaHRQcmV2aWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFFdEIsTUFBTUMsZ0JBQWdCLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0YsZ0JBQVY7QUFBQSxHQUFOLENBQXBDO0FBQ0EsTUFBTUcsVUFBVSxHQUFHRiwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFVBQVY7QUFBQSxHQUFOLENBQTlCO0FBRUEsTUFBTUMsZUFBZSxHQUFHSixnQkFBZ0IsS0FBSyxDQUE3QztBQUNBLE1BQU1LLGdCQUFnQixHQUFHTCxnQkFBZ0IsS0FBS0csVUFBVSxDQUFDRyxNQUFYLEdBQW9CLENBQWxFO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUNJLGVBQVMsRUFBRSx3Q0FEZjtBQUFBLFlBRVMsQ0FBQ0YsZUFBRCxHQUFtQkcsY0FBbkIsR0FBb0M7QUFGN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBS0k7QUFDSSxlQUFTLEVBQUUseUNBRGY7QUFBQSxhQUVTLENBQUNGLGdCQUFELEdBQW9CRSxjQUFwQixHQUFxQztBQUY5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQSxrQkFESjtBQVlILENBcEJEOztHQUFNUixXO1VBRXVCRSx1RCxFQUNOQSx1RDs7O0tBSGpCRixXO0FBc0JTQSwwRUFBZjtBQUVBLElBQU1TLE1BQU0sR0FBR0MsNkRBQUgsaU1BWUY7QUFBRztBQVpELENBQVosQyxDQWVBOztBQUNBLElBQU1DLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2SkFPWEosTUFQVyxDQUFqQjtNQUFNRSxXOzs7Ozs7Ozs7QUFXTixJQUFNRyxZQUFZLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0pBT1pKLE1BUFksQ0FBbEI7TUFBTUssWTs7Ozs7Ozs7O0FBV04sSUFBTU4sY0FBYyxHQUFHRSw2REFBSCx3QkFBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3VhcGMuOTMyZjg0OTQxNjczNzUzZjA3MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBQcmV2aWV3V3JhcCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50U2Vhc29uSWR4ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY3VycmVudFNlYXNvbklkeClcclxuICAgIGNvbnN0IHNlYXNvbkxpc3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zZWFzb25MaXN0KVxyXG5cclxuICAgIGNvbnN0IHNob3dMZWZ0UHJldmlldyA9IGN1cnJlbnRTZWFzb25JZHggIT09IDBcclxuICAgIGNvbnN0IHNob3dSaWdodFByZXZpZXcgPSBjdXJyZW50U2Vhc29uSWR4ICE9PSBzZWFzb25MaXN0Lmxlbmd0aCAtIDFcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxMZWZ0UHJldmlld1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInByZXZpZXctY29udGFpbmVyIGxlZnQtcHJldmlldyBmYWRlLWluXCJ9XHJcbiAgICAgICAgICAgICAgICBjc3M9eyFzaG93TGVmdFByZXZpZXcgPyBWaXNpYmlsaXR5SGlkZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSaWdodFByZXZpZXdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJwcmV2aWV3LWNvbnRhaW5lciByaWdodC1wcmV2aWV3IGZhZGUtaW5cIn1cclxuICAgICAgICAgICAgICAgIGNzcz17IXNob3dSaWdodFByZXZpZXcgPyBWaXNpYmlsaXR5SGlkZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdXcmFwXHJcblxyXG5jb25zdCBDb21tb24gPSBjc3NgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAzcmVtIGF1dG87XHJcbiAgICBwYWRkaW5nOiAzcmVtIDA7XHJcblxyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwOUQzRTtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAyMzAwcHgpe1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTA0M3B4IC0gMjYwcHggLSA1N3B4IC0gNTdweCkgLyAyKTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAxNTIycHgpe1xyXG4gICAgICAgICR7JycgLyogZGlzcGxheTogbm9uZTsgKi99XHJcbiAgICB9XHJcbmBcclxuLy8gMTUyMnB4IOuniOyngOuFuOyEoFxyXG5jb25zdCBMZWZ0UHJldmlldyA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDUyMHB4IC0gMTMwcHggLSA1N3B4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICBcclxuICAgIHdpZHRoOiBjYWxjKDExNTBweCAtIDUyMHB4IC0gMTMwcHggLSA1N3B4KTtcclxuICAgIFxyXG4gICAgJHtDb21tb259XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuYFxyXG5cclxuY29uc3QgUmlnaHRQcmV2aWV3ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDUyMHB4IC0gMTMwcHggLSA1N3B4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgrMTAwJSk7XHJcbiAgICBcclxuICAgIHdpZHRoOiBjYWxjKDExNTBweCAtIDUyMHB4IC0gMTMwcHggLSA1N3B4KTtcclxuXHJcbiAgICAke0NvbW1vbn1cclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuYFxyXG5cclxuY29uc3QgVmlzaWJpbGl0eUhpZGUgPSBjc3NgXHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5gXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=