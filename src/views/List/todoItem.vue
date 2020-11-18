<template>
    <div class="item">
        <p>{{info.value}}</p>
        <button @click="deleteItem(info.id)">del</button>
    </div>
</template>

<script>
    export default {
        name: "todoItem",
        props: ['info'],
        setup(props,{emit}){
            function deleteItem(id) {
                emit('delete',id);
            }

            return {
                deleteItem
            }
        }
    }
</script>

<style scoped>
    .item{
        display: flex;
        height: 100px;
        align-items: center;
        justify-content: space-between;
        font-size: 32px;
        color: #333;
        padding: 0 30px;
    }

    .item button{
        padding: 10px 20px;
        border: 1px solid #EBEEF5;
        font-size: 32px;
        background-color: #fff;
        border-radius: 10px;
    }
</style>