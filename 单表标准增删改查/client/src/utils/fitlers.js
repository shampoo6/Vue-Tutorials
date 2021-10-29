import Vue from 'vue'
import moment from 'moment'

Vue.filter('sexFormatter', (value) => {
    return value === 'male' ?
        '男' :
        value === 'female' ?
            '女' : '其他'
})

Vue.filter('dateFormatter', value => {
    return moment(value).format('YYYY-MM-DD HH:mm:ss')
})
