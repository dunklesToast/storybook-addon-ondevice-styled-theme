"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _constants = _interopRequireDefault(require("./constants"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ThemePanel =
/*#__PURE__*/
function (_Component) {
  _inherits(ThemePanel, _Component);

  function ThemePanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ThemePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ThemePanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      themes: [],
      activeId: 0
    });

    _defineProperty(_assertThisInitialized(_this), "update", function (id) {
      return function (theme) {
        var channel = _this.props.channel;
        channel.emit(_constants.default.UPDATE, theme);

        _this.setState({
          activeId: id
        });
      };
    });

    return _this;
  }

  _createClass(ThemePanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var channel = this.props.channel;
      this.onSet = channel.on(_constants.default.SET, function (themes) {
        _this2.setState({
          themes: themes
        });
      });
      this.onUnset = channel.on(_constants.default.RESET, function () {
        _this2.setState({
          themes: []
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var channel = this.props.channel;
      channel.removeListener(_constants.default.SET, this.onSet);
      channel.removeListener(_constants.default.RESET, this.onUnset);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var active = this.props.active;
      var _this$state = this.state,
          _this$state$themes = _this$state.themes,
          themes = _this$state$themes === void 0 ? [] : _this$state$themes,
          activeId = _this$state.activeId;

      if (!active || !themes.length) {
        return null;
      }

      return _react.default.createElement(_reactNative.View, null, themes.map(function (theme, id) {
        var name = theme.name;
        return _react.default.createElement(_reactNative.View, {
          key: name
        }, _react.default.createElement(_Button.default, {
          theme: theme,
          setTheme: _this3.update(id),
          active: activeId === id
        }));
      }));
    }
  }]);

  return ThemePanel;
}(_react.Component);

var _default = ThemePanel;
exports.default = _default;