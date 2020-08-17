## v-on注意事项
- 绑定事件时使用小括号，是在调用方法，如下：
```html
<button @click="clickHandler()">提交</button>
```
此时clickHandler方法不会获取到事件对象

- 绑定事件时不使用小括号，是在绑定方法，如下：
```html
<button @click="clickHandler">提交</button>
```
此时点击按钮时，vue回去调用绑定的clickHandler方法，并传入事件对象，所以在clickHandler中获取能够获取事件对象，如：
```js
function clickHandler(event) {
    // 这里可以获取event，并执行一些event的操作
}
```

- 绑定事件时如果想要给事件处理方法传参，并且也想要获取事件对象，那么可以使用vue内置的事件对象变量：
```html
<button @click="clickHandler($event, params)">提交</button>
```
clickHandler第一个参数是事件对象，第二个参数是自定义参数
```js
function clickHandler(event, params) {
    // 这里可以获取event，并执行一些event的操作；同时能获取到params自定义参数
}
```