import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        formdata: undefined
    },
    mutations: {
        login (state, payload) {
            state.formdata = payload
        }
    },
    actions: {
        login (context, payload) {
            context.commit('login', payload)
        }
    }
})

export default store