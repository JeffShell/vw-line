import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login';
import Home from "@/views/Home.vue";
import InterBlockchainShow from "@/views/InterBlockchainShow.vue";
import Nothing from "@/views/Nothing.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: '/',
    redirect: "/interblockchainshow",
    name: "首页"
  },
  {
    path: '/home',
    redirect: "/home/interblockchainshow",
    name: "首页"
  },
  {
    path: "/home",
    component: Home,
    name: "首页",
    children: [{
        path: '',
        component: InterBlockchainShow,
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
