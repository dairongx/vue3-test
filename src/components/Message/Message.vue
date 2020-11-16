<template>
    <transition name="fade">
        <div class="msg">{{content}}</div>
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

        mounted() {
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
                this.$emit('close');
                this.onClose && this.onClose();
            }
        },
    })
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .msg{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-60%);
        background-color: rgba(0,0,0,0.5);
        padding: 10px;
        border: 3px;
    }
</style>