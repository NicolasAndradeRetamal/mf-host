export const mfConfig = {
  name: "host",
  exposes: {},
  remotes: {
    colorPicker: "mf_colorpicker@http://localhost:3001/remoteEntry.js",
    colorList: "mf_colorlist@http://localhost:3002/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
