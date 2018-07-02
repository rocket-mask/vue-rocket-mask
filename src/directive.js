import { MaskedInput } from 'nebo15-mask'

const plugin = {
  install (Vue) {
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
  }
}

export default plugin
