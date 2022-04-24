// 知识点
// entry 的多入口配置
// output 的多输出配置

const path = require('path')

module.exports = {
    entry: {
        // 配置多个入口文件
        a: path.join(__dirname, '../src/a.js'),
        b: path.join(__dirname, '../src/b.js')
    },
    output: {
        // 有几个入口文件就会输出几个结果
        filename: '[name].bundle.js',
        path: path.join(__dirname, '../dist')
    }
}