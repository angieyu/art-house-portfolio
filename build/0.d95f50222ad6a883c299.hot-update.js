webpackHotUpdate(0,{

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _Profile = __webpack_require__(133);

var _Profile2 = _interopRequireDefault(_Profile);

var _Signup = __webpack_require__(134);

var _Signup2 = _interopRequireDefault(_Signup);

var _Login = __webpack_require__(132);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Component) {
  _inherits(Container, _Component);

  function Container(props) {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

    _this.state = {
      username: '',
      password: '',
      samples: ''
    };
    _this.handleUser = _this.handleUser.bind(_this);
    _this.handlePass = _this.handlePass.bind(_this);
    _this.handleSample = _this.handleSample.bind(_this);
    _this.handleSubmitSignup = _this.handleSubmitSignup.bind(_this);
    _this.handleSubmitLogin = _this.handleSubmitLogin.bind(_this);
    _this.authenticate = _this.authenticate.bind(_this);
    return _this;
  }

  _createClass(Container, [{
    key: 'handleUser',
    value: function handleUser(event) {
      event.preventDefault();
      this.setState({
        username: event.target.value
      });
    }
  }, {
    key: 'handlePass',
    value: function handlePass(event) {
      event.preventDefault();
      this.setState({
        password: event.target.value
      });
    }
  }, {
    key: 'handleSample',
    value: function handleSample(event) {
      event.preventDefault();
      var samplesStr = event.target.value;
      var samplesArr = samplesStr.split(',');
      this.setState({
        samples: samplesArr
      });
    }
  }, {
    key: 'handleSubmitSignup',
    value: function handleSubmitSignup(event) {
      console.log("testing");
      event.preventDefault();
      var type = 'signup';
      this.authenticate(type);
    }
  }, {
    key: 'handleSubmitLogin',
    value: function handleSubmitLogin(event) {
      event.preventDefault();
      var type = 'login';
      this.authenticate(type);
    }
  }, {
    key: 'authenticate',
    value: function authenticate(type) {
      var _this2 = this;

      var url;
      var myMessage = {
        username: this.state.username,
        password: this.state.password,
        samples: this.state.samples
      };

      if (type === 'signup') url = '/register';
      if (type === 'login') url = '/login';

      var X = new XMLHttpRequest();
      X.open('POST', '/register', true);
      X.setRequestHeader("Content-type", "application/json");
      X.onload = function () {
        var response = JSON.parse(X.responseText);
        console.log("******");
        console.log(response);
        _this2.setState({
          username: response.username,
          password: response.password,
          samples: response.samples
        });
        console.log("*state after create user is*");
        console.log(_this2.state);
      };
      console.log(JSON.stringify(myMessage));
      X.send(JSON.stringify(myMessage));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Signup2.default, { authenticate: this.authenticate, handleUser: this.handleUser, handlePass: this.handlePass, handleSample: this.handleSample, handleSubmitSignup: this.handleSubmitSignup, handleSubmitLogin: this.handleSubmitSignup }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_Profile2.default, null)
      );
    }
  }]);

  return Container;
}(_react.Component);

exports.default = Container;

/***/ })

})