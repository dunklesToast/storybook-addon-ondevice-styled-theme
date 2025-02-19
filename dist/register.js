"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _constants = require("./constants");

var _ThemePanel = _interopRequireDefault(require("./ThemePanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_addons.default.register(_constants.ADDON_ID, function (api) {
  var channel = _addons.default.getChannel();

  _addons.default.addPanel(_constants.PANEL_ID, {
    title: 'Themes',
    render: function render(_ref) {
      var active = _ref.active;
      return _react.default.createElement(_ThemePanel.default, {
        channel: channel,
        api: api,
        active: active
      });
    }
  });
});