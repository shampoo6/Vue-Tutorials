import moment from 'moment'

let time = document.createElement('div')
time.innerHTML = moment().format('b --- YYYY年MM月DD日 hh:mm a')

document.body.appendChild(time)