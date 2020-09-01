<template>
    <div class="list-container">
        <slot :item="item">
            {{item.content}}
        </slot>
    </div>
</template>

<script>
    export default {
        name: "List",
        props: {
            item: Object
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
    .list-container {
        width: calc(100% - 2em);
        line-height: 48px;
        margin: 0;
        padding-left: 10px;
        white-space:nowrap;
        overflow-x: hidden;
    }
</style>