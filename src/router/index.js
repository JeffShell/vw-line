import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home.vue";
import InterBlockchainShow from "@/views/InterBlockchainShow.vue";
import Nothing from "@/views/Nothing.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        redirect: "/home",
        name: 'home',
    },
    {
        path: "/home",
        component: Home,
        name: 'home',
        children: [{
            path: "",
            component: InterBlockchainShow,
            name: '跨链',
        },{
            path: '/interblockchainshow',
            component: InterBlockchainShow,
            name: '跨链',
        },{
            path: '/nothing',
            component: Nothing,
            name: '什么都没',
        }]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
