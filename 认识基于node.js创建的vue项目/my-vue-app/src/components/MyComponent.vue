<template>
    <div>
        <h1>{{title}}</h1>
        <h2 class="color1">{{count}}</h2>
        <div>
            抬头：<input v-model="title"/>
            <button @click="clickHandler">点击计数</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyComponent',
        data() {
            return {
                title: '这是title',
                count: 0
            }
        },
        methods: {
            clickHandler() {
                this.count++
            }
        }
    }
</script>

<style scoped>
    .color1 {
        color: #ff5fd8
    }
</style>