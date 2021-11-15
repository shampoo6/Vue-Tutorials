import Vue from 'vue'

// 本模块是过滤器全局注册的模块

Vue.filter('sexFormatter', (value) => {
    return value === 'male' ?
        '男' :
        value === 'female' ?
            '女' : '其他'
})