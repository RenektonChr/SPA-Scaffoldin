<template>
  <div>
    <h1>我是Vue渲染的;</h1>
    <p>{{ msg }}</p>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
  h1 {
    color: blue;
    font-size: 30px;
  }
</style>
