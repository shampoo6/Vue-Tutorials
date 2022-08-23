// 知识点
// 什么时 webpack-dev-server
// 安装 webpack-dev-server
// 配置 webpack-dev-server
// 通过命令 npx webpack-dev-server 运行，例如: npx webpack-dev-server --config build/webpack-dev-server配置.js --mode=development


// 什么时 webpack-dev-server
// 一个用于开发页面时的服务器，该服务器可以实现自动更新页面

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
    },

    // 开发服务器的配置
    devServer: {
        // 静态资源文件夹
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        compress: true, // 打包后的资源是否压缩
        port: 9000 // 服务器的端口号
    }
}
