import Vue from 'vue'
import axios  from 'axios'

axios.defaults.baseURL="https://api.mocksys.com/api/v1/mock/20043/get/users"
Vue.prototype.$ajax = axios