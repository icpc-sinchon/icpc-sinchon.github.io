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
      className: "preview-container left-preview",
      _css: !showLeftPreview ? VisibilityHide : ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledRightPreview, {
      className: "preview-container right-preview",
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
var Common = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["height:100%;margin:0 auto 3rem auto;padding:3rem 0;border:3px solid #009D3E;animation-delay:300ms;animation:@media(max-width:2300px){width:calc((100% - 1043px - 260px - 57px - 57px) / 2);}@media(max-width:1522px){", "}"], ''
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmV2aWV3V3JhcC9QcmV2aWV3V3JhcC5qcyJdLCJuYW1lcyI6WyJQcmV2aWV3V3JhcCIsImN1cnJlbnRTZWFzb25JZHgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2Vhc29uTGlzdCIsInNob3dMZWZ0UHJldmlldyIsInNob3dSaWdodFByZXZpZXciLCJsZW5ndGgiLCJWaXNpYmlsaXR5SGlkZSIsIkNvbW1vbiIsImNzcyIsIkxlZnRQcmV2aWV3Iiwic3R5bGVkIiwiZGl2IiwiUmlnaHRQcmV2aWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFFdEIsTUFBTUMsZ0JBQWdCLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0YsZ0JBQVY7QUFBQSxHQUFOLENBQXBDO0FBQ0EsTUFBTUcsVUFBVSxHQUFHRiwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFVBQVY7QUFBQSxHQUFOLENBQTlCO0FBRUEsTUFBTUMsZUFBZSxHQUFHSixnQkFBZ0IsS0FBSyxDQUE3QztBQUNBLE1BQU1LLGdCQUFnQixHQUFHTCxnQkFBZ0IsS0FBS0csVUFBVSxDQUFDRyxNQUFYLEdBQW9CLENBQWxFO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUNJLGVBQVMsRUFBRSxnQ0FEZjtBQUFBLFlBRVMsQ0FBQ0YsZUFBRCxHQUFtQkcsY0FBbkIsR0FBb0M7QUFGN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBS0k7QUFDSSxlQUFTLEVBQUUsaUNBRGY7QUFBQSxhQUVTLENBQUNGLGdCQUFELEdBQW9CRSxjQUFwQixHQUFxQztBQUY5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQSxrQkFESjtBQVlILENBcEJEOztHQUFNUixXO1VBRXVCRSx1RCxFQUNOQSx1RDs7O0tBSGpCRixXO0FBc0JTQSwwRUFBZjtBQUVBLElBQU1TLE1BQU0sR0FBR0MsNkRBQUgsaU9BZUY7QUFBRztBQWZELENBQVosQyxDQWtCQTs7QUFDQSxJQUFNQyxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkpBT1hKLE1BUFcsQ0FBakI7TUFBTUUsVzs7Ozs7Ozs7O0FBV04sSUFBTUcsWUFBWSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtKQU9aSixNQVBZLENBQWxCO01BQU1LLFk7Ozs7Ozs7OztBQVdOLElBQU1OLGNBQWMsR0FBR0UsNkRBQUgsd0JBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N1YXBjLjRkZjcwYWFiY2FmMzM4NDgxNWIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgUHJldmlld1dyYXAgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFNlYXNvbklkeCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1cnJlbnRTZWFzb25JZHgpXHJcbiAgICBjb25zdCBzZWFzb25MaXN0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2Vhc29uTGlzdClcclxuXHJcbiAgICBjb25zdCBzaG93TGVmdFByZXZpZXcgPSBjdXJyZW50U2Vhc29uSWR4ICE9PSAwXHJcbiAgICBjb25zdCBzaG93UmlnaHRQcmV2aWV3ID0gY3VycmVudFNlYXNvbklkeCAhPT0gc2Vhc29uTGlzdC5sZW5ndGggLSAxXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TGVmdFByZXZpZXdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJwcmV2aWV3LWNvbnRhaW5lciBsZWZ0LXByZXZpZXdcIn1cclxuICAgICAgICAgICAgICAgIGNzcz17IXNob3dMZWZ0UHJldmlldyA/IFZpc2liaWxpdHlIaWRlIDogXCJcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJpZ2h0UHJldmlld1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInByZXZpZXctY29udGFpbmVyIHJpZ2h0LXByZXZpZXdcIn1cclxuICAgICAgICAgICAgICAgIGNzcz17IXNob3dSaWdodFByZXZpZXcgPyBWaXNpYmlsaXR5SGlkZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdXcmFwXHJcblxyXG5jb25zdCBDb21tb24gPSBjc3NgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAzcmVtIGF1dG87XHJcbiAgICBwYWRkaW5nOiAzcmVtIDA7XHJcblxyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwOUQzRTtcclxuXHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDMwMG1zO1xyXG4gICAgYW5pbWF0aW9uOlxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDIzMDBweCl7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDQzcHggLSAyNjBweCAtIDU3cHggLSA1N3B4KSAvIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDE1MjJweCl7XHJcbiAgICAgICAgJHsnJyAvKiBkaXNwbGF5OiBub25lOyAqL31cclxuICAgIH1cclxuYFxyXG4vLyAxNTIycHgg66eI7KeA64W47ISgXHJcbmNvbnN0IExlZnRQcmV2aWV3ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTIwcHggLSAxMzBweCAtIDU3cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIFxyXG4gICAgd2lkdGg6IGNhbGMoMTE1MHB4IC0gNTIwcHggLSAxMzBweCAtIDU3cHgpO1xyXG4gICAgXHJcbiAgICAke0NvbW1vbn1cclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG5gXHJcblxyXG5jb25zdCBSaWdodFByZXZpZXcgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IGNhbGMoNTAlIC0gNTIwcHggLSAxMzBweCAtIDU3cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCsxMDAlKTtcclxuICAgIFxyXG4gICAgd2lkdGg6IGNhbGMoMTE1MHB4IC0gNTIwcHggLSAxMzBweCAtIDU3cHgpO1xyXG5cclxuICAgICR7Q29tbW9ufVxyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG5gXHJcblxyXG5jb25zdCBWaXNpYmlsaXR5SGlkZSA9IGNzc2BcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcbmBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==