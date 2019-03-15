import Vue from 'vue'
import App from './App'
import store from './store/index' // 引入vuex
import interfaces from './utils/interfaces' // 接口请求
import https from './utils/https' // 请求

Vue.prototype.$store = store

Vue.prototype.$interfaces = interfaces
Vue.prototype.$https = https

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
