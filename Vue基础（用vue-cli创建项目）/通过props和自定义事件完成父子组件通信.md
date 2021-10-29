# 通过props和自定义事件完成父子组件通信

## props

### 什么是props？

官网：https://cn.vuejs.org/v2/guide/components-props.html

`props` 是组件用于接收父组件传入参数的一个变量，`props` 以 `html` 属性的形式出现

```vue
<Child id="123" text="hello world"/>
```

给 `props` 赋值时，可以使用 `v-bind` 进行属性绑定，这样的话该 `props` 的值就是动态的

### 声明props

```javascript
// 方法一：使用数组形式接收属性，数组成员是属性名
// props: ['id', 'text'],

// 方法二：用对象声明属性，key：属性名，value：属性类型
// props: {
//     id: Number,
//     text: String
// },

// 方法三：使用对象声明属性
props: {
    // key：属性名，value：属性配置
    id: {
        type: Number, // type 规定属性类型
        // default 规定属性的默认值
        // default 的值是一个函数
        default() {
            // 该函数返回默认的内容
            return 123
        }
    },
    text: {
        type: String,
        default() {
            return 'hello world'
        }
    }
}
```

### 在子组件中使用props

```vue
<template>
    <div>
        <!-- props 可以在页面中插入值
            props 是响应式的，可以根据父组件传入的值，实时变化
         -->
        <h1>child: {{text}}</h1>
    </div>
</template>
<script>
    export default {
        name: 'Child',
        props: ['id', 'text'],
        mounted() {
            // 使用 this 可以在 vue 对象中直接访问属性
            console.log(this.id)
            console.log(this.text)
        }
    }
</script>
```

### 子组件不能给props赋值

`props` 在子组件中，不能被赋值，可以理解成 `props` 是只读的，想要修改 `props` 的值只能通知父组件，由父组件修改

## 自定义组件事件

### 什么是自定义组件事件？

当使用组件的时候，通常将组件作为 `html` 标签来使用，例如：`button` 标签可以绑定 `click` 事件一样，那么自定义组件也可以声明自己的事件，并且父组件还可以绑定自定义事件

### 声明组件事件

```javascript
// 子组件触发一个事件，通知父组件来修改 props 的值
// 第一个参数：事件名称
// 第二个参数：事件接收的参数
this.$emit('modify-text', this.t)
```

### 使用组件事件

父组件使用 `v-on` 绑定自定义事件即可

```vue
<Child :id="456" :text="msg" @modify-text="onModifyText"/>
```

```javascript
onModifyText(t) {// 事件处理函数接收的参数 就是子组件发送事件时的第二个参数
    console.log(t) 
    this.msg = t
}
```

### native事件修饰符

`.native` 修饰符的作用，是将事件处理程序和对应的事件绑定到组件的根节点的 `html` 元素上

```vue
<NativeChild @click.native="onNativeTrigger"/>
```

```vue
<template>
	<!-- 在上边绑定的 click 事件，将被应用到该 div 上 -->
    <div>
        <button @click="onBtnClick">
            btn click
        </button>
    </div>
</template>
```

