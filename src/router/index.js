import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/',
    //     redirect: Home,
    //
    // },
    // {
    //     path: '/home',
    //     component: Home,
    //     children: [
    //
    //         {
    //             path: '/boli',
    //             component: boli
    //         },
    //         {
    //             path: '/dsfg',
    //             component: dsfg
    //         },
    //         {
    //             path: '/wuyu',
    //             component: wuyu
    //         },
    //     ]
    //
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
