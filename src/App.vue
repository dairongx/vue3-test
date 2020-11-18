<template>
    <div>
        <router-view #default="{Component}">
            <transition name="fade">
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    * {
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
