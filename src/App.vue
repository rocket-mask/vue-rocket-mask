<template>
  <div id="app">
    <input
      v-rocket-mask="maskOptions"
      type="text"
      v-model="inputValue"
      name="creditCard"
      placeholder="XXXX XXXX XXXX XXXX"
    />
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      inputValue: '',
      maskOptions: {
        mask: '1111 1111 1111 1111',
        placeholder: '_',
        showOnFocus: true,
        hideOnBlur: true,
        showAlways: true
      }
    }
  }
}
</script>

<style>

</style>
