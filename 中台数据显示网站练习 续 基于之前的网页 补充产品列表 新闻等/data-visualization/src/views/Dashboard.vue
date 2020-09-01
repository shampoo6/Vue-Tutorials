<template>
    <div style="height: 100%">
        <el-row style="height: 50%">
            <el-col :span="12">
                <div ref="pie" class="chart-container"></div>
            </el-col>
            <el-col :span="12">
                <div ref="line" class="chart-container"></div>
            </el-col>
        </el-row>
        <el-row style="height: 50%">
            <div ref="bar" class="chart-container"></div>
        </el-row>
    </div>
</template>

<script>
    import echarts from 'echarts'
    import api from '../api'

    const labelOption = {
        show: true,
        position: 'insideBottom',
        distance: 15,
        align: 'left',
        verticalAlign: 'middle',
        rotate: 90,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }

    export default {
        name: 'Dashboard',
        created() {
            this.addEventListener()
        },
        mounted() {
            this.initPie()
            this.initLine()
            this.initBar()
        },
        data() {
            return {
                pie: {
                    el: null,
                    chart: null,
                    option: {
                        title: {
                            text: '日本汽车市场份额饼状图',
                            subtext: '单位：万辆',
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
                                name: '销量',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: [
                                    {value: 335, name: '直接访问'},
                                    {value: 310, name: '邮件营销'},
                                    {value: 234, name: '联盟广告'},
                                    {value: 135, name: '视频广告'},
                                    {value: 1548, name: '搜索引擎'}
                                ],
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    }
                },
                line: {
                    el: null,
                    chart: null,
                    option: {
                        title: {
                            text: '一周销量总额图',
                            left: 'center'
                        },
                        xAxis: {
                            type: 'category',
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        },
                        yAxis: {
                            name: '单位：万辆',
                            type: 'value'
                        },
                        series: [{
                            label: {
                                show: true,
                                position: 'top'
                            },
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line'
                        }]
                    }
                },
                bar: {
                    el: null,
                    chart: null,
                    option: {
                        // color: ['#003366', '#006699', '#4cabce', '#e5323e'],
                        title: {
                            text: '日本汽车年销量对比图',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: {
                            top: 30,
                            data: ['Forest', 'Steppe', 'Desert', 'Wetland']
                        },
                        toolbox: {
                            show: true,
                            orient: 'vertical',
                            left: 'right',
                            top: 'center',
                            feature: {
                                mark: {show: true},
                                dataView: {show: true, readOnly: false},
                                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                                restore: {show: true},
                                saveAsImage: {show: true}
                            }
                        },
                        xAxis: [
                            {
                                type: 'category',
                                axisTick: {show: false},
                                data: ['2012', '2013', '2014']
                            }
                        ],
                        yAxis: [
                            {
                                name: '单位：万辆',
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                name: 'Forest',
                                type: 'bar',
                                barGap: 0,
                                label: labelOption,
                                data: [320, 332, 301]
                            },
                            {
                                name: 'Steppe',
                                type: 'bar',
                                label: labelOption,
                                data: [220, 182, 191]
                            },
                            {
                                name: 'Desert',
                                type: 'bar',
                                label: labelOption,
                                data: [150, 232, 201]
                            },
                            {
                                name: 'Wetland',
                                type: 'bar',
                                label: labelOption,
                                data: [98, 77, 101]
                            }
                        ]
                    }
                }
            }
        },
        methods: {
            addEventListener() {
                window.addEventListener('resize', this.resizeHandler)
            },
            resizeHandler() {
                this.pie.chart.resize()
                this.line.chart.resize()
                this.bar.chart.resize()
            },
            initPie() {
                this.pie.el = this.$refs.pie
                this.pie.chart = echarts.init(this.pie.el)
                this.pie.chart.setOption(this.pie.option)
                setTimeout(() => {
                    this.pie.chart.resize()
                }, 0)
                this.pie.chart.showLoading()
                api.car.sales().then(data => {
                    this.pie.option.legend.data = data.data.map(car => car.name)
                    this.pie.option.series[0].data = data.data.map(car => {
                        return {value: car.count, name: car.name}
                    })
                    this.pie.chart.setOption(this.pie.option)
                    this.pie.chart.hideLoading()
                })
            },
            initLine() {
                this.line.el = this.$refs.line
                this.line.chart = echarts.init(this.line.el)
                this.line.chart.setOption(this.line.option)
                setTimeout(() => {
                    this.line.chart.resize()
                }, 0)
                this.line.chart.showLoading()
                api.car.week().then(data => {
                    this.line.option.series[0].data = data.data.map(car => car.count)
                    this.line.chart.setOption(this.line.option)
                    this.line.chart.hideLoading()
                })
            },
            initBar() {
                this.bar.el = this.$refs.bar
                this.bar.chart = echarts.init(this.bar.el)
                this.bar.chart.setOption(this.bar.option)
                setTimeout(() => {
                    this.bar.chart.resize()
                }, 0)
                this.bar.chart.showLoading()
                api.car.year().then(data => {
                    this.bar.option.legend.data = data.data.map(car => car.name)
                    this.bar.option.series = data.data.map(car => {
                        return  {
                            name: car.name,
                            type: 'bar',
                            label: labelOption,
                            data: car.counts
                        }
                    })
                    this.bar.chart.setOption(this.bar.option)
                    this.bar.chart.hideLoading()
                })
            }
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.resizeHandler)
        }
    }
</script>

<style scoped>
    .el-col {
        height: 100%;
    }

    .chart-container {
        width: 100%;
        height: 100%;
    }
</style>
