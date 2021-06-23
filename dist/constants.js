"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PANEL_ID = exports.ADDON_ID = void 0;
var ADDON_ID = 'storybook-addon-ondevice-styled-theme';
exports.ADDON_ID = ADDON_ID;
var PANEL_ID = "".concat(ADDON_ID, "/theme-panel");
exports.PANEL_ID = PANEL_ID;
var _default = {
  SET: "".concat(ADDON_ID, ":set"),
  RESET: "".concat(ADDON_ID, ":unset"),
  UPDATE: "".concat(ADDON_ID, ":update")
};
exports.default = _default;