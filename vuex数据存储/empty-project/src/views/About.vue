<template>
    <div>
        这是About
        <p>
            count: {{$store.state.count}}
        </p>
        <p>
            now: {{$store.getters.now}}
        </p>
        <input v-model.number="step"/>
        <button @click="decrease">-</button>
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                step: 1
            }
        },
        methods: {
            decrease() {
                this.$store.dispatch('a_decrease', this.step)
            }
        }
    }
</script>

<style scoped>

</style>
