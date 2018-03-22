const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: "127.0.0.1",
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
        watchContentBase: true,
        inline: true,
        compress: true,
        open: true, //是否自动打开浏览器
        // https: {
        //     key: "xx",
        //     cert: "xx"
        // },
        disableHostCheck: true,
        //noInfo:true,
        // proxy: {
        //     '/app/save.php': '/app/save.php'
        // }
    }
});