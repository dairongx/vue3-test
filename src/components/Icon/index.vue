<template>
    <i :class="`vue-${name}`"></i>
</template>

<script>
import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'Icon',
        props: {
            name: {
                type: String,
                default: ''
            }
        }
    })
</script>

<style lang="scss" scoped>

</style>