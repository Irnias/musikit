webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./components/Aside.js":
/*!*****************************!*\
  !*** ./components/Aside.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_spotify_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/spotify_logo.png */ "./static/spotify_logo.png");
/* harmony import */ var _static_spotify_logo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_spotify_logo_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _static_null_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/null-logo.png */ "./static/null-logo.png");
/* harmony import */ var _static_null_logo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_null_logo_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var Aside =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Aside, _React$Component);

  function Aside() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Aside);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Aside).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Aside, [{
    key: "render",
    value: function render() {
      var musicIT = "{MusikIT}";
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
        className: "jsx-2933084609" + " " + "sidenav"
      }, __jsx("div", {
        className: "jsx-2933084609" + " " + "logo-container"
      }, __jsx("img", {
        src: _static_spotify_logo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        className: "jsx-2933084609"
      }), __jsx("div", {
        className: "jsx-2933084609" + " " + "logo-musikit"
      }, "by ", musicIT)), __jsx("div", {
        className: "jsx-2933084609" + " " + "nav-links"
      }, __jsx("ul", {
        className: "jsx-2933084609"
      }, __jsx("li", {
        className: "jsx-2933084609"
      }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoMdHome"], null), __jsx("span", {
        className: "jsx-2933084609"
      }, "Inicio")), __jsx("li", {
        className: "jsx-2933084609"
      }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosSearch"], null), __jsx("span", {
        className: "jsx-2933084609"
      }, "Buscar")), __jsx("li", {
        className: "jsx-2933084609"
      }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosAlbums"], null), __jsx("span", {
        className: "jsx-2933084609"
      }, "Tu Biblioteca")))), __jsx("div", {
        className: "jsx-2933084609" + " " + "playlists"
      }, __jsx("p", {
        className: "jsx-2933084609"
      }, "Playlists"), __jsx("ul", {
        className: "jsx-2933084609"
      }, !props.playLists ? "Cargando..." : props.playLists.map(function (elem, index) {
        return __jsx("li", {
          key: index,
          className: "jsx-2933084609"
        }, elem.name);
      }))), __jsx("div", {
        className: "jsx-2933084609" + " " + "user-data"
      }, __jsx("img", {
        className: "jsx-2933084609"
      }), __jsx("span", {
        className: "jsx-2933084609"
      }, props.userData))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2933084609"
      }, ".sidenav.jsx-2933084609{width:230px;height:100%;position:fixed;top:0;left:0;z-index:1;background:linear-gradient(to right,#000000,#434343);overflow-x:hidden;color:lightgrey;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.logo-container.jsx-2933084609 img.jsx-2933084609{width:60%;padding:25px 0px 0px 25px;}.logo-musikit.jsx-2933084609{text-align:center;}.nav-links.jsx-2933084609 ul.jsx-2933084609 li.jsx-2933084609{margin-top:25px;list-style-type:none;color:#b3b3b3;}.nav-links.jsx-2933084609 ul.jsx-2933084609 li.jsx-2933084609:hover{color:#fff;-webkit-transition:0.5s;transition:0.5s;cursor:pointer;}.nav-links.jsx-2933084609 ul.jsx-2933084609 li.jsx-2933084609 span.jsx-2933084609{font-weight:900;font-size:0.8em;padding-left:22px;}.user-container.jsx-2933084609{margin-top:190px;}.playlists.jsx-2933084609 p.jsx-2933084609{padding-left:15px;font-size:0.7em;text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-weight:800;}.playlists.jsx-2933084609 ul.jsx-2933084609 li.jsx-2933084609{list-style-type:none;padding:10px 0px 10px 0px;font-size:0.7em;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-weight:800;}.user-data.jsx-2933084609{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:0px 10px 5px 10px;position:absolute;bottom:110px;}.user-data.jsx-2933084609 img.jsx-2933084609{width:15%;border-radius:25px;}.user-data.jsx-2933084609 span.jsx-2933084609{padding-left:10px;color:#b3b3b3;font-weight:900;font-size:0.7em;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcci5uLmRhY2NvcnNvLnJvc2F0aVxcT25lRHJpdmUgLSBlc3QuZnJiYS51dG4uZWR1LmFyXFxDdXJzb1xcQ291cnNlSVRcXG11c2lraXRcXGNvbXBvbmVudHNcXEFzaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDa0IsQUFHcUIsQUFjSixBQUlRLEFBSUYsQUFNTCxBQU1LLEFBTUMsQUFJQyxBQVFHLEFBUVIsQUFTSCxBQUtRLFVBM0RRLEFBdURQLENBekNILENBNUJGLElBc0JPLEFBWUwsQ0FNbEIsQ0F0QkEsQUEwQmtCLEFBOEJGLEdBdEJZLEdBbkRULEtBcUVuQixHQW5Db0IsQUF3Q0YsRUE5QlMsRUE5QjNCLENBUWdCLEVBckJOLE1BQ0MsRUFrRE8sQ0F1QkEsRUF4Q2xCLENBWkEsQUFLaUIsQ0F6QkgsT0EwQ08sR0F6Q3NDLENBaUR0QyxDQXVCQSxFQS9DckIsUUE4QnFCLHlDQXREQyxrQkFDRixnQkFDSCxHQXVDQyxJQVFBLENBdUJTLFVBakJFLENBYjdCLElBUUEsVUF1QkEseUNBdEUwQixpREFxREUsMEJBQ1IsR0FyRGxCLGVBc0RhLGFBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxyLm4uZGFjY29yc28ucm9zYXRpXFxPbmVEcml2ZSAtIGVzdC5mcmJhLnV0bi5lZHUuYXJcXEN1cnNvXFxDb3Vyc2VJVFxcbXVzaWtpdFxcY29tcG9uZW50c1xcQXNpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbG9nb1Nwb3RpZnkgZnJvbSAnLi4vc3RhdGljL3Nwb3RpZnlfbG9nby5wbmcnXHJcbmltcG9ydCB7IElvSW9zQWxidW1zLCBJb0lvc1NlYXJjaCwgSW9NZEhvbWUgfSBmcm9tICdyZWFjdC1pY29ucy9pbydcclxuaW1wb3J0IGVtcHR5SU1HIGZyb20gJy4uL3N0YXRpYy9udWxsLWxvZ28ucG5nJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jbGFzcyBBc2lkZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudChwcm9wcyl7XHJcbiAgcmVuZGVyKCl7XHJcblxyXG4gICAgY29uc3QgbXVzaWNJVCA9IFwie011c2lrSVR9XCJcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlbmF2XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvU3BvdGlmeX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLW11c2lraXRcIj5ieSB7bXVzaWNJVH08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT48SW9NZEhvbWUgLz48c3Bhbj5JbmljaW88L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxJb0lvc1NlYXJjaCAvPjxzcGFuPkJ1c2Nhcjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PElvSW9zQWxidW1zIC8+PHNwYW4+VHUgQmlibGlvdGVjYTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0c1wiPlxyXG4gICAgICAgICAgPHA+UGxheWxpc3RzPC9wPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7IXByb3BzLnBsYXlMaXN0c1xyXG4gICAgICAgICAgICAgID8gXCJDYXJnYW5kby4uLlwiXHJcbiAgICAgICAgICAgICAgOiBwcm9wcy5wbGF5TGlzdHMubWFwKChlbGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9PntlbGVtLm5hbWV9PC9saT47XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWRhdGFcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAvLyAgc3JjPXtwcm9wcy51c2VyRGF0YSAmJiBwcm9wcy51c2VyRGF0YS5pbWFnZXMubGVuZ3RoID8gcHJvcHMudXNlckRhdGEuaW1hZ2VzWzBdLnVyaSA6IGVtcHR5SU1HIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3Bhbj57cHJvcHMudXNlckRhdGF9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnNpZGVuYXYge1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwMDAwLCAjNDM0MzQzKTtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAubG9nby1jb250YWluZXIgaW1nIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgcGFkZGluZzogMjVweCAwcHggMHB4IDI1cHg7XHJcbiAgICB9XHJcbiAgICAubG9nby1tdXNpa2l0IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtbGlua3MgdWwgbGkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjYjNiM2IzO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtbGlua3MgdWwgbGk6aG92ZXIge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtbGlua3MgdWwgbGkgc3BhbiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICAudXNlci1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxOTBweDtcclxuICAgIH1cclxuXHJcbiAgICAucGxheWxpc3RzIHAge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsYXlsaXN0cyB1bCBsaSB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItZGF0YSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgcGFkZGluZzogMHB4IDEwcHggNXB4IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAxMTBweDtcclxuICAgIH0gXHJcblxyXG4gICAgLnVzZXItZGF0YSBpbWcge1xyXG4gICAgICB3aWR0aDogMTUlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLWRhdGEgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgY29sb3I6ICNiM2IzYjM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyRGF0YTogc3RhdGUudXNlckRhdGEsXHJcbiAgICAgIHBsYXlMaXN0czogc3RhdGUudXNlclBsYXlsaXN0cyxcclxuICAgIH07XHJcbiAgfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQXNpZGUpO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\r.n.daccorso.rosati\\OneDrive - est.frba.utn.edu.ar\\Curso\\CourseIT\\musikit\\components\\Aside.js */"));
    }
  }]);

  return Aside;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component(props));

var mapStateToProps = function mapStateToProps(state) {
  return {
    userData: state.userData,
    playLists: state.userPlaylists
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps)(Aside));

/***/ })

})
//# sourceMappingURL=main.js.639ec23ebd09a67f9483.hot-update.js.map