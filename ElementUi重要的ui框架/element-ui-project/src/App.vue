<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="less">
    // 全局样式写在这里
    html, body, #app {
        height: 100%;
    }

    body {
        margin: 0;
    }

    .container {
        height: 100%;
    }

    .border {
        border: 1px solid black;
        box-sizing: border-box;
    }
</style>
