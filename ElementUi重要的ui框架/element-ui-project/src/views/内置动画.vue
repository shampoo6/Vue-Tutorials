<template>
    <div>
        <button @click="toggle">开关</button>
        <!-- 渐入渐出 -->

        <!--<transition name="el-fade-in-linear">
            <div v-show="show" class="box"></div>
        </transition>
        <transition name="el-fade-in">
            <div v-show="show" class="box"></div>
        </transition>-->


        <!-- 缩放 -->
        <!-- <transition name="el-zoom-in-center">
             <div v-show="show" class="box">.el-zoom-in-center</div>
         </transition>

         <transition name="el-zoom-in-top">
             <div v-show="show" class="box">.el-zoom-in-top</div>
         </transition>

         <transition name="el-zoom-in-bottom">
             <div v-show="show" class="box">.el-zoom-in-bottom</div>
         </transition>-->

        <!-- 折叠 -->
        <el-collapse-transition>
            <div v-show="show">
                <div class="box"></div>
            </div>
        </el-collapse-transition>
    </div>
</template>

<script>
    export default {
        name: 'Animation',
        data() {
            return {
                show: true
            }
        },
        methods: {
            toggle() {
                this.show = !this.show
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100px;
        height: 100px;
        background-color: red;
    }
</style>