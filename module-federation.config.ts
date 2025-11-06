export const mfConfig = {
  name: "host",
  exposes: {},
  remotes: {
    colorPicker:
      "mf_colorpicker@https://mf-colorpicker-nar.netlify.app/remoteEntry.js",
    colorList:
      "mf_colorlist@https://mf-colorlist-nar.netlify.app/remoteEntry.js",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: "^19.0.0",
    },
    "react-dom": {
      singleton: true,
      requiredVersion: "^19.0.0",
    },
  },
};
