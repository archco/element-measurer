const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const jsRule = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env'],
    },
  },
};

const Library = {
  entry: './lib/element-measurer.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'element-measurer.js',
    library: 'ElementMeasurer',
    libraryTarget: 'window',
  },
  module: {
    rules: [
      jsRule,
    ],
  },
  devtool: 'source-map',
};

const Minify = {
  entry: './lib/element-measurer.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'element-measurer.min.js',
    library: 'ElementMeasurer',
    libraryTarget: 'window',
  },
  module: {
    rules: [
      jsRule,
    ],
  },
  plugins: [new UglifyJsPlugin()],
};

const Mod = {
  entry: './lib/element-measurer.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'element-measurer.mod.js',
    library: 'ElementMeasurer',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      jsRule,
    ],
  },
};

module.exports = [Library, Minify, Mod];
