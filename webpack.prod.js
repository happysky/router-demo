const merge = require('webpack-merge');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackInlineSourcePlugin() // 实例化内联资源插件
    ]
});