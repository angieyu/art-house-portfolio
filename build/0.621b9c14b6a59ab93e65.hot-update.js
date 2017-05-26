webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jamesjean = __webpack_require__(472);

var _jamesjean2 = _interopRequireDefault(_jamesjean);

var _Sample = __webpack_require__(211);

var _Sample2 = _interopRequireDefault(_Sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      console.log(this.props.user);
      var samplesArr = [];
      var inputArr = [];
      if (this.props === undefined) {
        inputArr = _jamesjean2.default;
      } else {
        inputArr = this.props.samples;
      }

      for (var i = 0; i < inputArr.length; i += 1) {
        samplesArr.push(_react2.default.createElement(_Sample2.default, { url: inputArr[i] }));
      }

      return _react2.default.createElement(
        'div',
        { id: 'Profile Info' },
        _react2.default.createElement(
          'h5',
          null,
          'James Jean'
        ),
        _react2.default.createElement(
          'div',
          { style: styles.container },
          samplesArr
        )
      );
    }
  }]);

  return Profile;
}(_react.Component);

var styles = {
  container: {
    display: 'flex',
    // flexDirection: 'column',
    flexFlow: 'row wrap',
    alignItems: 'center',
    padding: '10px',
    marginRight: '20px'
  }
};

exports.default = Profile;

/***/ })

})