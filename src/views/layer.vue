<template>
    <button @click="show('center')">center</button>
    <button @click="show('left')">left</button>
    <button @click="show('top')">top</button>
    <button @click="show('right')">right</button>
    <button @click="show('bottom')">bottom</button>

    <LayerComponent :position="position"
                    v-model="visible"
    >
        <div>
            <p v-for="i in 5">hahahahahha</p>
        </div>
    </LayerComponent>
</template>

<script>
    import LayerComponent from '@/components/Layer/Layer.vue'
    export default {
        name: "layer",
        components:{
            LayerComponent
        },
        data(){
            return{
                visible: false,
                position: ''
            }
        },
        methods:{
            show(type){
                this.position = type;
                this.visible = true;
                console.log(111)
            }
        }
    }
</script>

<style scoped>
    button{
        display: block;
        padding: 20px 30px;
        margin: 20px auto;
        font-size: 30px;
    }
</style>