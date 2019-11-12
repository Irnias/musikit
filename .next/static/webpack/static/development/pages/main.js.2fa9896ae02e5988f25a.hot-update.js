webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Aside__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Aside */ "./components/Aside.js");
/* harmony import */ var _components_Principal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Principal */ "./components/Principal.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









var Main =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Main, _React$Component);

  function Main() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Main);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Main).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Main, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var dispatch, hash, nameRequest, userPlaylistsRequest, currentlyPlayingRequest, featuredPlaylistsRequest, topArtistsRequest;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch = this.props.dispatch;
                hash = window.location.hash.substring(1).split("&").reduce(function (initial, item) {
                  if (item) {
                    var parts = item.split("=");
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                  }

                  return initial;
                }, {}); //Axiios fetch

                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://api.spotify.com/v1/me", {
                  headers: {
                    Authorization: "Bearer " + hash.access_token
                  }
                });

              case 4:
                nameRequest = _context.sent;
                _context.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://api.spotify.com/v1/me/playlists", {
                  headers: {
                    Authorization: "Bearer " + hash.access_token
                  }
                });

              case 7:
                userPlaylistsRequest = _context.sent;
                _context.next = 10;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://api.spotify.com/v1/me/player", {
                  headers: {
                    Authorization: "Bearer " + hash.access_token
                  }
                });

              case 10:
                currentlyPlayingRequest = _context.sent;
                _context.next = 13;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://api.spotify.com/v1/browse/featured-playlists", {
                  headers: {
                    Authorization: "Bearer " + hash.access_token
                  }
                });

              case 13:
                featuredPlaylistsRequest = _context.sent;
                _context.next = 16;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://api.spotify.com/v1/me/top/artists", {
                  headers: {
                    Authorization: "Bearer " + hash.access_token
                  }
                });

              case 16:
                topArtistsRequest = _context.sent;
                dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["setToken"])(hash.access_token));
                dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["setUserData"])(nameRequest.data));
                dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["setUserPlaylists"])(userPlaylistsRequest.data.items));
                dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["setCurrentlyPlaying"])(currentlyPlayingRequest.data));
                dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["setFeaturedPlaylists"])(featuredPlaylistsRequest.data));
                dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["setTopArtists"])(topArtistsRequest.data.items));

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "MusikIT | Main"
      }), __jsx(_components_Aside__WEBPACK_IMPORTED_MODULE_13__["default"], null));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])()(Main));

/***/ })

})
//# sourceMappingURL=main.js.2fa9896ae02e5988f25a.hot-update.js.map