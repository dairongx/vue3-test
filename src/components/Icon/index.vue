<template>
    <i :class="`vue-${name}`" :style="{fontSize: size + 'px'}"></i>
</template>

<script>
import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'Icon',
        props: {
            name: {
                type: String,
                default: ''
            },
            size: {
                type: Number,
                default: 21
            }
        },
       
    })
</script>

<style lang="scss" scoped>

</style>