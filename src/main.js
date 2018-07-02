import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line
import Nebo15Mask from 'nebo15-mask'

Vue.directive('rocket-mask', {
  bind (el) {
    // eslint-disable-next-line
    console.log('directive bind hook')
    // eslint-disable-next-line
    console.log(el)
  },
  inserted (el) {
    // eslint-disable-next-line
    console.log('directive inserted hook')
    // eslint-disable-next-line
    console.log(el)
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
