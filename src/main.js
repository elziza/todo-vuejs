import Vue from 'vue'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import Routes from './Routes'
Vue.use(VueRouter)
Vue.config.productionTip = false

const router= new VueRouter({
    routes:Routes
})
 new Vue({
    render: h => h(App),
    router:router
    
}).$mount('#app')
        
// createApp(App).mount('#app')
