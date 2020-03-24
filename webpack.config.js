var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/public/dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./client/index.js`,
  plugins: [new HtmlWebpackPlugin({
    template: './client/index.html'
  })],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.(js|jsx)$/,
        exclude: /node_modules/,
        include : SRC_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};