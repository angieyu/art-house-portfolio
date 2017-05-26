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
      console.log(this.props);
      var samplesArr = [];
      // for (let i = 0; i < this.props.samples.length; i += 1) {
      //   samplesArr.push(<Sample url={this.props.samples[i]} />)
      // }
      for (var i = 0; i < _jamesjean2.default.length; i += 1) {
        samplesArr.push(_react2.default.createElement(_Sample2.default, { url: _jamesjean2.default[i] }));
      }
      return _react2.default.createElement(
        'div',
        { id: 'Profile Info' },
        _react2.default.createElement(
          'h5',
          null,
          this.props.username
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

/***/ }),

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

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = [
	"https://static1.squarespace.com/static/5484b3b4e4b0883e5fe5efa4/58d752d48419c267b73147d1/58d7565bc534a536b8965407/1490507380363/lola-painting12x12-medres.jpg?format=1500w",
	"https://static1.squarespace.com/static/5484b3b4e4b0883e5fe5efa4/58d752d48419c267b73147d1/58d753c2579fb308146b8f54/1490506724745/rooster-lores.jpg?format=1000w",
	"https://static1.squarespace.com/static/5484b3b4e4b0883e5fe5efa4/58d752d48419c267b73147d1/58d7561ab3db2b57ce862888/1490507328527/hannah-commission-lores.jpg?format=750w",
	"https://static1.squarespace.com/static/5484b3b4e4b0883e5fe5efa4/56f43583c2ea51c1ea1164cb/56f435cc1330bae1a7372d6f/1458845678247/?format=1500w",
	"https://static1.squarespace.com/static/5484b3b4e4b0883e5fe5efa4/56f43583c2ea51c1ea1164cb/56f439690bb4ebe56923b01e/1458846308750/?format=1000w",
	"https://static1.squarespace.com/static/5484b3b4e4b0883e5fe5efa4/56f43583c2ea51c1ea1164cb/58d75788e4fcb5ad94c19b91/1490507743387/rlboyce-finish-medres.jpg?format=1500w"
];

/***/ })

})