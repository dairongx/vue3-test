<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
    </div>

    <div class="links">
        <router-link v-for="item in routes" :to="item.path">{{item.meta.title}}</router-link>
    </div>

    <div>
        <router-view #default="{Component}">
            <transition name="fade">
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>

</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import {routes} from '@/router';

    export default defineComponent({
        name: 'Home',
        components: {
            HelloWorld,
        },
        data() {
            return {
                routes
            }
        }
    });
</script>

<style>
    .links a {
        display: block;
        color: #333;
        font-size: 36px;
        text-decoration: none;
        margin: 30px 15px;
    }
</style>