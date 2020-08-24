<template>
    <div>
        <router-link to="/echarts">echarts</router-link> |
        <router-link to="/moment">moment</router-link>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style scoped>

</style>
