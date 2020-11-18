<template>
    <transition name="fade">
        <div v-show="visible" class="pxToVwBlack_msg">{{content}}</div>
    </transition>
</template>

<script>
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: "Message",
        props: {
            content: String,
            duration: {
                type: Number,
                default: 2000,
            },
            type: {
                type: String,
                default: 'info'
            },
            onClose: Function
        },

        data() {
            return {
                visible: false
            }
        },

        mounted() {
            this.visible = true;
            this.timer = setTimeout(() => {
                this.close();
            }, this.duration);
        },

        beforeUnmount() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        },

        methods: {
            close() {
                this.visible = false;
                this.$emit('close');
                this.onClose && this.onClose();
            }
        },
    })
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        opacity: 1;
        transition: all 1s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .pxToVwBlack_msg {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
        background-color: rgba(0, 0, 0, 0.6);
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 14px;
        color: #fff;
    }
</style>