<template>
    <div>
        <!-- 创建echarts根节点 -->
        <div ref="myChart" style="height: 400px"></div>
        <!-- 动态更改数据 -->
        <button @click="changeData">动态修改数据</button>
    </div>
</template>

<script>
    import echarts from 'echarts' // 引入echarts模块

    let xAxisData = []
    let data1 = []
    let data2 = []
    for (let i = 0; i < 100; i++) {
        xAxisData.push('类目' + i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
    }

    export default {
        name: 'MyCharts',
        created() {
            this.$nextTick(() => {
                let el = this.$refs.myChart
                // 实例化echarts对象
                this.myChart = echarts.init(el)
                // // 使用options配置echarts
                this.myChart.setOption(this.options)
            })
        },
        data() {
            return {
                myChart: null,
                // options: { // echarts的option配置
                //     title: {
                //         text: 'ECharts 入门示例'
                //     },
                //     tooltip: {},
                //     legend: {
                //         data: ['销量']
                //     },
                //     xAxis: {
                //         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                //     },
                //     yAxis: {},
                //     series: [{
                //         name: '销量',
                //         type: 'bar',
                //         data: [5, 20, 36, 10, 10, 20]
                //     }]
                // }
                options: {
                    title: { // 标题
                        text: '柱状图动画延迟', // 标题文本
                        textStyle: {
                            color: '#ff0000'
                        },
                        // textAlign: 'left',
                        // left: '200px',
                        // top: '100px'
                    },
                    legend: { // 图例
                        data: ['bar', 'bar2'] // 图例名称和series中的name属性对应
                    },
                    toolbox: { // 工具箱
                        // y: 'bottom',
                        feature: {
                            magicType: {
                                type: ['stack', 'tiled']
                            },
                            dataView: {},
                            saveAsImage: {
                                pixelRatio: 2
                            }
                        }
                    },
                    tooltip: {}, // 鼠标悬停提示信息
                    xAxis: { // x轴，横轴
                        data: xAxisData, // data属性是横轴中填的数据
                        splitLine: { // 分割线
                            show: true
                        },
                        name: '类目（单位：种）' // 横轴名
                    },
                    yAxis: { // y轴，纵轴
                        name: '数量：(单位：个)'  // 纵轴名
                    },
                    // 数据数组
                    series: [
                        // 数组种包含两个对象，分别代表两组数据
                        {
                            name: 'bar', // 分组名称
                            type: 'bar', // 数据类型
                            data: data1, // 对应横坐标上的纵坐标数据
                            animationDelay: function (idx) {
                                return idx * 10
                            }
                        },
                        {
                            name: 'bar2',
                            type: 'line',
                            data: data2,
                            animationDelay: function (idx) {
                                return idx * 10 + 100
                            }
                        }
                    ],
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: function (idx) {
                        return idx * 5
                    }
                }
            }
        },
        methods: {
            changeData() {
                // 创建新数据
                let newData = []
                for (let i = 0; i < 100; i++) {
                    // 随机100个横坐标上的新数据
                    let num = Math.random() * 130
                    num = Number(num.toFixed(0))
                    newData.push(num)
                }
                // 给series的data赋值
                this.options.series[0].data = newData
                // 调用setOption
                this.myChart.setOption(this.options)
            }
        }
    }
</script>

<style scoped>

</style>