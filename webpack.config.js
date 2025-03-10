const path = require("path");
const commonCfg = {
  entry: "./src/core/entry.ts",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
module.exports = [
  {
    ...commonCfg,
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "src"),
      libraryTarget: "commonjs2",
    },
  },
  {
    ...commonCfg,
    output: {
      filename: "package/index.umd.js",
      path: path.resolve(__dirname, "src"),
      library: {
        name: 'ParseSchema', // UMD 全局变量名
        type: 'umd', 
      },
      globalObject: 'this',
    },
  },
];
