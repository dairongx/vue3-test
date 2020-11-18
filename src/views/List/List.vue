<template>
    <div>
        <div class="header">
            <h2 class="title">todoList</h2>

            <input v-model="value" class="todo-input" type="text" placeholder="请输入" @keydown.enter="add">
        </div>
        <div v-if="todoList.length">
            <todoItem v-for="item in todoList" :key="item.id" :info="item" @delete="deleteItem"/>
        </div>
    </div>
</template>

<script>
    import todoItem from './todoItem';
    import {mapState,mapActions} from 'vuex';

    export default {
        name: "List",
        components: {
            todoItem
        },
        data() {
            return {
                value: undefined
            }
        },
        computed: {
            ...mapState({
                todoList: state => state.list.todoList
            })
        },
        methods: {
            ...mapActions({
                deleteList: 'deleteItem'
            }),
            add() {
                if (!this.value) {
                    return;
                }
                this.$store.dispatch('addItem', this.value);
                this.value = undefined;
            },

            deleteItem(id) {
                this.$store.dispatch('deleteItem', id).then(res=>{
                    console.log(res)
                });
                // this.deleteList(id);
            }
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        line-height: 100px;
    }

    .todo-input {
        width: 75%;
        height: 80px;
        border: 1px solid #EBEEF5;
        border-radius: 10px;
        padding: 0 30px;
        font-size: 32px;
    }
</style>