"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTheme = void 0;

var _react = _interopRequireDefault(require("react"));

var _addons = _interopRequireWildcard(require("@storybook/addons"));

var _reactNative = require("react-native");

var _constants = _interopRequireDefault(require("./constants"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withTheme = (0, _addons.makeDecorator)({
  name: 'withTheme',
  parameterName: 'themes',
  skipIfNoParametersOrOptions: true,
  allowDeprecatedUsage: true,
  wrapper: function wrapper(getStory, context, _ref) {
    var parameters = _ref.parameters;
    var data = parameters || [];
    var themes = Array.isArray(data) ? data : Object.values(data);

    if (themes.length !== 0) {
      _addons.default.getChannel().emit(_constants.default.SET, themes);
    } else {
      return _react.default.createElement(_reactNative.View, null, getStory(context));
    }

    return _react.default.createElement(_Wrapper.default, {
      initalTheme: themes[0],
      channel: _addons.default.getChannel()
    }, getStory(context));
  }
});
exports.withTheme = withTheme;