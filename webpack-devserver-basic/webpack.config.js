const path = require('path');
var glob = require("glob");


module.exports = {
  entry: glob.sync("./src/*.*"),
  devServer: {
    stats: "errors-only",
    host: process.env.HOST,
    port: 8080,
    open: true,
    overlay: true,
    contentBase: path.join(__dirname, 'dist')
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
