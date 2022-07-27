<template>
  <div>
    <h1>Hello World Vue Component</h1>
    <div class="com-box"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.com-box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: red;
}
</style>