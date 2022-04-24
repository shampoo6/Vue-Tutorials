import moment from 'moment'
import './css/main.css' // 引入样式
import i from './img/1.jpg' // 引入文件

let time = document.createElement('div')
time.innerHTML = moment().format('YYYY年MM月DD日 hh:mm a')
time.className = 'color'

let img = document.createElement('img')
img.src = i

document.body.appendChild(time)
document.body.appendChild(img)