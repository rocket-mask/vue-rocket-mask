<template>
  <div id="app">
    <input
      v-rocket-mask
      type="text"
      v-model="inputValue"
      mask="1111 1111 1111 1111"
      with-placeholder="_"
      hide-on-blur="true"
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
      inputValue: ''
    }
  }
}
</script>

<style>

</style>
