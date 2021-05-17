import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home.vue";
import InterBlockchainShow from "@/views/InterBlockchainShow.vue";
import Nothing from "@/views/Nothing.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: Home,

    },
    {
        path: '/home',
        component: Home,
        children: [

            {
                path: '/interblockchainshow',
                component: InterBlockchainShow
            },
            {
                path: '/nothing',
                component: Nothing
            },
        ]

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
