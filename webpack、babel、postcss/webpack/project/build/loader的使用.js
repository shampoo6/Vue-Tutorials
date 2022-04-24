// 知识点
// loader 是什么
// 加载 css 文件
//      1. 安装 css-loader 和 style-loader (使用 npm i -D 安装)
//      2. 配置 module
// 加载图片或其他文件
//      1. 安装 file-loader
//      2. 配置 module


// loader 是什么？
// 由于webpack只知道如何处理js文件，所以项目中引入的其他文件都需要使用loader进行加载，loader的作用就是告诉webpack如何加载文件


const path = require('path')

module.exports = {
    entry: path.join(__dirname, '../src/loader的使用.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    },
    module: { // 模块配置
        rules: [ // 文件打包时的处理规则
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
    }
}