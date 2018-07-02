import Vue from 'vue'
import App from './App.vue'
import rocketMask from './directive'

Vue.use(rocketMask)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
