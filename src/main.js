import Vue from 'vue'
import App from './App.vue'

import verificationcode from './index.js'
Vue.use(verificationcode)
new Vue({
  el: '#app',
  render: h => h(App)
})
