<template>
    <div class="go-top">
        <transition name="fade">
            <div class="pxToVwBlack_icon" v-show="showIcon" @click="goTop">TOP</div>
        </transition>
    </div>
</template>

<script>
    import {throttle} from '@/utils/utils';

    export default {
        name: "BackToTop",
        props: {
            container: {
                type: Object,
                default: window
            }
        },

        data() {
            return {
                scrollTop: 0
            }
        },

        computed: {
            showIcon() {
                return this.scrollTop > 600;
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.onScroll = throttle(this.scroll, 100);
                this.container.addEventListener('scroll', this.onScroll);
            })
        },

        unmounted() {
            this.container.removeEventListener('scroll', this.onScroll);
        },

        methods: {
            scroll() {
                this.scrollTop = 'scrollTop' in this.container ? this.container.scrollTop : this.container.pageYOffset;
            },

            goTop() {
                let container = this.container;
                let scrollTop = this.scrollTop;
                let startTime = Date.now();
                requestAnimationFrame(function step() {
                    let p = Math.min(1, (Date.now() - startTime) / 300);
                    container.scrollTo(0, scrollTop * (1 - p));
                    if (p < 1) {
                        requestAnimationFrame(step);
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .pxToVwBlack_icon {
        position: fixed;
        bottom: 20%;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }

    .fade-enter-active,
    .fade-leave-active {
        opacity: 1;
        transition: all 0.3s;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

</style>