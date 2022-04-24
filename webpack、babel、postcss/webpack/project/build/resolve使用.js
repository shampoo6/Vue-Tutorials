// 知识点 https://webpack.docschina.org/configuration/resolve/
// 什么是resolve
// alias 配置别名
// extensions 配置扩展名

// 什么是resolve
// resolve 的作用就是告诉 webpack 如何解析模块

const path = require('path')

module.exports = {
    // 通过mode选项进行设置
    mode: 'production',
    entry: path.join(__dirname, '../src/resolve使用.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    },
    resolve: {
        // 路径别名
        alias: {
            '@': path.join(__dirname, '../src')
        },
        // 文件扩展名
        // 配置该选项后，引入的文件路径就可以不加后缀名了，
        // 不加后缀名时 webpack 将在 extensions 中查找对应后缀名的文件是否存在
        extensions: ['.js']
    }
}
