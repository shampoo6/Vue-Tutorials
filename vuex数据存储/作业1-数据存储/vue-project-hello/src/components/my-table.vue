<template>
    <table border>
        <thead>
        <tr>
            <th v-for="col in columns" :key="col.attr">{{col.txt}}</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in data" :key="row.id">
            <td v-for="col in columns" :key="col.attr">
                <template v-if="col.attr === 'sex'">
                    {{row[col.attr]|sexFormatter}}
                </template>
                <template v-else-if="col.attr === 'country'">
                    {{row[col.attr]|countryFormatter}}
                </template>
                <template v-else>
                    {{row[col.attr]}}
                </template>
            </td>
            <td>
                <slot :row="row"></slot>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: 'my-table',
        props: {
            columns: Array,
            data: Array
        },
        filters: {
            'sexFormatter': value => {
                return value === 'male' ?
                    '男' :
                    value === 'female' ?
                        '女' : '其他'
            },
            'countryFormatter': value => {
                return value === 'CN' ?
                    '中国' :
                    value === 'UK' ?
                        '英国' : '美国'
            }
        }
    }
</script>

<style lang="less" scoped>

</style>