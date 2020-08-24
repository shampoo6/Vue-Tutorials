# Echarts 和 Moment.js

## Echarts

#### 安装
```shell script
npm install echarts --save
```

#### 基础图
- 创建步骤
    1. 创建div元素，充当echarts容器
    2. 创建配置项（option）
    3. 创建echarts实例（echartsInstance）
    4. 通过setOption给echarts实例提供数据源
- 如何查询官方文档
    - 文档分为两部分查询
        - 配置项：https://echarts.apache.org/zh/option.html#title
        - api：https://echarts.apache.org/zh/api.html#echarts
    - 活用demo：https://echarts.apache.org/examples/zh/index.html#chart-type-line
- 柱状图
    - 最重要的组件：
        - 横轴
        - 纵轴
        - 数据
- 折线图
    - 最重要的组件：
        - 横轴
        - 纵轴
        - 数据
- 饼状图

#### 自定义tooltip
```
字符串模板

模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等。 在 trigger 为 'axis' 的时候，会有多个系列的数据，此时可以通过 {a0}, {a1}, {a2} 这种后面加索引的方式表示系列的索引。 不同图表类型下的 {a}，{b}，{c}，{d} 含义不一样。 其中变量{a}, {b}, {c}, {d}在不同图表类型下代表数据含义为：

折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）

散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）

地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）

饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
```

## Moment.js
官网：http://momentjs.cn/

#### 安装
```shell script
npm i moment
```

#### 解析
解析就是通过参数获取时间对象

- 获取现在时间
- 通过字符串获取时间
- 通过格林威治1970毫秒数字获取时间
- 通过Date对象获取时间

#### 取值/赋值
设置时间和获取以下时间：

年月日 时分秒

#### 操作
时间的加减操作:

语法：
```js
// 加法
moment().add(number, key)
// 例如:
moment().add(-2, 'd') // 计算前天的时间
moment().add(1, 'y') // 计算一年后今天的时间

// 减法 用法和加法相同
moment().subtract(number, key)
```
key对照表如下

| 键 | 快捷键 |
| --- | --- |
| years | y |
| quarters | Q |
| months | M |
| weeks | w |
| days | d |
| hours | h |
| minutes | m |
| seconds | s |
| milliseconds | s |

startOf和endOf：用于计算某个单位下第一和最后的时间
```js
// 以下是startOf的示例
moment().startOf('year');    // 设置为今年一月1日上午 12:00
moment().startOf('month');   // 设置为本月1日上午 12:00
moment().startOf('quarter');  // 设置为当前季度的开始，即每月的第一天上午 12:00
moment().startOf('week');    // 设置为本周的第一天上午 12:00
moment().startOf('isoWeek'); // 根据 ISO 8601 设置为本周的第一天上午 12:00
moment().startOf('day');     // 设置为今天上午 12:00
moment().startOf('date');     // 设置为今天上午 12:00
moment().startOf('hour');    // 设置为当前时间，但是 0 分钟、0 秒钟、0 毫秒
moment().startOf('minute');  // 设置为当前时间，但是 0 秒钟、0 毫秒
moment().startOf('second');  // 与 moment().milliseconds(0); 相同
```

#### 格式化
语法：
```js
moment().format(string)
// 例如
moment().format('YYYY-MM-DD') 
// 输出 2020-01-21
```
格式化常用模板占位符：

| 时间含义 | 占位符 | 输出 |
| --- | --- | --- |
| 月份 | M | 1 2 ... 11 12 |
| 月份 | MM | 	01 02 ... 11 12 |
| 每月第几日 | D | 1 2 ... 30 31 |
| 每月第几日| DD | 01 02 ... 30 31 |
| 年份 | YYYY | 1970 1971 ... 2029 2030 |
| 子午线 | A | AM PM |
| 子午线 | a | am pm |
| 小时 | H | 0 1 ... 22 23 |
| 小时 | HH | 00 01 ... 22 23 |
| 小时 | h | 1 2 ... 11 12 |
| 小时 | hh | 01 02 ... 11 12 |
| 分钟 | m | 0 1 ... 58 59 |
| 分钟 | mm | 00 01 ... 58 59 |
| 秒钟 | s | 0 1 ... 58 59 |
| 秒钟 | ss | 00 01 ... 58 59 |
| Unix 时间戳(单位：秒) | X | 1360013296 |
| Unix 毫秒时间戳 | x | 1360013296123 |

