var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: 'app.js',
  },
  devServer: {
      historyApiFallback:{
          index:'build/index.html'
      },
      // contentBase: __dirname + '/client/src/assets',
      // publicPath: '/__build__/'
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.html$/,
        loader: 'wc-loader'
      },
    ],
  },
  devtool: 'eval-source-map'
};
