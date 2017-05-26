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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login(props) {
  console.log("***");
  console.log(props);
  return _react2.default.createElement(
    'form',
    { onSubmit: props.handleSubmitLogin },
    _react2.default.createElement(
      'label',
      null,
      'Username:',
      _react2.default.createElement('input', { type: 'text', value: props.username, onChange: props.handleUser })
    ),
    _react2.default.createElement(
      'label',
      null,
      'Password:',
      _react2.default.createElement('input', { type: 'text', value: props.password, onChange: props.handlePass })
    ),
    _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
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

exports.default = Login;

/***/ })

})