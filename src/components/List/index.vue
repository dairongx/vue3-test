<template>
    <div class="list">
        <div class="list-main">
            <slot></slot>
        </div>

        <div class="footer">
            <Loading v-if="loading && !finished" :textVertical="false" :loadingText="loadingText" :size="16"/>
            <span v-if="finished">{{finishedText}}</span>
        </div>
    </div>
</template>

<script>
    import Loading from '../Loading/Loading.vue';
    import {getScrollDom, throttle} from '@/utils/utils';

    export default {
        name: "index",
        components: {
            Loading
        },
        props: {
            loadingText: {
                type: String,
                default: '加载中...'
            },
            loading: Boolean,
            finishedText: {
                type: String,
                default: '没有更多了'
            },
            finished: {
                type: Boolean,
                default: false
            },
            offset: {
                type: Number,
                default: 100
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.wrap = getScrollDom(this.$el);
                this.onScroll = throttle(this.scroll, 100);
                this.wrap.addEventListener('scroll', this.onScroll)
            })
        },

        unmounted() {
            this.wrap.removeEventListener('scroll', this.onScroll);
        },

        methods: {
            scroll() {
                if (this.loading) return;
                let scrollTop = 'scrollTop' in this.wrap ? this.wrap.scrollTop : this.wrap.pageYOffset;
                let clientHeight = 'clientHeight' in this.wrap ? this.wrap.clientHeight : this.wrap.outerHeight;
                let height = this.$el.clientHeight;
                if (height - (scrollTop + clientHeight) < this.offset) {
                    this.$emit('loadMore');
                    this.$emit('update:loading',true);
                }
            }
        }


    }
</script>

<style scoped>
    .list {

    }

    .footer {
        padding: 15px 0;
    }
</style>