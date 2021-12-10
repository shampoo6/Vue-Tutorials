const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    // 打包的模式
    // development 开发模式 用于调试
    // production 生产模式 用于上线发布
    mode: 'production',

    // 打包的入口
    // entry: './src/index.js',
    entry: {
        // print: './src/print.js',
        app: './src/index.js',
        other: './src/other.js'
    },
    // 打包的出口
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, './dist')
    },
    module: { // 添加模块配置
        rules: [
            {
                test: /\.css$/, // 配置检测文件用正则
                use: [ // 配置使用的loader
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '这是模板的自定义title'
        })
    ],
    resolve: {
        // 别名
        alias: {
            // key 别名的名称
            // value 别名指代的路径
            '@': path.join(__dirname, './src')
        },
        // 配置文件扩展名
        extensions: ['.js', '.css', '.jpg']
    },

    // webpack-dev-server 的配置
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000
    },
    // 添加优化配置，解决热更新不刷新页面的问题
    optimization: {
        runtimeChunk: 'single'
    },
}
