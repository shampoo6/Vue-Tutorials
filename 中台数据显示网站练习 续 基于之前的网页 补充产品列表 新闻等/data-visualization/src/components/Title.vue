<template>
    <div class="title-container">
        <div class="title">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Title",
        props: {
            title: String
        }
    }
</script>

<style scoped>
    .title-container {
        width: 100%;
        line-height: 30px;
        margin: 0;
        padding: 0;
    }

    .title {
        font-size: 18px;
        border-left: 3px solid orange;
        padding-left: 10px;
        margin: 10px;
    }
</style>