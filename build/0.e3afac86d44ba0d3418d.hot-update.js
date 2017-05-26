webpackHotUpdate(0,{

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// stateless functions don't have a this keyword

var Sample = function Sample(props) {

  return _react2.default.createElement(
    "div",
    { style: styles.container },
    _react2.default.createElement("img", { src: props.url, width: "304", height: "236" })
  );
};

var styles = {
  container: {
    flex: 1,
    paddingBottom: 30,
    paddingLeft: 45
  }
};

exports.default = Sample;

/***/ })

})