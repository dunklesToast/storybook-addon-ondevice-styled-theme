export const ADDON_ID = 'storybook-addon-ondevice-styled-theme'
export const PANEL_ID = `${ADDON_ID}/theme-panel`

export default {
  SET: `${ADDON_ID}:set`,
  RESET: `${ADDON_ID}:unset`,
  UPDATE: `${ADDON_ID}:update`
}
