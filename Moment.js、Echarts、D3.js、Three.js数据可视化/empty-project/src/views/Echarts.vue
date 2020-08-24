<template>
    <div>
        <div>
            <h4>柱状图</h4>
            <div ref="bar" class="echarts-container"></div>
        </div>
        <div>
            <h4>折线图</h4>
            <div ref="line" class="echarts-container"></div>
        </div>
        <div>
            <h4>饼状图</h4>
            <div ref="pie" class="echarts-container"></div>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: 'Echarts',
        mounted() {
            this.$axios.post('/table/page').then(rs => {
                let data = rs.data
                this.initBar(data)
                this.initLine(data)
                this.initPie(data)
            })
        },
        data() {
            return {
                bar: {
                    chart: null,
                    el: null,
                    option: {
                        tooltip: {
                            show: true,
                            formatter: '书名：{b}<br/>价格：{c}' // 自定义提示
                        },
                        title: {
                            text: '图书价格柱状图',
                            left: 'center', // title组件离容器左侧的距离
                        },
                        xAxis: {
                            type: 'category',
                            name: '书名', // 增加横轴的名称
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value',
                            name: '价格(单位：人民币)' // 增加纵轴的名称
                        },
                        series: [{
                            label: {
                                show: true,
                                position: 'top'
                            },
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: 'bar'
                        }]
                    }
                },
                line: {
                    chart: null,
                    el: null,
                    option: {
                        title: {
                            text: '图书价格折线图',
                            left: 'center', // title组件离容器左侧的距离
                        },
                        xAxis: {
                            type: 'category',
                            name: '书名', // 增加横轴的名称
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value',
                            name: '价格(单位：人民币)' // 增加纵轴的名称
                        },
                        series: [{
                            label: {
                                show: true,
                                position: 'top'
                            },
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: 'line'
                        }]
                    }
                },
                pie: {
                    chart: null,
                    el: null,
                    option: {
                        title: {
                            text: '图书价格饼状图',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                        },
                        series: [
                            {
                                name: '图书价格',
                                type: 'pie',
                                radius: '55%', // 调整饼状图大小
                                // center: ['50%', '60%'],
                                left: 'center',
                                data: [
                                    {value: 335, name: '直接访问'},
                                    {value: 310, name: '邮件营销'},
                                    {value: 234, name: '联盟广告'},
                                    {value: 135, name: '视频广告'},
                                    {value: 1548, name: '搜索引擎'}
                                ],
                                // emphasis: {
                                //     itemStyle: {
                                //         shadowBlur: 10,
                                //         shadowOffsetX: 0,
                                //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                                //     }
                                // }
                            }
                        ]
                    }
                }
            }
        },
        methods: {
            initBar(data) {
                this.bar.el = this.$refs.bar
                this.bar.chart = echarts.init(this.bar.el)
                // 创建横轴
                let xAxis = data.data.map(book => {
                    return book.name
                })
                this.bar.option.xAxis.data = xAxis
                // 创建数据
                let prices = data.data.map(book => {
                    return book.price
                })
                this.bar.option.series[0].data = prices
                // 重新设置配置项及更新视图
                this.bar.chart.setOption(this.bar.option)
            },
            initLine(data) {
                this.line.el = this.$refs.line
                this.line.chart = echarts.init(this.line.el)
                // 创建横轴
                let xAxis = data.data.map(book => {
                    return book.name
                })
                this.line.option.xAxis.data = xAxis
                // 创建数据
                let prices = data.data.map(book => {
                    return book.price
                })
                this.line.option.series[0].data = prices
                // 重新设置配置项及更新视图
                this.line.chart.setOption(this.line.option)
            },
            initPie(data) {
                this.pie.el = this.$refs.pie
                this.pie.chart = echarts.init(this.pie.el)

                // 设置图例
                this.pie.option.legend.data = data.data.map(book => {
                    return book.name
                })

                let datas = data.data.map(book => {
                    return {value: book.price, name: book.name}
                })
                this.pie.option.series[0].data = datas
                this.pie.chart.setOption(this.pie.option)
            }
        },
    }
</script>

<style scoped>
    .echarts-container {
        height: 400px;
    }
</style>
