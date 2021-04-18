webpackHotUpdate_N_E("pages/halloffame",{

/***/ "./components/Arrow/SeasonSwitchArrow.js":
/*!***********************************************!*\
  !*** ./components/Arrow/SeasonSwitchArrow.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




var _jsxFileName = "C:\\Users\\nant0\\Document\\GitHub\\icpc-sinchon.github.io\\components\\Arrow\\SeasonSwitchArrow.js",
    _this = undefined,
    _s = $RefreshSig$();




var SeasonSwitchArrow = function SeasonSwitchArrow(_ref) {
  _s();

  var onArrowClick = _ref.onArrowClick;
  var seasonList = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.seasonList;
  });
  var currentSeasonIdx = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.currentSeasonIdx;
  });
  var showLeftArrow = currentSeasonIdx !== 0;
  var showRightArrow = currentSeasonIdx !== seasonList.length - 1;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ArrowWrap, {
    className: "arrow-wrap",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledArrowLeft, {
      onClick: onArrowClick,
      alt: "left-arrow",
      src: "res/button/arrow-left.svg",
      _css: !showLeftArrow ? VisibilityHide : ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledArrowRight, {
      onClick: onArrowClick,
      alt: "right-arrow",
      src: "res/button/arrow-right.svg",
      _css2: !showRightArrow ? VisibilityHide : ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 12
  }, _this);
};

_s(SeasonSwitchArrow, "DojL1TAOd/XL6/EvRiQ7zLseZg8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = SeasonSwitchArrow;
var ArrowWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SeasonSwitchArrow__ArrowWrap",
  componentId: "sc-1qpn2uu-0"
})(["position:absolute;top:270px;left:-130px;display:flex;justify-content:space-between;width:calc(100% + 260px);"]);
_c2 = ArrowWrap;
var Arrow = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["cursor:pointer;"]);
var ArrowLeft = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "SeasonSwitchArrow__ArrowLeft",
  componentId: "sc-1qpn2uu-1"
})(["", ""], Arrow);
_c3 = ArrowLeft;

var _StyledArrowLeft = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(ArrowLeft).withConfig({
  displayName: "SeasonSwitchArrow___StyledArrowLeft",
  componentId: "sc-1qpn2uu-2"
})(["", ""], function (p) {
  return p._css;
});

var ArrowRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "SeasonSwitchArrow__ArrowRight",
  componentId: "sc-1qpn2uu-3"
})(["", ""], Arrow);
_c4 = ArrowRight;

var _StyledArrowRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(ArrowRight).withConfig({
  displayName: "SeasonSwitchArrow___StyledArrowRight",
  componentId: "sc-1qpn2uu-4"
})(["", ""], function (p) {
  return p._css2;
});

var VisibilityHide = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["visibility:hidden;"]);
/* harmony default export */ __webpack_exports__["default"] = (SeasonSwitchArrow);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "SeasonSwitchArrow");
$RefreshReg$(_c2, "ArrowWrap");
$RefreshReg$(_c3, "ArrowLeft");
$RefreshReg$(_c4, "ArrowRight");

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

/***/ }),

/***/ "./components/ContestWrap/ContestItem/ItemWrap.js":
/*!********************************************************!*\
  !*** ./components/ContestWrap/ContestItem/ItemWrap.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\nant0\\Document\\GitHub\\icpc-sinchon.github.io\\components\\ContestWrap\\ContestItem\\ItemWrap.js",
    _this = undefined;


var ItemWrap_ = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ItemWrap__ItemWrap_",
  componentId: "sc-105gi53-0"
})(["padding-bottom:1rem;"]);
_c = ItemWrap_;

var ItemWrap = function ItemWrap(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemWrap_, {
    className: className,
    style: style,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }, _this);
};

_c2 = ItemWrap;
/* harmony default export */ __webpack_exports__["default"] = (ItemWrap);

var _c, _c2;

$RefreshReg$(_c, "ItemWrap_");
$RefreshReg$(_c2, "ItemWrap");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/ContestWrap/ContestItem/TextWrap/TextWrap.js":
/*!*****************************************************************!*\
  !*** ./components/ContestWrap/ContestItem/TextWrap/TextWrap.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ItemWrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ItemWrap */ "./components/ContestWrap/ContestItem/ItemWrap.js");


var _jsxFileName = "C:\\Users\\nant0\\Document\\GitHub\\icpc-sinchon.github.io\\components\\ContestWrap\\ContestItem\\TextWrap\\TextWrap.js",
    _this = undefined;



var SinchonColor = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:#009D3E;"]);
var NotoSansBold = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-family:'Noto Sans KR';font-weight:700;"]);
var KeepCalmPreset = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-family:'KeepCalmMed';font-weight:normal;"]);
var ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "TextWrap__ItemTitle",
  componentId: "sc-1bj4bio-0"
})(["", " ", " margin:1em 0 0.4em 0;"], NotoSansBold, SinchonColor);
_c = ItemTitle;
var ItemContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "TextWrap__ItemContent",
  componentId: "sc-1bj4bio-1"
})(["font-family:'Noto Sans KR';font-weight:500;margin:0;@media (max-width:633px){font-size:0.9rem;}"]);
_c2 = ItemContent;

var TextWrap = function TextWrap(_ref) {
  var title = _ref.title,
      content = _ref.content;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ItemWrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemTitle, {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemContent, {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, _this);
};

_c3 = TextWrap;
/* harmony default export */ __webpack_exports__["default"] = (TextWrap);

var _c, _c2, _c3;

$RefreshReg$(_c, "ItemTitle");
$RefreshReg$(_c2, "ItemContent");
$RefreshReg$(_c3, "TextWrap");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/ContestWrap/ContestItem/TitleWrap/TitleWrap.js":
/*!*******************************************************************!*\
  !*** ./components/ContestWrap/ContestItem/TitleWrap/TitleWrap.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "C:\\Users\\nant0\\Document\\GitHub\\icpc-sinchon.github.io\\components\\ContestWrap\\ContestItem\\TitleWrap\\TitleWrap.js",
    _this = undefined;


var SinchonColor = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:#009D3E;"]);
var NotoSansBold = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-family:'Noto Sans KR';font-weight:700;"]);
var KeepCalmPreset = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-family:'KeepCalmMed';font-weight:normal;"]);
var TitleWrap_ = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TitleWrap__TitleWrap_",
  componentId: "sc-1xw3dsy-0"
})([""]);
_c = TitleWrap_;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "TitleWrap__Title",
  componentId: "sc-1xw3dsy-1"
})(["", " ", " font-size:2.6em;letter-spacing:-0.08rem;line-height:1.2;margin:0;@media(max-width:470px){font-size:2.6rem;}@media(max-width:400px){}"], KeepCalmPreset, SinchonColor);
_c2 = Title;
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "TitleWrap__SubTitle",
  componentId: "sc-1xw3dsy-2"
})(["", " margin:0 0 3rem 0;@media(max-width:470px){font-size:1rem;}@media(max-width:320px){font-size:1rem;}"], SinchonColor);
_c3 = SubTitle;

var _StyledSubTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(SubTitle).withConfig({
  displayName: "TitleWrap___StyledSubTitle",
  componentId: "sc-1xw3dsy-3"
})(["", ""], NotoSansBold);

var TitleWrap = function TitleWrap(_ref) {
  var title = _ref.title,
      isSuapc = _ref.isSuapc,
      year = _ref.year,
      season = _ref.season;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TitleWrap_, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, _this), isSuapc ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledSubTitle, {
      children: [year, " \uC2E0\uCD0C\uC9C0\uC5ED \uB300\uD559\uAD50 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
        className: "show-if-small"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 62
      }, _this), "\uD504\uB85C\uADF8\uB798\uBC0D \uB3D9\uC544\uB9AC ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
        className: "show-if-mobile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 104
      }, _this), "\uC5F0\uD569 ", season === "Winter" ? "겨울" : "여름", " \uB300\uD68C"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubTitle, {
      children: [year, " ICPC Sinchon ", season, " Algorithm Camp Contest"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, _this);
};

_c4 = TitleWrap;
/* harmony default export */ __webpack_exports__["default"] = (TitleWrap);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "TitleWrap_");
$RefreshReg$(_c2, "Title");
$RefreshReg$(_c3, "SubTitle");
$RefreshReg$(_c4, "TitleWrap");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/ContestWrap/ContestWrap.js":
/*!***********************************************!*\
  !*** ./components/ContestWrap/ContestWrap.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\nant0\\Document\\GitHub\\icpc-sinchon.github.io\\components\\ContestWrap\\ContestWrap.js",
    _this = undefined;


var sinchonColor = "#009D3E";
var ContestWrap_ = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ContestWrap__ContestWrap_",
  componentId: "de1725-0"
})(["position:relative;width:1043px;height:auto;border:3px solid ", ";margin:0 auto 2rem auto;padding:3.6rem 4.4rem 4.4rem 4.4rem;"], sinchonColor);
_c = ContestWrap_;

var ContestWrap = function ContestWrap(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContestWrap_, {
    className: "contest-wrap",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, _this);
};

_c2 = ContestWrap;
/* harmony default export */ __webpack_exports__["default"] = (ContestWrap);

var _c, _c2;

$RefreshReg$(_c, "ContestWrap_");
$RefreshReg$(_c2, "ContestWrap");

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

/***/ }),

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

/***/ }),

/***/ "./components/SeasonNav/SeasonNav.js":
/*!*******************************************!*\
  !*** ./components/SeasonNav/SeasonNav.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\nant0\\Document\\GitHub\\icpc-sinchon.github.io\\components\\SeasonNav\\SeasonNav.js",
    _this = undefined,
    _s = $RefreshSig$();




var SeasonNav = function SeasonNav(_ref) {
  _s();

  var onSeasonNavClick = _ref.onSeasonNavClick;
  var seasonList = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.seasonList;
  });
  var currentSeasonIdx = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.currentSeasonIdx;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SeasonNavWrap, {
    children: seasonList.map(function (elem, idx) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SeasonNavElem, {
        onClick: onSeasonNavClick,
        alt: idx,
        className: "season-nav " + (idx === currentSeasonIdx ? 'season-selected' : ""),
        children: [" ", elem]
      }, "season-nav-" + elem, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_s(SeasonNav, "DojL1TAOd/XL6/EvRiQ7zLseZg8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = SeasonNav;
var KeepCalmPreset = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["font-family:'KeepCalmMed';font-weight:normal;"]);
var SeasonNavWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SeasonNav__SeasonNavWrap",
  componentId: "sc-1s1djm4-0"
})(["padding:1rem 0 2rem 0;display:flex;white-space:nowrap;overflow-x:auto;&::-webkit-scrollbar{display:none;}@media(max-width:500px){padding:1rem 0 0rem 0;}"]);
_c2 = SeasonNavWrap;
var SeasonNavElem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SeasonNav__SeasonNavElem",
  componentId: "sc-1s1djm4-1"
})(["height:2rem;line-height:2rem;padding:0 1rem;margin-left:2.3rem;border-radius:1rem;", " color:#C8C8C8;font-size:0.85rem;cursor:pointer;&:first-child{margin-left:3.2rem;}@media(max-width:500px){&:first-child{margin-left:1.2rem;}margin-left:0.5rem;}"], KeepCalmPreset);
_c3 = SeasonNavElem;
/* harmony default export */ __webpack_exports__["default"] = (SeasonNav);

var _c, _c2, _c3;

$RefreshReg$(_c, "SeasonNav");
$RefreshReg$(_c2, "SeasonNavWrap");
$RefreshReg$(_c3, "SeasonNavElem");

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

/***/ }),

/***/ "./pages/halloffame.js":
/*!*****************************!*\
  !*** ./pages/halloffame.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_nant0_Document_GitHub_icpc_sinchon_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_nant0_Document_GitHub_icpc_sinchon_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_nant0_Document_GitHub_icpc_sinchon_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_nant0_Document_GitHub_icpc_sinchon_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_currentSeasonIdx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/currentSeasonIdx */ "./reducers/currentSeasonIdx.js");
/* harmony import */ var _reducers_currentSeasonData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/currentSeasonData */ "./reducers/currentSeasonData.js");
/* harmony import */ var _reducers_currentYear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/currentYear */ "./reducers/currentYear.js");
/* harmony import */ var _reducers_currentSeason__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/currentSeason */ "./reducers/currentSeason.js");
/* harmony import */ var _reducers_seasonList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/seasonList */ "./reducers/seasonList.js");
/* harmony import */ var _components_Arrow_SeasonSwitchArrow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Arrow/SeasonSwitchArrow */ "./components/Arrow/SeasonSwitchArrow.js");
/* harmony import */ var _components_ContestWrap_ContestItem_TextWrap_TextWrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ContestWrap/ContestItem/TextWrap/TextWrap */ "./components/ContestWrap/ContestItem/TextWrap/TextWrap.js");
/* harmony import */ var _components_ContestWrap_ContestItem_TitleWrap_TitleWrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ContestWrap/ContestItem/TitleWrap/TitleWrap */ "./components/ContestWrap/ContestItem/TitleWrap/TitleWrap.js");
/* harmony import */ var _components_ContestWrap_ContestWrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ContestWrap/ContestWrap */ "./components/ContestWrap/ContestWrap.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PreviewWrap_PreviewWrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/PreviewWrap/PreviewWrap */ "./components/PreviewWrap/PreviewWrap.js");
/* harmony import */ var _components_SeasonNav_SeasonNav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/SeasonNav/SeasonNav */ "./components/SeasonNav/SeasonNav.js");
/* harmony import */ var _components_ContestWrap_ContestItem_ItemWrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/ContestWrap/ContestItem/ItemWrap */ "./components/ContestWrap/ContestItem/ItemWrap.js");





var _jsxFileName = "C:\\Users\\nant0\\Document\\GitHub\\icpc-sinchon.github.io\\pages\\halloffame.js",
    _this = undefined,
    _s = $RefreshSig$();


















var NotoSansBold = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["font-family:'Noto Sans KR';font-weight:700;"]);
var KeepCalmPreset = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["font-family:'KeepCalmMed';font-weight:normal;"]);
var SinchonColor = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["color:#009D3E;"]);
var ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h3.withConfig({
  displayName: "halloffame__ItemTitle",
  componentId: "sc-1cmquyg-0"
})(["", " ", " margin:1em 0 0.4em 0;"], NotoSansBold, SinchonColor);
_c = ItemTitle;
var TopicTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h3.withConfig({
  displayName: "halloffame__TopicTitle",
  componentId: "sc-1cmquyg-1"
})(["", " ", " width:3rem;margin:1em 0.3rem 0.4em 0;text-align:center;align-self:baseline;background-color:#23a33d;color:white;"], NotoSansBold, SinchonColor);
_c2 = TopicTitle;
var TopicWrap = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "halloffame__TopicWrap",
  componentId: "sc-1cmquyg-2"
})(["display:flex;@media(max-width:900px){display:block;padding:0.8rem 0;}"]);
_c3 = TopicWrap;
var TableWrap = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "halloffame__TableWrap",
  componentId: "sc-1cmquyg-3"
})(["overflow-x:auto;white-space:nowrap;"]);
_c4 = TableWrap;

var HallOfFame = function HallOfFame(_ref) {
  _s();

  var seasonList_ = _ref.seasonList_,
      seasonData_ = _ref.seasonData_;
  var title = "HALL OF FAME";
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var previewContainer = document.querySelectorAll(".preview-container");
    var contestWrapHeight = document.querySelector(".contest-wrap").offsetHeight;
    previewContainer.forEach(function (ele) {
      ele.style.height = contestWrapHeight + "px";
    });
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var currentSeasonIdx = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.currentSeasonIdx;
  });
  var currentSeasonData = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.currentSeasonData;
  });
  var currentYear = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.currentYear;
  });
  var currentSeason = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.currentSeason;
  });
  var seasonList = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.seasonList;
  });

  var onSeasonNavClick = function onSeasonNavClick(e) {
    var idx = parseInt(e.target.getAttribute('alt'));
    switchSeasonData(idx);
  };

  var onArrowClick = function onArrowClick(e) {
    var alt = e.target.getAttribute('alt');
    var l_r = -1;
    if (alt === "right-arrow") l_r = 1;
    if (!seasonList[l_r + currentSeasonIdx]) return;
    switchSeasonData(l_r + currentSeasonIdx);
  };

  var switchSeasonData = function switchSeasonData(idx) {
    var season = seasonList[idx];
    fetchSeasonData(season).then(function (data) {
      dispatch(Object(_reducers_currentSeasonData__WEBPACK_IMPORTED_MODULE_8__["setCurrentSeasonData"])(data));
    });
    dispatch(Object(_reducers_currentYear__WEBPACK_IMPORTED_MODULE_9__["setCurrentYear"])(season.split(' ')[0]));
    dispatch(Object(_reducers_currentSeason__WEBPACK_IMPORTED_MODULE_10__["setCurrentSeason"])(season.split(' ')[1]));
    dispatch(Object(_reducers_currentSeasonIdx__WEBPACK_IMPORTED_MODULE_7__["setCurrentSeasonIdx"])(idx));
    adjustSelectedNav(idx);
  };

  var adjustSelectedNav = function adjustSelectedNav(idx) {
    document.querySelectorAll('.season-nav').forEach(function (ele) {
      if (ele.getAttribute('alt') == idx) {
        ele.classList.add('season-selected');
      } else {
        ele.classList.remove('season-selected');
      }
    });
  };

  var fetchSeasonData = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_nant0_Document_GitHub_icpc_sinchon_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_nant0_Document_GitHub_icpc_sinchon_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(season) {
      var response, data;
      return C_Users_nant0_Document_GitHub_icpc_sinchon_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat("https://icpc-sinchon.github.io", "/history/halloffame/").concat(season, ".json"));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              return _context.abrupt("return", []);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function fetchSeasonData(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_16__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Hall Of Fame | ICPC Sinchon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:locale",
        content: "ko_KR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "https://icpc-sinchon.github.io/halloffame"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: "ICPC Sinchon Algorithm Camp\uC5D0 \uAE30\uC5EC\uB97C \uD574\uC8FC\uC2E0 \uBD84\uB4E4\uACFC Camp Contest\uC5D0\uC11C \uC6B0\uC218\uD55C \uC131\uC801\uC744 \uAC70\uB454 \uC0AC\uB78C\uB4E4\uC744 \uAE30\uB9BD\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "https://api.suapc.kr/res/c-4.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SeasonNav_SeasonNav__WEBPACK_IMPORTED_MODULE_18__["default"], {
        onSeasonNavClick: onSeasonNavClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PreviewWrap_PreviewWrap__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContestWrap_ContestWrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Arrow_SeasonSwitchArrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
          onArrowClick: onArrowClick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContestWrap_ContestItem_TitleWrap_TitleWrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
          isSuapc: false,
          title: title,
          year: currentYear,
          season: currentSeason
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContestWrap_ContestItem_TextWrap_TextWrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          title: currentSeasonData.length !== 0 ? "명예의 전당 소개" : "이 곳의 주인공이 되세요",
          content: currentSeasonData.length !== 0 ? "ICPC Sinchon Algorithm Camp에 기여를 해주신 분들과 Camp Contest에서 우수한 성적을 거둔 사람들을 기립니다." : "이 곳의 주인공이 되세요"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, _this), currentSeasonData.studies ? Array.from(currentSeasonData.studies).map(function (study) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TopicWrap, {
            id: study.topic,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TopicTitle, {
              children: study.topic
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                width: "100%"
              },
              children: [study.lecturers ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContestWrap_ContestItem_ItemWrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                className: "lecturer-wrap",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemTitle, {
                  className: "hof-item-title",
                  children: "\uBA58\uD1A0 \uBC0F \uAC15\uC0AC\uC9C4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TableWrap, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          style: {
                            width: "7rem"
                          },
                          children: "\uBD84\uB958"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 187,
                          columnNumber: 57
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          children: "\uC774\uB984"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 188,
                          columnNumber: 57
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          style: {
                            width: "10rem"
                          },
                          children: "BOJ"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 189,
                          columnNumber: 57
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          style: {
                            width: "7rem"
                          },
                          children: "\uC18C\uC18D"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 190,
                          columnNumber: 57
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 186,
                        columnNumber: 53
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                      children: [Array.from(study.lecturers).map(function (lecturer) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: "\uAC15\uC0AC"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 197,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: lecturer.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 198,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: lecturer.handle
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 199,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: lecturer.school
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 200,
                            columnNumber: 65
                          }, _this)]
                        }, 'lecturer-' + lecturer.name, true, {
                          fileName: _jsxFileName,
                          lineNumber: 196,
                          columnNumber: 61
                        }, _this);
                      }), study.mentors ? Array.from(study.mentors).map(function (lecturer) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: "\uBA58\uD1A0"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 207,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: lecturer.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 208,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: lecturer.handle
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 209,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: lecturer.school
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 210,
                            columnNumber: 65
                          }, _this)]
                        }, 'mentor-' + lecturer.name, true, {
                          fileName: _jsxFileName,
                          lineNumber: 206,
                          columnNumber: 61
                        }, _this);
                      }) : ""]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 49
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 56
              }, _this) : "", study.contests ? Array.from(study.contests).map(function (contest) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [contest.awards ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContestWrap_ContestItem_ItemWrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemTitle, {
                      className: "hof-item-title",
                      children: [contest.contest_name, " \uC218\uC0C1\uC790"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 53
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TableWrap, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 53
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            style: {
                              width: "3rem"
                            },
                            children: "\uC21C\uC704"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 227,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            children: "\uC218\uC0C1\uC790"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 228,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            style: {
                              width: "10rem"
                            },
                            children: "BOJ"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 229,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            style: {
                              width: "7rem"
                            },
                            children: "\uC18C\uC18D"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 230,
                            columnNumber: 65
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 226,
                          columnNumber: 61
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 225,
                        columnNumber: 57
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                        children: Array.from(contest.awards).map(function (award, idx) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: [idx + 1, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sup", {
                                children: idx + 1 === 1 ? "st" : idx + 1 === 2 ? "nd" : "rd"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 237,
                                columnNumber: 86
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 237,
                              columnNumber: 73
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: award.name
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 238,
                              columnNumber: 73
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: award.handle
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 239,
                              columnNumber: 73
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: award.school
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 240,
                              columnNumber: 73
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 236,
                            columnNumber: 69
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 233,
                        columnNumber: 57
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 224,
                      columnNumber: 53
                    }, _this)]
                  }, contest.contest_name + '-award', true, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 67
                  }, _this) : "", contest.problem_list ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContestWrap_ContestItem_ItemWrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemTitle, {
                      className: "hof-item-title",
                      children: [contest.contest_name, " \uAE30\uCD9C \uBB38\uD56D"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 53
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            style: {
                              width: "1rem"
                            },
                            children: "#"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 253,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            children: "\uBB38\uC81C"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 254,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            children: "\uCD9C\uC81C\uC790"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 255,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            style: {
                              width: "5rem"
                            },
                            children: "\uC18C\uC18D"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 256,
                            columnNumber: 65
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 252,
                          columnNumber: 61
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 251,
                        columnNumber: 57
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                        children: Array.from(contest.problem_list).map(function (problem, idx) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: String.fromCharCode(idx + 65)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 263,
                              columnNumber: 73
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: problem.link,
                                style: {
                                  textDecoration: 'underline'
                                },
                                children: problem.problem_name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 264,
                                columnNumber: 77
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 264,
                              columnNumber: 73
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: problem.organizer.name
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 265,
                              columnNumber: 73
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: problem.organizer.school
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 266,
                              columnNumber: 73
                            }, _this)]
                          }, problem.problem_name, true, {
                            fileName: _jsxFileName,
                            lineNumber: 262,
                            columnNumber: 69
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 259,
                        columnNumber: 57
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 250,
                      columnNumber: 53
                    }, _this)]
                  }, contest.contest_name + '-past-problem', true, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 73
                  }, _this) : ""]
                }, void 0, true);
              }) : ""]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 33
            }, _this)]
          }, study.topic, true, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 29
          }, _this);
        }) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }, _this)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 9
  }, _this);
};

_s(HallOfFame, "ep0BzandxK8atexvT+UyqQzVqY0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c5 = HallOfFame;

HallOfFame.getInitialProps = /*#__PURE__*/function () {
  var _ref4 = Object(C_Users_nant0_Document_GitHub_icpc_sinchon_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_nant0_Document_GitHub_icpc_sinchon_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref3) {
    var window, store, response0, data0, response1, data1;
    return C_Users_nant0_Document_GitHub_icpc_sinchon_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            window = _ref3.window, store = _ref3.store;
            _context2.prev = 1;
            _context2.next = 4;
            return fetch("".concat("https://icpc-sinchon.github.io", "/history/halloffame/").concat("2021 Winter", ".json"));

          case 4:
            response0 = _context2.sent;
            _context2.next = 7;
            return response0.json();

          case 7:
            data0 = _context2.sent;
            _context2.next = 10;
            return fetch("".concat("https://icpc-sinchon.github.io", "/history/halloffame/list.json"));

          case 10:
            response1 = _context2.sent;
            _context2.next = 13;
            return response1.json();

          case 13:
            data1 = _context2.sent;
            store.dispatch(Object(_reducers_seasonList__WEBPACK_IMPORTED_MODULE_11__["setSeasonList"])(data1));
            store.dispatch(Object(_reducers_currentSeasonData__WEBPACK_IMPORTED_MODULE_8__["setCurrentSeasonData"])(data0));
            store.dispatch(Object(_reducers_currentSeason__WEBPACK_IMPORTED_MODULE_10__["setCurrentSeason"])(data0.season));
            store.dispatch(Object(_reducers_currentYear__WEBPACK_IMPORTED_MODULE_9__["setCurrentYear"])(data0.year));
            store.dispatch(Object(_reducers_currentSeasonIdx__WEBPACK_IMPORTED_MODULE_7__["setCurrentSeasonIdx"])(data1.indexOf("2021 Winter")));
            return _context2.abrupt("return", {
              seasonData_: data0,
              seasonList_: data1
            });

          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 22]]);
  }));

  return function (_x2) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (HallOfFame);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ItemTitle");
$RefreshReg$(_c2, "TopicTitle");
$RefreshReg$(_c3, "TopicWrap");
$RefreshReg$(_c4, "TableWrap");
$RefreshReg$(_c5, "HallOfFame");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnJvdy9TZWFzb25Td2l0Y2hBcnJvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250ZXN0V3JhcC9Db250ZXN0SXRlbS9JdGVtV3JhcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250ZXN0V3JhcC9Db250ZXN0SXRlbS9UZXh0V3JhcC9UZXh0V3JhcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250ZXN0V3JhcC9Db250ZXN0SXRlbS9UaXRsZVdyYXAvVGl0bGVXcmFwLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRlc3RXcmFwL0NvbnRlc3RXcmFwLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1ByZXZpZXdXcmFwL1ByZXZpZXdXcmFwLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXNvbk5hdi9TZWFzb25OYXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hhbGxvZmZhbWUuanMiXSwibmFtZXMiOlsiU2Vhc29uU3dpdGNoQXJyb3ciLCJvbkFycm93Q2xpY2siLCJzZWFzb25MaXN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImN1cnJlbnRTZWFzb25JZHgiLCJzaG93TGVmdEFycm93Iiwic2hvd1JpZ2h0QXJyb3ciLCJsZW5ndGgiLCJWaXNpYmlsaXR5SGlkZSIsIkFycm93V3JhcCIsInN0eWxlZCIsImRpdiIsIkFycm93IiwiY3NzIiwiQXJyb3dMZWZ0IiwiaW1nIiwiQXJyb3dSaWdodCIsIkl0ZW1XcmFwXyIsIkl0ZW1XcmFwIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsIlNpbmNob25Db2xvciIsIk5vdG9TYW5zQm9sZCIsIktlZXBDYWxtUHJlc2V0IiwiSXRlbVRpdGxlIiwiaDMiLCJJdGVtQ29udGVudCIsInAiLCJUZXh0V3JhcCIsInRpdGxlIiwiY29udGVudCIsIlRpdGxlV3JhcF8iLCJUaXRsZSIsImgxIiwiU3ViVGl0bGUiLCJUaXRsZVdyYXAiLCJpc1N1YXBjIiwieWVhciIsInNlYXNvbiIsInNpbmNob25Db2xvciIsIkNvbnRlc3RXcmFwXyIsIkNvbnRlc3RXcmFwIiwiUHJldmlld1dyYXAiLCJzaG93TGVmdFByZXZpZXciLCJzaG93UmlnaHRQcmV2aWV3IiwiQ29tbW9uIiwiTGVmdFByZXZpZXciLCJSaWdodFByZXZpZXciLCJTZWFzb25OYXYiLCJvblNlYXNvbk5hdkNsaWNrIiwibWFwIiwiZWxlbSIsImlkeCIsIlNlYXNvbk5hdldyYXAiLCJTZWFzb25OYXZFbGVtIiwiVG9waWNUaXRsZSIsIlRvcGljV3JhcCIsIlRhYmxlV3JhcCIsIkhhbGxPZkZhbWUiLCJzZWFzb25MaXN0XyIsInNlYXNvbkRhdGFfIiwidXNlRWZmZWN0IiwicHJldmlld0NvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRlc3RXcmFwSGVpZ2h0IiwicXVlcnlTZWxlY3RvciIsIm9mZnNldEhlaWdodCIsImZvckVhY2giLCJlbGUiLCJoZWlnaHQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY3VycmVudFNlYXNvbkRhdGEiLCJjdXJyZW50WWVhciIsImN1cnJlbnRTZWFzb24iLCJlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzd2l0Y2hTZWFzb25EYXRhIiwiYWx0IiwibF9yIiwiZmV0Y2hTZWFzb25EYXRhIiwidGhlbiIsImRhdGEiLCJzZXRDdXJyZW50U2Vhc29uRGF0YSIsInNldEN1cnJlbnRZZWFyIiwic3BsaXQiLCJzZXRDdXJyZW50U2Vhc29uIiwic2V0Q3VycmVudFNlYXNvbklkeCIsImFkanVzdFNlbGVjdGVkTmF2IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZmV0Y2giLCJwcm9jZXNzIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImVycm9yIiwic3R1ZGllcyIsIkFycmF5IiwiZnJvbSIsInN0dWR5IiwidG9waWMiLCJ3aWR0aCIsImxlY3R1cmVycyIsImxlY3R1cmVyIiwibmFtZSIsImhhbmRsZSIsInNjaG9vbCIsIm1lbnRvcnMiLCJjb250ZXN0cyIsImNvbnRlc3QiLCJhd2FyZHMiLCJjb250ZXN0X25hbWUiLCJhd2FyZCIsInByb2JsZW1fbGlzdCIsInByb2JsZW0iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJsaW5rIiwidGV4dERlY29yYXRpb24iLCJwcm9ibGVtX25hbWUiLCJvcmdhbml6ZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJ3aW5kb3ciLCJzdG9yZSIsInJlc3BvbnNlMCIsImRhdGEwIiwicmVzcG9uc2UxIiwiZGF0YTEiLCJzZXRTZWFzb25MaXN0IiwiaW5kZXhPZiIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBc0I7QUFBQTs7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBRTVDLE1BQU1DLFVBQVUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRixVQUFWO0FBQUEsR0FBTixDQUE5QjtBQUNBLE1BQU1HLGdCQUFnQixHQUFHRiwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLGdCQUFWO0FBQUEsR0FBTixDQUFwQztBQUVBLE1BQU1DLGFBQWEsR0FBR0QsZ0JBQWdCLEtBQUssQ0FBM0M7QUFDQSxNQUFNRSxjQUFjLEdBQUdGLGdCQUFnQixLQUFLSCxVQUFVLENBQUNNLE1BQVgsR0FBb0IsQ0FBaEU7QUFFQSxzQkFBTyxxRUFBQyxTQUFEO0FBQVcsYUFBUyxFQUFDLFlBQXJCO0FBQUEsNEJBQ0g7QUFFSSxhQUFPLEVBQUVQLFlBRmI7QUFHSSxTQUFHLEVBQUMsWUFIUjtBQUlJLFNBQUcsRUFBQywyQkFKUjtBQUFBLFlBQ1MsQ0FBQ0ssYUFBRCxHQUFpQkcsY0FBakIsR0FB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QUFvQixDQUFDNEMsS0FBRCxDQUFuQztBQUNBRixpQkFBSyxDQUFDekQsUUFBTixDQUFla0IsaUZBQWdCLENBQUN5QyxLQUFLLENBQUM1RixNQUFQLENBQS9CO0FBQ0EwRixpQkFBSyxDQUFDekQsUUFBTixDQUFlZ0IsNEVBQWMsQ0FBQzJDLEtBQUssQ0FBQzdGLElBQVAsQ0FBN0I7QUFDQTJGLGlCQUFLLENBQUN6RCxRQUFOLENBQWVtQixzRkFBbUIsQ0FBQzBDLEtBQUssQ0FBQ0UsT0FBTixDQUFjdEMsYUFBZCxDQUFELENBQWxDO0FBWHFCLDhDQWFkO0FBQ0hwQyx5QkFBVyxFQUFFc0UsS0FEVjtBQUVIdkUseUJBQVcsRUFBRXlFO0FBRlYsYUFiYzs7QUFBQTtBQUFBO0FBQUE7QUFtQnJCakMsbUJBQU8sQ0FBQ29DLEdBQVI7O0FBbkJxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFzQmU3RSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9oYWxsb2ZmYW1lLjkyNGJhN2FiZDE2ZmJjZTE2ZTAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgU2Vhc29uU3dpdGNoQXJyb3cgPSAoeyBvbkFycm93Q2xpY2sgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHNlYXNvbkxpc3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zZWFzb25MaXN0KVxyXG4gICAgY29uc3QgY3VycmVudFNlYXNvbklkeCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1cnJlbnRTZWFzb25JZHgpXHJcblxyXG4gICAgY29uc3Qgc2hvd0xlZnRBcnJvdyA9IGN1cnJlbnRTZWFzb25JZHggIT09IDBcclxuICAgIGNvbnN0IHNob3dSaWdodEFycm93ID0gY3VycmVudFNlYXNvbklkeCAhPT0gc2Vhc29uTGlzdC5sZW5ndGggLSAxXHJcblxyXG4gICAgcmV0dXJuIDxBcnJvd1dyYXAgY2xhc3NOYW1lPVwiYXJyb3ctd3JhcFwiPlxyXG4gICAgICAgIDxBcnJvd0xlZnRcclxuICAgICAgICAgICAgY3NzPXshc2hvd0xlZnRBcnJvdyA/IFZpc2liaWxpdHlIaWRlIDogXCJcIn1cclxuICAgICAgICAgICAgb25DbGljaz17b25BcnJvd0NsaWNrfVxyXG4gICAgICAgICAgICBhbHQ9XCJsZWZ0LWFycm93XCJcclxuICAgICAgICAgICAgc3JjPVwicmVzL2J1dHRvbi9hcnJvdy1sZWZ0LnN2Z1wiIC8+XHJcbiAgICAgICAgPEFycm93UmlnaHRcclxuICAgICAgICAgICAgY3NzPXshc2hvd1JpZ2h0QXJyb3cgPyBWaXNpYmlsaXR5SGlkZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQXJyb3dDbGlja31cclxuICAgICAgICAgICAgYWx0PVwicmlnaHQtYXJyb3dcIlxyXG4gICAgICAgICAgICBzcmM9XCJyZXMvYnV0dG9uL2Fycm93LXJpZ2h0LnN2Z1wiIC8+XHJcbiAgICA8L0Fycm93V3JhcD5cclxufVxyXG5cclxuY29uc3QgQXJyb3dXcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjcwcHg7XHJcbiAgICBsZWZ0OiAtMTMwcHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMjYwcHgpO1xyXG5cclxuYFxyXG5cclxuY29uc3QgQXJyb3cgPSBjc3NgXHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuYFxyXG5jb25zdCBBcnJvd0xlZnQgPSBzdHlsZWQuaW1nYFxyXG4gICAgJHtBcnJvd31cclxuYFxyXG5cclxuY29uc3QgQXJyb3dSaWdodCA9IHN0eWxlZC5pbWdgXHJcbiAgICAke0Fycm93fVxyXG5gXHJcblxyXG5jb25zdCBWaXNpYmlsaXR5SGlkZSA9IGNzc2BcclxuXHR2aXNpYmlsaXR5OmhpZGRlbjtcclxuYFxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFzb25Td2l0Y2hBcnJvdzsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgSXRlbVdyYXBfID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG5gXHJcblxyXG5jb25zdCBJdGVtV3JhcCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIHN0eWxlIH0pID0+IHtcclxuICAgIHJldHVybiAoPEl0ZW1XcmFwXyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfSA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9JdGVtV3JhcF8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtV3JhcCIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBJdGVtV3JhcCBmcm9tICcuLi9JdGVtV3JhcCdcclxuXHJcbmNvbnN0IFNpbmNob25Db2xvciA9IGNzc2Bjb2xvcjogIzAwOUQzRTtgXHJcbmNvbnN0IE5vdG9TYW5zQm9sZCA9IGNzc2BcclxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmBcclxuY29uc3QgS2VlcENhbG1QcmVzZXQgPSBjc3NgXHJcbiAgICBmb250LWZhbWlseTogJ0tlZXBDYWxtTWVkJztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbmBcclxuXHJcbmNvbnN0IEl0ZW1UaXRsZSA9IHN0eWxlZC5oM2BcclxuICAgICR7Tm90b1NhbnNCb2xkfVxyXG4gICAgJHtTaW5jaG9uQ29sb3J9XHJcblxyXG4gICAgbWFyZ2luOiAxZW0gMCAwLjRlbSAwO1xyXG5gXHJcblxyXG5jb25zdCBJdGVtQ29udGVudCA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS1InO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICBtYXJnaW46IDA7XHJcblx0QG1lZGlhIChtYXgtd2lkdGg6IDYzM3B4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IFRleHRXcmFwID0gKHsgdGl0bGUsIGNvbnRlbnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SXRlbVdyYXA+XHJcbiAgICAgICAgICAgIDxJdGVtVGl0bGU+e3RpdGxlfTwvSXRlbVRpdGxlPlxyXG4gICAgICAgICAgICA8SXRlbUNvbnRlbnQ+e2NvbnRlbnR9PC9JdGVtQ29udGVudD5cclxuICAgICAgICA8L0l0ZW1XcmFwPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0V3JhcCIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBTaW5jaG9uQ29sb3IgPSBjc3NgY29sb3I6ICMwMDlEM0U7YFxyXG5jb25zdCBOb3RvU2Fuc0JvbGQgPSBjc3NgXHJcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucyBLUic7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5gXHJcbmNvbnN0IEtlZXBDYWxtUHJlc2V0ID0gY3NzYFxyXG4gICAgZm9udC1mYW1pbHk6ICdLZWVwQ2FsbU1lZCc7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG5gXHJcblxyXG5jb25zdCBUaXRsZVdyYXBfID0gc3R5bGVkLmRpdmBcclxuXHJcbmBcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gICAgJHtLZWVwQ2FsbVByZXNldH1cclxuICAgICR7U2luY2hvbkNvbG9yfVxyXG4gICAgZm9udC1zaXplOiAyLjZlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wOHJlbTtcclxuICAgIFxyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNDcwcHgpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi42cmVtO1xyXG5cclxuICAgIH1cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDQwMHB4KXtcclxuXHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLnBgXHJcbiAgICAke1NpbmNob25Db2xvcn1cclxuXHJcbiAgICBtYXJnaW46IDAgMCAzcmVtIDA7XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNDcwcHgpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDMyMHB4KXtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IFRpdGxlV3JhcCA9ICh7IHRpdGxlLCBpc1N1YXBjLCB5ZWFyLCBzZWFzb24gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGl0bGVXcmFwXz5cclxuICAgICAgICAgICAgPFRpdGxlPnt0aXRsZX08L1RpdGxlPlxyXG4gICAgICAgICAgICB7aXNTdWFwYyA/XHJcbiAgICAgICAgICAgICAgICA8U3ViVGl0bGUgY3NzPXtOb3RvU2Fuc0JvbGR9Pnt5ZWFyfSDsi6DstIzsp4Dsl60g64yA7ZWZ6rWQIDxiciBjbGFzc05hbWU9XCJzaG93LWlmLXNtYWxsXCIgLz7tlITroZzqt7jrnpjrsI0g64+Z7JWE66asIDxiciBjbGFzc05hbWU9XCJzaG93LWlmLW1vYmlsZVwiIC8+7Jew7ZWpIHtzZWFzb24gPT09IFwiV2ludGVyXCIgPyBcIuqyqOyauFwiIDogXCLsl6zrpoRcIn0g64yA7ZqMPC9TdWJUaXRsZT5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxTdWJUaXRsZT57eWVhcn0gSUNQQyBTaW5jaG9uIHtzZWFzb259IEFsZ29yaXRobSBDYW1wIENvbnRlc3Q8L1N1YlRpdGxlPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9UaXRsZVdyYXBfPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZVdyYXAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5jb25zdCBzaW5jaG9uQ29sb3IgPSBgIzAwOUQzRWBcclxuXHJcbmNvbnN0IENvbnRlc3RXcmFwXyA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgd2lkdGg6IDEwNDNweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICR7c2luY2hvbkNvbG9yfTtcclxuXHJcbiAgICBtYXJnaW46IDAgYXV0byAycmVtIGF1dG87XHJcbiAgICBwYWRkaW5nOiAzLjZyZW0gNC40cmVtIDQuNHJlbSA0LjRyZW07XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlc3RXcmFwID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGVzdFdyYXBfIGNsYXNzTmFtZT17XCJjb250ZXN0LXdyYXBcIn0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRlc3RXcmFwXz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVzdFdyYXAiLCJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgUHJldmlld1dyYXAgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFNlYXNvbklkeCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1cnJlbnRTZWFzb25JZHgpXHJcbiAgICBjb25zdCBzZWFzb25MaXN0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2Vhc29uTGlzdClcclxuXHJcbiAgICBjb25zdCBzaG93TGVmdFByZXZpZXcgPSBjdXJyZW50U2Vhc29uSWR4ICE9PSAwXHJcbiAgICBjb25zdCBzaG93UmlnaHRQcmV2aWV3ID0gY3VycmVudFNlYXNvbklkeCAhPT0gc2Vhc29uTGlzdC5sZW5ndGggLSAxXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TGVmdFByZXZpZXdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJwcmV2aWV3LWNvbnRhaW5lciBsZWZ0LXByZXZpZXdcIn1cclxuICAgICAgICAgICAgICAgIGNzcz17IXNob3dMZWZ0UHJldmlldyA/IFZpc2liaWxpdHlIaWRlIDogXCJcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJpZ2h0UHJldmlld1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInByZXZpZXctY29udGFpbmVyIHJpZ2h0LXByZXZpZXdcIn1cclxuICAgICAgICAgICAgICAgIGNzcz17IXNob3dSaWdodFByZXZpZXcgPyBWaXNpYmlsaXR5SGlkZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdXcmFwXHJcblxyXG5jb25zdCBDb21tb24gPSBjc3NgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAzcmVtIGF1dG87XHJcbiAgICBwYWRkaW5nOiAzcmVtIDA7XHJcblxyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwOUQzRTtcclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDIzMDBweCl7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDQzcHggLSAyNjBweCAtIDU3cHggLSA1N3B4KSAvIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDE1MjJweCl7XHJcbiAgICAgICAgJHsnJyAvKiBkaXNwbGF5OiBub25lOyAqL31cclxuICAgIH1cclxuYFxyXG4vLyAxNTIycHgg66eI7KeA64W47ISgXHJcbmNvbnN0IExlZnRQcmV2aWV3ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTIwcHggLSAxMzBweCAtIDU3cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIFxyXG4gICAgd2lkdGg6IGNhbGMoMTE1MHB4IC0gNTIwcHggLSAxMzBweCAtIDU3cHgpO1xyXG4gICAgXHJcbiAgICAke0NvbW1vbn1cclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG5gXHJcblxyXG5jb25zdCBSaWdodFByZXZpZXcgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IGNhbGMoNTAlIC0gNTIwcHggLSAxMzBweCAtIDU3cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCsxMDAlKTtcclxuICAgIFxyXG4gICAgd2lkdGg6IGNhbGMoMTE1MHB4IC0gNTIwcHggLSAxMzBweCAtIDU3cHgpO1xyXG5cclxuICAgICR7Q29tbW9ufVxyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG5gXHJcblxyXG5jb25zdCBWaXNpYmlsaXR5SGlkZSA9IGNzc2BcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcbmBcclxuIiwiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcblxyXG5jb25zdCBTZWFzb25OYXYgPSAoeyBvblNlYXNvbk5hdkNsaWNrIH0pID0+IHtcclxuICAgIGNvbnN0IHNlYXNvbkxpc3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zZWFzb25MaXN0KVxyXG4gICAgY29uc3QgY3VycmVudFNlYXNvbklkeCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1cnJlbnRTZWFzb25JZHgpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2Vhc29uTmF2V3JhcD5cclxuICAgICAgICAgICAge3NlYXNvbkxpc3QubWFwKChlbGVtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXNvbk5hdkVsZW0ga2V5PXtcInNlYXNvbi1uYXYtXCIgKyBlbGVtfSBvbkNsaWNrPXtvblNlYXNvbk5hdkNsaWNrfSBhbHQ9e2lkeH0gY2xhc3NOYW1lPXtcInNlYXNvbi1uYXYgXCIgKyAoaWR4ID09PSBjdXJyZW50U2Vhc29uSWR4ID8gJ3NlYXNvbi1zZWxlY3RlZCcgOiBcIlwiKX0gPiB7ZWxlbX08L1NlYXNvbk5hdkVsZW0+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU2Vhc29uTmF2V3JhcD5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgS2VlcENhbG1QcmVzZXQgPSBjc3NgXHJcbiAgICBmb250LWZhbWlseTogJ0tlZXBDYWxtTWVkJztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbmBcclxuXHJcbmNvbnN0IFNlYXNvbk5hdldyYXAgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogMXJlbSAwIDJyZW0gMDtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDAgMHJlbSAwO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBTZWFzb25OYXZFbGVtID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG5cclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyLjNyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG5cclxuICAgICR7S2VlcENhbG1QcmVzZXR9XHJcbiAgICBjb2xvcjogI0M4QzhDODtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXNvbk5hdiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IHNldEN1cnJlbnRTZWFzb25JZHggfSBmcm9tICcuLi9yZWR1Y2Vycy9jdXJyZW50U2Vhc29uSWR4J1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50U2Vhc29uRGF0YSB9IGZyb20gJy4uL3JlZHVjZXJzL2N1cnJlbnRTZWFzb25EYXRhJ1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50WWVhciB9IGZyb20gJy4uL3JlZHVjZXJzL2N1cnJlbnRZZWFyJ1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50U2Vhc29uIH0gZnJvbSAnLi4vcmVkdWNlcnMvY3VycmVudFNlYXNvbidcclxuaW1wb3J0IHsgc2V0U2Vhc29uTGlzdCB9IGZyb20gJy4uL3JlZHVjZXJzL3NlYXNvbkxpc3QnXHJcblxyXG5pbXBvcnQgU2Vhc29uU3dpdGNoQXJyb3cgZnJvbSAnLi4vY29tcG9uZW50cy9BcnJvdy9TZWFzb25Td2l0Y2hBcnJvdydcclxuaW1wb3J0IFRleHRXcmFwIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGVzdFdyYXAvQ29udGVzdEl0ZW0vVGV4dFdyYXAvVGV4dFdyYXAnXHJcbmltcG9ydCBUaXRsZVdyYXAgZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXN0V3JhcC9Db250ZXN0SXRlbS9UaXRsZVdyYXAvVGl0bGVXcmFwJ1xyXG5pbXBvcnQgQ29udGVzdFdyYXAgZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXN0V3JhcC9Db250ZXN0V3JhcCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IFByZXZpZXdXcmFwIGZyb20gJy4uL2NvbXBvbmVudHMvUHJldmlld1dyYXAvUHJldmlld1dyYXAnXHJcbmltcG9ydCBTZWFzb25OYXYgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFzb25OYXYvU2Vhc29uTmF2J1xyXG5pbXBvcnQgSXRlbVdyYXAgZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXN0V3JhcC9Db250ZXN0SXRlbS9JdGVtV3JhcCdcclxuXHJcbmNvbnN0IE5vdG9TYW5zQm9sZCA9IGNzc2BcclxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmBcclxuXHJcbmNvbnN0IEtlZXBDYWxtUHJlc2V0ID0gY3NzYFxyXG4gICAgZm9udC1mYW1pbHk6ICdLZWVwQ2FsbU1lZCc7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG5gXHJcblxyXG5jb25zdCBTaW5jaG9uQ29sb3IgPSBjc3NgXHJcbiAgICBjb2xvcjogIzAwOUQzRTtcclxuYFxyXG5cclxuY29uc3QgSXRlbVRpdGxlID0gc3R5bGVkLmgzYFxyXG4gICAgJHtOb3RvU2Fuc0JvbGR9XHJcbiAgICAke1NpbmNob25Db2xvcn1cclxuXHJcbiAgICBtYXJnaW46IDFlbSAwIDAuNGVtIDA7XHJcbmBcclxuXHJcbmNvbnN0IFRvcGljVGl0bGUgPSBzdHlsZWQuaDNgXHJcbiAgICAke05vdG9TYW5zQm9sZH1cclxuICAgICR7U2luY2hvbkNvbG9yfVxyXG5cclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgbWFyZ2luOiAxZW0gMC4zcmVtIDAuNGVtIDA7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzYTMzZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuYFxyXG5cclxuY29uc3QgVG9waWNXcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAwLjhyZW0gMDtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgVGFibGVXcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5gXHJcblxyXG5jb25zdCBIYWxsT2ZGYW1lID0gKHsgc2Vhc29uTGlzdF8sIHNlYXNvbkRhdGFfIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGBIQUxMIE9GIEZBTUVgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgcHJldmlld0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJldmlldy1jb250YWluZXJcIilcclxuICAgICAgICBsZXQgY29udGVzdFdyYXBIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlc3Qtd3JhcFwiKS5vZmZzZXRIZWlnaHRcclxuICAgICAgICBwcmV2aWV3Q29udGFpbmVyLmZvckVhY2goZWxlID0+IHtcclxuICAgICAgICAgICAgZWxlLnN0eWxlLmhlaWdodCA9IGNvbnRlc3RXcmFwSGVpZ2h0ICsgXCJweFwiXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGN1cnJlbnRTZWFzb25JZHggPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jdXJyZW50U2Vhc29uSWR4KVxyXG4gICAgY29uc3QgY3VycmVudFNlYXNvbkRhdGEgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jdXJyZW50U2Vhc29uRGF0YSlcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY3VycmVudFllYXIpXHJcbiAgICBjb25zdCBjdXJyZW50U2Vhc29uID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY3VycmVudFNlYXNvbilcclxuICAgIGNvbnN0IHNlYXNvbkxpc3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zZWFzb25MaXN0KVxyXG5cclxuXHJcbiAgICBjb25zdCBvblNlYXNvbk5hdkNsaWNrID0gZSA9PiB7XHJcbiAgICAgICAgbGV0IGlkeCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnYWx0JykpXHJcblxyXG4gICAgICAgIHN3aXRjaFNlYXNvbkRhdGEoaWR4KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQXJyb3dDbGljayA9IGUgPT4ge1xyXG5cclxuICAgICAgICBsZXQgYWx0ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdhbHQnKVxyXG4gICAgICAgIGxldCBsX3IgPSAtMTtcclxuICAgICAgICBpZiAoYWx0ID09PSBcInJpZ2h0LWFycm93XCIpIGxfciA9IDE7XHJcblxyXG4gICAgICAgIGlmICghc2Vhc29uTGlzdFtsX3IgKyBjdXJyZW50U2Vhc29uSWR4XSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzd2l0Y2hTZWFzb25EYXRhKGxfciArIGN1cnJlbnRTZWFzb25JZHgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3dpdGNoU2Vhc29uRGF0YSA9IGlkeCA9PiB7XHJcbiAgICAgICAgbGV0IHNlYXNvbiA9IHNlYXNvbkxpc3RbaWR4XVxyXG5cclxuICAgICAgICBmZXRjaFNlYXNvbkRhdGEoc2Vhc29uKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50U2Vhc29uRGF0YShkYXRhKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50WWVhcihzZWFzb24uc3BsaXQoJyAnKVswXSkpXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudFNlYXNvbihzZWFzb24uc3BsaXQoJyAnKVsxXSkpXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudFNlYXNvbklkeChpZHgpKVxyXG5cclxuICAgICAgICBhZGp1c3RTZWxlY3RlZE5hdihpZHgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRqdXN0U2VsZWN0ZWROYXYgPSBpZHggPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFzb24tbmF2JykuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlLmdldEF0dHJpYnV0ZSgnYWx0JykgPT0gaWR4KSB7XHJcbiAgICAgICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZCgnc2Vhc29uLXNlbGVjdGVkJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFzb24tc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZXRjaFNlYXNvbkRhdGEgPSBhc3luYyAoc2Vhc29uKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMfS9oaXN0b3J5L2hhbGxvZmZhbWUvJHtzZWFzb259Lmpzb25gKVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+SGFsbCBPZiBGYW1lIHwgSUNQQyBTaW5jaG9uPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImtvX0tSXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vaWNwYy1zaW5jaG9uLmdpdGh1Yi5pby9oYWxsb2ZmYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSUNQQyBTaW5jaG9uIEFsZ29yaXRobSBDYW1w7JeQIOq4sOyXrOulvCDtlbTso7zsi6Ag67aE65Ok6rO8IENhbXAgQ29udGVzdOyXkOyEnCDsmrDsiJjtlZwg7ISx7KCB7J2EIOqxsOuRlCDsgqzrnozrk6TsnYQg6riw66a964uI64ukLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vYXBpLnN1YXBjLmtyL3Jlcy9jLTQuanBnXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFNlYXNvbk5hdlxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2Vhc29uTmF2Q2xpY2s9e29uU2Vhc29uTmF2Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFByZXZpZXdXcmFwIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVzdFdyYXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXNvblN3aXRjaEFycm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQXJyb3dDbGljaz17b25BcnJvd0NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlV3JhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1N1YXBjPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyPXtjdXJyZW50WWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uPXtjdXJyZW50U2Vhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRXcmFwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjdXJyZW50U2Vhc29uRGF0YS5sZW5ndGggIT09IDAgPyBcIuuqheyYiOydmCDsoITri7kg7IaM6rCcXCIgOiBcIuydtCDqs7PsnZgg7KO87J246rO17J20IOuQmOyEuOyalFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtjdXJyZW50U2Vhc29uRGF0YS5sZW5ndGggIT09IDAgPyBcIklDUEMgU2luY2hvbiBBbGdvcml0aG0gQ2FtcOyXkCDquLDsl6zrpbwg7ZW07KO87IugIOu2hOuTpOqzvCBDYW1wIENvbnRlc3Tsl5DshJwg7Jqw7IiY7ZWcIOyEseyggeydhCDqsbDrkZQg7IKs656M65Ok7J2EIOq4sOumveuLiOuLpC5cIiA6IFwi7J20IOqzs+ydmCDso7zsnbjqs7XsnbQg65CY7IS47JqUXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTZWFzb25EYXRhLnN0dWRpZXMgPyBBcnJheS5mcm9tKGN1cnJlbnRTZWFzb25EYXRhLnN0dWRpZXMpLm1hcChzdHVkeSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9waWNXcmFwIGlkPXtzdHVkeS50b3BpY30ga2V5PXtzdHVkeS50b3BpY30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvcGljVGl0bGU+e3N0dWR5LnRvcGljfTwvVG9waWNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBgMTAwJWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHVkeS5sZWN0dXJlcnMgPyA8SXRlbVdyYXAgY2xhc3NOYW1lPVwibGVjdHVyZXItd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UaXRsZSBjbGFzc05hbWU9XCJob2YtaXRlbS10aXRsZVwiPuupmO2GoCDrsI8g6rCV7IKs7KeEPC9JdGVtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVXcmFwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogYDdyZW1gIH19Puu2hOulmDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuydtOumhDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiBgMTByZW1gIH19PkJPSjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiBgN3JlbWAgfX0+7IaM7IaNPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5mcm9tKHN0dWR5LmxlY3R1cmVycykubWFwKGxlY3R1cmVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXsnbGVjdHVyZXItJyArIGxlY3R1cmVyLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuqwleyCrDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2xlY3R1cmVyLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZXIuaGFuZGxlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2xlY3R1cmVyLnNjaG9vbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0dWR5Lm1lbnRvcnMgPyBBcnJheS5mcm9tKHN0dWR5Lm1lbnRvcnMpLm1hcChsZWN0dXJlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17J21lbnRvci0nICsgbGVjdHVyZXIubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+66mY7YagPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZXIubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntsZWN0dXJlci5oYW5kbGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bGVjdHVyZXIuc2Nob29sfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlV3JhcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtV3JhcD4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3R1ZHkuY29udGVzdHMgPyBBcnJheS5mcm9tKHN0dWR5LmNvbnRlc3RzKS5tYXAoY29udGVzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZXN0LmF3YXJkcyA/IDxJdGVtV3JhcCBrZXk9e2NvbnRlc3QuY29udGVzdF9uYW1lICsgJy1hd2FyZCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UaXRsZSBjbGFzc05hbWU9XCJob2YtaXRlbS10aXRsZVwiPntjb250ZXN0LmNvbnRlc3RfbmFtZX0g7IiY7IOB7J6QPC9JdGVtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVXcmFwPjwvVGFibGVXcmFwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiBgM3JlbWAgfX0+7Iic7JyEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7siJjsg4HsnpA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiBgMTByZW1gIH19PkJPSjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6IGA3cmVtYCB9fT7shozsho08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbShjb250ZXN0LmF3YXJkcykubWFwKChhd2FyZCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpZHggKyAxfTxzdXA+e2lkeCArIDEgPT09IDEgPyBgc3RgIDogaWR4ICsgMSA9PT0gMiA/IGBuZGAgOiBgcmRgfTwvc3VwPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YXdhcmQubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2F3YXJkLmhhbmRsZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2F3YXJkLnNjaG9vbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtV3JhcD4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVzdC5wcm9ibGVtX2xpc3QgPyA8SXRlbVdyYXAga2V5PXtjb250ZXN0LmNvbnRlc3RfbmFtZSArICctcGFzdC1wcm9ibGVtJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVRpdGxlIGNsYXNzTmFtZT1cImhvZi1pdGVtLXRpdGxlXCI+e2NvbnRlc3QuY29udGVzdF9uYW1lfSDquLDstpwg66y47ZWtPC9JdGVtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6IGAxcmVtYCB9fT4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7rrLjsoJw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuy2nOygnOyekDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6IGA1cmVtYCB9fT7shozsho08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbShjb250ZXN0LnByb2JsZW1fbGlzdCkubWFwKChwcm9ibGVtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cHJvYmxlbS5wcm9ibGVtX25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e1N0cmluZy5mcm9tQ2hhckNvZGUoaWR4ICsgNjUpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPXtwcm9ibGVtLmxpbmt9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT57cHJvYmxlbS5wcm9ibGVtX25hbWV9PC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvYmxlbS5vcmdhbml6ZXIubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2JsZW0ub3JnYW5pemVyLnNjaG9vbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW1XcmFwPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9waWNXcmFwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9Db250ZXN0V3JhcD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkhhbGxPZkZhbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgd2luZG93LCBzdG9yZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXNwb25zZTAgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9L2hpc3RvcnkvaGFsbG9mZmFtZS8ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NVUlJFTlRfSEFMTE9GRkFNRV9TRUFTT059Lmpzb25gKVxyXG4gICAgICAgIGxldCBkYXRhMCA9IGF3YWl0IHJlc3BvbnNlMC5qc29uKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlMSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTH0vaGlzdG9yeS9oYWxsb2ZmYW1lL2xpc3QuanNvbmApXHJcbiAgICAgICAgbGV0IGRhdGExID0gYXdhaXQgcmVzcG9uc2UxLmpzb24oKTtcclxuXHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goc2V0U2Vhc29uTGlzdChkYXRhMSkpXHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goc2V0Q3VycmVudFNlYXNvbkRhdGEoZGF0YTApKVxyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHNldEN1cnJlbnRTZWFzb24oZGF0YTAuc2Vhc29uKSlcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChzZXRDdXJyZW50WWVhcihkYXRhMC55ZWFyKSlcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChzZXRDdXJyZW50U2Vhc29uSWR4KGRhdGExLmluZGV4T2YocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ1VSUkVOVF9IQUxMT0ZGQU1FX1NFQVNPTikpKVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZWFzb25EYXRhXzogZGF0YTAsXHJcbiAgICAgICAgICAgIHNlYXNvbkxpc3RfOiBkYXRhMVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGFsbE9mRmFtZSJdLCJzb3VyY2VSb290IjoiIn0=