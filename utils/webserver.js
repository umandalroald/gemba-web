var WebpackDevServer = require('webpack-dev-server'),
    webpack = require('webpack'),
    config = require('../webpack.config'),
    path = require('path');

require('./prepare');

// var excludeEntriesToHotReload = (config.excludeEntriesToHotReload || []);
//
// for (var entryName in config.entry) {
//   if (excludeEntriesToHotReload.indexOf(entryName) === -1) {
//     config.entry[entryName] =
//       [
//         ('webpack-dev-server/client?http://localhost:' + env.PORT),
//         'webpack/hot/dev-server'
//       ].concat(config.entry[entryName]);
//   }
// }
//
//
// config.plugins =
//   [new webpack.HotModuleReplacementPlugin()].concat(config.plugins || []);

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  historyApiFallback: true,
  compress: true,
  inline: true,
  hot: true,
  noInfo: true,
  // contentBase: path.join(__dirname, '../build'),
});

server.listen(3000);
