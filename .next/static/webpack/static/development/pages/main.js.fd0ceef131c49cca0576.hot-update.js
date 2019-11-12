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
      }, ".sidenav.jsx-2933084609{width:230px;height:100%;position:fixed;top:0;left:0;z-index:1;background:linear-gradient(to right,#000000,#434343);overflow-x:hidden;color:lightgrey;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.logo-container.jsx-2933084609 img.jsx-2933084609{width:60%;padding:25px 0px 0px 25px;}.logo-musikit.jsx-2933084609{text-align:center;}.nav-links.jsx-2933084609 ul.jsx-2933084609 li.jsx-2933084609{margin-top:25px;list-style-type:none;color:#b3b3b3;}.nav-links.jsx-2933084609 ul.jsx-2933084609 li.jsx-2933084609:hover{color:#fff;-webkit-transition:0.5s;transition:0.5s;cursor:pointer;}.nav-links.jsx-2933084609 ul.jsx-2933084609 li.jsx-2933084609 span.jsx-2933084609{font-weight:900;font-size:0.8em;padding-left:22px;}.user-container.jsx-2933084609{margin-top:190px;}.playlists.jsx-2933084609 p.jsx-2933084609{padding-left:15px;font-size:0.7em;text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-weight:800;}.playlists.jsx-2933084609 ul.jsx-2933084609 li.jsx-2933084609{list-style-type:none;padding:10px 0px 10px 0px;font-size:0.7em;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-weight:800;}.user-data.jsx-2933084609{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:0px 10px 5px 10px;position:absolute;bottom:110px;}.user-data.jsx-2933084609 img.jsx-2933084609{width:15%;border-radius:25px;}.user-data.jsx-2933084609 span.jsx-2933084609{padding-left:10px;color:#b3b3b3;font-weight:900;font-size:0.7em;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcci5uLmRhY2NvcnNvLnJvc2F0aVxcT25lRHJpdmUgLSBlc3QuZnJiYS51dG4uZWR1LmFyXFxDdXJzb1xcQ291cnNlSVRcXG11c2lraXRcXGNvbXBvbmVudHNcXEFzaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDa0IsQUFHcUIsQUFjSixBQUlRLEFBSUYsQUFNTCxBQU1LLEFBTUMsQUFJQyxBQVFHLEFBUVIsQUFTSCxBQUtRLFVBM0RRLEFBdURQLENBekNILENBNUJGLElBc0JPLEFBWUwsQ0FNbEIsQ0F0QkEsQUEwQmtCLEFBOEJGLEdBdEJZLEdBbkRULEtBcUVuQixHQW5Db0IsQUF3Q0YsRUE5QlMsRUE5QjNCLENBUWdCLEVBckJOLE1BQ0MsRUFrRE8sQ0F1QkEsRUF4Q2xCLENBWkEsQUFLaUIsQ0F6QkgsT0EwQ08sR0F6Q3NDLENBaUR0QyxDQXVCQSxFQS9DckIsUUE4QnFCLHlDQXREQyxrQkFDRixnQkFDSCxHQXVDQyxJQVFBLENBdUJTLFVBakJFLENBYjdCLElBUUEsVUF1QkEseUNBdEUwQixpREFxREUsMEJBQ1IsR0FyRGxCLGVBc0RhLGFBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxyLm4uZGFjY29yc28ucm9zYXRpXFxPbmVEcml2ZSAtIGVzdC5mcmJhLnV0bi5lZHUuYXJcXEN1cnNvXFxDb3Vyc2VJVFxcbXVzaWtpdFxcY29tcG9uZW50c1xcQXNpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbG9nb1Nwb3RpZnkgZnJvbSAnLi4vc3RhdGljL3Nwb3RpZnlfbG9nby5wbmcnXHJcbmltcG9ydCB7IElvSW9zQWxidW1zLCBJb0lvc1NlYXJjaCwgSW9NZEhvbWUgfSBmcm9tICdyZWFjdC1pY29ucy9pbydcclxuaW1wb3J0IGVtcHR5SU1HIGZyb20gJy4uL3N0YXRpYy9udWxsLWxvZ28ucG5nJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jbGFzcyBBc2lkZSBleHRlbmRzIFJlYWN0LiBDb21wb25lbnQocHJvcHMpIHtcclxuICByZW5kZXIoKXtcclxuXHJcbiAgICBjb25zdCBtdXNpY0lUID0gXCJ7TXVzaWtJVH1cIlxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVuYXZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2xvZ29TcG90aWZ5fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tbXVzaWtpdFwiPmJ5IHttdXNpY0lUfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPjxJb01kSG9tZSAvPjxzcGFuPkluaWNpbzwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PElvSW9zU2VhcmNoIC8+PHNwYW4+QnVzY2FyPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48SW9Jb3NBbGJ1bXMgLz48c3Bhbj5UdSBCaWJsaW90ZWNhPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3RzXCI+XHJcbiAgICAgICAgICA8cD5QbGF5bGlzdHM8L3A+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHshcHJvcHMucGxheUxpc3RzXHJcbiAgICAgICAgICAgICAgPyBcIkNhcmdhbmRvLi4uXCJcclxuICAgICAgICAgICAgICA6IHByb3BzLnBsYXlMaXN0cy5tYXAoKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0+e2VsZW0ubmFtZX08L2xpPjtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItZGF0YVwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIC8vICBzcmM9e3Byb3BzLnVzZXJEYXRhICYmIHByb3BzLnVzZXJEYXRhLmltYWdlcy5sZW5ndGggPyBwcm9wcy51c2VyRGF0YS5pbWFnZXNbMF0udXJpIDogZW1wdHlJTUcgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuPntwcm9wcy51c2VyRGF0YX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuc2lkZW5hdiB7XHJcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwMDAsICM0MzQzNDMpO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBjb2xvcjogbGlnaHRncmV5O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgfVxyXG5cclxuICAgIC5sb2dvLWNvbnRhaW5lciBpbWcge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgICBwYWRkaW5nOiAyNXB4IDBweCAwcHggMjVweDtcclxuICAgIH1cclxuICAgIC5sb2dvLW11c2lraXQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1saW5rcyB1bCBsaSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgY29sb3I6ICNiM2IzYjM7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1saW5rcyB1bCBsaTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1saW5rcyB1bCBsaSBzcGFuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE5MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGF5bGlzdHMgcCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxuXHJcbiAgICAucGxheWxpc3RzIHVsIGxpIHtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxuXHJcbiAgICAudXNlci1kYXRhIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBwYWRkaW5nOiAwcHggMTBweCA1cHggMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDExMHB4O1xyXG4gICAgfSBcclxuXHJcbiAgICAudXNlci1kYXRhIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItZGF0YSBzcGFuIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBjb2xvcjogI2IzYjNiMztcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJEYXRhOiBzdGF0ZS51c2VyRGF0YSxcclxuICAgICAgcGxheUxpc3RzOiBzdGF0ZS51c2VyUGxheWxpc3RzLFxyXG4gICAgfTtcclxuICB9XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBc2lkZSk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\r.n.daccorso.rosati\\OneDrive - est.frba.utn.edu.ar\\Curso\\CourseIT\\musikit\\components\\Aside.js */"));
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
//# sourceMappingURL=main.js.fd0ceef131c49cca0576.hot-update.js.map