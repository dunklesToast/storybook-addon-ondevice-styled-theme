"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var theme = _ref.theme,
      active = _ref.active,
      setTheme = _ref.setTheme;
  return _react.default.createElement(_reactNative.TouchableOpacity, {
    style: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.5)',
      padding: 10,
      marginHorizontal: 10,
      marginVertical: 5,
      backgroundColor: active ? '#22cc22' : 'white'
    },
    onPress: function onPress() {
      return setTheme(theme);
    }
  }, _react.default.createElement(_reactNative.Text, {
    style: {
      textAlign: 'center'
    }
  }, theme.name));
};

var _default = Button;
exports.default = _default;