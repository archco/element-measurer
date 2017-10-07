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
  entry: './lib/dom-measurer.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dom-measurer.js',
    library: 'DomMeasurer',
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
  entry: './lib/dom-measurer.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dom-measurer.min.js',
    library: 'DomMeasurer',
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
  entry: './lib/dom-measurer.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dom-measurer.mod.js',
    library: 'DomMeasurer',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      jsRule,
    ],
  },
};

module.exports = [Library, Minify, Mod];
