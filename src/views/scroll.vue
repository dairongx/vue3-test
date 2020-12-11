<template>
    <div class="pxToVwBlack_main">
        <div class="pxToVwBlack_header">这里是搜索框</div>
        <div class="pxToVwBlack_tab1" :style="tabStyle">这里是tab1</div>
        <div class="pxToVwBlack_banner">banner</div>
        <div :class="['pxToVwBlack_tab2',scrollTop>300?'pxToVwBlack_fixed':'']" :style="tabStyle">这里是tab2</div>
        <ul>
            <li v-for="item in 50">pppppp</li>
        </ul>
    </div>
</template>

<script>
    import {getScrollDom} from '@/utils/utils';

    export default {
        name: "scroll",
        data() {
            return {
                scrollTop: 0,
            }
        },
        computed: {
            tabStyle() {
                if (this.scrollTop > 400) {
                    return {
                        transform: `translate3d(0, -100px, 0)`
                    }
                }

                if (this.scrollTop > 300) {
                    return {
                        transform: `translate3d(0, -${this.scrollTop - 300}px, 0)`
                    }
                }

                return {};
            }
        },
        mounted() {
            this.container = getScrollDom(this.$el);
            window.addEventListener('scroll', this.onScroll);
        },
        unmounted() {
            window.removeEventListener('scroll', this.onScroll);
        },
        methods: {
            onScroll() {
                this.scrollTop = 'scrollTop' in this.container ? this.container.scrollTop : this.container.pageYOffset;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pxToVwBlack_main {
        padding-top: 200px;
    }

    .pxToVwBlack_header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100px;
        background-color: #9a6e3a;
        color: #fff;
        z-index: 999;
    }

    .pxToVwBlack_tab1 {
        position: fixed;
        top: 100px;
        left: 0;
        width: 100vw;
        height: 100px;
        background-color: #1f9a1d;
        color: #fff;
    }

    .pxToVwBlack_banner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 300px;
    }

    .pxToVwBlack_tab2 {
        height: 100px;
        background-color: #37909a;
        color: #fff;

        &.pxToVwBlack_fixed {
            position: fixed;
            top: 200px;
            left: 0;
            width: 100vw;
        }
    }

    ul {
        list-style: none;

        li {
            line-height: 80px;
            text-align: center;
        }
    }
</style>