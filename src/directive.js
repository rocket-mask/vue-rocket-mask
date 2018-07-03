import { MaskedInput } from 'nebo15-mask'

/**
 * Helper function to check if element is input and type applicable for masked
 * input.
 *
 * @param el
 * The element to validate.
 *
 * @param binding
 * Binding parameters.
 *
 */
function validateElementApplicableForMask (el, binding) {

  const type = el.getAttribute('type');

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

  validateRequiredProperties (binding);
}

/**
 * Check if required properties exists on element.
 *
 * @param binding
 * Binding parameters.
 */
function validateRequiredProperties (binding) {
  // Validate required properties.
  if (!binding.hasOwnProperty('value')) {
    throw new TypeError("Please provide the configuration object as \"v-rocket-mask\" directive value.");
  }
  if (!binding.value.hasOwnProperty('mask')) {
    throw new TypeError("The \"v-rocket-mask\" directive value must contain at least \"mask\" property.");
  }
}

const plugin = {
  install (Vue) {
    Vue.directive('rocket-mask', {
      bind (el, binding) {
        // Validate the right HTML element.
        if (el.tagName.toLowerCase() !== 'input') {
          // If it is not a direct input element, check if directive contains config
          // options.
          validateRequiredProperties (binding);

          // Then check if we have only one right input element with the wrapper.
          if (el.querySelectorAll('input').length > 1 ) {
            throw new TypeError("To many input elements in component. Only 1 allowed.");
          }
          // The markup must contain at least one input.
          else if (el.querySelectorAll('input').length === 0) {
            throw new TypeError("Input element not found.");
          }
          // If we have one input - check if it is type is allowed for masked input.
          else {
            const inputEl = el.querySelectorAll('input')[0];
            validateElementApplicableForMask(inputEl, binding);
          }
        }
        // Looks like masked input attached directly to input element.
        // Validate input type.
        else {
          validateElementApplicableForMask (el, binding);
        }

      },
      inserted (el, binding) {
        const options = { ...binding.value };
        delete options.mask;

        let inputEl = el;
        if (el.tagName.toLowerCase() !== 'input') {
          inputEl = el.querySelectorAll('input')[0];
        }
        new MaskedInput(inputEl, binding.value.mask, options)
      }
    })
  }
}

export default plugin
