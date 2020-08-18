<template>
    <div>
        这是Home
        <br/>
        <p>
            count: {{$store.state.count}}
        </p>
        <p>
            now: {{$store.getters.now}}
        </p>
        <p>
            <button @click="increase">+1</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {}
        },
        methods: {
            increase() {
                this.$store.dispatch('a_increase', 1)
            }
        }
    }
</script>

<style scoped>

</style>
