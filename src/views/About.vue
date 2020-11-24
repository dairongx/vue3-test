<template>
    <div class="about">
        <pullRefresh v-model="isRefresh" @onRefresh="onRefresh" :successDuration="300">
            <List v-model:loading="isLoading"
                  class="list-main"
                  @loadMore="loadMore"
                  :hasBackTop="true"
                  :finished="finished">
                <!--<h1>about</h1>
                <p>num: {{num}}</p>

                <loading loadingText="加载中...">
                    &lt;!&ndash; <template #icon>
                         <span>loading...</span>
                     </template>&ndash;&gt;
                </loading>

                <button @click="show">loading</button>

                <div v-loading="isLoading" style="height: 200px;"></div>-->

                <p class="list-item" v-for="item in list" :key="item">{{item}}</p>
            </List>
        </pullRefresh>
    </div>
</template>

<script>
    import pullRefresh from 'components/PullRefresh/index.vue';
    import loading from 'components/Loading/Loading.vue';
    import List from 'components/List/index.vue';

    export default {
        name: 'about',
        components: {
            pullRefresh, loading, List
        },
        data() {
            return {
                isRefresh: false,
                num: 0,
                list: [],
                isLoading: false,
                finished: false
            }
        },
        mounted() {
            this.getList();
        },
        methods: {
            onRefresh() {
                this.num = 0;
                this.getList(() => {
                    this.isRefresh = false;
                    this.$message.success('刷新成功');
                });
            },

            show() {
                this.$loading();
            },

            getList(cb) {
                this.isLoading = true;
                setTimeout(() => {
                    if (this.num === 0) {
                        this.list = []
                    }
                    for (let i = 0; i < 20; i++) {
                        this.list.push(this.num + 1);
                        this.num++;
                    }
                    if (this.num >= 80) {
                        this.finished = true;
                    }
                    this.isLoading = false;
                    cb && cb();
                }, 1000)
            },

            loadMore() {
                if (this.finished) {
                    return;
                }
                this.getList();
            }
        }
    }
</script>

<style>
    .about {
        text-align: center;
        min-height: 100vh;
        /* height: 100vh;
         overflow: auto;*/
    }

    .list-main {
        background-color: #fff;
    }

    .list-item {
        line-height: 100px;
        text-align: center;
    }
</style>