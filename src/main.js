import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //路由
  store,  //store相当于一个仓库，挂载到vue下
  render: h => h(App)
})
