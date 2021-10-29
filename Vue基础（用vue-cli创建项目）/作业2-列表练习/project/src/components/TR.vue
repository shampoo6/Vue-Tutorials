<template>
    <tr>
        <td>{{row.nickname}}</td>
        <td>{{row.sex|sexFormatter}}</td>
        <td>{{row.birthday|dateFormatter}}</td>
        <td>
            <slot :rowData="row">

            </slot>
        </td>
    </tr>
</template>

<script>
    import sexFormatter from '../filters/sex'
    import dateFormatter from '../filters/date'

    export default {
        name: 'TR',
        props: {
            row: {
                type: Object,
                default() {
                    return {
                        nickname: 'nickname',
                        sex: 'male',
                        birthday: new Date()
                    }
                }
            }
        },
        filters: {
            sexFormatter,
            dateFormatter
        },
    }
</script>

<style scoped>

</style>
