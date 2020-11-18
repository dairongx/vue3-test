<template>
    <div class="about">
        <pullRefresh v-model="isLoading" @onRefresh="onRefresh" :successDuration="300">
            <h1>about</h1>
            <p>num: {{num}}</p>
        </pullRefresh>
    </div>
</template>

<script>
    import pullRefresh from 'components/PullRefresh/index.vue';

    export default {
        name: 'about',
        components: {
            pullRefresh,
        },
        data() {
            return {
                isLoading: false,
                num: 0
            }
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    this.num++;
                    this.isLoading = false;
                    this.$message.success('刷新成功');
                }, 3000)
            }
        }
    }
</script>

<style>
    .about{
        text-align: center;
        height: 100vh;
    }
</style>