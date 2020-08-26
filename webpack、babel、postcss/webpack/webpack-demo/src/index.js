import _ from 'lodash'
import './style.css'
import catImage from './cat.jpg'
import myPrint from './print.js'

function component() {
    const element = document.createElement('div')

    // 现在 "_" 有明确的依赖引入了
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    // 加入样式
    element.classList.add('hello')

    return element
}

function imageComponent() {
    const img = document.createElement('img')
    img.src = catImage

    return img
}

function buttonComponent() {
    const btn = document.createElement('button')
    btn.innerHTML = '点我看控制台'
    btn.onclick = myPrint
    return btn
}

document.body.appendChild(component())
document.body.appendChild(imageComponent())
document.body.appendChild(buttonComponent())
