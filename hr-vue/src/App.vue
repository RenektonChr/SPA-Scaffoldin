<template>
  <div>
    <h1>我是Vue渲染的...</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style scoped>
  h1 {
    color: blue;
    font-size: 30px;
  }
</style>
