<template>
    <a-config-provider :locale="locale">
        <div id="app">
            <router-view></router-view>
        </div>
    </a-config-provider>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    // 引入国际化
    import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

    export default {
        name: 'App',
        // components: {
        //     HelloWorld
        // }
        data() {
            return {
                locale: zhCN,
            };
        },
    }
</script>

<style lang="less">
    /*#app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }*/
</style>
