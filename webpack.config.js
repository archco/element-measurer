const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: {
    'element-measurer': './src/element-measurer.ts',
    'element-measurer.min': './src/element-measurer.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'ElementMeasurer',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader',
      },
      {
        test: /\.js$/,
        use: 'source-map-loader',
        enforce: 'pre',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: false,
      include: /\.min\.js$/,
    }),
    new WebpackNotifierPlugin({
      title: 'Webpack',
      alwaysNotify: true,
      sound: false,
    }),
  ],
  devtool: 'source-map',
};
