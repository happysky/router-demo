const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/containers/index.jsx')
    },
    output: {
      //filename: '[name].js'
      filename: '[name].[hash].js',
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [{
                test: /\.js$|\.jsx$/,
                include: path.resolve(__dirname, "src"),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env']
                    }
                }]
            },{
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },{
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ]
            }
        ]
    },
    optimization: {
        // runtimeChunk: {
        //     name: "manifest"
        // },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
            //hash: true, //如果要开启inlineSource则不能开启hash，否则会找不到文件
            // inlineSource: '.(js|css)',
            chunks: ['manifest','vendor','main'],
            minify: {
                inject: true,
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                html5: true,
                minifyCSS: true,
                removeComments: true,
                removeEmptyAttributes: true
            }
        })
    ]
};