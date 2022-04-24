<template>
  <div>
<!--    <ComponentBasic></ComponentBasic>-->
<!--    <PropsComponent></PropsComponent>-->
<!--    <EventComponent></EventComponent>-->
<!--    <ExtendsAttrComponent></ExtendsAttrComponent>-->
<!--    <slot-component></slot-component>-->
<!--    <InjectComponent></InjectComponent>-->
<!--    <AsyncComponent></AsyncComponent>-->
    <DynamicComponent></DynamicComponent>
  </div>
</template>

<script>
// import ComponentBasic from './components/组件基础.vue';
// import PropsComponent from './components/组件props.vue';
// import EventComponent from './components/组件事件.vue';
// import ExtendsAttrComponent from './components/组件的html属性继承.vue'
// import SlotComponent from './components/组件插槽.vue'
// import InjectComponent from './components/依赖注入.vue'
// import AsyncComponent from './components/异步组件.vue'
import DynamicComponent from './components/动态组件.vue'


export default {
  name: 'App',
  components: {
    // ComponentBasic,
    // PropsComponent
    // EventComponent,
    // ExtendsAttrComponent
    // InjectComponent
    // AsyncComponent
    DynamicComponent
  }
};
</script>

<style>

</style>
