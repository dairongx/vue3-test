import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Index from '../views/Home.vue'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import("@/views/index.vue"),
        meta: {
            title: 'index'
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: 'pullRefresh'
        }
    },
    {
        path: '/list',
        name: 'list',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/List/List.vue'),
        meta: {
            title: 'todoList'
        }
    },
    {
        path: '/popup',
        name: 'popup',
        component: () => import('../views/popup/popup.vue'),
        meta: {
            title: 'popup'
        }
    },
    {
        path: '/layer',
        name: 'layer',
        component: () => import('../views/layer.vue'),
        meta: {
            title: 'layer'
        }
    },
    {
        path: '/icon',
        name: 'icon',
        component: () => import('../views/icon/icon.vue'),
        meta: {
            title: 'icon'
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
