const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('webpack.config.js');
config.entry.app.unshift("webpack-dev-server/client?http://localhost:19000/");
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 19000.
app.listen(19000, function () {
  console.log('Example app listening on port 19000!\n');
});

/*var config = require("./webpack.config.js");
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {...});
server.listen(8080);*/