//添加webpack 模块 热部署 需要三步
/**
 * 1.config.entry.app.unshift("webpack-dev-server/client?http://localhost:1337/", "webpack/hot/dev-server");
 * 2. 配置hot: true,
 * 3.web-config里面配置  new webpack.HotModuleReplacementPlugin()
 *
 * Settings -> System Settings -> Synchronization -> disable “safe write” (may differ in various IntelliJ IDEs, but you can still use the search feature)
 * @type {webpack|exports|module.exports}
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

//console.log(config.output.publicPath);
config.entry.app.unshift("webpack-dev-server/client?http://localhost:1337/", "webpack/hot/dev-server");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(1337, 'localhost', function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:1337');
    });