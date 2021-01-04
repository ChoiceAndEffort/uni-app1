import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import lgRouter from './common/lgRouters.js'


Vue.config.productionTip = false
Vue.use(uView)

Vue.prototype.$router={
	push:lgRouter
}


App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
