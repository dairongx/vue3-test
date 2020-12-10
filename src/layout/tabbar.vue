<template>
    <div>
        <div class="tabbar-content">
            <component :is="currentView"></component>
        </div>
        <ul class="tabbar">
            <li class="tabbar-item" :class="{'tabbar_active': index == item.id}" v-for="item in tabList" :key="item.id" @click="handleChange(item)">
                <icon :name="item.icon" class="tabbar-item_icon"></icon>
                <span class="tabbar-item_text">{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import Home from './components/Home'
    import Books from './components/Books'
    import Group from './components/Group'
    import Market from './components/Market'
    import My from './components/My'
    import {reactive, computed, ref} from 'vue'
    export default {
        components: {
            Home,Books, Group, Market, My
        },
        setup() {
            const index = ref(0);
            const tabList = reactive([
                {
                    id: 0,
                    name: '首页',
                    icon: 'home',
                    component: 'home'
                },
                {
                    id: 1,
                    name: '书影音',
                    icon: 'yingyinshebei',
                    component: 'Books'
                },
                {
                    id: 2,
                    name: '小组',
                    icon: 'xiaozu',
                    component: 'Group'
                },
                {
                    id: 3,
                    name: '市集',
                    icon: 'gouwu',
                    component: 'Market'
                },
                {
                    id: 4,
                    name: '我的',
                    icon: 'wode',
                    component: 'home'
                }
            ]);
            const componentArr =  ['Home', 'Books', 'Group', 'Market', 'My'];

            const currentView = computed(() => componentArr[index.value])

            function handleChange(item) {
                index.value = item.id
            }


            return {
                index,
                tabList,
                handleChange,
                currentView
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/styles/index.scss';
    .tabbar {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 11;
        width: 100%;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #FFF;
        border-top: 1px solid #333;
        &-content {
            width: 100%;

            overflow: hidden;
            height: calc(100vh - 110px);
            overflow-y: scroll;;
        }
        &-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &_icon {
                margin-bottom: 5px;
            }
        }
        &_active {
            color: $themeColor;
        }
    }
</style>