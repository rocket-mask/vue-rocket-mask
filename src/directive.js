import { MaskedInput } from 'nebo15-mask'

const plugin = {
  install (Vue) {
    Vue.directive('rocket-mask', {
      bind (el, binding) {
        const type = el.getAttribute('type');

        // Validate the right HTML element.
        if (el.tagName.toLowerCase() !== 'input') {
          throw new TypeError("Unsupported HTML element type");
        }

        // List supported input types.
        const supportedInputTypes = [
          'email',
          'text',
          'tel',
          'number'
        ];

        // Validate in the current element is input.
        if (!supportedInputTypes.includes(type)) {
          throw new TypeError("Unsupported input type");
        }

        // Validate required properties.
        if (!binding.hasOwnProperty('value')) {
          throw new TypeError("Please provide the configuration object as \"v-rocket-mask\" directive value.");
        }
        if (!binding.value.hasOwnProperty('mask')) {
          throw new TypeError("The \"v-rocket-mask\" directive value must contain at least \"mask\" property.");
        }

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
