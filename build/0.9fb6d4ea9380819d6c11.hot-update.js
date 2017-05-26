webpackHotUpdate(0,{

/***/ 84:
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

var Signup = function Signup(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'form',
      { onSubmit: props.handleSubmitSignup },
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
      _react2.default.createElement(
        'label',
        null,
        'Samples:',
        _react2.default.createElement('input', { type: 'text', value: props.samples, onChange: props.handleSample })
      ),
      _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
    )
  );
};

// <div><form onSubmit={props.handleSubmitSignup}>
//       <label>
//         Username:
//         <input type="text" value={props.username} onChange={props.handleUser} />
//       </label>
//       <label>
//         Password:
//         <input type="text" value={props.password} onChange={props.handlePass} />
//       </label>
//       <label>
//         Samples:
//         <input type="text" value={props.samples} onChange={props.handleSample} />
//       </label>
//       <input type="submit" value="Submit" />
//     </form></div>

exports.default = Signup;

/***/ })

})