export const mfConfig = {
  name: "host",
  exposes: {},
  remotes: {
    colorPicker:
      process.env.NODE_ENV === "development"
        ? "mf_colorpicker@http://localhost:3001/remoteEntry.js"
        : "mf_colorpicker@https://mf-colorpicker-nar.netlify.app/remoteEntry.js",
    colorList:
      process.env.NODE_ENV === "development"
        ? "mf_colorlist@http://localhost:3002/remoteEntry.js"
        : "mf_colorlist@https://mf-colorlist-nar.netlify.app/remoteEntry.js",
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
