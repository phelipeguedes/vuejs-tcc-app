import Vue from 'vue'
import App from './App.vue'
import store from './config/store'
import router from './config/router'
import './config/bootstrap'
import titleMixin from './config/title-mixin'
import './config/msg'

Vue.config.productionTip = false

// modifica o título da página
Vue.use(titleMixin)

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')