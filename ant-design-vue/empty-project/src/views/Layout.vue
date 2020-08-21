<template>
    <div>
        <a-layout>
            <a-layout-header :style="{backgroundColor: 'white'}">
                <Header/>
            </a-layout-header>
            <a-layout-content :style="{backgroundColor: 'white'}">
                <router-view></router-view>
            </a-layout-content>
            <a-layout-footer style="text-align: center;">
                Copyright <a-icon type="copyright"/> Shampoo6 Company 2010~2021
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<script>
    import Header from '../components/Header'

    export default {
        name: "Layout",
        components: {
            Header
        }
    }
</script>

<style scoped>

</style>
