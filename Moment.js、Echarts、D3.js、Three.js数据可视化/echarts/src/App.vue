<template>
    <div id="app">
        <my-charts></my-charts>
        <my-bar></my-bar>
    </div>
</template>

<script>
    import MyCharts from './views/MyCharts.vue'
    import MyBar from './views/MyBar.vue'

    export default {
        name: 'App',
        components: {
            MyCharts,
            MyBar
        }
    }
</script>

<style lang="less">
</style>
