import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import lgRouter from './common/router/lgRouters.js'
import request from './common/request/request.js'

Vue.config.productionTip = false
Vue.use(uView)

Vue.prototype.$router={
	push:lgRouter
}
Vue.prototype.$ajax=request


App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
