<template>
    <div class="icon-box">
        <div v-for="item in icons.glyphs" :key="item.id" class="icon-item">
            <icon  :name="item.name"></icon>
            <span class="icon-name">{{'vue-'+item.name}}</span>
        </div>
    </div>
</template>

<script>
    import icons from '@/assets/iconfont/iconfont.json'
    export default {
        data() {
            return {
                icons: {...icons}
            }
        }
    }
</script>

<style lang="scss" scoped>
    .icon-box {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        .icon-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: calc(100%/4);
            height: 180px;
            border-right: 1px solid #eee;
            border-bottom: 1px solid #eee;
            margin-right: -1px;
            margin-bottom: -1px;
        }
        .icon-name {
            font-size: 12px;
        }
    }
    
</style>