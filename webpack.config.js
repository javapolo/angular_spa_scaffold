/**
 * Created by li_sj on 2016/5/6.
 */
var path = require('path'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    webpack = require('webpack');  //添加md5支持
module.exports = {
    entry: {
        app: ["./src/scripts/app.js"],
        vendor: "./src/scripts/vendor.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: '/scripts/',
        filename: "[name].js",
        chunkFilename: "[chunkhash].[id].chunk.js"
    },
    module: {
        loaders: [
           // {test: /\.css$/, loader: "style-loader!css-loader"},
           // {
           //         test: /\.scss$/,
           //         loader: "sass-loader"
           // }
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass", "autoprefixer-loader"]
            }
        ]
    },
    //debug调试
    devtool: "source-map",
    debug: true,
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        //new  webpack.optimize.UglifyJsPlugin({
        //    mangle: {
        //        except: ['vendor'],
        //        minimize: true,
        //        warnings: false,
        //        sourceMap: false
        //    }
        //})
        //  new WebpackMd5Hash()
        //  new webpack.optimize.UglifyJsPlugin()
    ]
};