webpackHotUpdate(0,{

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(177);

var _reactRouter = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  console.log("***");
  console.log(props);
  return _react2.default.createElement(
    'div',
    null,
    'LOGGINNNNN YEAHHHHHHHHHHHHHs',
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/signup' },
      'Sign Up'
    )
  );
};

// <form onSubmit={props.handleSubmitLogin}>
//       <label>
//         Username:
//         <input type="text" value={props.username} onChange={props.handleUser} />
//       </label>
//       <label>
//         Password:
//         <input type="text" value={props.password} onChange={props.handlePass} />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>

//export default Login;

/***/ })

})