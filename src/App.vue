<template>
    <transition name="fade">
        <router-view/>
    </transition>
</template>

<script>
    export default {
        methods: {

        }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        opacity: 1;
        transition: all 1s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

</style>
