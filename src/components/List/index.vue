<template>
    <div class="list">
        <div class="list-main">
            <slot></slot>
        </div>

        <div class="footer">
            <Loading :textVertical="false" :loadingText="loadingText" :size="16"/>
        </div>
    </div>
</template>

<script>
    import Loading from '../Loading/Loading.vue';

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
            offset: {
                type: [Number, String],
                default: 300
            }
        },
        mounted() {
            let p = this.$el.parentElement;
            /*console.log(p)
            console.log(p.clientHeight)*/
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