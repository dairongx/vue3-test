<template>
    <div>
        <button @click="isShow">显示popup</button>
        <Popup v-model:show="show">测试popup</Popup>
    </div>
</template>

<script>
import Popup from '@/components/Popup/index.tsx'
    export default {
        data() {
            return {
                show: true
            }
        },
        components: {
            Popup
        },
        methods: {
            isShow() {
                this.show = true;
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>