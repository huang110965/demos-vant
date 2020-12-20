import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vConsole from 'vconsole'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// Vue.prototype = new vConsole()
const isDebug = true;
// 本地开发调试注入vConsole
if (isDebug) {
  new vConsole();
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
