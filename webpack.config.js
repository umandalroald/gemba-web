var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var IndexHtmlPlugin = require('indexhtml-webpack-plugin');


module.exports = {
  entry: './src/main.js',
  // entry: {
  //   'index.html': './src/index.html',
  //   main: './src/main.js'
  // },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: 'build.js',
  },
  devServer: {
      historyApiFallback:{
          index:'build/index.html'
      },
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
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components|src)/,
      //   loader: 'babel-loader',
      //   babelrc: false,
      //   query: {
      //     presets: ['es2015']
      //   }
      // }
      // ,
      // {
      //     test: /index\.html$/,
      //     loader: 'html'
      // }
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, "src", "index.html"),
    //   filename: "index.html"
    // })
    // new IndexHtmlPlugin('./src/index.html', 'index.html')
  ],
  devtool: 'eval-source-map'
};