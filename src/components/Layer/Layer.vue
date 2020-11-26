<template>
    <transition name="layer">
        <div class="layer" v-show="modelValue">
            <template v-if="overlay">
                <transition name="mask">
                    <div v-show="modelValue" class="mask" @click="layerClose"></div>
                </transition>
            </template>

            <transition :name="position">
                <div v-show="modelValue" :class="['content',position+'-style']">
                    <slot></slot>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Layer",
        props: {
            modelValue: Boolean,
            overlay: {
                type: Boolean,
                default: true
            },
            position: {
                type: String,
                default: 'center',
                validate(value) {
                    return ['top', 'bottom', 'right', 'left', 'center'].indexOf(value) !== -1;
                }
            }
        },

        methods: {
            layerClose() {
                this.$emit('update:modelValue', false);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .layer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
    }

    .layer .mask {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .layer .content {
        position: absolute;
        background-color: #fff;
    }

    .layer .center-style {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .layer .left-style {
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
    }

    .layer .right-style {
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
    }

    .layer .top-style {
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
    }

    .layer .bottom-style {
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
    }

    .layer-enter-active,
    .layer-leave-active,
    .mask-enter-active,
    .mask-leave-active {
        opacity: 1;
        transition: all 0.3s;
    }

    .mask-enter-from,
    .mask-leave-to {
        opacity: 0;
    }

    .center-enter-active,
    .center-leave-active {
        transform: scale(1);
        opacity: 1;
        transition: all 0.3s;
    }

    .center-enter-from,
    .center-leave-to {
        transform: scale(0.5);
        opacity: 0;
    }

    .left-enter-active,
    .left-leave-active,
    .right-enter-active,
    .right-leave-active,
    .top-enter-active,
    .top-leave-active,
    .bottom-enter-active,
    .bottom-leave-active {
        transform: translate3d(0, 0, 0);
        transition: all 0.3s;
    }

    .left-enter-from,
    .left-leave-to {
        transform: translate3d(-100%, 0, 0);
    }

    .right-enter-from,
    .right-leave-to {
        transform: translate3d(100%, 0, 0);
    }

    .top-enter-from,
    .top-leave-to {
        transform: translate3d(0, -100%, 0);
    }

    .bottom-enter-from,
    .bottom-leave-to {
        transform: translate3d(0, 100%, 0);
    }
</style>