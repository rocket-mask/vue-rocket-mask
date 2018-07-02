import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line
import { MaskedInput } from 'nebo15-mask'

Vue.directive('rocket-mask', {
  bind (el) {
    // eslint-disable-next-line
    console.log('directive bind hook')
    // eslint-disable-next-line
    console.log(el)
  },
  inserted (el, binding) {
    const options = { ...binding.value }
    delete options.mask
    new MaskedInput(el, binding.value.mask, options)
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
