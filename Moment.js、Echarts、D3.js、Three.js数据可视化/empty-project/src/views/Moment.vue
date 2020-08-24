<template>
    <div>
        moment
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        name: 'Moment',
        mounted() {
            // 解析时间如下
            // console.log(moment()) // 现在时间
            // console.log(moment('1990-01-01')) // 通过字符串
            // console.log(moment('1990-4-1', 'YYYY-M-D')) // 通过模板
            // console.log(moment(1598239771674)) // 通过格林威治1970毫秒数字获取时间
            // console.log(moment(new Date())) // 通过Date对象获取时间

            // 取值赋值
            let m = moment()

            // 取值
            console.log(m.year())
            console.log(m.month()) // 显示的月份比实际的小1
            console.log(m.date())
            console.log(m.hours()) // 24小时计时 0~23点之间
            // console.log(m.hour()) // 24小时计时 0~23点之间
            console.log(m.minutes())
            // console.log(m.minute())
            console.log(m.seconds())
            // console.log(m.second())
            console.log(m.millisecond())

            // 赋值
            m.year(1990)
            m.month(6)
            m.date(8)
            m.hour(13)
            m.minute(46)
            m.second(66)
            console.log(m)

            // 加减操作
            m.add(-1, 'y')
            console.log(m)
            m.subtract(2, 'y')
            console.log(m)

            // 格式化
            console.log(m.format('YYYY-MM-DD HH:mm:ss'))
            console.log(m.format('YYYY-MM-DD hh:mm:ss a'))
            console.log(m.format('x'))
            console.log(typeof m.format('x'))
        },
        data(){
            return {
            }
        }
    }
</script>

<style scoped>

</style>
