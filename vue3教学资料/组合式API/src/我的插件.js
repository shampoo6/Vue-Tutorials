// 知识点？https://staging-cn.vuejs.org/guide/reusability/plugins.html
// 应用场景
// 声明插件
// 安装插件


// 声明插件
export default {
    // 插件中需要存在一个 install 属性
    // app: 当前 vue 应用对象，也就是 main.js 中 createApp 返回的应用对象
    // options: 安装插件时，传入的配置参数
    install: (app, options) => {
        console.log(app);
        console.log(options);

        setTimeout(() => {
            app.unmount();
        }, 3000);
    }
};

// 应用场景：
// 多在install函数中进行全局配置，例如：注册全局组件，注入全局供应商，注册全局指令
// 所以但凡是全局注册的东西，就可以考虑做成插件