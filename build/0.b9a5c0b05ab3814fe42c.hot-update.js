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

  // <Router>
  //   <div>
  //     <nav>
  //       <Link to="/">Home</Link>
  //       <Link to="/signup">Signup</Link>
  //       <Link to="/login">Signup</Link>
  //     </nav>
  //     <Route path="/" component={Profile} />
  //     <Route path="/signup" component={Signup} />
  //     <Route path="/login" component={Login} />
  //   </div>
  // </Router>


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Signup2.default, { authenticate: props.authenticate, handleUser: props.handleUser, handlePass: props.handlePass, handleSample: props.handleSample, handleSubmitSignup: props.handleSubmitSignup, handleSubmitLogin: props.handleSubmitLogin })
  );
};

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ })

})