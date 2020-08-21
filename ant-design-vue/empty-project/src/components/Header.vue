<template>
    <div>
        <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="/layout/ucenter">
                <a-icon type="user"/>
                个人中心
            </a-menu-item>
            <a-menu-item key="app" disabled>
                <a-icon type="appstore"/>
                Navigation Two
            </a-menu-item>
            <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
        ><a-icon type="setting"/>Navigation Three - Submenu</span
        >
                <a-menu-item-group title="Item 1">
                    <a-menu-item key="setting:1">
                        Option 1
                    </a-menu-item>
                    <a-menu-item key="setting:2">
                        Option 2
                    </a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                    <a-menu-item key="setting:3">
                        Option 3
                    </a-menu-item>
                    <a-menu-item key="setting:4">
                        Option 4
                    </a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
            <a-menu-item key="/layout/table">
                <a-icon type="table"/>
                表格
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                current: ['/layout/ucenter'],
            };
        },
        watch: {
            current(newValue, oldValue) {
                console.log(newValue)
                console.log(oldValue)
                this.current = newValue
                this.$router.push(newValue[0])
            }
        }
    }
</script>

<style scoped>

</style>
