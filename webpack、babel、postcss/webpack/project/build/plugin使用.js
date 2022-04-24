// 知识点
// 什么是插件
// CleanWebpackPlugin 清空dist目录插件
// HtmlWebpackPlugin 用于自动创建index.html文件


// 什么是插件？
// 提供一些 webpack 的辅助功能的 js 模块就是插件

const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist') 
    },
    // plugins 配置用于配置插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '这是我的title'
        })
    ]
}