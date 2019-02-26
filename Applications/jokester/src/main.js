import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

store.commit('INIT_JOKES', [{test: 'just a test'}])

new Vue({
    el: "#app",
    store,
    render : h => h(App)
})