webpackHotUpdate(0,{

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _Container = __webpack_require__(210);

var _Container2 = _interopRequireDefault(_Container);

var _Profile = __webpack_require__(133);

var _Profile2 = _interopRequireDefault(_Profile);

var _Signup = __webpack_require__(134);

var _Signup2 = _interopRequireDefault(_Signup);

var _Login = __webpack_require__(132);

var _Login2 = _interopRequireDefault(_Login);

var _reactRouterDom = __webpack_require__(445);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {

  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          'Home'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/signup' },
          'Signup'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/login' },
          'Signup'
        )
      ),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Profile2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _Signup2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default })
    )
  );

  // return (
  //   <div>
  //     <Signup authenticate={props.authenticate} handleUser={props.handleUser} handlePass={props.handlePass} handleSample={props.handleSample} handleSubmitSignup={props.handleSubmitSignup} handleSubmitLogin={props.handleSubmitLogin} />
  //   </div>
  // )
};

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ })

})